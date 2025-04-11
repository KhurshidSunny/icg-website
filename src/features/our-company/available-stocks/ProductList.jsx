import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiCaretUpDownFill } from "react-icons/pi";
import { axiosInstance } from "../../../axios"; // Adjust path

// Function to fetch all products across all pages
const fetchAllProducts = async () => {
  let allProducts = [];
  let currentPage = 1;
  const limit = 50; // Higher limit to reduce API calls (adjust if API has a max)

  while (true) {
    const url = `/products?page=${currentPage}&limit=${limit}`;
    console.log("Fetching from:", `${axiosInstance.defaults.baseURL}${url}`);
    const response = await axiosInstance.get(url);
    const { products, total } = response.data.data || {};

    if (!products || products.length === 0) break;
    allProducts = [...allProducts, ...products];

    // If we've fetched all products, stop
    if (allProducts.length >= total) break;

    currentPage++;
  }

  console.log("All Fetched Products:", allProducts);
  return { data: { products: allProducts, total: allProducts.length } };
};

const ProductList = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const limit = 6; // 6 products per page, handled client-side

  // Filter and sort state
  const [filters, setFilters] = useState({
    sortAZ: false,
    sortZA: false,
    market: "",
    category: "",
  });

  // Fetch all products
  const { data, error, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { products = [], total = 0 } = data?.data || {};
  console.log("Fetched Products:", products);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [filters.market, filters.category]);

  // Handle filter changes
  const handleFilterChange = (name, value) => {
    setFilters((prev) => {
      if (name === "sortAZ" && value === true) {
        return { ...prev, sortAZ: true, sortZA: false };
      } else if (name === "sortZA" && value === true) {
        return { ...prev, sortAZ: false, sortZA: true };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply market filter
    if (filters.market) {
      result = result.filter(
        (product) => product.industry_name?.toLowerCase() === filters.market.toLowerCase()
      );
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter(
        (product) => product.category_name?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply sorting
    if (filters.sortAZ) {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortZA) {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [products, filters]);

  // Paginate filtered products
  const showProducts = useMemo(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, page, limit]);

  // Calculate total pages based on filtered products
  const totalFilteredItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalFilteredItems / limit));

  // Generate pagination items
  const paginationItems = useMemo(() => {
    const items = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      items.push(1);
      let startPage = Math.max(2, page - 1);
      let endPage = Math.min(totalPages - 1, page + 1);

      if (page <= 3) {
        endPage = Math.min(5, totalPages - 1);
      } else if (page >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 2);
      }

      if (startPage > 2) items.push("...");
      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }
      if (endPage < totalPages - 1) items.push("...");
      if (endPage < totalPages) items.push(totalPages);
    }
    return items;
  }, [page, totalPages]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}. Please try again later or contact support if the issue persists.
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
            onClick={() => handleFilterChange("sortAZ", true)}
            className={`w-full focus:outline-none dark:text-text-dark ${filters.sortAZ ? "font-bold" : ""}`}
          >
            A-Z
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Z-A Sorting */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full md:flex-grow min-w-[120px] dark:border-gray-700">
          <button
            onClick={() => handleFilterChange("sortZA", true)}
            className={`w-full focus:outline-none dark:text-text-dark ${filters.sortZA ? "font-bold" : ""}`}
          >
            Z-A
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Market */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px] dark:border-gray-700">
          <select
            value={filters.market}
            onChange={(e) => handleFilterChange("market", e.target.value)}
            className="w-full focus:outline-none dark:bg-gray-800 dark:text-text-dark"
          >
            <option value="">Select Market</option>
            <option value="automotive">Automotive</option>
            <option value="printing and packaging">Printing and Packaging</option>
            <option value="agriculture, feed, and food">Agriculture, Feed, and Food</option>
            <option value="electronics">Electronics</option>
            <option value="personal and home care">Personal and Home Care</option>
            <option value="adhesives and sealants">Adhesives and Sealants</option>
            <option value="paints and coating">Paints and Coating</option>
            <option value="building and construction">Building and Construction</option>
            <option value="medical and pharmaceutical">Medical and Pharmaceutical</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300 dark:text-gray-400" />
        </div>

        {/* Category */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px] dark:border-gray-700">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
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
            <option value="polymer processing additives">Polymer Processing Additives</option>
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
                <p className="text-sm text-gray-600 dark:text-gray-400">{product.cas_no}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center col-span-3 text-text-light dark:text-text-dark">
            No products available.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalFilteredItems > 0 && (
        <div className="flex items-center justify-center mt-8 mx-4 space-x-2">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            <FaArrowLeft className="text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex items-center space-x-2">
            {paginationItems.map((item, index) =>
              item === "..." ? (
                <span key={`ellipsis-${index}`} className="text-gray-600 dark:text-gray-400">
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
