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
            Oxidation is common in polymers exposed to heat, light, oxygen, or
            mechanical stress. Without stabilization, this can lead to serious
            issues such as brittleness, discoloration, loss of mechanical
            properties, and eventually, complete material failure. Antioxidants
            are crucial additives used to protect polymers from degradation due
            to oxidative processes.
            <br />
            Antioxidants play a vital role in prolonging the life of polymer
            products by preventing or minimizing these oxidative reactions.
            Antioxidants work by neutralizing the harmful effects of oxidation.
            The oxidative degradation process involves the formation of free
            radicals—highly reactive molecules that propagate chain reactions,
            breaking down polymer chains.
            <br />
            Antioxidants used in polymers are broadly classified into
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold pb-4 text-[#023B3B]">
            Types of Antioxidants
          </h3>
          <div>
            <p>1.1 Primary Antioxidants (Radical Scavengers)</p>
            <p>1.2 Secondary Antioxidants (Peroxide Decomposers).</p>
          </div>

          <h4 className="text-2xl font-medium pt-4 pb-4 text-[#023B3B]">
            1.1 Primary Antioxidants (Radical Scavengers):
          </h4>
          <p className="">
            are designed to neutralize free radicals and interrupt the oxidation
            process. These are the first line of defense and are effective
            during the early stages of oxidation. Primary antioxidants usually
            consist of hindered phenols, aromatic amines, and metal
            deactivators. Common examples of primary antioxidants include:
          </p>
          <h4 className="text-xl font-medium pt-4 pb-4">Sub-types</h4>
          <h4 className="text-xl font-medium pt-4 pb-4 ">
            1.1 Primary Antioxidants (Radical Scavengers):
          </h4>
          <ul className="mx-auto p-6 list-disc list-inside space-y-4">
            <li>
              <span className="font-bold">Hindered Phenols:</span> Hindered
              phenolic antioxidants enhance polymer durability by offering
              hydrolysis and extraction resistance, preventing yellowing from
              heat and UV exposure. They neutralize free radicals, stopping
              oxidative degradation, and are effective at low concentrations
              (0.01-0.1%). Commonly used in plastics, elastomers, coatings, and
              adhesives, these antioxidants ensure long-term stability with low
              volatility and non-staining properties.
            </li>
            <li>
              <span className="font-bold">Omniquan AN 1076:</span> A versatile
              antioxidant that plays a crucial role in extending the service
              life and performance of various polymers, including PE, PP, PVC,
              PS, ABS, PC, nylon, and TPE. Its excellent thermal stability and
              oxidation resistance make it a preferred choice across multiple
              industries, ensuring the durability and quality of finished
              products.
            </li>
            <li>
              <span className="font-bold">Aromatic Amines:</span> These
              antioxidants are especially effective at high temperatures. They
              act by reacting with oxygen-centered radicals and hydroperoxides
              to prevent further oxidative damage.
            </li>
            <li>
              <span className="font-bold">Omniquan AN 5057:</span> A primary
              aromatic amine antioxidant that is used for polyol and rubber
              stabilization.
            </li>
            <li>
              <span className="font-bold">Metal Deactivators:</span> Metal
              deactivators are characterized by their low melting point and ease
              of use, providing good stability and strong anti-aging properties.
              They effectively deactivate metal ion activity, preventing the
              acceleration of polyolefin degradation, making them ideal for
              applications in PP/PE wire and cable, as well as filled modified
              materials.
            </li>
          </ul>
          <h4 className="text-xl font-medium pt-4 pb-4 ">
            1.2 Secondary Antioxidants (Peroxide Decomposers):
          </h4>
          <ul className="mx-auto p-6 list-disc list-inside space-y-4">
            <li>
              <span className="font-bold">Phosphites/Phosphonites:</span> These
              compounds react with hydroperoxides, converting them into stable
              alcohols and thus inhibiting further degradation. Phosphites are
              often used in PVC and polycarbonate (PC) to enhance heat
              stability.
            </li>
            <li>
              <span className="font-bold">Thioesters:</span> These sulfur-based
              compounds are particularly effective in systems requiring
              high-temperature stabilization. They decompose hydroperoxides by
              converting them into non-reactive species, protecting the polymer
              from oxidative breakdown.
            </li>
            <li>
              <span className="font-bold">Thiosynergists:</span> Provide
              superior long-term heat resistance compared to DSTDP/DLTDP and are
              odorless. They are ideal for long-term stabilization in PP/PE,
              including filler-modified PP/PE, wire, and cable applications.
            </li>
            <li>
              <span className="font-bold">Antioxidant Blends:</span> These offer
              excellent processing, color, and heat stability with no residual
              impurities, available in dust-free granule form. Typically
              available in granule form, they are easy to handle and reduce
              dust, making them safer and cleaner to work with in industrial
              environments. They are used in polyolefins, PC and PC alloys,
              nylon, styrenics, elastomers, and POM for enhanced durability.
            </li>
          </ul>

          <h4 className="text-xl font-medium pt-8 pb-4">
            Different types of secondary antioxidants includes:
          </h4>
          <p>
            Omniquan AN 1010 , Omniquan AN 168, Omniquan AN 126, Omniquan AN
            1035 , Omniquan AN 1024, Omniquan AN 800 , Omniquan AN 802.
          </p>
          <h3 className="text-xl font-semibold p-4 text-[#023B3B]">
            Key benifits
          </h3>
          <ul className="pl-4 list-disc list-inside space-y-4">
            <li> Enhanced material longevity.</li>
            <li> Improved processing stability.</li>
            <li> Protection from heat and light-induced degradation.</li>
          </ul>
          <h3 className="text-xl font-semibold p-4 text-[#023B3B]">
            Key Industries
          </h3>
          <ul className="pl-4 list-disc list-inside space-y-4">
            <li>Automotive</li>
            <li>Packaging</li>
            <li>Electronics</li>
            <li>Construction</li>
            <li>Textiles</li>
            <li>Consumer Goods</li>
            <li>Industrial Equipment</li>
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

export default Antioxidant;
