import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";
function MasterBatch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["masterbatch", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=masterbatch`,
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
    <>
      <div
        className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/mast.png')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

        {/* Boxes */}
        <div className="flex flex-col gap-2">
          <div className="absolute w-48 h-36 bottom-[-40px] left-[-40px] border-white border-[1px] rounded-3xl"></div>
          <div className="absolute w-36 h-36 bottom-[-70px] left-[-35px] border-white border-opacity-[17%] border-[1px] rounded-3xl"></div>
        </div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h3 className="text-4xl text-white"> Master Batch</h3>
        </div>
      </div>

      {/* Below Content */}
      <div className="pt-8 px-20 leading-loose">
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Masterbatches: Essential Additives for Enhanced Color and
            Performance
          </h3>
          <p className="pt-6">
            Masterbatches are crucial additives in the plastics and polymer
            industries, providing vibrant color, improved properties, and
            optimized processing. ICG Specialty Chemicals offers a diverse range
            of Masterbatch solutions tailored to meet specific industry needs,
            delivering consistent quality and performance. Designed to boost
            durability, aesthetic appeal, and functionality, our Masterbatches
            are invaluable to manufacturers across sectors such as automotive,
            packaging, electronics, and construction.
          </p>
        </div>
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Diverse Masterbatch Solutions for Industry-Specific Applications{" "}
          </h3>
          <p className="pt-6">
            Our product lineup includes specialized solutions like the
            Liquid/Paste Masterbatch, which provides deep, consistent black
            tones ideal for applications requiring high dispersion, such as
            automotive parts, packaging films, and electronics. The solid
            Masterbatch enhances UV stability, opacity, and mechanical strength,
            making it ideal for outdoor applications, including agricultural
            films and automotive trims. Additionally, the Moisture Absorber (AB)
            Masterbatch eliminates excess moisture during processing, essential
            for recycled materials and preventing defects in injection molding
            and extrusion.
          </p>
        </div>
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Technical Advantages and Sustainable Benefits{" "}
          </h3>
          <p className="pt-6">
            ICG Masterbatches are designed for even dispersion within polymers,
            reducing the need for additional mixing and enhancing
            processability. Their concentrated formulations require minimal
            dosages, offering a cost-effective way to achieve desired results.
            With solutions tailored for using recycled materials, these
            Masterbatches also support more sustainable production practices.
            Consistent color distribution ensures high aesthetic standards,
            enabling manufacturers to produce uniform, visually appealing
            products across large production runs.
          </p>
        </div>

        {/* Products */}
        <div className="px-20 pb-10">
          <div className="flex justify-between pt-10 pb-10">
            <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
            <button
              className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded"
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
              <div
                key={product._id}
                className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center"
              >
                <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600">{product.cas_no}</p>
              </div>
            ))}
          </div>

          {data?.products?.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <p className="text-2xl font-semibold">No Products Found</p>
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
    </>
  );
}

export default MasterBatch;
