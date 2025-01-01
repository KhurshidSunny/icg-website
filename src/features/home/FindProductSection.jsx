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
        <div className="dropdown-container">
          <div className="dropdown-item">
            <label htmlFor="industries">Industries</label>
            <select id="industries">
              <option value="select industries">Select industries</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label htmlFor="solutions">Chemical Solutions</label>
            <select id="solutions">
              <option value="select solution">Select solution</option>
            </select>
          </div>
        </div>

        {/* Search bar container */}
        <div className="flex  mt-8 w-full items-center justify-center">
          <div className="flex items-center w-3/5 border rounded-lg bg-white">
            <span className=" px-3">🔍</span>
            <input
              className="w-full px-3 py-2 outline-none"
              type="text"
              placeholder="Search for products, grades or codes"
            />
          </div>
          <button
            className="ml-2 w-20 rounded-lg bg-[#8AA823] text-white h-10 border-2 items-center justify-center"
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
