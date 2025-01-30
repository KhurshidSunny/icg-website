import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function FlameRetardant() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = parseInt(searchParams.get("page")) || 1;
  let limit = parseInt(searchParams.get("limit")) || 10;

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 10) limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["flameRetardants", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=flameRetardants`,
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
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="../../../assets/fkamere.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1242px", height: "419px" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          FLAME RETARDANTS
        </h1>
      </div>

      <p className="font-normal text-[#000000] mb-6">
        Flame retardants are chemicals added to materials to prevent or slow the
        spread of fire, enhancing safety across various industries. These
        substances are classified based on their chemical composition and action
        mechanism, including:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li className="font-semibold text-[#023B3B] ">
          Halogenated{" "}
          <p className="font-normal text-[#000000]">
            (e.g OMNIQUAN DBDPE and OMNIQUAN FR130) – Contain halogens (chlorine
            or bromine) to suppress combustion, ideal for electronics and
            textiles.
          </p>
        </li>
        <li className="font-semibold text-[#023B3B]">
          Non-Halogenated
          <p className="font-normal text-[#000000]">
            (e.g, OMNIQUAN DOPO, OMNIQUAN Dicumene) – Environmentally friendly,
            form a protective char layer to inhibit fire spread.
          </p>{" "}
        </li>
        <li className="font-semibold text-[#023B3B]">
          Phosphorus-Based{" "}
          <p className="font-normal text-[#000000]">
            (e.g, OMNIQUAN FR TBEP, OMNIQUAN PHT4) – Promote char formation to
            prevent gas release, used in polymers and coatings.
          </p>
        </li>
        <li className="font-semibold text-[#023B3B]">
          Inorganic {" "}
          <p className="font-normal text-[#000000]">
            (e.g., ALUMINIUM HYDROXIDE, Zinc Borate) – Release water vapor to
            cool and dilute flames, used in construction, textiles, and
            plastics.
          </p>{" "}
        </li>
      </ul>

      <p className="font-normal text-[#000000] mb-6">
        Applications span construction, electronics, textiles, automotive, and
        furniture, offering key benefits like enhanced safety, regulatory
        compliance, material longevity, and versatility. Flame retardants are
        critical for meeting fire safety standards and protecting lives and
        property.
      </p>

      {/* Products */}
      <div className="px-20 pb-10">
        <div className="flex justify-between pt-10 pb-10">
          <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
          <button className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded">
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

export default FlameRetardant;
