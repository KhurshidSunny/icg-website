import { FaArrowRightLong } from "react-icons/fa6";

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function PolymerAdditives() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["polymeradditives", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=Polymer Additives`,
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
          style={{ backgroundImage: `url('/assets/polymer-chemistry1.png')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white">
              {" "}
              POLYMER PROCESSING ADDITIVES
            </h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div className="pt-8 pb-6">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Polymer Processing Additives PPA
            </h3>
            <p className="pt-6 dark:text-gray-300">
              In the competitive landscape of polymer manufacturing, achieving
              optimal performance during processing is crucial for creating
              high-quality end products. Omniquan Processing Aids (PPAs) stand
              out as essential additives designed to enhance the processing
              characteristics of polymers, ensuring efficiency and consistency
              throughout production.
              <br />
              <span className="font-bold">
                Omniquan Polymer Processing Aids (PPAs)
              </span>{" "}
              are specialized additives formulated to improve the flow
              characteristics, reduce melt viscosity, and facilitate easier
              processing of various polymer materials. These aids modify the
              rheological properties of polymers, enabling smoother processing
              and enhancing the overall performance of polymer products.
              <br />
              <span className="font-bold">Omniquan PPA 5920,</span> this
              processing aid is designed for enhanced flow and reduced
              viscosity, making it ideal for applications requiring improved
              processing efficiency.
              <span className="font-bold">Omniquan PPA 5922</span> is aimed at
              optimizing the extrusion and injection molding processes, PPA 5922
              significantly reduces cycle times while enhancing product quality.{" "}
              <span className="font-bold">OmniquanPPA 5927 </span>
              excels in providing excellent compatibility with various polymers,
              improving mechanical properties and processing behavior.{" "}
              <span className="font-bold">Omniquan PPA 9613</span> is especially
              formulated for demanding applications, this processing aid offers
              superior thermal stability and enhanced processing performance
              across a range of temperatures.{" "}
              <span className="font-bold">Omniquan Zero Moisture: </span>A
              groundbreaking addition,{" "}
              <span className="font-bold">Omniquan Zero Moisture</span> is
              engineered to minimize moisture absorption during processing,
              ensuring consistent quality and performance in the final products.
              This innovative processing aid enhances the durability and
              longevity of the polymers, making it particularly valuable in
              applications where moisture resistance is critical.
            </p>
          </div>
          <div className="pt-8 pb-6">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Uses of Polymers Processing Additives
            </h3>
            <p className=" dark:text-gray-300">
              <span className="font-bold">Omniquan PPAs</span> are crucial in
              various processing techniques, including:
            </p>{" "}
            <br />
            <p className=" dark:text-gray-300">
              <span className="font-bold">Extrusion:</span> Enhancing polymer
              flow to prevent die drool and improve surface finish.
            </p>{" "}
            <br />
            <p className=" dark:text-gray-300">
              <span className="font-bold">Injection Molding:</span> Reducing
              cycle times and enhancing mold filling for consistent part
              quality.
            </p>{" "}
            <br />
            <p className=" dark:text-gray-300">
              <span className="font-bold">Blow Molding:</span> Ensuring uniform
              wall thickness and reducing defects in blow-molded components.
            </p>{" "}
            <br />
            <p className=" dark:text-gray-300">
              <span className="font-bold">Film Processing:</span> Improving
              clarity and mechanical properties of films while minimizing
              stickiness and enhancing handling.
            </p>{" "}
            <br />
          </div>
          <div className="pt-8 pb-6">
            <h3 className="text-xl font-semibold p-4 text-[#023B3B] dark:text-white">
              Key Benefits
            </h3>
            <ol className="list-decimal list-inside space-y-4 p-4 dark:text-gray-300">
              <li>
                <span className="font-bold">Improved Process Efficiency:</span>{" "}
                Reduced processing temperatures and energy consumption lead to
                significant cost savings.
              </li>
              <li>
                <span className="font-bold">Enhanced Product Quality:</span>{" "}
                Optimized flow characteristics minimize defects, ensuring a
                superior finish.
              </li>
              <li>
                <span className="font-bold">Increased Output:</span> Faster
                cycle times and reduced downtime enhance production rates and
                overall efficiency
              </li>
              <li>
                <span className="font-bold">
                  Better Material Compatibility:
                </span>{" "}
                Improved compatibility of polymer blends enhances the mechanical
                properties of the final products.
              </li>
            </ol>
          </div>
          <div className="pt-8 pb-6">
            <h3 className="text-xl font-semibold p-4 text-[#023B3B] dark:text-white">
              Key Industries
            </h3>
            <ul className="list-disc list-inside space-y-4 p-4 dark:text-gray-300">
              <li>Plastics and Composites:</li>
              <li>Consumer Goods:</li>
              <li>Medical Devices:</li>
              <li>Textiles:</li>
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="px-20 pb-10">
          <div className="flex justify-between pt-10 pb-10">
            <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
            <a
              href={`all-products/Polymer Additives`}
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

export default PolymerAdditives;
