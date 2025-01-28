import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./FindProduct.css";

const API_URL = "http://208.109.240.175:3000/api/external/products";

function FindProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = async (event) => {
    setSearchTerm(event.target.value);
    setSelectedProduct(null); // Reset selected product when search term changes

    if (event.target.value.trim() !== "") {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          const fetchedProducts = response.data?.data?.products || [];
          setProducts(fetchedProducts);

          // Filter products based on search term
          const foundProduct = fetchedProducts.find((p) =>
            p.name.toLowerCase().includes(event.target.value.toLowerCase())
          );
          setSelectedProduct(foundProduct || null); // If no product matches, set to null
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      } catch (err) {
        // Specific error handling based on the response error
        if (err.response) {
          setError(`Server error: ${err.response.status} - ${err.response.statusText}`);
          console.error("Error fetching products:", err.response);
        } else if (err.request) {
          setError("Network error. Please check your internet connection.");
          console.error("Error fetching products:", err.request);
        } else {
          setError("Error loading products. Please try again later.");
          console.error("Error fetching products:", err.message);
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setSelectedProduct(null); // Reset if search term is cleared
    }
  };

  // Handle "View All Products" click
  const handleViewAll = () => {
    navigate("/product-finder");
  };

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
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Display the selected product if it matches the search term */}
        {isLoading && (
          <div className="text-center mt-4 text-gray-500">
            Searching for products...
          </div>
        )}

        {/* Display product or no product message */}
        {selectedProduct ? (
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
        ) : (
          // Show message when no product is found
          searchTerm && !isLoading && (
            <div className="text-center mt-4 text-gray-500">
              No product found matching "{searchTerm}".
            </div>
          )
        )}

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
