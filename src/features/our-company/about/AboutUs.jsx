import CoreValues from "./CoreValues";
import WhyOus from "./WhyOus";
import VisionAndMinssion from "./VisionAndMinssion";
import Growth from "./Growth";
import StrategyPriorities from "./StrategyPriorities";
import Features from "./Features";

function AboutUs() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* About ICG Section */}
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="./about-us-main.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "427.22px" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          About ICG
        </h1>
      </div>

      {/* Why Us Section */}
      <WhyOus />

      {/* Vision & Mission Section */}
      <VisionAndMinssion />

      {/* Growth container */}
      <Growth />

      {/* strategy priorities container */}
      <StrategyPriorities />

      {/* features section */}
      <Features />

      {/* core values */}
      <CoreValues />
    </div>
  );
}

export default AboutUs;
