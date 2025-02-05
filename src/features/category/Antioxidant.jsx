import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
function Antioxidant() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["antioxidants_12", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=antioxident`,
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

  console.log("Antioxidants", data);

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
          backgroundImage: `url('/assets/attachment6.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          Antioxidants (AN)
        </h1>
      </div>

      {/* Below Content */}
      <div className="pt-8 px-20 leading-loose">
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold text-[#023B3B]">
            Antioxidants for Polymer Protection
          </h3>
          <p className="pt-6">
            Oxidation is a common issue in polymers exposed to heat, light,
            oxygen, or mechanical stress, leading to brittleness, discoloration,
            and material failure. Antioxidants are vital additives that protect
            polymers by neutralizing free radicals and preventing oxidative
            degradation. This helps extend the lifespan and maintain the
            performance of polymer products.
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Types of Antioxidants
          </h3>

          <h4 className="text-2xl font-medium pt-4 pb-4 text-[#023B3B]">
            1. Primary Antioxidants (Radical Scavengers):
          </h4>
          <p className="">
            These prevent oxidation by neutralizing free radicals in the early
            stages of degradation:
          </p>
          <ul className="list-disc list-inside ">
            <li>
              <strong className="font-normal">Hindered Phenols:</strong> Protect
              against oxidative degradation, UV exposure, and yellowing.
              Example: Omniquan AN 1076 enhances stability in polymers like PE,
              PP, PVC, and ABS.
            </li>
            <li>
              <strong className="font-normal">Aromatic Amines:</strong>{" "}
              Effective at high temperatures, especially in rubber and
              elastomers. Example: Omniquan AN 5057 stabilizes polyols and
              rubber.
            </li>
            <li>
              <strong className="font-normal">Metal Deactivators:</strong>{" "}
              Prevent metal ions from accelerating oxidation, used in
              polyolefins and wire/cable applications.
            </li>
          </ul>

          <h4 className="text-2xl font-medium text-[#023B3B] pt-8 pb-4">
            2. Secondary Antioxidants (Peroxide Decomposers):
          </h4>
          <p>
            These work with primary antioxidants to decompose hydroperoxides,
            preventing further radical formation:
          </p>
          <ul className="list-disc list-inside ">
            <li>
              <strong className="font-normal">
                Phosphites / Phosphonites:
              </strong>{" "}
              React with hydroperoxides to form stable alcohols, commonly used
              in PVC and polycarbonate.
            </li>
            <li>
              <strong className="font-normal">Thioesters:</strong> Provide
              high-temperature stabilization by converting hydroperoxides into
              non-reactive species.
            </li>
            <li>
              <strong className="font-normal">Thiosynergists:</strong> Offer
              long-term heat resistance in PP/PE and wire/cable applications.
            </li>
            <li>
              <strong className="font-normal">Antioxidant Blends:</strong>{" "}
              Mixtures that improve processing, color stability, and heat
              resistance in polyolefins and other polymers.
            </li>
          </ul>
        </div>
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
  );
}

export default Antioxidant;
