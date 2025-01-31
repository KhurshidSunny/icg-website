/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { axiosInstance } from "../../../axios"; // API instance for consistency
import "./herosection.css";

function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]); // All fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products based on search

  // Fetch products once when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products", {
          params: { page: 1, limit: 50 }, // Fetch up to 50 products
        });
        if (response.status === 200) {
          setProducts(response.data?.data?.products || []);
        } else {
          console.error(`Unexpected status code: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    fetchProducts();
  }, []);

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Handle search input
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
    <div className="landing-page relative">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source
            src="./assets/3191916-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>SERVING CHEMICALS</h1>
          <p>
            AT ICG SPECIALTY CHEMICALS FZCO We Aim To Improve The Quality Of
            Your Products By Providing Environmental Friendly Chemicals
          </p>

          {/* Search bar container */}
          <div className="search-bar-container relative">
            <div className={`mb-4 search-bar ${isSearchOpen ? "active" : ""}`}>
              <input
                type="text"
                placeholder="Search for CAS no. or Product name"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="search-button">
                <img
                  className="searchicon"
                  src="./assets/searchicon.png"
                  alt="icon"
                />
              </button>
            </div>
            <button className="mobile-toggle-button" onClick={toggleSearch}>
              {isSearchOpen ? "Hide Search" : "Show Search"}
            </button>

            {/* Display filtered products BELOW the search bar */}
            {filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white p-4 rounded-lg mt-1 shadow-lg z-50 max-h-80 overflow-y-auto border border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      to={`/available-stocks/${product._id}`} // Link to ProductDetails page with product ID
                      className="flex flex-col border rounded-lg shadow-md hover:shadow-lg p-4 transition-transform duration-300 hover:scale-105 bg-gray-100"
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
                        <h3 className="text-lg font-semibold mt-2 text-black">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {product.chemical_name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Show message if no product matches */}
          {searchTerm && filteredProducts.length === 0 && (
            <div className="text-center mt-4 text-gray-500">
              No product found matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
