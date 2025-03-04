import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function AntiBlock() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["antiblock", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=antiblock`,
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
          style={{
            backgroundImage: `url('/assets/Anti-Block-Masterbatch-scaled1.png')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white"> Anti Blocks</h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div>
            <h3 className="text-3xl font-semibold text-[#023B3B] dark:text-white">
              Antiblocks
            </h3>
            <p className="pt-6 dark:text-gray-300">
              Anti-blocking agents are additives used to reduce the adhesion or
              blocking of materials, particularly in industries where materials
              have a tendency to stick together or adhere. These agents possess
              specific properties that make them effective in preventing blocking
              or clumping. These agents work by reducing the surface friction or
              stickiness between particles or surfaces, making materials easier to
              handle, transport, and process.
              <br />
              <span className="font-bold">Omniquan Block 22</span> is a
              high-performance antiblock that minimizes sticking in polymer films
              and sheets which Used in packaging materials, films, and coatings to
              improve handling and processing efficiency.{" "}
              <span className="font-bold">Omniquan Block 50 S</span> is An
              advanced anti block designed to enhance the clarity of films while
              preventing adhesion . It is ideal for transparent packaging, food
              wraps, and other applications where visibility is important.{" "}
              <span className="font-bold">Omniquan Block 111,</span> this
              antiblock improves printability on surfaces, ensuring high-quality
              graphics and branding. Suitable for flexible packaging, labels, and
              any printed film applications.{" "}
              <span className="font-bold">Omniquan Block770,</span>
              optimizes performance in multilayer films by minimizing inter-layer
              adhesion Commonly used in packaging, lamination, and industrial
              films. <span className="font-bold">Erucamide,</span> is a slip and
              anti-block agent that reduces friction and enhances surface
              properties. Effective in various plastic films, including food
              packaging and industrial applications.{" "}
              <span className="font-bold">Oleoamide</span> is an effective
              antiblock that improves the flow and processing of polymers while
              reducing surface adhesion is widely used in packaging, films, and
              coatings, particularly in applications requiring enhanced
              performance and clarity
            </p>
            <h3 className="text-xl font-semibold pt-4 text-[#023B3B] dark:text-white">
              Key Benefits of Antiblocks
            </h3>
            <ul className="list-disc list-inside space-y-4 py-4 dark:text-gray-300">
              <li>
                Reduces surface friction to prevent layers from sticking together.
              </li>
              <li>Enhances clarity for improved visibility in applications.</li>
              <li>
                Improves printability, ensuring high-quality prints on packaging.
              </li>
              <li>
                Optimizes packaging performance by minimizing adhesion between
                layers.
              </li>
              <li>Maintains consistent product quality by reducing defects.</li>
              <li>
                Offers versatility across various materials and applications.
              </li>
              <li>
                Provides cost-effectiveness by lowering production costs and
                increasing yields.
              </li>
              <li>
                Compatible with other additives for enhanced overall performance.
              </li>
            </ul>

            <h3 className="text-xl font-semibold py-4 text-[#023B3B] dark:text-white">
              Key Industries
            </h3>
            <ol className="list-decimal list-inside space-y-4 py-4 dark:text-gray-300">
              <li>Plastics Industry</li>
              <li>Food Industry</li>
              <li>Pharmaceutical Industry</li>
              <li>Agriculture</li>
              <li>Packaging Industry</li>
              <li>Paper and Printing</li>
              <li>Mining and Mineral Processing</li>
              <li>Chemical Industry</li>
            </ol>
          </div>
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
              <p className="text-2xl font-semibold  dark:text-white">No Products Found</p>
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

export default AntiBlock;
