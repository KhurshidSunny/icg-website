import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";

function HinderedAminLightStabilizers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(10);
  }, [page, limit]);
  const { data, isLoading, error } = useQuery({
    queryKey: ["hals", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=hals`,
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
          className="relative m-auto h-[419px] bg-cover bg-bottom"
          style={{ backgroundImage: `url('/assets/hoc.png')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white">
              {" "}
              HINDERED AMINE LIGHT STABILIZERS (HALS)
            </h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose ">
          {/* <div className="pt-8 pb-6">
          <p className="pt-6">
            Hindered Amine Light Stabilizers (HALS) are compounds that protect
            polymers from UV radiation by scavenging free radicals generated
            during photooxidation, thereby preventing polymer degradation. HALS
            are crucial in inks, coatings, and adhesives for providing UV
            stability, enhancing durability, and ensuring the longevity of these
            materials in various applications.
          </p>
        </div> */}
          <div className="py-16">
            <h3 className="text-2xl font-semibold pb-4 text-[#023B3B] dark:text-white">
              Hindered Amine Light Stabilizers (HALS)
            </h3>
            <p className="dark:text-gray-300">
              Although not technically UV absorbers, HALS play a complementary
              role by scavenging free radicals formed during UV exposure, thus
              preventing further degradation of materials.{" "}
              <span className="font-bold">Omniquan LS 944</span> is a high
              molecular weight HALS that is effective in polyolefin applications
              such as agricultural films, outdoor furniture, and other plastic
              products. It provides long-lasting UV protection and reduces
              photooxidation. <span className="font-bold">Omniquan LS 770</span>{" "}
              is a well-known HALS product, it is highly effective in preventing
              the degradation of plastics and coatings exposed to UV radiation. It
              is commonly used in polyolefins, polyurethanes, and styrene.
            </p>
            <h3 className="text-xl font-semibold p-4 text-[#023B3B] dark:text-white">
              Key benifits
            </h3>
            <ol className="pl-4 list-decimal dark:text-gray-300">
              <li>Protection from UV Degradation</li>
              <li>Enhancing Product Lifespan</li>
              <li>Preserving Color and Appearance</li>
              <li>Improving Stability</li>
            </ol>
            <h3 className="text-xl font-semibold p-4 text-[#023B3B] dark:text-white">
              Key Industries
            </h3>
            <ol className="pl-4 list-decimal dark:text-gray-300">
              <li>Agriculture</li>
              <li>Packaging</li>
              <li>Furniture</li>
              <li>Automotive</li>
              <li>Coatings</li>
              <li>Textiles</li>
              <li>Construction</li>
              <li>Sports & Recreation</li>
            </ol>
          </div>
        </div>

        {/* Products */}
        <div className="px-20 pb-10">
          <div className="flex justify-between pt-10 pb-10">
            <h3 className="text-3xl font-bold text-[#8AA823] dark:text-white">Products</h3>
            <button
              className="flex justify-around items-center border-[2px] border-[#8AA823] w-[138px] h-[47px] rounded dark:text-[#8AA823]"
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
                <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm text-center dark:bg-gray-800 dark:border-gray-700">
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">{product.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{product.cas_no}</p>
                </div>
              </a>
            ))}
          </div>

          {data?.products?.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <p className="text-2xl font-semibold dark:text-gray-300">No Products Found</p>
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

export default HinderedAminLightStabilizers;
