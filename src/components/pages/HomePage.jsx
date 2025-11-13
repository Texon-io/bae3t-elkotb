import Button from "../atoms/Button";
import SecHeading from "../atoms/SecHeading";
import AboutList from "../molecules/AboutList";
import AboutSec from "../organisms/AboutSec";
import HeroSec from "../organisms/HeroSec";

function HomePage() {
  return (
    <div>
      <HeroSec />
      <AboutSec />
    </div>
  );
}

export default HomePage;
