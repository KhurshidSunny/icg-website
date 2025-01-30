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

  const limit = 3; // Set limit to 3 products per page

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

  const sortedAndFilteredProducts = sortProducts(products);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Filter Box */}
      <div className="flex items-center space-x-4 py-4 mb-8 w-full">
        <h3 className="text-lg font-semibold">Filter</h3>

        {/* A-Z Sorting */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md flex-grow min-w-[120px]">
          <button
            onClick={() => {
              setSortAZ(true);
              setSortZA(false);
            }}
            className="w-full focus:outline-none"
          >
            A-Z
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        {/* Z-A Sorting */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md flex-grow min-w-[120px]">
          <button
            onClick={() => {
              setSortZA(true);
              setSortAZ(false);
            }}
            className="w-full focus:outline-none"
          >
            Z-A
          </button>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        {/* Market */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px]">
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="w-full focus:outline-none"
          >
            <option value="">Select Market</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        {/* Category */}
        <div className="flex items-center border-gray-300 border-2 py-1 px-2 rounded-md w-full min-w-[150px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="Category">Category</option>
            <option value="Industry">Industry</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAndFilteredProducts.length > 0 ? (
          sortedAndFilteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`}
              className="border rounded-lg shadow-md bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.banner}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.chemical_name}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center col-span-3">No products available.</div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1 || isFetching}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full border ${
                  page === index + 1
                    ? "text-white bg-[#8AA823]"
                    : "text-gray-600 bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setPage(index + 1)}
                disabled={isFetching}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages || isFetching}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
