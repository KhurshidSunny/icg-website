import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function UVAbsorbers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["uvabsorbers", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=uvabsorbers`,
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
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: `url("../../../assets/uvab.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          UV ABSORBERS
        </h1>
      </div>

      <div>
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4 text-[#023B3B]">
          UV Absorbers for Enhanced Material Protection
        </h2>
        <p className="font-normal text-[#000000] mb-6">
          UV absorbers protect materials from the harmful effects of ultraviolet
          (UV) radiation, which can cause degradation, discoloration, and loss
          of mechanical properties. They are widely used in plastics, coatings,
          textiles, and personal care to extend product life and maintain
          performance.
        </p>

        {/* Types of UV Absorbers */}
        <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">
          Types of UV Absorbers:
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li className="font-semibold text-[#023B3B] ">
            Benzotriazoles:{" "}
            <p className="font-normal text-[#000000]">
              Effective in plastics and coatings, offering broad-spectrum UV
              protection. Example: Omniquan UV 326 for plastics, Omniquan UV
              1577 for automotive coatings.
            </p>
          </li>
          <li className="font-semibold text-[#023B3B]">
            Benzophenones:
            <p className="font-normal text-[#000000]">
              Absorb UV and convert it to heat, protecting materials from UV
              damage. Example: Omniquan BP 12 absorbs UVB radiation (280-320
              nm).
            </p>{" "}
          </li>
          <li className="font-semibold text-[#023B3B]">
            Triazines:{" "}
            <p className="font-normal text-[#000000]">
              Stabilize polymers and coatings, especially against UVB rays.
              Example: Omniquan UV 1577 for automotive coatings, Omniquan UV
              1600 for outdoor stability.
            </p>
          </li>
          <li className="font-semibold text-[#023B3B]">
            Hindered Amine Light Stabilizers (HALS):
            <p className="font-normal text-[#000000]">
              Complementary to UV absorbers, they scavenge free radicals to
              prevent further degradation. Example: Omniquan LS 944 for
              polyolefins, Omniquan LS 770 for polyurethanes and styrenics.{" "}
              <br />
              <br />
              UV absorbers and stabilizers are essential for protecting
              materials in outdoor and high-performance applications, ensuring
              long-lasting durability and appearance.
            </p>{" "}
          </li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Key Points:</h3>
        <p className="font-normal text-[#FB1F35]">
          UV Protection: Prevents degradation caused by UV exposure. <br />
          Extended Lifespan: Enhances durability in outdoor environcments.{" "}
          <br></br>
          Color Preservation: Maintains appearance and prevents discoloration.
          <br />
          Improved Stability: Boosts overall material stability.
        </p>

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
    </div>
  );
}

export default UVAbsorbers;
