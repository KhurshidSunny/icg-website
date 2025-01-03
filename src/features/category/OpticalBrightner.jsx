import { FaArrowRightLong } from "react-icons/fa6";

function OpticalBrightner() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/opti.png')` }}
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
                    <h3 className="text-4xl text-white"> Optical Brightners</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Optical Brighteners</h3>
                    <p className="pt-6">
                        Optical brighteners, also known as optical brightening agents (OBAs) are specialized chemical compounds designed to enhance the luminance and visual appeal of materials. By absorbing ultraviolet light and re-emitting it as visible blue light, these agents create a perception of increased whiteness and brightness, transforming the aesthetics of various products.
                    </p>
                </div>
                <div className="pb-10">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Key Benefits</h3>
                    <ul className="list-disc list-inside p-5">
                        <li className="p-2">
                            <strong className="text-xl text-[#023B3B]">Enhanced Aesthetic Appeal:</strong><span> Optical brighteners significantly improve the visual quality of products, imparting a vibrant and pristine appearance.</span>
                        </li>
                        <li className="p-2">
                            <strong className="text-xl text-[#023B3B]">Value Addition:</strong><span> Products treated with OBAs often enjoy higher market valuation due to their enhanced aesthetics.</span>
                        </li>
                        <li className="p-2">
                            <strong className="text-xl text-[#023B3B]">Cost Efficiency:</strong><span> The integration of optical brighteners can enhance product quality without necessitating major alterations in manufacturing processes.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Products */}
            <div className="pr-14 px-20">
                <div className="flex justify-between pt-10 pb-10">

                    <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
                    <button className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded">View All <FaArrowRightLong className="text-[#8AA823]" /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "OMNIQUAN OB 1", cas: "1533-45-5" },
                        { name: "OMNIQUAN FP 127", cas: "40470-86-6" },
                        { name: "OMNIQUAN KCB ", cas: "5089-22-5" },
                        { name: "UV 384-2", cas: "7128-64-5" },
                        { name: "OMNIQUAN OB 357", cas: "41098-56-0" },
                        { name: "OMNIQUAN OB CPC(NFW)", cas: "" },
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

export default OpticalBrightner;
