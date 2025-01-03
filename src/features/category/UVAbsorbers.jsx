import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

function UVAbsorbers() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="../../../assets/uvab.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1242px", height: "419px" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          UV ABSORBERS
        </h1>
      </div>

      <div >
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4 text-[#023B3B]">UV Absorbers for Enhanced Material Protection</h2>
        <p className="font-normal text-[#000000] mb-6">
          UV absorbers protect materials from the harmful effects of ultraviolet (UV) radiation, which can cause degradation,
          discoloration, and loss of mechanical properties. They are widely used in plastics, coatings, textiles,
          and personal care to extend product life and maintain performance.
        </p>



        {/* Types of UV Absorbers */}
        <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Types of UV Absorbers:</h3>
        <ul className="list-disc list-inside mb-6">
          <li className='font-semibold text-[#023B3B] '>Benzotriazoles: <p className='font-normal text-[#000000]'>Effective in plastics and coatings, offering broad-spectrum UV protection.
            Example: Omniquan UV 326 for plastics, Omniquan UV 1577 for automotive coatings.</p></li>
          <li className='font-semibold text-[#023B3B]' >Benzophenones:<p className='font-normal text-[#000000]'>Absorb UV and convert it to heat, protecting materials from UV damage.
            Example: Omniquan BP 12 absorbs UVB radiation (280-320 nm).</p> </li>
          <li className='font-semibold text-[#023B3B]'>Triazines: <p className='font-normal text-[#000000]'>Stabilize polymers and coatings, especially against UVB rays.
            Example: Omniquan UV 1577 for automotive coatings, Omniquan UV 1600 for outdoor stability.</p></li>
          <li className='font-semibold text-[#023B3B]'>Hindered Amine Light Stabilizers (HALS):<p className='font-normal text-[#000000]'>Complementary to UV absorbers, they scavenge free
            radicals to prevent further degradation. Example: Omniquan LS 944 for polyolefins, Omniquan LS 770 for polyurethanes and styrenics. <br /><br />UV absorbers and stabilizers are
            essential for protecting materials in outdoor and high-performance applications, ensuring long-lasting durability and appearance.
          </p> </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Key Points:</h3>
        <p className='font-normal text-[#FB1F35]'>UV Protection: Prevents degradation caused by UV exposure. <br />
          Extended Lifespan: Enhances durability in outdoor environcments. <br></br>
          Color Preservation: Maintains appearance and prevents discoloration.<br />
          Improved Stability: Boosts overall material stability.</p>
        {/* Products Section */}
        <div className="flex justify-between w-full pt-5">
          <h3 className="text-xl font-bold mb-4 text-[#8AA823] ">Products</h3>
          <button className="mb-4 border border-[#8AA823] px-4 py-2 rounded-lg flex item-center">More Products <FaArrowRight className="ml-2 text-[#8AA823] mt-1" /> </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "UV 9", cas: "CAS: 131-56-6" },
            { name: "UV 10", cas: "CAS: 123-45-6" },
            { name: "UV 12", cas: "CAS: 234-56-7" },
            { name: "UV 384-2", cas: "CAS: 345-67-8" },
            { name: "OMNIGUARD 384", cas: "CAS: 456-78-9" },
            { name: "OMNIGUARD 327", cas: "CAS: 567-89-0" },
            { name: "OMNIGUARD 234", cas: "CAS: 678-90-1" },
            { name: "OMNIGUARD 157", cas: "CAS: 789-01-2" },
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
  )
}

export default UVAbsorbers