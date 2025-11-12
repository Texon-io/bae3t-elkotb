import Button from "../atoms/Button";

function HeroSec() {
  return (
    <section className="hero-sec py-16">
      <div className=" flex flex-col sm:flex-row md:flex-row justify-center items-center gap-12 sm:gap-18 md:gap-36 sm:h-[calc(100vh-175px)] px-8 mt-14">
        <div className="text-holder ">
          <h3 className="text-4xl font-bold mb-6">
            بين دفء الصفحات ورائحة الورق... <br />
            تبدأ الحكاية.
          </h3>
          <p className="text-xl text-accent-dark mb-6">
            اكتشف كتبًا تُلامس روحك، وأدوات مكتبية تُلهم تفاصيل يومك.
          </p>
          <Button type="link">تسوق الأن</Button>
        </div>
        <figure className=" w-full sm:w-xl md:w-md flex justify-center items-center">
          <img src="/images/hero-img.png" alt="hero" />
        </figure>
      </div>
    </section>
  );
}

export default HeroSec;
