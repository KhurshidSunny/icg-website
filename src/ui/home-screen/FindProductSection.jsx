import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce"; // Use lodash for debouncing input
import "./FindProduct.css";

function FindProductSection() {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1); // Page state
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(""); // Debounced search query state
  const navigate = useNavigate();



  // Handle "View All Products" click
  const handleViewAll = () => {
    navigate("/product-finder");
  };

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  // Handle search input change with debouncing
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Debounce search query to reduce the number of API calls
  const debouncedSearch = debounce((query) => {
    setDebouncedSearchQuery(query);
  }, 500);

  // Effect to handle the debounced search query
  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery]);

  // Filter products based on search query
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  return (
    <div className="find-product-container">
      <div className="find-product-form">
        <div className="find-product-header">Find a Product</div>

        {/* Search bar container */}
        <div className="flex mt-8 w-full items-center justify-center">
          <div className="flex items-center w-3/5 border rounded-lg bg-white">
            <span className="px-3">🔍</span>
            <input
              className="w-full px-3 py-2 outline-none"
              type="text"
              placeholder="Search for products, grades or codes"
              onChange={handleSearchChange}
              value={searchQuery}
            />
          </div>
        </div>

        {/* Display the selected product if it matches */}
        {selectedProduct && (
          <div className="search-result-container bg-gray-200 p-4 rounded-lg mt-4 w-3/5 mx-auto">
            <div
              key={selectedProduct.id}
              className="product-card"
              onClick={() => navigate(`/product-details/${selectedProduct.id}`)}
            >
              <img
                src={selectedProduct.banner}
                alt={selectedProduct.name}
                className="product-card-image"
              />
              <div className="product-card-content">
                <h3 className="product-card-title">{selectedProduct.name}</h3>
                <p className="product-card-description">
                  {selectedProduct.description.substring(0, 80)}...
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Show message when no products are found */}
        {!filteredProducts?.length && debouncedSearchQuery && (
          <div className="text-center mt-4 text-gray-500">
            Product cannot be found.
          </div>
        )}

        {/* Show filtered products below search bar */}
        {filteredProducts?.length > 0 && !selectedProduct && (
          <div className="products-container">
            {filteredProducts?.map((product) => (
              <div key={product.id} className="product-card" onClick={() => handleProductSelect(product)}>
                <img
                  src={product.banner}
                  alt={product.name}
                  className="product-card-image"
                />
                <div className="product-card-content">
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-description">
                    {product.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

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
