/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiCaretUpDownFill } from "react-icons/pi";

// Function to fetch products from the API
const fetchProducts = async ({ queryKey }) => {
  const [, { page, limit }] = queryKey;
  const url = `http://208.109.240.175:3000/api/external/products?page=${page}&limit=${limit}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sortAZ, setSortAZ] = useState(false);
  const [sortZA, setSortZA] = useState(false);
  const [market, setMarket] = useState("");
  const [category, setCategory] = useState("");

  const limit = 6; // Set limit to 6 products per page

  // Fetch products with query params
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["products", { page, limit }],
    queryFn: fetchProducts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { products = [], totalPages = 1 } = data?.data || {};

  useEffect(() => {
    refetch(); // Refetch data if market or category changes
  }, [market, category, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Sorting function
  const sortProducts = (products) => {
    if (sortAZ) {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortZA) {
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    }
    return products;
  };

  // Filter products based on selected market and category
  const filterProducts = (products) => {
    let filtered = products;

    // Filter by selected market (industry_name)
    if (market) {
      filtered = filtered.filter(
        (product) =>
          product.industry_name?.toLowerCase() === market.toLowerCase()
      );
    }

    // Filter by selected category (chemical_name)
    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.chemical_name?.toLowerCase() === category.toLowerCase()
      );
    }

    return filtered;
  };

  // Apply sorting and filtering
  const sortedAndFilteredProducts = filterProducts(sortProducts(products));

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
            className="w-full focus:outline-none dark:text-text-dark"
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
            className="w-full focus:outline-none dark:text-text-dark"
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
        {sortedAndFilteredProducts.length > 0 ? (
          sortedAndFilteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`}
              className="border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              {/* <img
                src={product.banner}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              /> */}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-center mt-8 mx-4 space-x-2 space-y-2">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1 || isFetching}
          >
            <FaArrowLeft className="text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex flex-wrap items-center justify-center space-x-2 space-y-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full border ${
                  page === index + 1
                    ? "text-white bg-[#8AA823]"
                    : "text-gray-600 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                }`}
                onClick={() => setPage(index + 1)}
                disabled={isFetching}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages || isFetching}
          >
            <FaArrowRight className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
