import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function NucleactingAgents() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["nucleactingagents", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=nucleactingagents`,
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
    <div>
      <div
        className="relative rounded-xl mt-12 m-auto w-11/12 h-[419px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/csm_lohtragon-nucleating-agents_923ddb98fc1.png')`,
        }}
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
          <h3 className="text-4xl text-white"> Nucleacting Agents</h3>
        </div>
      </div>

      {/* Below Content */}
      <div className="pt-8 px-20 leading-loose">
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Nucleating Agents: Essential Additives for Enhanced Material
            Performance
          </h3>
          <p className="pt-6">
            Nucleating agents (NAs) are crucial additives in industrial and
            research applications, accelerating the nucleation process in molten
            systems or supersaturated solutions. These agents act as catalysts,
            promoting the early formation of nuclei that drive faster phase
            transitions and optimized crystallization kinetics, especially in
            polymers. By enhancing properties like clarity, strength, and
            thermal resistance, nucleating agents significantly improve material
            quality and are essential in polymer technology, materials science,
            and other high-performance sectors.
          </p>
        </div>
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Cutting-Edge Nucleating Agent Types for Diverse Applications
          </h3>
          <p className="">
            Nucleating agents come in several forms, each designed to meet
            specific industrial needs. Organic agents, like the Omniquan NA 2988
            and NA 3988 series, are sorbitol-based and enhance polymer
            transparency, durability, and gloss, ideal for high-clarity
            applications. Meanwhile, inorganic nucleating agents are used in
            polymers like polypropylene to raise crystallization temperatures
            and shorten cycle times, making production more efficient. Hybrid
            agents, such as Omniquan NA 21, combine organic and inorganic
            elements to enhance heat resistance and mechanical strength,
            especially useful for metals and high-demand environments.
          </p>
        </div>
        <div className="pt-8 pb-6">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Key Benefits Driving Quality and Efficiency
          </h3>
          <p className="">
            Nucleating agents deliver measurable benefits across industries by
            enhancing crystallization speeds, reducing production cycle times,
            and improving product quality. They increase mechanical properties
            like stiffness and impact resistance, boost thermal stability, and
            enhance optical clarity in products such as polypropylene. Beyond
            polymers, these agents offer uniform grain structures in metals,
            improved shelf life in food products, and more consistent particle
            control in pharmaceuticals. Ultimately, nucleating agents are
            indispensable in creating materials that meet demanding industrial
            standards, ensuring optimized performance and superior production
            outcome
          </p>
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

export default NucleactingAgents;
