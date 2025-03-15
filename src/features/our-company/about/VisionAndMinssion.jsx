import { FaFlagCheckered } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

function VisionAndMinssion() {
  return (
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
            <div className="w-12 h-12 bg-white text-[#8AA823] flex items-center justify-center rounded-full shadow-md dark:bg-background-dark">
              <FaFlagCheckered size={28} />
            </div>
          </div>
        </div>
        <div className="pt-12 px-6 pb-6 dark:bg-gray-800 dark:bg-gray-800">
          <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">Vision</h3>
          <p className="text-gray-700 dark:text-white">
            To lead the chemical industry toward a sustainable future by
            prioritizing the development and production of environmentally
            friendly chemicals. Our goal is to minimize the environmental impact
            of our operations and products while maintaining our commitment to
            quality and innovation.
          </p>
        </div>
      </div>

      {/* Mission Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative ">
          <img
            src="./mission-image.png"
            alt="Mission"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-x-1/2 bottom-[-24px] transform -translate-x-1/2">
            <div className="w-12 h-12 bg-white text-[#8AA823] flex items-center justify-center rounded-full shadow-md dark:bg-background-dark">
              <GoGoal size={28} />
            </div>
          </div>
        </div>
        <div className="pt-12 px-6 pb-12 dark:bg-gray-800">
          <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white ">Mission</h3>
          <p className="text-gray-700 dark:text-white">
            To be the preferred supplier of choice for our customers by
            providing exceptional service and top-quality, innovative products.
            We are committed to governance and acting in line with our social
            and environmental responsibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMinssion;
