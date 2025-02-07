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
          <h3 className="text-3xl font-bold pb-4 text-[#023B3B]">
            Nucleating Agents
          </h3>
          <p className="py-2">
            Nucleating agents (NAs) are essential additives in research and industrial applications,
            promoting the formation of nuclei in supersaturated solutions or molten systems. These
            agents serve as catalysts, accelerating nucleation—the critical stage in phase transitions
            where small clusters of a new crystalline or solid phase emerge within the original matrix.
            NAs enhance crystallization kinetics, particularly in polymers, and improve material
            properties such as clarity, mechanical strength, and thermal resistance. Their role is vital in
            polymer technology, materials science, and related sectors, where controlled nucleation is
            essential for optimizing performance and processing efficiency.
            <br />
            Nucleating agents can be categorized based on their chemical composition, physical state,
            and the nucleation process they induce such as organic, inorganic hybrid, and specialized
            nucleating agents.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold pb-4 text-[#023B3B]">Types:</h3>
          <ol className="list-decimal list-inside space-y-2 font-semibold">
            <li>Organic nucleating agents</li>
            <li>Inorganic Nucleating Agents</li>
            <li>Hybrid Nucleating Agents</li>
          </ol>
        </div>
        <div className="py-6">
          <ol className="list-decimal list-inside space-y-2 font-bold">
            <li>Organic nucleating agents:
              <span className="font-normal"> These agents typically contain functional groups capable of interacting with the parent
                phase. They are widely used in polymer crystallization techniques.</span> Omniquan NA 2988 <span className="font-normal">
                is a first-generation sorbitol-based nucleating agent, designed to improve the
                transparency and surface gloss of polypropylene. It also enhances overall polymer
                performance by promoting faster crystallization, making it ideal for applications where
                optical clarity and smooth finishes are critical.</span> Omniquan NA 5988: <span className="font-normal">This secondgeneration sorbitol-based agent offers better thermal stability and increased
                  crystallization rates compared to its predecessor. It improves the mechanical properties
                  of polypropylene, such as stiffness and impact resistance, making it suitable for
                  demanding industrial uses that require durability and heat resistance.</span> Omniquan NA
              3988<span className="font-normal"> and </span> Omniquan NA 8000<span className="font-normal"> delivers superior optical properties, including enhanced
                clarity and reduced haze, while significantly shortening cycle times during polymer
                processing. This makes it ideal for high-speed production environments where both
                quality and efficiency are paramount.
              </span>
            </li>
            <li>Inorganic Nucleating Agents:
              <span className="font-normal"> These solid particles provide a large surface area,
                commonly used in polymers like polypropylene to raise crystallization temperatures and
                reduce cycle times in molding, improving production efficiency
              </span>
            </li>
            <li>Hybrid Nucleating Agents:
              <span className="font-normal"> Used in metal and alloy crystallization, these agents combine
                the benefits of organic and inorganic components.</span> Omniquan NA 21:<span className="font-normal"> An organometallic
                  salt-based nucleator that enhances product rigidity, heat resistance, and boosts
                  crystallization efficiency and mechanical properties, ideal for high-performance
                  applications.
              </span>
            </li>
          </ol>
        </div>
        <div className="pb-6">
          <p>
            A range of specialized nucleating agents designed to enhance the crystallization morphology
            and macroscopic mechanical properties of polypropylene. <span className="font-bold"> Omniquan NA 101: </span>Enhances
            crystallization in polypropylene, leading to improved mechanical strength and thermal
            stability. <span className="font-bold">Omniquan NA 11</span> improves clarity and dimensional stability, making it ideal for
            high-performance applications requiring excellent optical properties.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#023B3B] ">Key Benefits</h3>

          <ul className="list-disc list-inside space-y-4 py-4">
            <li>
              Accelerated crystallization in thermoplastics, reducing cycle times in production.
            </li>
            <li>
              Enhanced mechanical properties, such as strength, stiffness, and impact resistance.
            </li>
            <li>
              Improved optical clarity and surface gloss in polymers like polypropylene.
            </li>
            <li>
              Increased thermal stability, enhancing performance under high-temperature
              conditions.
            </li>
            <li>
              Improved dimensional stability, reducing shrinkage and deformation.
            </li>
            <li>
              Better control of polymorphs and particle size distribution in pharmaceutical
              applications.
            </li>
            <li>
              Uniform grain structure in metals, leads to increased strength and durability
            </li>
            <li>
              Enhanced texture, consistency, and shelf life of food products like fats and sugars.
            </li>
            <li>
              Optimized processing efficiency across multiple industries, improving overall
              production output and quality.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#023B3B] ">Key Industries of Nucleacting Agents:</h3>
          <ul className="list-disc list-inside space-y-4 py-4">
            <li>
              Polymers Industry
            </li>
            <li>
              Metallurgy Industry
            </li>
            <li>
              Pharmaceuticals
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

export default NucleactingAgents;
