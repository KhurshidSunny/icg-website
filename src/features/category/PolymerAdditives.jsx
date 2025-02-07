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
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Polymer Processing Additives PPA</h3>
                    <p className="pt-6">
                        In the competitive landscape of polymer manufacturing, achieving optimal performance
                        during processing is crucial for creating high-quality end products. Omniquan Processing
                        Aids (PPAs) stand out as essential additives designed to enhance the processing
                        characteristics of polymers, ensuring efficiency and consistency throughout production.
                        <br />
                        <span className="font-bold">Omniquan Polymer Processing Aids (PPAs)</span> are specialized additives formulated to
                        improve the flow characteristics, reduce melt viscosity, and facilitate easier processing of
                        various polymer materials. These aids modify the rheological properties of polymers,
                        enabling smoother processing and enhancing the overall performance of polymer products.
                        <br />
                        <span className="font-bold">Omniquan PPA 5920,</span> this processing aid is designed for enhanced flow and reduced
                        viscosity, making it ideal for applications requiring improved processing efficiency.
                        <span className="font-bold">Omniquan PPA 5922</span> is aimed at optimizing the extrusion and injection molding processes,
                        PPA 5922 significantly reduces cycle times while enhancing product quality. <span className="font-bold">OmniquanPPA 5927 </span>
                        excels in providing excellent compatibility with various polymers, improving
                        mechanical properties and processing behavior. <span className="font-bold">Omniquan PPA 9613</span> is especially
                        formulated for demanding applications, this processing aid offers superior thermal stability
                        and enhanced processing performance across a range of temperatures. <span className="font-bold">Omniquan Zero Moisture: </span>
                        A groundbreaking addition, <span className="font-bold">Omniquan Zero Moisture</span> is engineered to minimize
                        moisture absorption during processing, ensuring consistent quality and performance in the
                        final products. This innovative processing aid enhances the durability and longevity of the
                        polymers, making it particularly valuable in applications where moisture resistance is
                        critical.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Uses of Polymers Processing Additives</h3>
                    <p className="">
                        <span className="font-bold">Omniquan PPAs</span> are crucial in various processing techniques, including:
                    </p> <br />
                    <p className="">
                        <span className="font-bold">Extrusion:</span> Enhancing polymer flow to prevent die drool and improve surface finish.
                    </p> <br />
                    <p className="">
                        <span className="font-bold">Injection Molding:</span> Reducing cycle times and enhancing mold filling for consistent part
                        quality.
                    </p> <br />
                    <p className="">
                        <span className="font-bold">Blow Molding:</span> Ensuring uniform wall thickness and reducing defects in blow-molded
                        components.
                    </p> <br />
                    <p className="">
                        <span className="font-bold">Film Processing:</span> Improving clarity and mechanical properties of films while minimizing
                        stickiness and enhancing handling.
                    </p> <br />
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-xl font-semibold p-4 text-[#023B3B] ">Key Benefits</h3>
                    <ol className="list-decimal list-inside space-y-4 p-4">
                        <li>
                            <span className="font-bold">Improved Process Efficiency:</span> Reduced processing temperatures and energy
                            consumption lead to significant cost savings.
                        </li>
                        <li>
                            <span className="font-bold">Enhanced Product Quality:</span> Optimized flow characteristics minimize defects,
                            ensuring a superior finish.
                        </li>
                        <li>
                            <span className="font-bold">Increased Output:</span> Faster cycle times and reduced downtime enhance production
                            rates and overall efficiency
                        </li>
                        <li>
                            <span className="font-bold">Better Material Compatibility:</span> Improved compatibility of polymer blends enhances
                            the mechanical properties of the final products.
                        </li>
                    </ol>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-xl font-semibold p-4 text-[#023B3B] ">Key Industries</h3>
                    <ul className="list-disc list-inside space-y-4 p-4">
                        <li>
                            Plastics and Composites:
                        </li>
                        <li>
                            Consumer Goods:
                        </li>
                        <li>
                            Medical Devices:
                        </li>
                        <li>
                            Textiles:
                        </li>
                    </ul>
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
