import { FaArrowRightLong } from "react-icons/fa6";

function Plasticizers() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/Plastic_Additives_430C_647x3291.png')` }}
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
                    <h3 className="text-4xl text-white"> Placticizers</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <p className="pt-6">
                        Plasticizers are chemical additives used to enhance the flexibility, workability, and durability of polymers, especially plastics. They reduce intermolecular forces between polymer chains, making materials more pliable and improving their mechanical properties.
                    </p>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Key Applications:</h3>
                    <ul className="list-disc list-inside">
                        <li>Flexible PVC: Plasticizers (e.g., DOP, TOTM) make PVC flexible for products like cables, flooring, and synthetic leather.</li>
                        <li>Rubbers & Elastomers: Improve elasticity and processability for items like tires and gaskets.</li>
                        <li>Coatings & Adhesives: Enhance application and adhesion properties in construction and automotive sectors.</li>
                        <li>Plastic Films & Sheets: Used in packaging, agricultural films, and shrink wraps, with plasticizers like DOTP for environmental compliance.</li>
                        <li>Medical Devices: Ensure flexibility and biocompatibility in medical products like IV tubing and catheters.</li>
                    </ul>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Industries Benefiting:</h3>
                    <ul className="list-disc list-inside">
                        <li>Automotive: Used in interior parts, flexible materials, and cold-resistant applications.</li>
                        <li>Construction: Improve PVC pipes, flooring, waterproofing, and fire-resistant cables.</li>
                        <li>Medical: Provide safe, flexible materials for medical devices and packaging.</li>
                        <li>Enhance flexibility in synthetic fibers for protective clothing and upholstery.</li>
                    </ul>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Benefits:</h3>
                    <ul className="list-disc list-inside">
                        <li>Flexibility: Reduces rigidity, allowing materials to bend and stretch without cracking.</li>
                        <li>Durability: Increases resistance to wear, UV, and temperature extremes.</li>
                        <li>Processing: Improves flow properties during production, reducing energy costs.</li>
                        <li>Customization: Allows tailored mechanical properties for specific needs.</li>
                        <li>Cost Efficiency: Reduces material costs while maintaining performance.</li>
                    </ul>
                </div>
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Types of Plasticizers:</h3>
                    <ul className="list-disc list-inside">
                        <li>DOP, TOTM: Common for PVC and high-performance applications.</li>
                        <li>DINP, DOTP, DPHP: Used for specific applications like medical devices, food packaging, and outdoor materials.</li>
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
                        { name: "DPHP (Di(2-propyl heptyl)", cas: "" },
                        { name: "DINP (Diisononyl Phthalate) ", cas: "" },
                        { name: " DOTP (Dioctyl Terephthalate)", cas: "" },
                        { name: "TOTM (Trioctyl Trimellitate)", cas: "" },
                        { name: "DOA (Dioctyl Adipate) ", cas: "" },
                        { name: "CPW (Chlorinated Paraffin Wax)", cas: "" },
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

export default Plasticizers;
