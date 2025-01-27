import { FaArrowRightLong } from "react-icons/fa6";

function PolymerAdditives() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/polymer-chemistry1.png')` }}
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
                    <h3 className="text-4xl text-white"> POLYMER PROCESSING ADDITIVES</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Polymer Processing Additives: Enhancing Efficiency in Polymer Manufacturing</h3>
                    <p className="pt-6">
                        In the competitive world of polymer manufacturing, Omniquan Polymer Processing Additives (PPAs) offer a solution for optimizing production efficiency and quality. Designed to improve flow, reduce viscosity, and facilitate smoother processing, Omniquan PPAs enable consistent, high-quality results in every batch. These specialized additives are key for manufacturers aiming to reduce operational costs while delivering superior polymer products with enhanced processing characteristics.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Tailored Solutions for Diverse Applications</h3>
                    <p className="">
                        Omniquan PPAs come in tailored formulations to meet specific processing needs. For example, Omniquan PPA 5920 enhances flow for efficient processing, while Omniquan PPA 5922 optimizes extrusion and injection molding, reducing cycle times and boosting product quality. Omniquan PPA 5927 improves compatibility across polymers, enhancing mechanical properties, while Omniquan PPA 9613 provides thermal stability for high-temperature applications. Additionally, Omniquan Zero Moisture minimizes moisture absorption, ensuring consistent quality in moisture-sensitive applications, extending product durability and resistance.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Key Benefits Across Industries</h3>
                    <p className="">
                        With Omniquan PPAs, manufacturers benefit from reduced processing temperatures and energy use, leading to significant cost savings. The additives also improve product quality by minimizing defects and achieving a superior finish. Faster cycle times and reduced downtime contribute to higher output and enhanced efficiency. Omniquan PPAs support various polymer processing techniques—extrusion, injection molding, blow molding, and film processing—serving industries like plastics, consumer goods, medical devices, and textiles, where consistent quality and performance are paramount.
                    </p>
                </div>
            </div>

            {/* Products */}
            <div className="px-20 pb-10">
                <div className="flex justify-between pt-10 pb-10">

                    <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
                    <button className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded">View All <FaArrowRightLong className="text-[#8AA823]" /></button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: "Omniquan PPA 5920", cas: "" },
                        { name: "Omniquan PPA 5922", cas: "" },
                        { name: "Omniquan PPA 5927", cas: "" },
                        { name: "Omniquan PPA 9613", cas: "" },
                        { name: "Omniquan Zero Moisture", cas: "" },
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

export default PolymerAdditives;
