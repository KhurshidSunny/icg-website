/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function ProductCards() {
//   const products = [
//     {
//       id: "CAS-31570-04-4",
//       name: "Omniquan AN 168 ",
//       img: "./product1.png",
//       usage: "Versatile Antioxidant for Enhanced Polymer Stability",
//       description:
//         "Our advanced antioxidant is specially designed to boost thermal stability and overall performance in polymer-based products. Engineered for versatility, this solution excels across a wide range of industries—automotive, electronics, paints and coatings, and medical and pharmaceutical. With its superior ability to resist oxidative degradation, this antioxidant ensures polymers maintain their integrity and functionality under demanding conditions, extending product life and enhancing reliability.",
//       casNumber: "31570-04-4",
//       chemicalName: "Xylyl dibutylbenzofu",
//       molecularFormula: "C24H70O2",
//       molecularWeight: 350.5,
//       productForm: "White Powder",
//     },
//     {
//       id: "CAS-12345-67-8",
//       name: "Omniquan AN 136 ",
//       img: "./product2.png",
//       usage: "Innovative Stabilizer for Polymer Durability",
//       description:
//         "This cutting-edge stabilizer is crafted to enhance durability and performance in polymers under extreme conditions. With applications in automotive, aerospace, and industrial sectors, it delivers outstanding protection against environmental and thermal degradation.",
//       casNumber: "12345-67-8",
//       chemicalName: "Phenolic Dibenzofuran",
//       molecularFormula: "C20H12O2",
//       molecularWeight: 300.4,
//       productForm: "Crystalline Solid",
//     },
//     {
//       id: "CAS-98765-43-2",
//       name: "Omniquan AN 245",
//       img: "./product3.png",
//       usage: "Advanced UV Absorber for Long-Lasting Performance",
//       description:
//         "A highly effective UV absorber designed to shield polymers and coatings from harmful ultraviolet radiation. Ensures long-lasting protection and stability for outdoor applications such as construction materials and automotive coatings.",
//       casNumber: "98765-43-2",
//       chemicalName: "Benzotriazole Derivative",
//       molecularFormula: "C13H10N3",
//       molecularWeight: 211.24,
//       productForm: "Yellowish Granules",
//     },
//     {
//       id: "CAS-56789-01-2",
//       name: "Omniquan AN 565 ",
//       img: "./product4.png",
//       usage: "High-Performance Flame Retardant for Enhanced Safety",
//       description:
//         "Our premium flame retardant provides superior thermal resistance and fire safety in a range of polymer systems. Suitable for electronics, automotive, and building materials, it combines efficiency with environmental compliance.",
//       casNumber: "56789-01-2",
//       chemicalName: "Phosphoramide",
//       molecularFormula: "C3H9O4P",
//       molecularWeight: 141.08,
//       productForm: "Fine Powder",
//     },
//     {
//       id: "CAS-13579-68-4",
//       name: "Omniquan AN 168 ",
//       img: "./product5.png",
//       usage: "Efficient Catalyst for Chemical Synthesis",
//       description:
//         "Designed for high precision in chemical synthesis, this catalyst accelerates reaction rates and enhances yields. Widely used in pharmaceutical and agrochemical industries for efficient production processes.",
//       casNumber: "13579-68-4",
//       chemicalName: "Transition Metal Complex",
//       molecularFormula: "C10H20Cl2Ni",
//       molecularWeight: 246.88,
//       productForm: "Green Crystals",
//     },
//     {
//       id: "CAS-24680-35-7",
//       name: "Omniquan AN 168 ",
//       img: "./product6.png",
//       usage: "Eco-Friendly Plasticizer for Flexible Polymers",
//       description:
//         "This environmentally friendly plasticizer enhances the flexibility and durability of polymer products, making it ideal for consumer goods, packaging, and medical devices.",
//       casNumber: "24680-35-7",
//       chemicalName: "Diethylhexyl Adipate",
//       molecularFormula: "C22H42O4",
//       molecularWeight: 370.57,
//       productForm: "Viscous Liquid",
//     },
//     {
//       id: "CAS -11223-44-5",
//       name: "Omniquan AN 168 ",
//       img: "./product7.png",
//       usage: "Premium Antioxidant for High-Temperature Applications",
//       description:
//         "An exceptional antioxidant that ensures polymer stability under high-temperature conditions. Suitable for applications in industrial machinery and automotive components, it provides unparalleled thermal resistance.",
//       casNumber: "11223-44-5",
//       chemicalName: "Phenolic Resin Compound",
//       molecularFormula: "C15H24O2",
//       molecularWeight: 236.35,
//       productForm: "Brownish Pellets",
//     },
//     {
//       id: "CAS-66789-22-3",
//       name: "Omniquan AN 168 ",
//       img: "./product8.png",
//       usage: "Specialized Stabilizer for Enhanced Chemical Resistance",
//       description:
//         "A unique stabilizer engineered to provide exceptional chemical resistance and longevity to polymer materials. It is widely applied in industrial coatings and advanced composites.",
//       casNumber: "66789-22-3",
//       chemicalName: "Epoxy Stabilizer",
//       molecularFormula: "C21H25O5",
//       molecularWeight: 356.43,
//       productForm: "Transparent Gel",
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product, index) => (
//           <Link
//             key={index}
//             to={`/available-stocks/${product.id}`}
//             className="bg-white rounded-lg shadow-md  cursor-pointer     transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
//           >
//             <div className="relative h-48 overflow-hidden rounded-t-lg ">
//               <img
//                 src={product.img}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {product.name}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">{product.id}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex items-center justify-center mt-8 space-x-4">
//         {/* Left Arrow */}
//         <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
//           <FaArrowLeft className="text-gray-600" />
//         </button>

//         {/* Page Numbers */}
//         <div className="flex items-center space-x-2">
//           <button className="px-4 py-2 text-sm font-semibold text-white bg-[#8AA823] rounded-full">
//             1
//           </button>
//           <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
//             2
//           </button>
//           <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
//             3
//           </button>
//         </div>

//         {/* Right Arrow */}
//         <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
//           <FaArrowRight className="text-gray-600" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCards;


import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Function to fetch filtered products from the API
const fetchProducts = async ({ queryKey }) => {
  const [, { industry, category, search, market, page, limit }] = queryKey;

  const queryParams = {};
  if (industry) queryParams.industryName = industry;
  if (category) queryParams.category = category;
  if (search) queryParams.search = search;
  if (market) queryParams.market = market;
  if (page) queryParams.page = page;
  if (limit) queryParams.limit = limit;

  const queryString = new URLSearchParams(queryParams).toString();
  const url = `http://208.109.240.175:3000/api/external/products?${queryString}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

const ProductList = ({ industry, category, search, market, sortOrder }) => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["products", { industry, category, search, market, page, limit }],
    queryFn: fetchProducts,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { products, totalPages } = data?.data || {};

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product._id}
              to={`/available-stocks/${product._id}`}  // Link to ProductDetails page with product ID
              className="border rounded-lg shadow-md bg-white"
            >
              <img
                src={product.banner}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4 text-center">{product.name}</h3>
              <p className="text-sm text-gray-600 text-center">{product.chemical_name}</p>

              <div className="mt-4 flex justify-between mx-6 mb-4">
                {product.MSDS && (
                  <a
                    href={product.MSDS}
                    className="text-sm text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSDS
                  </a>
                )}
                <br />
                {product.TDS && (
                  <a
                    href={product.TDS}
                    className="text-sm text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TDS
                  </a>
                )}
              </div>
            </Link>
          ))
        ) : (
          <div>No products available.</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-8 space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1 || isFetching}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full border ${
                  page === index + 1
                    ? "text-white bg-[#8AA823]"
                    : "text-gray-600 bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setPage(index + 1)}
                disabled={isFetching}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages || isFetching}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;

