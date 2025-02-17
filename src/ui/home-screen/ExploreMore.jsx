import { useState } from "react";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    title: "Automotive",
    img: "./assets/pexels-maltelu-2244746.png",
    icon: "./assets/gis_car.png",
    link: "/products-and-solutions/automotive",
  },
  {
    title: "Printing and Packaging",
    img: "./assets/printing.png",
    icon: "./assets/printing_svg.png",
    link: "/products-and-solutions/printing-and-packaging",
  },
  {
    title: "Agriculture, Feed, and Food",
    img: "./assets/agriculture.png",
    icon: "/assets/SVG (9).png",
    link: "/products-and-solutions/agriculture-feed-and-food",
  },
  {
    title: "Electronics",
    img: "./assets/electronics.png",
    icon: "./assets/SVG (10).png",
    link: "/products-and-solutions/electronics",
  },
  {
    title: "Personal and Home Care",
    img: "./assets/homebeauty.png",
    icon: "./assets/personal_svg.png",
    link: "/products-and-solutions/personal-and-home-care",
  },
  {
    title: "Adhesives and Sealants",
    img: "./assets/adhesive.png",
    icon: "./assets/Vector (1).png",
    link: "/products-and-solutions/adhesive-and-sealants",
  },
  {
    title: "Paints and Coating",
    img: "./assets/paints.png",
    icon: "./assets/Vector (2).png",
    link: "/products-and-solutions/paints-and-coating",
  },
  {
    title: "Building and Construction",
    img: "./assets/construction.png",
    icon: "./assets/SVG (7).png",
    link: "/products-and-solutions/building-and-construction",
  },
  {
    title: "Medical and Pharmaceutical",
    img: "./medical.png",
    icon: "./assets/medical_svg.png",
    link: "/products-and-solutions/medical-and-pharmaceutical",
  },
];

const categories = [
  {
    title: "Antioxidants",
    img: "./assets/attachment6.png",
    link: "/products-and-solutions/antioxidants-(na)",
  },
  {
    title: "UV-absorbers",
    img: "./assets/uvab.png",
    link: "/products-and-solutions/uv-absorbers",
  },
  {
    title: "Flame retardants",
    img: "./assets/fkamere.png",
    link: "/products-and-solutions/flame-retardants",
  },
  {
    title: "Optical Brightners",
    img: "./assets/opti.png",
    link: "/products-and-solutions/opticalbrighteners(ob)",
  },
  {
    title: "Pigments and Dyes",
    img: "./assets/pigmentsdyes.png",
    link: "/products-and-solutions/pigmentsand-dyes",
  },
  {
    title: "HALS",
    img: "./assets/hoc.png",
    link: "/products-and-solutions/hindered-amine-light-stabilizers-(hals)",
  },
  {
    title: "Antiblocks",
    img: "./assets/Anti-Block-Masterbatch-scaled1.png",
    link: "/products-and-solutions/anti-blocks",
  },
  {
    title: "Polymers and Resins",
    img: "./assets/polymers.png",
    link: "/products-and-solutions/ppolymers-and-resins",
  },
  {
    title: "Plasticizers",
    img: "./assets/Plastic_Additives_430C_647x3291.png",
    link: "",
  },
  {
    title: "Nucleating Agent",
    img: "./assets/csm_lohtragon-nucleating-agents_923ddb98fc1.png",
    link: "/products-and-solutions/nucleating-agents",
  },
  {
    title: "Polymer Processing Additives",
    img: "./assets/polymer-chemistry1.png",
    link: "/products-and-solutions/ppolymers-and-resins",
  },
  {
    title: "Masterbatches",
    img: "./assets/mast.png",
    link: "/products-and-solutions/masterbatch",
  },
];

function ExploreMore() {
  const [activeTab, setActiveTab] = useState("industries");

  const navigate = useNavigate();

  return (
    <div className="text-center p-[2rem] bg-background-light dark:bg-background-dark">
      <h2 className="text-[2rem] mb-[1rem] text-text-light dark:text-text-dark">
        Explore Our Expertise
      </h2>
      <div className="flex justify-center mb-4 gap-4">
        <button
          className={`font-noto text-[15px] font-bold uppercase tracking-wide transition-colors duration-300 bg-white dark:bg-gray-800 px-6 py-3 rounded hover:text-primary dark:hover:text-primary-light ${
            activeTab === "industries"
              ? "text-primary dark:text-primary-light border-b-2 border-secondary dark:border-secondary-light"
              : "text-text-light dark:text-text-dark"
          }`}
          onClick={() => setActiveTab("industries")}
        >
          Industries
        </button>
        <button
          className={`font-noto text-[15px] font-bold uppercase tracking-wide transition-colors duration-300 bg-white dark:bg-gray-800 px-6 py-3 rounded hover:text-primary dark:hover:text-primary-light ${
            activeTab === "solutions"
              ? "text-primary dark:text-primary-light border-b-2 border-secondary dark:border-secondary-light"
              : "text-text-light dark:text-text-dark"
          }`}
          onClick={() => setActiveTab("solutions")}
        >
          Categories
        </button>
      </div>

      {activeTab === "industries" && (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 p-5 justify-center mt-5 transition-all ease-in-out">
          {industries.map((industry, index) => (
            <div
              className="relative w-full h-[300px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transition-shadow box-border hover:translate-y-[-10px] hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] bg-gray-100 dark:bg-gray-900"
              key={index}
              onClick={() => navigate(industry.link)}
            >
              <div
                className="w-full h-full bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: `url(${industry.img})` }}
              >
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,_0,_0,_0.59)] flex flex-col justify-center items-center text-center p-5">
                  <div className="w-[80px] h-[80px] border-2 border-white dark:border-gray-300 rounded-full flex justify-center items-center mb-4">
                    <img
                      src={industry.icon}
                      alt={`${industry.title} icon`}
                      className="w-[40px] h-[40px] object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-white dark:text-gray-200 text-lg font-sans font-semibold leading-tight m-0 shadow-lg">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "solutions" && (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 p-5 justify-center mt-5 transition-all ease-in-out">
          {categories.map((category, index) => (
            <div
              className="relative w-full h-[300px] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transition-shadow box-border hover:translate-y-[-10px] hover:shadow-[0_10px_20px_rgba(0,_0,_0,_0.2)] bg-gray-100 dark:bg-gray-900"
              key={index}
              onClick={() => navigate(category.link)}
            >
              <div
                className="w-full h-full bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: `url(${category.img})` }}
              >
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[rgba(0,_0,_0,_0.59)] flex flex-col justify-center items-center text-center p-5">
                  <h3 className="text-white dark:text-gray-200 text-lg font-sans font-semibold leading-tight m-0 shadow-lg">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExploreMore;
