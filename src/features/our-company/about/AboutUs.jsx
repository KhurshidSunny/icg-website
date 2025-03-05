import CoreValues from "./CoreValues";
import WhyOus from "./WhyOus";
import VisionAndMinssion from "./VisionAndMinssion";
import Growth from "./Growth";
import StrategyPriorities from "./StrategyPriorities";
import Features from "./Features";

function AboutUs() {
  return (
    <div className="min-h-screen dark:bg-background-dark">
      <div className="container mx-auto px-6 lg:px-16 py-10">
      
        <div
          className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
          style={{
            backgroundImage: 'url("./about-us-main.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
          <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
            About ICG
          </h1>
        </div>

        {/* Why Us Section */}
        <WhyOus />

        {/* Vision & Mission Section */}
        <VisionAndMinssion />

        {/* Growth container */}
        <Growth />

        {/* Strategy Priorities container */}
        <StrategyPriorities />

        {/* Features section */}
        <Features />

        {/* Core Values */}
        <CoreValues />
      </div>
    </div>
  );
}

export default AboutUs;
