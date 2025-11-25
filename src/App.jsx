import { Routes, Route } from "react-router";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/organisms/Footer.jsx";
import Cart from "./components/pages/Cart.jsx";
import { Toaster } from "sonner";

import HomePage from "./components/pages/HomePage.jsx";
import Contact from "./components/pages/Contact.jsx";
import Products from "./components/pages/Products.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { useEffect } from "react";
import CategoryList from "./components/atoms/CategoryList.jsx";

function App() {
  useEffect(() => {
    document.title = "متجر بائعة الكتب";
  }, []);
  return (
    <>
      <Navbar />

      <ScrollToTop />
      <main>
        <Toaster richColors position="top-center" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<CategoryList category="all" />} />
            <Route path="books" element={<CategoryList category="books" />} />
            <Route
              path="notebooks"
              element={<CategoryList category="notebooks" />}
            />
            <Route path="tools" element={<CategoryList category="tools" />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Cart />
      <Footer />
    </>
  );
}

export default App;
