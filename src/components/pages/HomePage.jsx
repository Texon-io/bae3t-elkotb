import Button from "../atoms/Button";
import SecHeading from "../atoms/SecHeading";
import AboutList from "../molecules/AboutList";
import HeroSec from "../organisms/HeroSec";

function HomePage() {
  return (
    <div>
      <HeroSec />
      <section id="about" className="about pt-2 pb-6 px-8 h-fit">
        <SecHeading>من أنا</SecHeading>

        <div className=" py-3 content-holder flex flex-col-reverse sm:flex-row justify-center items-center gap-12 sm:gap-24 md:gap-52">
          <figure className="w-xs">
            <img src="/images/about-img.png" alt="about" />
          </figure>
          <div className="about-txt w-full sm:w-1/2 md:w-1/3  flex flex-col gap-12">
            <p className="text-2xl font-semibold">
              أنا بائعة الكتب،بدأت من حبّي للقراءة... وقررت أشارككم الكتب اللي
              لمست قلبي.
            </p>

            <AboutList />

            <Button>أنضم لنا</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
