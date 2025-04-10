import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../axios";

export default function AllProductsByCategory() {
  const { category } = useParams();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(100);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["all_antioxidents", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=${category}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      );
      return data.data.data;
    },
  });

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > data.totalPages) return;

    setPage(newPage);
  };

  return (
    <div className="px-6 py-8 min-h-screen dark:bg-background-dark">
      <div className="container mx-auto ">
        <h2 className="text-2xl font-semibold text-green-700 dark:text-white mb-6">
          Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {error && <p className="text-red-500">Something went wrong</p>}
          {isLoading && <p>Loading...</p>}
          {data?.products.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                CAS: {product.cas_no}
              </p>
            </Link>
          ))}
        </div>

        {data?.products.length === 0 && (
          <p className="text-red-500 text-center dark:text-white">
            No products found
          </p>
        )}

        {/* Pagination Controls */}
        {data && data.totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 gap-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-800 dark:text-white">
              Page {page} of {data.totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data.totalPages}
              className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
