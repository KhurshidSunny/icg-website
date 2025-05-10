import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function Plasticizers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 8);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(8);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["plasticizers", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=Plasticizers`,
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
            backgroundImage: `url('/assets/Plastic_Additives_430C_647x3291.png')`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white"> Placticizers</h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div className="pt-8 pb-6">
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              Placticizers
            </h3>
            <p className="pt-6 dark:text-gray-300">
              Plasticizers are essential chemical additives used to enhance the
              flexibility, workability, and durability of polymer materials,
              particularly in plastics. Their primary function is to reduce the
              intermolecular forces within the polymer chains, increasing the
              material's plasticity and improving its mechanical properties.
            </p>
          </div>
          <div className="pt-8 pb-6">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Key Applications:
            </h3>
            <ol className="list-decimal list-inside space-y-4 font-bold dark:text-gray-300">
              <li>
                Flexible PVC (Polyvinyl Chloride) Production
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    Plasticizers are vital in the manufacturing of flexible PVC,
                    transforming it from a rigid polymer into a malleable
                    material used in products such as cables, hoses, and vinyl
                    flooring. By embedding plasticizers, PVC can achieve
                    enhanced elongation, flexibility, and resilience. One of the
                    most widely used general-purpose plasticizers,{" "}
                    <span className="font-bold">DOP</span> offers{" "}
                    <span className="font-bold">excellent flexibility</span> and{" "}
                    <span className="font-bold">low volatility</span>, making it
                    ideal for soft PVC applications such as wire and cable
                    insulation, flooring, and synthetic leather.
                  </li>
                </ul>
              </li>
              <li>
                Elastomers and Rubbers
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    In the <span className="font-bold">rubber industry</span>,
                    plasticizers are integrated into elastomeric compounds to
                    enhance their{" "}
                    <span className="font-bold">processability</span> and{" "}
                    <span className="font-bold">elasticity.</span> These
                    compounds are widely used in automotive components like
                    tires, seals, and gaskets, where superior flexibility under
                    dynamic stress is required.
                  </li>
                </ul>
              </li>
              <li>
                Coatings and Adhesives
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    Plasticizers improve the{" "}
                    <span className="font-bold">rheological properties</span> of
                    coatings and adhesives, allowing for easier application and
                    improved adhesion to substrates. In industries like{" "}
                    <span className="font-bold">construction</span> and{" "}
                    <span className="font-bold">automotive,</span> they help
                    provide durable finishes and high-performance bonding
                    solutions.
                  </li>
                </ul>
              </li>
              <li>
                Plastic Films and Sheets
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    In the production of films used for{" "}
                    <span className="font-bold">packaging</span> and{" "}
                    <span className="font-bold">
                      agricultural applications,
                    </span>
                    plasticizers impart flexibility, tear resistance, and
                    enhanced transparency. They enable materials to endure
                    deformation without breaking, ideal for shrink wraps,
                    greenhouse films, and food packaging.{" "}
                    <span className="font-bold">DPHP</span> is recognized for
                    providing{" "}
                    <span className="font-bold">excellent weatherability</span>{" "}
                    and <span>UV resistance</span> in outdoor applications. Its
                    low volatility and{" "}
                    <span className="font-bold">long-term flexibility</span>{" "}
                    make it ideal for roofing membranes, coated fabrics, and
                    automotive components exposed to sunlight and environmental
                    elements.
                  </li>
                </ul>
              </li>
              <li>
                Medical Devices
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    In medical applications, plasticizers are used in products
                    such as <span className="font-bold">IV tubing,</span>
                    <span className="font-bold">blood bags,</span> and{" "}
                    <span className="font-bold">catheters,</span> where
                    flexible, biocompatible materials are critical. The use of
                    specialized, non-toxic plasticizers in medical-grade
                    plastics ensures compliance with stringent health and safety
                    regulations.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="pt-8 pb-6">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Key Applications:
            </h3>
            <ol className="list-decimal list-inside space-y-4 font-bold dark:text-gray-300">
              <li>
                Enhanced Flexibility:
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    By reducing the rigidity of polymers, plasticizers impart
                    significant flexural strength, enabling the material to be
                    used in dynamic applications without cracking or breaking.
                  </li>
                </ul>
              </li>
              <li>
                Improved Durability:
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    Plasticizers increase a polymer's ability to resist wear,
                    fatigue, and degradation under mechanical stress, UV
                    exposure, and extreme temperatures, prolonging the lifespan
                    of the material.
                  </li>
                </ul>
              </li>
              <li>
                Optimized Processing:
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    During the extrusion, molding, or calendering of polymers,
                    plasticizers act as process aids by lowering the glass
                    transition temperature and enhancing the flow
                    characteristics, leading to faster cycle times and energy
                    efficiency.
                  </li>
                </ul>
              </li>
              <li>
                Customization of Mechanical Properties:
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    Depending on the formulation and dosage, plasticizers can be
                    fine-tuned to deliver specific mechanical properties such as
                    impact resistance, tensile strength, and modulus of
                    elasticity, allowing precise customization to suit diverse
                    industrial needs.
                  </li>
                </ul>
              </li>
              <li>
                Cost Efficiency:
                <ul className="list-[circle] list-inside space-y-4 font-normal">
                  <li>
                    The incorporation of plasticizers allows manufacturers to
                    reduce material costs by replacing more expensive polymers
                    with cost-effective, flexible alternatives without
                    compromising on performance.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
            Uses of Pigments and Dyes
          </h3>
          <ul className="list-disc list-inside space-y-4 pb-4 font-bold dark:text-gray-300">
            <li>Automotive</li>
            <li>Construction</li>
            <li>Medical and Healthcare</li>
            <li>Textiles</li>
          </ul>
        </div>

        {/* Products */}
        <div className="px-20 pb-10">
          <div className="flex justify-between pt-10 pb-10">
            <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
            <a
              href={`all-products/Plasticizers`}
              className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded dark:text-[#8AA823]"
            >
              View All <FaArrowRightLong className="text-[#8AA823]" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data?.products?.map((product, index) => (
              <a href={`/available-stocks/${product._id}`} key={product._id}>
                <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center dark:bg-gray-800 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">
                    {product.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {product.cas_no}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {data?.products?.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <p className="text-2xl font-semibold dark:text-white">
                No Products Found
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {/* {data && data.totalPages > 1 && (
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
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Plasticizers;
