import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function PigmentDyes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["pigmentdyes", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=pigmentdyes`,
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
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="../../../assets/pigmentsdyes.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1242px", height: "419px" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          PIGMENTS DYES
        </h1>
      </div>

      <p className="font-normal text-[#000000] mb-6">
        Pigments and dyes are essential colorants used across various
        industries, with distinct properties and applications:
      </p>

      <h3 className="text-xl font-bold mb-4 text-[#023B3B] ">Pigments</h3>
      <p className="font-normal text-[#000000] mb-6">
        are insoluble, finely ground substances that provide color by scattering
        light. They are used in coatings, paints, plastics, inks, and
        construction materials, valued for their stability, opacity, and
        durability.
      </p>

      <h3 className="text-xl font-bold mb-4 text-[#023B3B] ">Dyes</h3>
      <p className="font-normal text-[#000000] mb-6">
        are soluble compounds that chemically bond with materials, providing
        vivid, long-lasting color. They are commonly used in textiles, paper,
        and certain plastics.
      </p>

      <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">
        Key Differences:{" "}
      </h3>
      <ul className="list-disc list-inside mb-6">
        <li className="font-semibold text-[#023B3B] ">
          Solubility:{" "}
          <p className="font-normal text-[#000000]">
            Pigments are insoluble; dyes are soluble.
          </p>
        </li>
        <li className="font-semibold text-[#023B3B]">
          Application:{" "}
          <p className="font-normal text-[#000000]">
            Pigments are dispersed in a medium, while dyes require a dyeing
            process.
          </p>{" "}
        </li>
        <li className="font-semibold text-[#023B3B]">
          Color Intensity:{" "}
          <p className="font-normal text-[#000000]">
            Dyes offer intense color; pigments provide opacity and durability.
          </p>
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Types: </h3>
      <ul className="list-disc list-inside mb-6">
        <li className="font-semibold text-[#023B3B] ">
          Pigments:
          <p className="font-normal text-[#000000]">Inorganic and organic.</p>
        </li>
        <li className="font-semibold text-[#023B3B]">
          Dyes:{" "}
          <p className="font-normal text-[#000000]">
            Acid, base, solvent, disperse, reactive, and vat dyes.
          </p>{" "}
        </li>
      </ul>

      <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">Applications: </h3>
      <ul className="list-disc list-inside mb-6">
        <li className="font-normal text-[#000000] ">Textile industry </li>
        <li className="font-normal text-[#000000] ">Coatings and paints </li>
        <li className="font-normal text-[#000000] ">Plastics and polymers</li>
        <li className="font-normal text-[#000000] ">Inks</li>
        <li className="font-normal text-[#000000] ">
          Cosmetics and personal care{" "}
        </li>
        <li className="font-normal text-[#000000] ">
          Construction and building materials
        </li>
        <li className="font-normal text-[#000000] ">Automotive </li>
        <li className="font-normal text-[#000000] ">
          Food and pharmaceuticals{" "}
        </li>
        <li className="font-normal text-[#000000] ">
          Pigments and dyes are critical for coloring, enhancing aesthetics, and
          adding functional properties to products across diverse sectors.
        </li>
      </ul>

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
  );
}

export default PigmentDyes;
