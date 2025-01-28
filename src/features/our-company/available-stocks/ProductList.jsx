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
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [market, setMarket] = useState("Market1");
  const [category, setCategory] = useState("");

  const limit = 10;

  // Fetch products with query params, triggered by changes in page, search, market, or category
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["products", { page, limit }],
    queryFn: fetchProducts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const { products, totalPages } = data?.data || {};

  useEffect(() => {
    refetch(); // Refetch data if market or category changes
  }, [market, category, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Function to handle sorting based on sortOrder
  const sortProducts = (products, sortOrder) => {
    if (sortOrder === "A-Z") {
      return products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === "Z-A") {
      return products.sort((a, b) => b.name.localeCompare(a.name));
    }
    return products;
  };

  // Function to handle product filtering by search term
  const filteredProducts = products
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const sortedAndFilteredProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div>
      {/* Filter Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 mb-8">
        {/* Sort Order */}
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]  focus:outline-none">
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value); // Update sortOrder
              
            }}
            className="w-full  focus:outline-none"
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        {/* Search */}
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px] ">
          <input
            placeholder="Search Product"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value); // Update search term
            }}
            className="w-full  focus:outline-none"
          />
        </div>

        {/* Market */}
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <select
            value={market}
            onChange={(e) => {
              setMarket(e.target.value); // Update market
            }}
            className="w-full  focus:outline-none"
          >
            <option value="Market1">Market1</option>
            <option value="Market2">Market2</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>

        {/* Category/Industry */}
        <div className="flex items-center border-gray-300 border-2 py-[5px] px-2 rounded-[4px]">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value); // Update category
            }}
            className="w-full  focus:outline-none"
          >
            <option value="">Select Category</option>
            <option value="Category">Category</option>
            <option value="Industry">Industry</option>
          </select>
          <PiCaretUpDownFill className="cursor-pointer text-gray-300" />
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAndFilteredProducts && sortedAndFilteredProducts.length > 0 ? (
          sortedAndFilteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`} // Link to ProductDetails page with product ID
              className="border rounded-lg shadow-md bg-white"
            >
              <img
                src={product.banner}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4 text-center">{product.name}</h3>
              <p className="text-sm text-gray-600 text-center">{product.chemical_name}</p>

              <div className="mt-4 flex justify-between mx-6 mb-4">
                {product.MSDS && (
                  <a
                    href={product.MSDS}
                    className="text-sm text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSDS
                  </a>
                )}
                <br />
                {product.TDS && (
                  <a
                    href={product.TDS}
                    className="text-sm text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TDS
                  </a>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div>No products available.</div>
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
