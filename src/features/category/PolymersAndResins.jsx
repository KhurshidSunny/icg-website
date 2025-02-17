import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function PolymersAndResins() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["polymersAndResins", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=polymersAndResins`,
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
        style={{ backgroundImage: `url('/assets/polymers.png')` }}
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
          <h3 className="text-4xl text-white"> Polymers and Resins</h3>
        </div>
      </div>

      {/* Below Content */}
      <div className="pt-8 px-20 leading-loose">
        <h3 className="text-2xl font-bold pb-4 text-[#023B3B] pt-6">
          Polyemers and Resins
        </h3>
        <p>
          Polymers and resins are essential materials in numerous industrial
          applications. These compounds possess unique chemical properties that
          enable them to be used in various high-performance products,
          contributing to sectors such as automotive, construction, electronics,
          textiles, and packaging
        </p>
        <div className="py-6">
          <h3 className="text-xl font-semibold pb-4 text-[#023B3B]">
            Polymers:
          </h3>
          <p className="text-lg font-semibold pb-4">
            These Polymers are widely used in different Industries
          </p>
          <ul className="list-inside">
            <p className="font-bold">Nylon 6</p>
            <li>
              Nylon 6 is a widely used engineering polymer characterized by its
              high tensile strength, excellent abrasion resistance, and
              flexibility. This polymer offers superior performance in
              automotive, industrial, and textile applications.
            </li>
            <p className="font-bold">Nylon 12</p>
            <li>
              Nylon 12 offers lower moisture absorption and better dimensional
              stability compared to Nylon 6, making it ideal for applications
              requiring flexibility and chemical resistance, especially in the
              automotive and electronics industries.
            </li>
            <p className="font-bold">EVA (Ethylene Vinyl Acetate)</p>
            <li>
              Ethylene Vinyl Acetate (EVA) copolymers are versatile materials
              used in applications requiring flexibility, impact resistance, and
              adhesion. EVA grades vary depending on the vinyl acetate (VA)
              content, affecting the material's properties.
              <ul className="list-disc list-inside space-y-4 pb-2">
                <li>
                  <span className="font-bold">EVA 18% VA Content:</span> Offers
                  moderate flexibility and impact resistance, often used in
                  packaging films and adhesives.
                </li>
                <li>
                  <span className="font-bold">EVA 24% VA Content:</span>{" "}
                  Provides enhanced elasticity, making it suitable for footwear,
                  hoses, and flexible packaging.
                </li>
                <li>
                  <span className="font-bold">EVA 28% VA Content:</span> Ideal
                  for high-clarity applications, such as solar panel
                  encapsulation, protective films, and packaging.
                </li>
              </ul>
            </li>
            <p className="font-bold">PE Wax (Polyethylene Wax)</p>
            <li>
              Polyethylene wax is a low molecular weight polymer used as a
              lubricant, dispersant, and processing aid in the plastics
              industry. It improves the processability of plastics and enhances
              the appearance and stability of finished products.
            </li>
            <p className="font-bold">SBR (Styrene-Butadiene Rubber)</p>
            <li>
              SBR is a synthetic rubber noted for its excellent abrasion
              resistance and durability, making it widely applicable in the
              automotive and industrial sectors.
            </li>
          </ul>
        </div>

        <div className="pb-6">
          <h3 className="text-xl font-semibold pb-4 text-[#023B3B]">Resins:</h3>
          <p className="text-lg font-semibold pb-4">
            These Resins are widely used in different Industries
          </p>
          <ul className="list-inside">
            <p className="font-bold">Epoxy Resin</p>
            <li>
              Epoxy resin is a high-performance thermosetting polymer widely
              known for its excellent adhesive properties, mechanical strength,
              and chemical resistance. It is essential in industries like
              electronics, aerospace, and construction.
            </li>
            <p className="font-bold">Vinyl Acetate Monomer (VAM)</p>
            <li>
              Vinyl Acetate Monomer (VAM) is a building block for producing a
              wide variety of polymers and resins, including polyvinyl acetate
              (PVA) and ethylene-vinyl acetate (EVA). VAM imparts flexibility,
              adhesion, and durability to end products.
            </li>
            <p className="font-bold">Diethanolamine (DEA)</p>
            <li>
              Diethanolamine is used as an intermediate in the production of
              resins, surfactants, and detergents. It is also utilized as a
              neutralizing agent in industrial formulations.
            </li>
            <p className="font-bold">Synthetic Barium Sulfate</p>
            <li>
              Synthetic Barium Sulfate is an inert filler commonly used in
              plastics and resins to enhance the final product’s density,
              brightness, and chemical resistance.
            </li>
          </ul>
        </div>
        <h3 className="text-xl font-bold pb-4 text-[#023B3B] ">
          Uses of Pigments and Dyes
        </h3>
        <ul className="list-disc list-inside space-y-4 pb-4">
          <li>Automotive</li>
          <li>Construction</li>
          <li>Electronics</li>
          <li>Medical</li>
          <li>Packaging</li>
          <li>Textile</li>
        </ul>
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

export default PolymersAndResins;
