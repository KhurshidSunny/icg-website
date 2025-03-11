import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiCaretUpDownFill } from "react-icons/pi";
import { axiosInstance } from "../../../axios";

// Function to fetch products with pagination
const fetchProducts = async ({ queryKey }) => {
  const [, { page, limit }] = queryKey;
  const url = `/products?page=${page}&limit=${limit}`;
  console.log("Fetching from:", `${axiosInstance.defaults.baseURL}${url}`);
  const response = await axiosInstance.get(url);
  return response.data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sortAZ, setSortAZ] = useState(false);
  const [sortZA, setSortZA] = useState(false);
  const [market, setMarket] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  const limit = 6; // Set limit to 6 products per page

  // Fetch products with query params
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", { page, limit }],
    queryFn: fetchProducts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { products = [], total = 0 } = data?.data || {};

  // Apply filters and sorting to products
  useEffect(() => {
    if (products.length > 0) {
      let result = [...products];
      
      // Apply market filter
      if (market) {
        result = result.filter(
          (product) => product.industry_name?.toLowerCase() === market.toLowerCase()
        );
      }
      
      // Apply category filter
      if (category) {
        result = result.filter(
          (product) => product.category_name?.toLowerCase() === category.toLowerCase()
        );
      }
      
      // Apply sorting
      if (sortAZ) {
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortZA) {
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
      }
      
      setFilteredProducts(result);
      
      // Get current page products
      const startIndex = 0; // Always 0 since products are already paginated from the server
      const endIndex = limit;
      setShowProducts(result.slice(startIndex, endIndex));
    } else {
      setFilteredProducts([]);
      setShowProducts([]);
    }
  }, [products, market, category, sortAZ, sortZA]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [market, category, sortAZ, sortZA]);

  // Calculate total pages based on total items or filtered items
  const totalFilteredItems = filteredProducts.length;
  const totalPages = Math.ceil((market || category ? totalFilteredItems : total) / limit);

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    
    if (totalPages <= 5) {
      // If 5 or fewer pages, show all page numbers
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Always include first page
      items.push(1);
      
      // Logic for pages around current page
      let startPage = Math.max(2, page - 1);
      let endPage = Math.min(totalPages - 1, page + 1);
      
      // Adjust to show 5 pages when possible
      if (page <= 3) {
        endPage = 5;
      } else if (page >= totalPages - 2) {
        startPage = totalPages - 4;
      }
      
      // Add ellipsis if needed on left side
      if (startPage > 2) {
        items.push("...");
      }
      
      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }
      
      // Add ellipsis if needed on right side
      if (endPage < totalPages - 1) {
        items.push("...");
      }
      
      // Always include last page if not already included
      if (endPage < totalPages) {
        items.push(totalPages);
      }
    }
    
    return items;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}. Please try again later or contact support if the
        issue persists.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-background-light dark:bg-background-dark">
      {/* Filter Box */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 py-4 mb-8 w-full">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
          Filter
        </h3>

        {/* A-Z Sorting */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full md:flex-grow min-w-[120px] dark:border-gray-700">
          <button
            onClick={() => {
              setSortAZ(true);
              setSortZA(false);
            }}
            className={`w-full focus:outline-none dark:text-text-dark ${
              sortAZ ? "font-bold" : ""
            }`}
          >
            A-Z
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Z-A Sorting */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full md:flex-grow min-w-[120px] dark:border-gray-700">
          <button
            onClick={() => {
              setSortZA(true);
              setSortAZ(false);
            }}
            className={`w-full focus:outline-none dark:text-text-dark ${
              sortZA ? "font-bold" : ""
            }`}
          >
            Z-A
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Market */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px] dark:border-gray-700">
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="w-full focus:outline-none dark:bg-gray-800 dark:text-text-dark"
          >
            <option value="">Select Market</option>
            <option value="automotive">Automotive</option>
            <option value="printing and packaging">
              Printing and Packaging
            </option>
            <option value="agriculture, feed, and food">
              Agriculture, Feed, and Food
            </option>
            <option value="electronics">Electronics</option>
            <option value="personal and home care">
              Personal and Home Care
            </option>
            <option value="adhesives and sealants">
              Adhesives and Sealants
            </option>
            <option value="paints and coating">Paints and Coating</option>
            <option value="building and construction">
              Building and Construction
            </option>
            <option value="medical and pharmaceutical">
              Medical and Pharmaceutical
            </option>
            <option value="antioxidants">Antioxidants</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Category */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px] dark:border-gray-700">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full focus:outline-none dark:bg-gray-800 dark:text-text-dark"
          >
            <option value="">Select Category</option>
            <option value="antioxidants">Antioxidants</option>
            <option value="uv-absorbers">UV-absorbers</option>
            <option value="flame retardants">Flame retardants</option>
            <option value="optical brightners">Optical Brightners</option>
            <option value="pigments and dyes">Pigments and Dyes</option>
            <option value="hals">HALS</option>
            <option value="antiblocks">Antiblocks</option>
            <option value="polymers and resins">Polymers and Resins</option>
            <option value="plasticizers">Plasticizers</option>
            <option value="nucleating agent">Nucleating Agent</option>
            <option value="polymer processing additives">
              Polymer Processing Additives
            </option>
            <option value="masterbatches">Masterbatches</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showProducts.length > 0 ? (
          showProducts.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`}
              className="border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold mt-4 text-text-light dark:text-text-dark">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {product.cas_no}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center col-span-3 text-text-light dark:text-text-dark">
            No products available.
          </div>
        )}
      </div>

      {/* Pagination - Only show if there are products */}
      {(market || category ? totalFilteredItems : total) > 0 && (
        <div className="flex items-center justify-center mt-8 mx-4 space-x-2">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <FaArrowLeft className="text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex items-center space-x-2">
            {getPaginationItems().map((item, index) =>
              item === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="text-gray-600 dark:text-gray-400"
                >
                  ...
                </span>
              ) : (
                <button
                  key={`page-${item}`}
                  className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full border ${
                    item === page
                      ? "text-white bg-[#8AA823]"
                      : "text-gray-600 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setPage(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
          >
            <FaArrowRight className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;