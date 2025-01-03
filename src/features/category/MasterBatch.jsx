import { FaArrowRight } from 'react-icons/fa'

function MasterBatch() {
    return (
        <>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/mast.png')` }}
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
                    <h3 className="text-4xl text-white"> Master Batch</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Masterbatches: Essential Additives for Enhanced Color and Performance</h3>
                    <p className="pt-6">
                        Masterbatches are crucial additives in the plastics and polymer industries, providing vibrant color, improved properties, and optimized processing. ICG Specialty Chemicals offers a diverse range of Masterbatch solutions tailored to meet specific industry needs, delivering consistent quality and performance. Designed to boost durability, aesthetic appeal, and functionality, our Masterbatches are invaluable to manufacturers across sectors such as automotive, packaging, electronics, and construction.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Diverse Masterbatch Solutions for Industry-Specific Applications </h3>
                    <p className="pt-6">
                        Our product lineup includes specialized solutions like the Liquid/Paste Masterbatch, which provides deep, consistent black tones ideal for applications requiring high dispersion, such as automotive parts, packaging films, and electronics. The solid Masterbatch enhances UV stability, opacity, and mechanical strength, making it ideal for outdoor applications, including agricultural films and automotive trims. Additionally, the Moisture Absorber (AB) Masterbatch eliminates excess moisture during processing, essential for recycled materials and preventing defects in injection molding and extrusion.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Technical Advantages and Sustainable Benefits </h3>
                    <p className="pt-6">
                        ICG Masterbatches are designed for even dispersion within polymers, reducing the need for additional mixing and enhancing processability. Their concentrated formulations require minimal dosages, offering a cost-effective way to achieve desired results. With solutions tailored for using recycled materials, these Masterbatches also support more sustainable production practices. Consistent color distribution ensures high aesthetic standards, enabling manufacturers to produce uniform, visually appealing products across large production runs.
                    </p>
                </div>
            

            <div className="flex justify-between w-full pt-5">
                <h3 className="text-xl font-bold mb-4 text-[#8AA823]">Products</h3>
                <button className="mb-4 border border-[#8AA823] px-4 py-2 rounded-lg flex items-center">
                    More Products <FaArrowRight className="ml-2 text-[#8AA823] mt-1" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-3">
                {[
                    { name: "Liquid/Paste Black", image: "../../../assets/titanium.png" },
                    { name: "Black Masterbatch", image: "../../../assets/pigmentred.png" },
                    { name: "Moisture Absorber", image: "../../../assets/pigmentyellow.png" },
                    
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
           </>
        


          
          
    );
}

export default MasterBatch;
