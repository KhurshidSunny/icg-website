import { FaArrowRightLong } from "react-icons/fa6";

function AntiBlock() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/Anti-Block-Masterbatch-scaled1.png')` }}
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
                    <h3 className="text-4xl text-white"> Anti Blocks</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 leading-loose">
                <div className="pt-8 pb-6 pl-14 pr-14">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Revolutionizing Material Handling with Antiblocks</h3>
                    <p className="pt-6">
                        In manufacturing and production, smooth material handling is critical, and anti-blocking agents play a pivotal role in making it possible. Designed to prevent materials from sticking together, these additives streamline operations and enhance the quality of end products across industries like plastics, food, pharmaceuticals, and agriculture. ICG Specialty Chemicals offers Omniquan anti-blocking agents that meet these diverse demands, ensuring optimal processing, reduced waste, and improved product performance.
                    </p>
                </div>
                <div className="pl-14 pr-10">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Omniquan Antiblocks: Tailored Solutions for Industry Needs</h3>
                    <p className="">
                        Our Omniquan range includes high-performance antiblocks like Omniquan Block 22 for polymer films, reducing sticking in packaging and enhancing processing efficiency. For applications demanding clarity, such as food wraps, Omniquan Block 50 S prevents adhesion without compromising transparency. Omniquan Block 111 and Block 770 enhance printability and minimize inter-layer adhesion in multilayer films, making them ideal for flexible packaging and industrial films. Other agents, like Erucamide and Oleoamide, further enhance slip properties, aiding in the efficient processing of a wide variety of plastic films and coatings.
                    </p>
                </div>
                <div className="pl-14 pr-10">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Key Benefits and Industry Applications</h3>
                    <p className="">
                        Omniquan antiblocks reduce surface friction, prevent blocking, and improve clarity, printability, and handling across multiple applications. These agents are essential in industries such as plastics, food, pharmaceuticals, and agriculture, where they maintain product quality, reduce production costs, and support smooth operations. By minimizing equipment downtime, enhancing print quality, and ensuring consistent product performance, ICG's anti-blocking solutions are invaluable in diverse sectors, driving efficiency and reliability in manufacturing.
                    </p>s
                </div>
            </div>

            {/* Products */}
            <div className="pr-14 pl-14 pb-10">
                <div className="flex justify-between pt-10 pb-10">

                    <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
                    <button className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded">View All <FaArrowRightLong className="text-[#8AA823]" /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Omniquan Block 22", cas: "" },
                        { name: "Omniquan Block 50 S", cas: "" },
                        { name: "Omniquan Block 111", cas: "" },
                        { name: "Omniquan Block 770", cas: "" },
                        { name: "Erucamide", cas: "" },
                        { name: "Oleoamide", cas: "" },
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

export default AntiBlock;
