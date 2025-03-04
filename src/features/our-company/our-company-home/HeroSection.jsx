/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { axiosInstance } from "../../../axios"; // API instance for consistency

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
    <div className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source
            src="./assets/3191916-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-5">
          <h1 className="text-4xl mb-5 font-bold leading-[41px] text-center">
            SERVING CHEMICALS
          </h1>
  {/* Paragraph */}
<p className="text-base mb-7 max-w-[600px] text-center">
  At ICG Speciality Chemicals FZCO We Aim To Improve The Quality Of
  Your Products By Providing Environmental Friendly Chemicals
</p>

{/* Search bar container (matches paragraph width) */}
<div className="flex items-center justify-center w-full mx-auto flex-col relative max-w-[600px]">
  <div className="mb-4 flex items-center w-full relative bg-white dark:bg-gray-800 rounded-full shadow-md">
    {/* Search Input */}
    <input
      type="text"
      className="w-full pl-4 pr-16 p-2 text-base rounded-full border-none text-center bg-white dark:bg-gray-800 text-black dark:text-white"
      placeholder="Search for CAS no. or Product name"
      value={searchTerm}
      onChange={handleSearchChange}
    />

    {/* Search Button (Now on the Right Side) */}
    <button className="absolute right-1 flex items-center px-4 py-2 bg-[#8aa823] text-white rounded-full cursor-pointer">
      <span className="text-sm font-semibold mr-2">Search</span>
      <img className="w-5 h-5" src="./assets/searchicon.png" alt="icon" />
    </button>
  </div>

  <button
    className="hidden bg-[#8aa823] text-white border-none py-2 px-5 rounded-full cursor-pointer text-base mt-2 md:hidden"
    onClick={toggleSearch}
  >
    {isSearchOpen ? "Hide Search" : "Show Search"}
  </button>

  {/* Display filtered products BELOW the search bar */}
  {filteredProducts.length > 0 && (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 p-4 rounded-lg mt-1 shadow-lg z-50 max-h-80 overflow-y-auto border border-gray-300 dark:border-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product._id}
            to={`/available-stocks/${product._id}`} // Link to ProductDetails page with product ID
            className="flex flex-col border rounded-lg shadow-md hover:shadow-lg p-4 transition-transform duration-300 hover:scale-105 bg-gray-100 dark:bg-gray-700"
            style={{ aspectRatio: "1 / 1" }} // Making each card square
          >
            {/* Image Container */}
            <div className="bg-white dark:bg-gray-800 rounded-t-lg overflow-hidden flex-grow">
              <img
                src={product.banner}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="py-4 text-center">
              <h3 className="text-lg font-semibold mt-2 text-black dark:text-white">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
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
            <div className="text-center mt-4 text-gray-500 dark:text-gray-300">
              No product found matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
