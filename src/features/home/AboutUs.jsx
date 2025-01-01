import { FaFlagCheckered } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import FeatureCard from "./FeatureCard";
import CoreValues from "./CoreValues";

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
      <div className="flex flex-col lg:flex-row items-center mb-16">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Why
            <span
              className="text-[#8AA823]
]"
            >
              Us?
            </span>
          </h2>

          <div className="mb-8">
            <h3 className="text-md font-semibold  mb-2">Our Commitment</h3>
            <p className="text-gray-700">
              ICG Specialty Chemicals FZCO is a leading provider of specialty
              chemicals, recognized for our commitment to quality and
              innovation. With our globally trusted brand, Omnistab®, and our
              own registered trademark, Omniquan®, we serve a wide range of
              industries, including Masterbatch, Plastics, Resins, Compounding,
              Inks, and Coatings across the Middle East and Asia.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold mb-2">
              Sustainable Practices
            </h3>
            <p className="text-gray-700">
              We take pride in our sustainable manufacturing processes. Our
              commitment to the environment is demonstrated through our
              innovative approaches that ensure minimal impact on the planet.
            </p>
          </div>
        </div>

        <div className="relative flex lg:w-1/2 w-full px-4 lg:px-8 gap-0">
          {/* First Image */}
          <div className="relative w-[249.65px] h-[364.69px] overflow-hidden rounded-tl-[13.87px]">
            <img
              src="./why-us-image1.png"
              alt="Why Us Image 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-[249.65px] h-[364.69px] overflow-hidden rounded-tl-[13.87px]">
            <img
              src="./why-us-image2.png"
              alt="Why Us Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay Box */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-md shadow-md text-center">
              <span className="block text-[#8AA823] font-extrabold text-lg">
                +20
              </span>
              <span className="block text-gray-700 text-sm">
                years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative">
            <img
              src="./vision-image.png"
              alt="Vision"
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-x-1/2 bottom-[-24px] transform -translate-x-1/2">
              <div className="w-12 h-12 bg-white text-[#8AA823] flex items-center justify-center rounded-full shadow-md">
                <FaFlagCheckered size={28} />
              </div>
            </div>
          </div>
          <div className="pt-12 px-6 pb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Vision</h3>
            <p className="text-gray-700">
              To lead the chemical industry toward a sustainable future by
              prioritizing the development and production of environmentally
              friendly chemicals. Our goal is to minimize the environmental
              impact of our operations and products while maintaining our
              commitment to quality and innovation.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative ">
            <img
              src="./mission-image.png"
              alt="Mission"
              className="w-full h-40 object-cover "
            />
            <div className="absolute inset-x-1/2 bottom-[-24px] transform -translate-x-1/2">
              <div className="w-12 h-12 bg-white text-[#8AA823] flex items-center justify-center rounded-full shadow-md">
                <GoGoal size={28} />
              </div>
            </div>
          </div>
          <div className="pt-12 px-6 pb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mission</h3>
            <p className="text-gray-700">
              To be the preferred supplier of choice for our customers by
              providing exceptional service and top-quality, innovative
              products. We are committed to governance and acting in line with
              our social and environmental responsibilities.
            </p>
          </div>
        </div>
      </div>

      {/* Growth container */}
      <div className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto gap-8">
          {/* Left Box */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Ensuring sustainable growth{" "}
              <span className="text-[#8AA823]">
                for our planet and its people
              </span>
              .
            </h2>
          </div>

          {/* Right Box */}
          <div className="w-full md:w-1/2 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              At ICG Chemicals, we drive progress with innovative, sustainable
              solutions across diverse sectors. With over 16 years of expertise,
              we lead in environmentally friendly chemistry, shaping a future
              where everyone thrives. From pioneering products to mastering
              innovation, we’re committed to advancing essential chemistry for
              generations to come.
            </p>

            {/* Small Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white text-center p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold" style={{ color: "#8AA823" }}>
                  1k
                </h3>
                <p className="text-gray-700 text-sm">Satisfied Clients</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-center p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold" style={{ color: "#8AA823" }}>
                  100+
                </h3>
                <p className="text-gray-700 text-sm">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* strategy priorities container */}
      <div className="container mx-auto  py-16 px-4 md:px-8 flex items-center bg-[#F2F2F2]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Box: Images */}
          <div className="relative flex justify-end">
            {/* Big Image */}
            <img
              src="./strategy-image1.png"
              alt="Big Strategy"
              className="w-[300px] h-[300px] object-cover rounded-lg"
            />
            {/* Small Image */}
            <img
              src="./strategy-image2.png"
              alt="Small Strategy"
              className="absolute bottom-[-20%] left-[30%] w-40 h-40 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Box: Content */}
          <div className="flex flex-col justify-center px-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our strategic <span className="text-[#8AA823]">priorities</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              To achieve our goals and drive impactful growth, we have developed
              a visionary strategy centered on four core priorities. These
              priorities guide our actions, foster innovation, and ensure we
              create sustainable value for our customers, partners, and
              communities. Each priority reflects our commitment to excellence,
              integrity, and forward-thinking solutions that shape the future of
              the chemical industry.
            </p>
          </div>
        </div>
      </div>

      {/* features section */}
      <section className="mt-24  ">
        <div className="flex flex-wrap gap-6 justify-center">
          <FeatureCard
            svg="SVG (1).png"
            title="Market Leadership"
            paragraph="ICG Chemicals offers innovative and eco-friendly chemical
                solutions for industries worldwide, focusing on Masterbatch,
                Compounding, Inks, and Coatings."
          />
          <FeatureCard
            svg="SVG (4).png"
            title="Cost & Process Leadership"
            paragraph=" At ICG Chemicals, we streamline and innovate processes,
                enhancing supply chain efficiency and energy use to deliver
                cost-effective, sustainable solutions."
          />

          <FeatureCard
            svg="SVG (5).png"
            title="Energy Transition"
            paragraph="ICG Chemicals aims for carbon neutrality by 2050, leveraging
                sustainability to boost profitability and secure a competitive,
                greener future."
          />

          <FeatureCard
            svg="SVG (6).png"
            title="Cost Discipline"
            paragraph="At ICG Chemicals, capital discipline and strategic cash
                management drive value creation, safeguard investments, and
                ensure consistent returns, supporting sustainable growth."
          />
        </div>
      </section>

      {/* core values */}
      <CoreValues />
    </div>
  );
}

export default AboutUs;
