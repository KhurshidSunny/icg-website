import ExploreMore from "./ExploreMore";
import FindProductSection from "./FindProductSection";
import HeroSection from "./HeroSection";
import LatestNewsSection from "./LatestNewsSection";
import PartnersSection from "./PartnersSection";

function HomeLayout() {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <ExploreMore />
      <FindProductSection />
      <LatestNewsSection />
    </div>
  );
}

export default HomeLayout;
