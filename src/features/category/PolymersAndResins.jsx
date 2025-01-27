import { FaArrowRightLong } from "react-icons/fa6";

function PolymersAndResins() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/polymers.png')` }}
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
                    <h3 className="text-4xl text-white"> Polymers and Resins</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <p className="pt-6">
                        Polymers and resins are crucial materials in various industrial sectors, including automotive, construction, electronics, medical, packaging, and textiles. These materials are valued for their distinct chemical properties, such as strength, flexibility, and resistance to abrasion, chemicals, and environmental factors. Below is an overview of key polymers and resins, along with their specific applications:
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Polymers:</h3>
                    <ul className="list-disc list-inside">
                        <li>Nylon 6: Known for high tensile strength, abrasion resistance, and flexibility, it is widely used in automotive, industrial, and textile applications.</li>
                        <li>Nylon 12: Offers better dimensional stability and chemical resistance compared to Nylon 6, making it ideal for automotive and electronics.</li>
                        <li>EVA (Ethylene Vinyl Acetate): Versatile and flexible, with different grades based on VA content (18-32%), EVA is used in packaging, footwear, solar panels, and sports equipment.</li>
                        <li>PE Wax (Polyethylene Wax): A lubricant and processing aid in plastics, improving product appearance and stability.</li>
                        <li>PE 100 Black: A high-density polyethylene with excellent UV resistance and mechanical strength, used in pressure pipes and construction.</li>
                        <li>SBR (Styrene-Butadiene Rubber): Known for abrasion resistance and durability, SBR is used in tires, conveyor belts, and industrial rubber products.]</li>
                    </ul>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Resins:</h3>
                    <ul className="list-disc list-inside">
                        <li>Epoxy Resin: A thermosetting polymer used for its adhesive properties, mechanical strength, and chemical resistance, essential in electronics, aerospace, and construction.</li>
                        <li>Diethylene Glycol (DEG): Used in polyester resins, plasticizers, and antifreeze formulations.</li>
                        <li>Triethylene Glycol (TEG): Used as a desiccant in gas processing and a plasticizer in resin formulations.</li>
                        <li>Vinyl Acetate Monomer (VAM): A key ingredient in adhesives, paints, and textiles, VAM is crucial for producing flexible, durable resins like EVA and PVA.</li>
                        <li>Diethanolamine (DEA): Used in the production of resins, surfactants, and corrosion inhibitors.</li>
                        <li>Monoethanolamine (MEA): An intermediate for emulsifiers, detergents, and chemical resins.</li>
                        <li>Synthetic Barium Sulfate: A filler used in plastics, rubbers, coatings, and radiation shielding for improved density and chemical resistance.</li>
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
                        { name: "Epoxy Resin", cas: "" },
                        { name: "Nylon 6", cas: "" },
                        { name: "Nylon 66  ", cas: "" },
                        { name: "Nylon 12", cas: "" },
                        { name: "EVA 18% VA Contents", cas: "" },
                        { name: "EVA 24% VA Contents", cas: "" },
                        { name: "EVA 28% VA Contents", cas: "" },
                        { name: "EVA 32% VA Contents", cas: "" },
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

export default PolymersAndResins;
