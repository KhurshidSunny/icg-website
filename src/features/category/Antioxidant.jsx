import { FaArrowRightLong } from "react-icons/fa6";

function Antioxidant() {
    return (
        <div>
            <div
                className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-repeat bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/attachment6.png')` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#000000] opacity-40 rounded-xl"></div>

                {/* Boxes */}
                <div className="flex flex-col gap-2">
                    <div className="absolute w-48 h-36 bottom-[-40px] left-[-40px] border-white border-[1px] rounded-3xl"></div>
                    <div className="absolute w-36 h-36 bottom-[-70px] left-[-35px] border-white border-opacity-[17%] border-[1px] rounded-3xl"></div>
                </div>

                {/* Centered Content */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <h3 className="text-4xl text-white">Antioxidants (AN)</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="pt-8 px-20 leading-loose">
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold text-[#023B3B]">Antioxidants for Polymer Protection</h3>
                    <p className="pt-6">
                        Oxidation is a common issue in polymers exposed to heat, light, oxygen, or mechanical stress, leading to brittleness, discoloration, and material failure.
                        Antioxidants are vital additives that protect polymers by neutralizing free radicals and preventing oxidative degradation.
                        This helps extend the lifespan and maintain the performance of polymer products.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Types of Antioxidants</h3>

                    <h4 className="text-2xl font-medium pt-4 pb-4 text-[#023B3B]">1. Primary Antioxidants (Radical Scavengers):</h4>
                    <p className="">
                        These prevent oxidation by neutralizing free radicals in the early stages of degradation:
                    </p>
                    <ul className="list-disc list-inside ">
                        <li>
                            <strong className="font-normal">Hindered Phenols:</strong> Protect against oxidative degradation, UV exposure, and yellowing.
                            Example: Omniquan AN 1076 enhances stability in polymers like PE, PP, PVC, and ABS.
                        </li>
                        <li>
                            <strong className="font-normal">Aromatic Amines:</strong> Effective at high temperatures, especially in rubber and elastomers.
                            Example: Omniquan AN 5057 stabilizes polyols and rubber.
                        </li>
                        <li>
                            <strong className="font-normal">Metal Deactivators:</strong> Prevent metal ions from accelerating oxidation, used in polyolefins and wire/cable applications.
                        </li>
                    </ul>

                    <h4 className="text-2xl font-medium text-[#023B3B] pt-8 pb-4">2. Secondary Antioxidants (Peroxide Decomposers):</h4>
                    <p >
                        These work with primary antioxidants to decompose hydroperoxides, preventing further radical formation:
                    </p>
                    <ul className="list-disc list-inside ">
                        <li>
                            <strong className="font-normal">Phosphites / Phosphonites:</strong> React with hydroperoxides to form stable alcohols, commonly used in PVC and polycarbonate.
                        </li>
                        <li>
                            <strong className="font-normal">Thioesters:</strong> Provide high-temperature stabilization by converting hydroperoxides into non-reactive species.
                        </li>
                        <li>
                            <strong className="font-normal">Thiosynergists:</strong> Offer long-term heat resistance in PP/PE and wire/cable applications.
                        </li>
                        <li>
                            <strong className="font-normal">Antioxidant Blends:</strong> Mixtures that improve processing, color stability, and heat resistance in polyolefins and other polymers.
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
                        { name: "OMNIQUAN", cas: "CAS: 31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "CAS: 31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
                        { name: "OMNIQUAN AN 168", cas: "31570-04-4" },
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

export default Antioxidant;
