/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import { axiosInstance } from "../../axios"; // Using axios instance for consistent API calls
import "./FindProduct.css";

const API_URL = "/products";

function FindProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]); // All fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Matched products based on search
  const navigate = useNavigate();

  // Fetch all products on component load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(API_URL, {
          params: { page: 1, limit: 50 }, // Required parameters
        });
        if (response.status === 200) {
          setProducts(response.data?.data?.products || []); // Save all fetched products
        } else {
          console.error(`Unexpected status code: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);

    if (term) {
      // Filter products based on search term
      const matchedProducts = products.filter((p) =>
        p.name.toLowerCase().includes(term)
      );
      setFilteredProducts(matchedProducts);
    } else {
      setFilteredProducts([]); // Reset filtered products if search is cleared
    }
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

        {/* Display filtered products */}
        {filteredProducts.length > 0 && (
          <div className="search-result-container bg-slate-200 p-4 rounded-lg mt-4 w-3/5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for 2 per row */}
              {filteredProducts.map((product) => (
                <Link
                  key={product._id}
                  to={`/available-stocks/${product._id}`} // Link to ProductDetails page with product ID
                  className="flex flex-col w-full border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg p-4"
                  style={{ aspectRatio: "1 / 1" }} // Making each card square
                >
                  {/* Image Container */}
                  <div className="bg-white rounded-t-lg overflow-hidden flex-grow">
                    <img
                      src={product.banner}
                      alt={product.name}
                      className="w-full h-32 object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="py-4 text-center">
                    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.chemical_name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Show message if no product matches */}
        {searchTerm && filteredProducts.length === 0 && (
          <div className="text-center mt-4 text-gray-500">
            No product found matching "{searchTerm}".
          </div>
        )}

        {/* Dropdown container */}
        <div className="dropdown-container">
          <div className="dropdown-item">
            <label htmlFor="industries">Industries</label>
            <select id="industries">
              <option value="select industries">Select industries</option>
              <option value="Automotive">Automotive</option>
              <option value="Printing and Packaging">Printing and Packaging</option>
              <option value="Agriculture, Feed, and Food">Agriculture, Feed, and Food</option>
              <option value="Electronics">Electronics</option>
              <option value="Personal and Home Care">Personal and Home Care</option>
              <option value="Adhesives and Sealants">Adhesives and Sealants</option>
              <option value="Paints and Coating">Paints and Coating</option>
              <option value="Building and Construction">Building and Construction</option>
              <option value="Medical and Pharmaceutical">Medical and Pharmaceutical</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label htmlFor="solutions">Chemical Solutions</label>
            <select id="solutions">
              <option value="select category">Select category</option>
              <option value="Antioxidants">Antioxidants</option>
              <option value="UV-absorbers">UV-absorbers</option>
              <option value="Flame retardants">Flame retardants</option>
              <option value="Optical Brightners">Optical Brightners</option>
              <option value="Pigments and Dyes">Pigments and Dyes</option>
              <option value="HALS">HALS</option>
              <option value="Antiblocks">Antiblocks</option>
              <option value="Polymers and Resins">Polymers and Resins</option>
              <option value="Plasticizers">Plasticizers</option>
              <option value="Nucleating Agent">Nucleating Agent</option>
              <option value="Polymer Processing Additives">Polymer Processing Additives</option>
              <option value="Masterbatches">Masterbatches</option>
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

        <div className="view-all-products" onClick={() => navigate("/product-finder")}>
          <div className="view-all-text">View All Products</div>
        </div>
      </div>
    </div>
  );
}

export default FindProductSection;
