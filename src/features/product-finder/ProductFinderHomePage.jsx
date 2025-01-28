import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { PiCaretUpDownFill } from "react-icons/pi";
import ProductList from "../our-company/available-stocks/ProductList";

function ProductFinderHomePage() {
  const [industry, setIndustry] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [market, setMarket] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");

  // eslint-disable-next-line no-unused-vars
  const handleIndustryChange = (event) => setIndustry(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleSearchChange = (event) => setSearch(event.target.value);
  const handleMarketChange = (event) => setMarket(event.target.value);
  const handleSortOrderChange = (event) => setSortOrder(event.target.value);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        <img
          src="./product-finder.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "427.22px" }}
        />
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[93.32px] left-[80.04px]">
          What are you looking for?
        </h1>
        <div className="absolute text-white text-2xl top-[193.32px] left-[80.04px] flex flex-col gap-4">
          <button className="w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Industry</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>
          <button className="w-full px-4 py-4 text-left flex items-center justify-between gap-36 border-b-[1px] border-gray-300 bg-transparent hover:bg-[rgba(200,200,200,0.1)] transition-colors duration-200">
            <span>Select Category</span>
            <BiRightArrowAlt className="text-white" size={36} />
          </button>
        </div>
      </div>

      {/* Filter Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="w-full"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <input
            placeholder="Search Product"
            value={search}
            onChange={handleSearchChange}
            className="w-full"
          />
        </div>
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <select
            value={market}
            onChange={handleMarketChange}
            className="w-full"
          >
            <option value="Market1">Market1</option>
            <option value="Market2">Market2</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full"
          >
            <option value="">Select Category</option>
            <option value="Category">Category</option>
            <option value="Industry">Industry</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
      </div>

      <ProductList
        industry={industry}
        category={category}
        search={search}
        market={market}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default ProductFinderHomePage;
