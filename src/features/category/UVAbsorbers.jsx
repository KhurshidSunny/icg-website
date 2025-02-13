import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function UVAbsorbers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["uvabsorbers", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=uvabsorbers`,
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
          backgroundImage: `url("../../../assets/uvab.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          UV ABSORBERS
        </h1>
      </div>

      <div>
        {/* Description */}
        <h2 className="text-2xl font-bold mb-4 text-[#023B3B]">UV-Absorbers</h2>
        <p className="font-normal text-[#000000] mb-6">
          UV absorbers are specialized compounds designed to absorb harmful
          ultraviolet (UV) radiation from sunlight or artificial light sources.
          They help protect materials, products, and surfaces from the
          detrimental effects of UV rays, which can cause degradation,
          discoloration, and loss of mechanical properties. UV absorbers are
          widely used in industries such as plastics, coatings, textiles, and
          personal care to ensure the longevity and stability of products.
        </p>

        {/* Types of UV Absorbers */}
        <h3 className="text-xl font-bold mb-2 text-[#023B3B] ">
          Types of UV Absorbers:
        </h3>
        <ol className="list-decimal space-y-4 pl-4">
          <li className="p-2">
            <span className="font-bold">Benzotriazoles:</span> These are some of
            the most effective and widely used UV absorbers, particularly in
            plastic and coatings applications. They offer excellent UV
            protection and high thermal stability, making them suitable for
            outdoor applications.
            <span className="font-bold">Omniquan UV 326</span> is a
            benzotriazole UV absorber that offers broad-spectrum UV protection,
            ideal for plastic applications.{" "}
            <span className="font-bold">Omniqaun UV 1577</span> is used in
            automotive coatings, providing excellent thermal stability and UV
            resistance.{" "}
          </li>
          <li className="p-2">
            <span className="font-bold"> Benzophenones:</span> Benzophenones
            work by absorbing UV radiation and dissipating it as heat. They are
            commonly used in plastics, coatings, and adhesives to protect
            against UV light-induced degradation.{" "}
            <span className="font-bold">Omniquan BP 12</span> belongs to the
            benzophenone class of UV absorbers, known for their ability to
            absorb UVB radiation in the wavelength range of 280-320 nm. This
            class of absorbers converts UV radiation into harmless heat,
            preventing UV light from causing chemical degradation in the
            materials it protects.
          </li>
          <li className="p-2">
            <span className="font-bold">Triazines:</span> Known for their high
            performance in stabilizing polymers and coatings, triazines are
            especially effective at absorbing UVB rays. They are used in
            automotive and industrial coatings to enhance durability.{" "}
            <span className="font-bold">Omniquan UV 1577</span> is a
            highperformance triazine UV absorber that is widely used in
            automotive and industrial coatings. It provides excellent stability
            at high temperatures and efficient UV protection.{" "}
            <span className="font-bold">Omniquan UV 1600</span> is a
            triazine-based UV absorber that is specifically designed for
            applications requiring long-term outdoor stability, such as
            automotive clear coats and industrial finishes. It is known for its
            exceptional durability
          </li>
        </ol>
        <h3 className="text-xl font-semibold p-4 text-[#023B3B]">
          Key benifits
        </h3>
        <ol className="pl-4 list-decimal space-y-4">
          <li className="py-2"> Protection from UV Degradation</li>
          <li className="py-2"> Enhancing Product Lifespan</li>
          <li className="py-2"> Preserving Color and Appearance</li>
          <li className="py-2"> Improving Stability</li>
        </ol>
        <h3 className="text-xl font-semibold p-4 text-[#023B3B]">
          Key Industries
        </h3>
        <ul className=" list-decimal list-inside space-y-4">
          <li className="py-2">Automotive</li>
          <li className="py-2">Textiles</li>
          <li className="py-2">Plastics</li>
          <li className="py-2">Coatings</li>
          <li className="py-2">Agriculture</li>
          <li className="py-2">Personal Care</li>
          <li className="py-2">Aerospace</li>
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
    </div>
  );
}

export default UVAbsorbers;
