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
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: `url("../../../assets/pigmentsdyes.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          PIGMENTS DYES
        </h1>
      </div>

      <h3 className="text-xl font-bold pb-4 text-[#023B3B] ">
        Pigments and Dyes
      </h3>
      <p className="pb-4">
        Color plays a vital role in human perception and aesthetics, impacting
        our daily lives, industries, and cultural expressions. At the core of
        this colorful world are pigments and dyes—two fundamental categories of
        colorants that are indispensable in various applications.
      </p>
      <p className="pb-4">
        <span className="font-bold">Pigments</span> are finely ground, insoluble
        substances that provide color to materials by scattering light. They do
        not dissolve in the medium and are typically used in coatings, paints,
        plastics, inks, and construction materials. Pigments are prized for
        their stability, opacity, and durability.
      </p>
      <p className="pb-4">
        <span className="font-bold">Dyes,</span> in contrast, are soluble
        compounds that impart color to materials through a process called
        dyeing. When applied, dyes penetrate the substrate, creating a chemical
        bond that offers vivid and often longer-lasting color. Dyes are
        primarily utilized in textiles, paper, and certain types of plastics.
      </p>

      <h3 className="text-xl font-bold pb-4 text-[#023B3B] ">
        Key Differences of Pigments and Dyes
      </h3>
      <ul className="list-decimal list-inside space-y-4 pb-4">
        <li>
          <span className="font-bold">Solubility</span> Pigments are insoluble;
          dyes are soluble.
        </li>
        <li>
          <span className="font-bold">Application Method</span> Pigments are
          dispersed in a medium; dyes require a dyeing process.
        </li>
        <li>
          <span className="font-bold">Color Intensity</span> Dyes tend to
          provide more intense colors, while pigments offer opacity and
          durability
        </li>
        <li>
          Typically, pigments have been classified into inorganic and organic
          pigments and dyes are classified as Acid , base , solvent, Disperse ,
          Reactive and VAT dyes.{" "}
        </li>
      </ul>

      <h3 className="text-xl font-bold pb-4 text-[#023B3B] ">
        Uses of Pigments and Dyes
      </h3>
      <ul className="list-decimal list-inside space-y-4 pb-4">
        <li>Coloring</li>
        <li>Enhancement of Aesthetics</li>
        <li>Functional Properties</li>
      </ul>

      <h3 className="text-xl font-bold mpb-4 text-[#023B3B] ">
        Key Industries of Pigments and Dyes
      </h3>
      <ul className="list-decimal list-inside space-y-4 pb-4">
        <li>Textile Industry</li>
        <li>Coatings and Paints</li>
        <li>Plastics and Polymers</li>
        <li>Inks</li>
        <li>Cosmetics and Personal Care</li>
        <li>Construction and Building Materials</li>
        <li>Automotive</li>
        <li>Food and Pharmaceuticals</li>
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
            <a href={`/available-stocks/${product._id}`} key={product._id}>
              <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center">
                <h4 className="font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600">{product.cas_no}</p>
              </div>
            </a>
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
