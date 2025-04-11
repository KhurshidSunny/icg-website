/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../../../axios"; // Adjust path to your axios config
import RequestFileForm from "./RequestFileForm"; // Import the RequestFileForm component

// Fetch product details based on the productId using axiosInstance
const fetchProductDetails = async ({ queryKey }) => {
  const [, productId] = queryKey;
  const apiUrl = import.meta.env.VITE_TARGETED_URL;

  if (!apiUrl) {
    throw new Error("VITE_TARGETED_URL is not defined in .env");
  }

  const url = `${apiUrl}/products/${productId}`;
  console.log("Fetching product from:", url); // Debug URL

  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    console.log("Product Details Response:", response.data); // Debug response
    return response.data;
  } catch (error) {
    console.error("Fetch Product Error:", error.response?.data || error.message);
    throw new Error(`Failed to fetch product: ${error.response?.statusText || error.message}`);
  }
};

const ProductDetails = () => {
  const { productId } = useParams(); // Get productId from URL
  const [isFormOpen, setFormOpen] = useState(false); // Manage modal state

  const { data, error, isLoading } = useQuery({
    queryKey: ["productDetails", productId],
    queryFn: fetchProductDetails,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>
       ...Loading
    </div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const product = data?.data?.product; // Adjust based on your API response structure

  // Function to handle TDS button click
  const handleTDSDownload = () => {
    setFormOpen(true); // Open the form modal
  };

  // console.log(product)

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10 mb-8">
      {/* Product Banner */}
      <div className="relative mb-16">
        <img
          src={product?.banner}
          alt={product?.name}
          className="w-full rounded-xl object-cover object-center h-64 sm:h-96"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold inset-0 flex items-center justify-center">
          {product?.name}
        </h1>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start">
        <h1 className="text-[#023B3B] text-xl font-bold mb-4">
          About {product?.name} – CAS: {product?.cas_number}
        </h1>
        <h3 className="text-[#023B3B] font-bold mb-4">{product?.usage}</h3>
        <p className="text-justify mb-8">{product?.description}</p>

        <div className="bg-[#F2F2F2] w-full rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 px-4">Product Details</h1>
          <ul className="list-disc list-inside space-y-4 marker:text-[#8AA823] px-4">
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">CAS Number</h3>
              <p className="text-gray-700">{product?.cas_number}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Chemical Name</h3>
              <p className="text-gray-700">{product?.chemical_name}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Molecular Formula</h3>
              <p className="text-gray-700">{product?.molecular_formula}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Molecular Weight (g/mol)</h3>
              <p className="text-gray-700">{product?.molecular_weight}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Product Form</h3>
              <p className="text-gray-700">{product?.product_form}</p>
            </li>
          </ul>
        </div>

        {/* Download Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          {product?.MSDS && (
            <a
              href={product?.MSDS}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#023B3B] text-white px-24 py-2 text-lg rounded-lg w-full sm:w-auto text-center"
            >
              Download MSDS
            </a>
          )}
          {product?.TDS && (
            <button
              onClick={handleTDSDownload}
              className="bg-[#023B3B] text-white px-24 py-2 text-lg rounded-lg w-full sm:w-auto text-center"
            >
              Download TDS
            </button>
          )}
        </div>
      </div>

      {/* Render RequestFileForm as a Modal */}
      {isFormOpen && (
        <RequestFileForm product={product} onClose={() => setFormOpen(false)} />
      )}
    </div>
  );
};

export default ProductDetails;