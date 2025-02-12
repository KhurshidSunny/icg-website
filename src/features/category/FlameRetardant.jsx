import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function FlameRetardant() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

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
    setPage(newPage);
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: `url("../../../assets/fkamere.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          FLAME RETARDANTS
        </h1>
      </div>

      <h3 className="text-2xl font-semibold text-[#023B3B] pb-6">
        Flame Retardants
      </h3>

      <p className="font-normal text-[#000000] mb-6">
        Flame retardants are chemical substances that are added to materials to
        prevent the start of a fire or to slow its progression. Flame retardants
        play a critical role in protecting materials and products from the risk
        of fire, reducing the rate of ignition, slowing the spread of flames,
        and preventing catastrophic damage. We serve industries ranging from
        construction and automotive to electronics, textiles, and beyond, with
        flame retardants tailored to meet specific material needs. Flame
        retardants can be categorized into several types based on their chemical
        composition and mechanism of action:
      </p>
      <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">Types</h3>
      <ol className="list-decimal list-inside space-y-4 py-2">
        <li> Halogenated Flame Retardants</li>
        <li> Brominated Flame Retardants</li>
        <li> Non-Halogenated Flame retardants</li>
        <li> Phosphorous-Based</li>
        <li> Inorganic Flame Retardants</li>
      </ol>
      <h3 className="text-xl font-semibold py-4 text-[#023B3B]">
        1. Halogenated Flame Retardants
      </h3>
      <ul className="list-inside">
        <li className="p-2">
          <span className="font-bold">OMNIQUAN MPP:</span> Methylphosphonic
          acid-based flame retardant, ideal for use in thermoplastics and
          engineering resins.
        </li>
        <li className="p-2">
          <span className="font-bold">OMNIQUAN DEPAL:</span> A halogen-free
          flame retardant, used for highperformance applications in polyamides
          and polyesters.
        </li>
      </ul>

      <h3 className="text-xl font-semibold py-4 text-[#023B3B]">
        2. Brominated Flame Retardants
      </h3>
      <ul className="list-inside">
        <li className="p-2">
          <span className="font-bold">OMNIQUAN DBDPE:</span> Decabromodiphenyl
          ethane flame retardant, ideal for high-temperature thermoplastics and
          electrical insulation.
        </li>
        <li className="p-2">
          <span className="font-bold">OMNIQUAN DEPAL:</span> A halogen-free
          flame retardant, used for highperformance applications in polyamides
          and polyesters.
        </li>
      </ul>
      <h3 className="text-xl font-semibold py-4 text-[#023B3B]">
        3. Non-Halogenated Flame retardants
      </h3>
      <p className="p-2">
        These do not contain halogen elements and are often considered more
        environmentally friendly. They work by forming a protective char layer
        on the material surface, slowing down heat and flame spread.
      </p>
      <ul className="list-inside">
        <li className="p-2">
          <span className="font-bold">OMNIQUAN DBDPE:</span> Decabromodiphenyl
          ethane flame retardant, ideal for high-temperature thermoplastics and
          electrical insulation.
        </li>
        <li className="p-2">
          <span className="font-bold">OMNIQUAN BDDP:</span> BDDP is an advanced,
          high-efficiency additive flame retardant characterized by the presence
          of both aromatic and aliphatic bromine.{" "}
        </li>
      </ul>
      <h3 className="text-xl font-semibold py-4 text-[#023B3B]">
        4. Phosphorous-Based
      </h3>
      <p className="p-2">
        Promote char formation to inhibit flammable gas release, widely used in
        polymers and coatings.
      </p>
      <ul className="list-inside">
        <li className="p-2">
          <span className="font-bold">OMNIQUAN FR TBEP:</span> Phosphate flame
          retardant, commonly used in flexible polyurethane foams and coatings.
        </li>
        <li className="p-2">
          <span className="font-bold">OMNIQUAN FR TCPP:</span> Phosphate flame
          retardant for use in flexible and rigid polyurethane foams, as well as
          thermoplastics.
        </li>
      </ul>
      <h3 className="text-xl font-semibold py-4 text-[#023B3B]">
        5. Inorganic Flame Retardants
      </h3>
      <p className="p-2">
        These are minerals and metal-based compounds that act as flame
        retardants. They release water vapor when heated, which cools the
        material and dilutes flammable gases
      </p>
      <ul className="list-inside">
        <li className="p-2">
          <span className="font-bold">ALUMINIUM HYDROXIDE (ATH):</span> A widely
          used inorganic flame retardant for construction, electronics, and
          textile applications.
        </li>
        <li className="p-2">
          <span className="font-bold">Zinc Borate:</span> It is an inorganic
          flame retardant known for its excellent fire resistance and smoke
          suppression properties. Suitable for use in various applications,
          including plastics, coatings, and textiles, ZB is an environmentally
          friendly option that meets safety regulations without compromising
          performance.
        </li>
      </ul>
      <h3 className="text-xl font-semibold p-4 text-[#023B3B]">Key benifits</h3>
      <ul className="pl-4 list-decimal list-inside space-y-4">
        <li className="py-2">
          <span className="font-bold">Enhanced Safety</span> Significantly
          reduces fire hazards, protecting lives and property.
        </li>
        <li className="py-2">
          <span className="font-bold">Regulatory Compliance: </span> : Helps
          meet stringent fire safety standards.
        </li>
        <li className="py-2">
          <span className="font-bold">Material Longevity:</span> Increases
          durability against heat exposure.
        </li>
        <li className="py-2">
          <span className="font-bold">Versatility:</span> Suitable for a diverse
          range of applications.
        </li>
      </ul>
      <h3 className="text-xl font-semibold p-4 text-[#023B3B]">
        Industries Served
      </h3>
      <p className="px-4">Flame retardants are indispensable in:</p>
      <ul className="pl-4 list-decimal list-inside space-y-4">
        <li className="py-2">
          <span className="font-bold">Construction: </span>Insulation,
          wallboards, and roofing materials.
        </li>
        <li className="py-2">
          <span className="font-bold">Electronics: </span>Circuit boards and
          device housings.
        </li>
        <li className="py-2">
          <span className="font-bold">Textiles: </span>Upholstery, curtains, and
          fire-resistant clothing.
        </li>
        <li className="py-2">
          <span className="font-bold">Automotive: </span>Interior materials and
          wiring.
        </li>
        <li className="py-2">
          <span className="font-bold">Furniture: </span>Foams and wood products
          that meet fire safety standards.
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

export default FlameRetardant;
