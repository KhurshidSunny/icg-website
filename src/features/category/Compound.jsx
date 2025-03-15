import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
import { useSearchParams } from "react-router-dom";
function Compound() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 8);

  useEffect(() => {
    if (page < 1 || isNaN(page)) setPage(1);
    if (limit < 1 || isNaN(limit)) setLimit(8);
  }, [page, limit]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["compound", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/products/?page=${page}&limit=${limit}&categoryName=Compounds`,
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
          style={{ backgroundImage: `url('/assets/mast.png')` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-[#010101] opacity-20 rounded-xl"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-4xl text-white"> Compounds</h3>
          </div>
        </div>

        {/* Below Content */}
        <div className="pt-8 leading-loose">
          <div className="pt-8 pb-6">
            <h3 className="text-3xl font-bold pb-4 text-[#023B3B] dark:text-white">
              Compounds
            </h3>
            <p className="pt-6 dark:text-gray-300">
              Compounds are versatile materials used across industries to
              enhance product performance, improve processability, and meet
              specific functional requirements. At ICG Specialty Chemicals, we
              offer a comprehensive range of compounds that deliver exceptional
              quality, consistency, and functionality. Our compounds are
              tailored to meet the stringent demands of key industries such as
              automotive, construction, electronics, and chemicals
              manufacturing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              Key Compound Products
            </h3>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              1. AMP 95 (Amino Methyl Propanol)
            </h3>
            <p className=" dark:text-gray-300">
              AMP 95 is a multifunctional amine compound widely used as a
              neutralizing agent, dispersing agent, and pH stabilizer in various
              applications. Known for its excellent stability and compatibility
              with a range of materials, AMP 95 plays a vital role in the
              formulation of coatings, adhesives, and personal care products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              2. Glycerin
            </h3>
            <p className=" dark:text-gray-300">
              Glycerin is a versatile, colorless, odorless liquid used
              extensively in personal care, pharmaceuticals, and food industries
              due to its moisturizing and emollient properties. As a humectant,
              glycerin helps retain moisture in formulations, enhancing product
              texture and stability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              3. Ethanol 96% and Ethanol 99.9%
            </h3>
            <p className=" dark:text-gray-300">
              Ethanol is a highly pure alcohol used in a broad spectrum of
              industries including pharmaceuticals, cosmetics, and chemicals.
              Ethanol 96% and Ethanol 99.9% are ideal for high-purity
              applications, ensuring precision in formulations requiring exact
              alcohol content.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              4. MDI (Methylene Diphenyl Diisocyanate)
            </h3>
            <p className=" dark:text-gray-300">
              MDI is a key component in polyurethane production, widely used in
              the creation of rigid foams, elastomers, and adhesives. MDI offers
              excellent thermal stability and mechanical properties, making it
              suitable for high-performance applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              5. TDI (Toluene Diisocyanate)
            </h3>
            <p className=" dark:text-gray-300">
              TDI is another critical compound in the production of flexible
              polyurethane foams, used extensively in furniture, automotive
              seating, and mattresses. TDI offers excellent flexibility and
              cushioning properties, ensuring comfort and durability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              6. Methylene Chloride
            </h3>
            <p className=" dark:text-gray-300">
              Methylene Chloride is a powerful solvent with a wide range of
              applications, including paint stripping, pharmaceutical
              production, and chemical processing. Known for its low boiling
              point, it allows for efficient evaporation and easy removal in
              solvent-based processes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              7. XLPE (Cross-Linked Polyethylene)
            </h3>
            <p className=" dark:text-gray-300">
              XLPE is a durable, thermoset plastic known for its superior
              insulation and chemical resistance properties. Cross-linking
              increases its strength, making it ideal for demanding applications
              where thermal, electrical, and mechanical properties are
              essential.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold pb-4 text-[#023B3B] dark:text-white">
              8. HFFR (Halogen-Free Flame Retardant Compounds)
            </h3>
            <p className=" dark:text-gray-300">
              HFFR Compounds are specially formulated to provide flame
              retardancy without the use of halogenated chemicals, making them
              environmentally friendly while ensuring high safety standards.
              These compounds are ideal for applications requiring strict fire
              safety regulations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#023B3B] dark:text-white">
              Key Industries:
            </h3>
            <ul className="list-disc list-inside space-y-4 py-4 dark:text-gray-300">
              <li>
                <span className="font-bold">Automotive: </span>
                Compounds like MDI, TDI, and XLPE are integral in manufacturing
                durable, lightweight, and high-performance components for
                vehicles.
              </li>
              <li>
                <span className="font-bold">Construction:</span>
                Compounds such as MDI and HFFR play a key role in insulation
                materials, ensuring fire safety and thermal efficiency in
                buildings.
              </li>
              <li>
                <span className="font-bold">Electronics:</span>
                HFFR and XLPE compounds are critical in producing safe,
                flameretardant wire and cable insulation for electronics and
                infrastructure.
              </li>
              <li>
                <span className="font-bold">Pharmaceuticals:</span>
                Ethanol and Methylene Chloride are crucial in drug
                manufacturing, serving as solvents and extraction agents for
                various applications.
              </li>
              <li>
                <span className="font-bold">Consumer Goods:</span>
                Glycerin and Ethanol find extensive use in personal care
                products, cosmetics, and household items.
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="px-20 pb-10">
            <div className="flex justify-between pt-10 pb-10">
              <h3 className="text-3xl font-bold text-[#8AA823]">Products</h3>
              <a
                href={`all-products/Compounds`}
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
    </div>
  );
}

export default Compound;
