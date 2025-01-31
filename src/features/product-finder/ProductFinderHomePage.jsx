import { BiRightArrowAlt } from "react-icons/bi";

import ProductList from "../our-company/available-stocks/ProductList";

function ProductFinderHomePage() {


  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        <img
          src="./product-finder.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "180px" }}
        />
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[93.32px] left-[350px]">
          What are you looking for?
        </h1>
        {/* <div className="absolute text-white text-2xl top-[193.32px] left-[80.04px] flex flex-col gap-4">
          <button className="w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Industry</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>
          <button className="w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Category</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>
        </div> */}
      </div>

      

      <ProductList />
    </div>
  );
}

export default ProductFinderHomePage;
