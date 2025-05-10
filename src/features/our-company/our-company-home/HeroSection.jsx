/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../axios";

function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Since limit: 0 might not work, we'll fetch all pages iteratively
        let allProducts = [];
        let currentPage = 1;
        let totalPages = 1;

        do {
          const response = await axiosInstance.get("/products", {
            params: {
              page: currentPage,
              limit: 50, // Adjust based on your API's maximum limit per page
            },
          });

          if (response.status === 200) {
            const data = response.data?.data;
            allProducts = [...allProducts, ...(data?.products || [])];
            totalPages = data?.totalPages || 1;
            currentPage++;
          } else {
            throw new Error(`Unexpected status code: ${response.status}`);
          }
        } while (currentPage <= totalPages);

        setProducts(allProducts);
      } catch (err) {
        console.error("Error fetching products:", err.message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value.trim().toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const matchedProducts = products.filter((product) => {
        const nameMatch = product.name?.toLowerCase().includes(term);
        const casMatch = product.cas_no?.toLowerCase().includes(term);
        return nameMatch || casMatch;
      });
      setFilteredProducts(matchedProducts);
    } else {
      setFilteredProducts([]);
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
          <p className="text-base mb-7 max-w-[600px] text-center">
            At ICG Speciality Chemicals FZCO We Aim To Improve The Quality Of
            Your Products By Providing Environmental Friendly Chemicals
          </p>

          <div className="flex items-center justify-center w-full mx-auto flex-col relative max-w-[600px]">
            <div className="mb-4 flex items-center w-full relative bg-white dark:bg-gray-800 rounded-full shadow-md">
              <input
                type="text"
                className="w-full pl-4 pr-16 p-2 text-base rounded-full border-none text-center bg-white dark:bg-gray-800 text-black dark:text-white"
                placeholder="Search for CAS no. or Product name"
                value={searchTerm}
                onChange={handleSearchChange}
                disabled={isLoading}
              />
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

         
            {filteredProducts.length > 0 && !isLoading && !error && (
              <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 p-4 rounded-lg mt-1 shadow-lg z-[1000] max-h-64 overflow-y-auto border border-gray-300 dark:border-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product._id}
                      to={`/available-stocks/${product._id}`}
                      className="flex flex-col border rounded-lg shadow-md hover:shadow-lg p-2 transition-transform duration-300 hover:scale-105 bg-gray-100 dark:bg-gray-700"
                    >
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          CAS: {product.cas_no}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {product.chemical_name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {searchTerm && filteredProducts.length === 0 && !isLoading && !error && (
              <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 p-4 rounded-lg mt-1 shadow-lg z-[1000] text-center text-gray-500 dark:text-gray-300">
                No products found matching "{searchTerm}".
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;