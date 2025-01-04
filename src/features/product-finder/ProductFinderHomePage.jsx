import { BiRightArrowAlt } from "react-icons/bi";
import ProductList from "../our-company/available-stocks/ProductList";

import { PiCaretUpDownFill } from "react-icons/pi";

function ProductFinderHomePage() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* About ICG Section */}
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="./product-finder.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "427.22px" }}
        />

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[93.32px] left-[80.04px]">
          what are you looking for ?
        </h1>

        {/* button container */}
        <div className="absolute  text-white text-2xl  top-[193.32px] left-[80.04px] flex flex-col gap-4">
          <button className=" w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Industry</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>

          <button className=" w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Category</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>
        </div>
      </div>

      {/* fileter box */}
      <div className=" flex py-2 items-center justify-between">
        <p className="text-sm">Filter</p>
        <div className="flex items-center border-gray-300 border-2 py-[5px] rounded-[4px]">
          <input placeholder="A-Z" className="pl-2" />
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        <div className="flex items-center border-gray-300 border-2 py-[5px] rounded-[4px]">
          <input placeholder="Search Product" className="pl-2" />
        </div>

        <div className="flex items-center border-gray-300 border-2 py-[5px] rounded-[4px]">
          <input placeholder="Market" className="pl-2" />
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        <div className="flex items-center border-gray-300 border-2 py-[5px] rounded-[4px]">
          <input placeholder="Categories" className="pl-2" />
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
      </div>

      {/* products */}
      <ProductList />
    </div>
  );
}

export default ProductFinderHomePage;
