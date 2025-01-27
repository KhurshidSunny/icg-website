import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function FlameRetardant() {
    return (
        <div className="container mx-auto px-6 lg:px-16 py-10">
            <div className="relative mb-16">
                {/* Image */}
                <img
                    src="../../../assets/fkamere.png"
                    alt="About ICG"
                    className="w-full rounded-xl object-cover object-center h-full"
                    style={{ width: "1242px", height: "419px" }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                {/* Text */}
                <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
                    FLAME RETARDANTS
                </h1>
            </div>

            <p className="font-normal text-[#000000] mb-6">Flame retardants are chemicals added to materials
                to prevent or slow the spread of fire, enhancing safety across various industries.
                These substances are classified based on their chemical composition and action mechanism, including:</p>

            <ul className="list-disc list-inside mb-6">
                <li className='font-semibold text-[#023B3B] '>Halogenated <p className='font-normal text-[#000000]'>
                    (e.g OMNIQUAN DBDPE and OMNIQUAN FR130) – Contain halogens (chlorine or bromine) to suppress combustion,
                    ideal for electronics and textiles.</p></li>
                <li className='font-semibold text-[#023B3B]' >Non-Halogenated<p className='font-normal text-[#000000]'>
                    (e.g, OMNIQUAN DOPO, OMNIQUAN Dicumene) – Environmentally friendly, form a protective char layer to inhibit fire spread.</p> </li>
                <li className='font-semibold text-[#023B3B]'>Phosphorus-Based <p className='font-normal text-[#000000]'>
                    (e.g, OMNIQUAN FR TBEP, OMNIQUAN PHT4) – Promote char formation to prevent gas release, used in polymers and coatings.
                </p></li>
                <li className='font-semibold text-[#023B3B]'>Inorganic  <p className='font-normal text-[#000000]'>
                    (e.g., ALUMINIUM HYDROXIDE, Zinc Borate) – Release water vapor to cool and dilute flames, used in
                    construction, textiles, and plastics.
                </p> </li>
            </ul>

            <p className="font-normal text-[#000000] mb-6">Applications span construction, electronics, textiles,
                automotive, and furniture, offering key benefits like enhanced safety, regulatory compliance,
                material longevity, and versatility. Flame retardants are critical for meeting fire safety
                standards and protecting lives and property.</p>

            <div className="flex justify-between w-full pt-5">
                <h3 className="text-xl font-bold mb-4 text-[#8AA823] ">Products</h3>
                <button className="mb-4 border border-[#8AA823] px-4 py-2 rounded-lg flex item-center">More Products <FaArrowRight className="ml-2 text-[#8AA823] mt-1" /> </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { name: "OMNIQUAN AE 501", cas: "" },
                    { name: "OMNIQUAN MPP", cas: "2187768-84-4" },
                    { name: "OMNIQUAN BDDP", cas: "21850-44-2" },
                    { name: "OMNIQUAN FR 130", cas: "97416-84-7" },
                    { name: "OMNIQUAN BR-SBS", cas: "1195978-93-8" },
                    { name: "OMNIQUAN FR 245", cas: "" },
                    { name: "OMNIQUAN DBDPE", cas: "" },
                    { name: "OMNIQUAN PHT4", cas: "" },
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

    )
}

export default FlameRetardant