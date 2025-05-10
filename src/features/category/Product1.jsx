

function Product1() {
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
                    <h3 className="text-4xl text-white">Omniquan AN 802</h3>
                </div>
            </div>

            {/* Below Content */}
            <div className="px-20 pt-8 leading-loose">
                <div className="pt-8 pb-6">
                    <h3 className="text-2xl font-semibold text-[#023B3B]">OMNIQUAN AN 802 – CAS: <span className="font-normal">693-36-7</span></h3>
                    <p className="pt-6 w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
            </div>

            {/* Product Detail */}
            <div className="w-11/12 h-auto bg-[#F2F2F2] m-auto my-10 rounded-lg px-14 py-4">
                <h3 className="text-2xl font-bold text-[#8AA823] px-6 pt-6">Product Details</h3>
                <div className="px-6 py-10 flex flex-col gap-10">
                    <div className="flex items-center space-x-4 mb-3">
                        <div className="w-3 h-3 rounded-full bg-[#8AA823]"></div>
                        <p className="font-medium">CAS number</p>
                        <span className="ml-auto text-gray-700">693-36-7</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <div className="w-3 h-3 rounded-full bg-[#8AA823]"></div>
                        <p className="font-medium">Chemical Name</p>
                        <span className="ml-auto text-gray-700">Xylyl dibutylbenzofu</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <div className="w-3 h-3 rounded-full bg-[#8AA823]"></div>
                        <p className="font-medium">Molecular formula</p>
                        <span className="ml-auto text-gray-700">C24H70O2</span>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <div className="w-3 h-3 rounded-full bg-[#8AA823]"></div>
                        <p className="font-medium">Molecular weight (g/mol)</p>
                        <span className="ml-auto text-gray-700">350.5</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 rounded-full bg-[#8AA823]"></div>
                        <p className="font-medium">Product Form</p>
                        <span className="ml-auto text-gray-700">White Powder</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mx-20 my-12">
                <button className="w-[421px] py-2 rounded-lg bg-[#023B3B] text-white">Download TDS</button>
                <button className="w-[421px] py-2 rounded-lg bg-[#023B3B] text-white">Download MSDS</button>
            </div>

        </div>
    );
}

export default Product1;
