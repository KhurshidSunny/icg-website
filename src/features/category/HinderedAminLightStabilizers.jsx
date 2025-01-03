import { FaArrowRightLong } from "react-icons/fa6";

function HinderedAminLightStabilizers() {
  return (
    <div>
      <div
        className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-bottom"
        style={{ backgroundImage: `url('/assets/hoc.png')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

        {/* Boxes */}
        <div className="flex flex-col gap-2">
          <div className="absolute w-48 h-36 bottom-[-40px] left-[-40px] border-white border-[1px] rounded-3xl"></div>
          <div className="absolute w-36 h-36 bottom-[-70px] left-[-35px] border-white border-opacity-[17%] border-[1px] rounded-3xl"></div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h3 className="text-4xl text-white">
            {" "}
            HINDERED AMINE LIGHT STABILIZERS (HALS)
          </h3>
        </div>
      </div>

      {/* Below Content */}
      <div className="pt-8 px-20 leading-loose">
        <div className="pt-8 pb-6">
          <p className="pt-6">
            Hindered Amine Light Stabilizers (HALS) are compounds that protect
            polymers from UV radiation by scavenging free radicals generated
            during photooxidation, thereby preventing polymer degradation. HALS
            are crucial in inks, coatings, and adhesives for providing UV
            stability, enhancing durability, and ensuring the longevity of these
            materials in various applications.
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Hindered Amine Light Stabilizers (HALS)
          </h3>
          <p className="">
            Although not technically UV absorbers, HALS play a complementary
            role by scavenging free radicals formed during UV exposure, thus
            preventing further degradation of materials.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="px-20 pb-10">
        <div className="flex justify-between pt-10 pb-10">
          <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
          <button className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded">
            View All <FaArrowRightLong className="text-[#8AA823]" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "OMNIQUAN 123", cas: "129757-67-1" },
            { name: "OMNIQUAN 292", cas: "129757-67-14" },
            { name: "OMNIQUAN LS 119", cas: "106990-43-6" },
            { name: "OMNIQUAN 622", cas: "65447-77-0" },
            { name: "OMNIQUAN 770", cas: "52829-07-9" },
            { name: "OMNIQUAN 944", cas: "71878-19-8" },
            { name: "OMNIQUAN 119", cas: "106990-43-6" },
            { name: "OMNIQUAN LS 144", cas: "63843-89-0" },
          ].map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center"
            >
              <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
              <p className="text-gray-600">{product.cas}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HinderedAminLightStabilizers;
