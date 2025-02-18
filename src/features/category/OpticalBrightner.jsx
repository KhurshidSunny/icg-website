import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function OpticalBrightner() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["opticalBrightner", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=opticalBrightner`,
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
    setSearchParams({ page: newPage, limit });
    setPage(newPage);
  };
  return (
    <div className="min-h-screen dark:bg-background-dark">
      <div className="container mx-auto px-6 lg:px-16 py-10">
        <div
          className="relative m-auto h-[419px] bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/opti.png')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white"> Optical Brightners (OB)</h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div className="pt-8 pb-6">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Optical Brighteners (OB)
            </h3>
            <p className="pt-6 dark:text-gray-300">
              Optical brighteners, also known as optical brightening agents (OBAs)
              are specialized chemical compounds designed to enhance the luminance
              and visual appeal of materials. By absorbing ultraviolet light and
              re-emitting it as visible blue light, these agents create a
              perception of increased whiteness and brightness, transforming the
              aesthetics of various products.
            </p>
          </div>
          <h3 className="text-xl font-semibold py-4 text-[#023B3B] dark:text-white">
            Key benifits
          </h3>
          <ul className="pl-4 list-decimal list-inside space-y-4 dark:text-gray-300">
            <li className="py-2">
              <span className="font-bold">Enhanced Aesthetic Appeal</span> Optical
              brighteners significantly improve the visual quality of products,
              imparting a vibrant and pristine appearance.
            </li>
            <li className="py-2">
              <span className="font-bold">Value Addition</span> Products treated
              with OBAs often enjoy higher market valuation due to their enhanced
              aesthetics.
            </li>
            <li className="py-2">
              {" "}
              <span className="font-bold">
                Versatility Across Industries
              </span>{" "}
              Their applicability across diverse sectors makes optical brighteners
              invaluable to manufacturers.
            </li>
            <li className="py-2">
              {" "}
              <span className="font-bold">Cost Efficiency</span> The integration
              of optical brighteners can enhance product quality without
              necessitating major alterations in manufacturing processes.
            </li>
          </ul>
          <h3 className="text-xl font-semibold py-4 text-[#023B3B] dark:text-white">
            Applications
          </h3>
          <ul className="pl-4 list-decimal list-inside space-y-4 dark:text-gray-300">
            <li className="py-2">Textile Manufacturing</li>
            <li className="py-2">Paper and Packaging Industries</li>
            <li className="py-2">Household Cleaning and Detergent Products</li>
            <li className="py-2">Cosmetics and Personal Care Formulations</li>
            <li className="py-2">Plastics and Polymer Production</li>
            <li className="py-2">Industrial Coatings and Inks</li>
          </ul>
        </div>

        {/* Products */}
        <div className="px-20 pb-10">
          <div className="flex justify-between pt-10 pb-10">
            <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
            <button
              className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded dark:text-[#8AA823]"
              onClick={() => {
                setLimit(limit + 100);
                setSearchParams({ page: page, limit: limit + 100 });
                // queryClient.invalidateQueries(["uvabsorbers"]);
              }}
            >
              View All <FaArrowRightLong className="text-[#8AA823]" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.products?.map((product, index) => (
              <a href={`/available-stocks/${product._id}`} key={product._id}>
                <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center dark:bg-gray-800 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">{product.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{product.cas_no}</p>
                </div>
              </a>
            ))}
          </div>

          {data?.products?.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <p className="text-2xl font-semibold dark:text-gray-300">No Products Found</p>
            </div>
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
              <span>
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
    </div>
  );
}

export default OpticalBrightner;
