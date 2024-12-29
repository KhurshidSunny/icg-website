import "./FindProduct.css";

function FindProductSection() {
  const handleSearch = () => {
    console.log("Searching for products in:");
  };

  const handleViewAll = () => {
    console.log("View all products");
  };

  return (
    <div className="find-product-container">
      <div className="find-product-form">
        <div className="find-product-header">Find a Product</div>

        {/* Dropdown container */}
        <div className=" flex justify-between items-center w-full px-4 py-3">
          <div className="flex flex-col w-1/2 px-2">
            <label
              htmlFor="industries"
              className="text-gray-700 font-medium mb-1"
            >
              Industries
            </label>
            <select
              name="industries"
              id="industries"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 text-gray-700"
            >
              <option value="select industries">Select industries</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2 px-2">
            <label
              htmlFor="solutions"
              className="text-gray-700 font-medium mb-1"
            >
              Chemical Solutions
            </label>
            <select
              name="solutions"
              id="solutions"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-100 text-gray-700"
            >
              <option value="select solution">Select solution</option>
            </select>
          </div>
        </div>

        {/* Search bar container */}
        <div className="w-full flex items-center px-4 py-3">
          {/* Search Input with Icon Inside */}
          <div className="relative flex-grow">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 text-xl">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search for products, grades or codes"
              className="w-full pl-10 py-2 border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 bg-transparent text-gray-700"
            />
          </div>

          {/* Search Button on the Right */}
          <button
            className="ml-4 px-6 py-2 bg-[#8AA823] text-white rounded-md hover:bg-[#7b9920] focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="other-resources">
          Looking for other resources? Select an item below.
        </div>

        <div className="resource-links">
          <div className="resource-item">Safety Data Sheets</div>
          <div className="resource-item">Technical Data Sheets</div>
          <div className="resource-item">Product Brochures</div>
        </div>

        <div className="view-all-products" onClick={handleViewAll}>
          <div className="view-all-text">View All Products</div>
        </div>
      </div>
    </div>
  );
}

export default FindProductSection;
