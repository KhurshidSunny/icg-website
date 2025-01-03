import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
function PigmentDyes() {
    return (
        <div className="container mx-auto px-6 lg:px-16 py-10">
            <div className="relative mb-16">
                {/* Image */}
                <img
                    src="../../../assets/pigmentsdyes.png"
                    alt="About ICG"
                    className="w-full rounded-xl object-cover object-center h-full"
                    style={{ width: "1242px", height: "419px" }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                {/* Text */}
                <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
                    PIGMENTS DYES
                </h1>
            </div>

            <p className="font-normal text-[#000000] mb-6">Pigments and dyes are essential
                colorants used across various industries, with distinct properties and applications:</p>

            <h3 className="text-xl font-bold mb-4 text-[#023B3B] ">Pigments</h3>
            <p className="font-normal text-[#000000] mb-6">are insoluble, finely ground substances that provide
                color by scattering light. They are used in coatings, paints, plastics, inks, and construction
                materials, valued for their stability, opacity, and durability.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#023B3B] ">Dyes</h3>
            <p className="font-normal text-[#000000] mb-6">are soluble compounds that chemically bond with
                materials, providing vivid, long-lasting color. They are commonly used in textiles, paper,
                and certain plastics.
            </p>


            <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Key Differences: </h3>
            <ul className="list-disc list-inside mb-6">
                <li className='font-semibold text-[#023B3B] '>Solubility: <p className='font-normal text-[#000000]'>
                    Pigments are insoluble; dyes are soluble.</p></li>
                <li className='font-semibold text-[#023B3B]' >Application: <p className='font-normal text-[#000000]'>
                    Pigments are dispersed in a medium, while dyes require a dyeing process.</p> </li>
                <li className='font-semibold text-[#023B3B]'>Color Intensity: <p className='font-normal text-[#000000]'>
                    Dyes offer intense color; pigments provide opacity and durability.</p></li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Types: </h3>
            <ul className="list-disc list-inside mb-6">
                <li className='font-semibold text-[#023B3B] '>Pigments:<p className='font-normal text-[#000000]'>
                    Inorganic and organic.</p></li>
                <li className='font-semibold text-[#023B3B]' >Dyes: <p className='font-normal text-[#000000]'>
                    Acid, base, solvent, disperse, reactive, and vat dyes.</p> </li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Applications: </h3>
            <ul className="list-disc list-inside mb-6">
                <li className='font-normal text-[#000000] '>Textile industry        </li>
                <li className='font-normal text-[#000000] '>Coatings and paints        </li>
                <li className='font-normal text-[#000000] '>Plastics and polymers</li>
                <li className='font-normal text-[#000000] '>Inks</li>
                <li className='font-normal text-[#000000] '>Cosmetics and personal care        </li>
                <li className='font-normal text-[#000000] '>Construction and building materials</li>
                <li className='font-normal text-[#000000] '>Automotive        </li>
                <li className='font-normal text-[#000000] '>Food and pharmaceuticals       </li>
                <li className='font-normal text-[#000000] '>Pigments and dyes are critical for coloring,
                    enhancing aesthetics, and adding functional properties to products across diverse sectors.</li>

            </ul>


            <div className="flex justify-between w-full pt-5">
                <h3 className="text-xl font-bold mb-4 text-[#8AA823]">Products</h3>
                <button className="mb-4 border border-[#8AA823] px-4 py-2 rounded-lg flex items-center">
                    More Products <FaArrowRight className="ml-2 text-[#8AA823] mt-1" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { name: "Titanium Dioxide (TiO2)", image: "../../../assets/titanium.png" },
                    { name: "Pigment Red 254", image: "../../../assets/pigmentred.png" },
                    { name: "Pigment Yellow 184", image: "../../../assets/pigmentyellow.png" },
                    { name: "Middle Chrome Yellow", image: "../../../assets/middleyellow.png" },
                    { name: "Solvent Yellow 82", image: "", bgColor: "#A08E00" },
                    { name: "Solvent Yellow 90", image: "", bgColor: "#7A6500" },
                    { name: "Solvent Yellow 146", image: "", bgColor: "#828B00" },
                    { name: "Solvent Orange 56", image: "", bgColor: "#90310F" },
                ].map((product, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center"
                    >
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-cover rounded-md mb-3"
                            />
                        ) : product.bgColor ? (
                            <div
                                className="w-full h-32 rounded-md mb-3"
                                style={{ backgroundColor: product.bgColor }}
                            ></div>
                        ) : (
                            <div
                                className="w-full h-32 rounded-md mb-3 flex items-center justify-center bg-gray-200"
                            >
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}
                        <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default PigmentDyes