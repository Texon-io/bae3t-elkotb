import { useQuery } from "@tanstack/react-query";
import {useState} from "react";


import LogoWord from "../atoms/LogoWord.jsx";
import CategoriesList from "../molecules/CategoriesList.jsx";
import Spinner from "../atoms/Spinner.jsx";
import ProductCard from "../molecules/ProductCard.jsx";

function Products() {
    const categories = ['الكل', "الكتب", "الدفاتر", "أدوات مكتبية"];
    const [activeCategory, setActiveCategory] = useState("الكل")


    const {data: products = [], isLoading, isError, error} = useQuery({
        queryKey:['products'],
        queryFn: getData,
        staleTime: 1000 * 60 *2,
        refetchOnWindowFocus: true,
        retry: 2,
    });

    if (isError) return  <span>Error: {error.message}</span>




    async function getData(){
        const res = await fetch("https://script.google.com/macros/s/AKfycby7n6c77trTyqZ9UDymWNAjhmPh8bzU3KTViNiigWo2wGxLf6HQAJ-RcY3hG2eLdKHplg/exec")
        if (!res.ok) throw new Error("Failed to fetch data");

        return res?.json();
    }
  return <>
    <div className={`flex justify-between items-center px-2.5`}>
        <LogoWord className={`text-4xl text-accent-dark-2`}>منتجاتنا</LogoWord>
        <CategoriesList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>

    </div>
      {isLoading ?<Spinner/> : (<div className={`products-list grid justify-center grid-cols-4 gap-5`}>
          {products.map(product=> (
              <ProductCard data={product}/>
          ))}
      </div>)}
  </>;
}

export default Products;
