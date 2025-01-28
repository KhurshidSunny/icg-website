

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import "./FindProduct.css";

const API_URL = "http://208.109.240.175:3000/api/external/products";

function FindProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch products using React Query (v5 syntax)
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        return response.data?.data?.products || [];
      } catch (err) {
        console.error("Error fetching products:", err.message);
        throw err; // Re-throw error to handle it in React Query
      }
    },
  });

  // Search for the product when the search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSelectedProduct(null); // Reset the selected product if search term is empty
    } else {
      const product = products.find((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSelectedProduct(product || null); // If no product matches, set to null
    }
  }, [searchTerm, products]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
          <button
            className="ml-2 w-20 rounded-lg bg-[#8AA823] text-white h-10 border-2 items-center justify-center"
            onClick={() => console.log("Searching for:", searchTerm)}
          >
            Search
          </button>
        </div>

        {/* Display the selected product */}
        {selectedProduct && (
          <div className="selected-product-container">
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

        {isLoading && <div>Loading products...</div>}
        {error && (
          <div className="error-message">
            Error loading products: {error.message}. Please try again later.
          </div>
        )}
        {!selectedProduct && searchTerm && (
          <div>No product found matching "{searchTerm}".</div>
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
