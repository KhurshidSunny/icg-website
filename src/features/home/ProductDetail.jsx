import { useState } from "react";
import { useParams } from "react-router-dom";
import RequestFileForm from "./RequestFileForm";

function ProductDetail() {
  const { productId } = useParams();

  const products = [
    {
      id: "CAS-31570-04-4",
      name: "Omniquan AN 168 ",
      img: "../product1.png",
      usage: "Versatile Antioxidant for Enhanced Polymer Stability",
      description:
        "Our advanced antioxidant is specially designed to boost thermal stability and overall performance in polymer-based products. Engineered for versatility, this solution excels across a wide range of industries—automotive, electronics, paints and coatings, and medical and pharmaceutical. With its superior ability to resist oxidative degradation, this antioxidant ensures polymers maintain their integrity and functionality under demanding conditions, extending product life and enhancing reliability.",
      casNumber: "31570-04-4",
      chemicalName: "Xylyl dibutylbenzofu",
      molecularFormula: "C24H70O2",
      molecularWeight: 350.5,
      productForm: "White Powder",
    },
    {
      id: "CAS-12345-67-8",
      name: "Omniquan AN 136 ",
      img: "../product2.png",
      usage: "Innovative Stabilizer for Polymer Durability",
      description:
        "This cutting-edge stabilizer is crafted to enhance durability and performance in polymers under extreme conditions. With applications in automotive, aerospace, and industrial sectors, it delivers outstanding protection against environmental and thermal degradation.",
      casNumber: "12345-67-8",
      chemicalName: "Phenolic Dibenzofuran",
      molecularFormula: "C20H12O2",
      molecularWeight: 300.4,
      productForm: "Crystalline Solid",
    },
    {
      id: "CAS-98765-43-2",
      name: "Omniquan AN 245",
      img: "../product3.png",
      usage: "Advanced UV Absorber for Long-Lasting Performance",
      description:
        "A highly effective UV absorber designed to shield polymers and coatings from harmful ultraviolet radiation. Ensures long-lasting protection and stability for outdoor applications such as construction materials and automotive coatings.",
      casNumber: "98765-43-2",
      chemicalName: "Benzotriazole Derivative",
      molecularFormula: "C13H10N3",
      molecularWeight: 211.24,
      productForm: "Yellowish Granules",
    },
    {
      id: "CAS-56789-01-2",
      name: "Omniquan AN 565",
      img: "../product4.png",
      usage: "High-Performance Flame Retardant for Enhanced Safety",
      description:
        "Our premium flame retardant provides superior thermal resistance and fire safety in a range of polymer systems. Suitable for electronics, automotive, and building materials, it combines efficiency with environmental compliance.",
      casNumber: "56789-01-2",
      chemicalName: "Phosphoramide",
      molecularFormula: "C3H9O4P",
      molecularWeight: 141.08,
      productForm: "Fine Powder",
    },
    {
      id: "CAS-13579-68-4",
      name: "Omniquan AN 168 ",
      img: "../product5.png",
      usage: "Efficient Catalyst for Chemical Synthesis",
      description:
        "Designed for high precision in chemical synthesis, this catalyst accelerates reaction rates and enhances yields. Widely used in pharmaceutical and agrochemical industries for efficient production processes.",
      casNumber: "13579-68-4",
      chemicalName: "Transition Metal Complex",
      molecularFormula: "C10H20Cl2Ni",
      molecularWeight: 246.88,
      productForm: "Green Crystals",
    },
    {
      id: "CAS-24680-35-7",
      name: "Omniquan AN 168 ",
      img: "../product6.png",
      usage: "Eco-Friendly Plasticizer for Flexible Polymers",
      description:
        "This environmentally friendly plasticizer enhances the flexibility and durability of polymer products, making it ideal for consumer goods, packaging, and medical devices.",
      casNumber: "24680-35-7",
      chemicalName: "Diethylhexyl Adipate",
      molecularFormula: "C22H42O4",
      molecularWeight: 370.57,
      productForm: "Viscous Liquid",
    },
    {
      id: "CAS-11223-44-5",
      name: "Omniquan AN 168 ",
      img: "../product7.png",
      usage: "Premium Antioxidant for High-Temperature Applications",
      description:
        "An exceptional antioxidant that ensures polymer stability under high-temperature conditions. Suitable for applications in industrial machinery and automotive components, it provides unparalleled thermal resistance.",
      casNumber: "11223-44-5",
      chemicalName: "Phenolic Resin Compound",
      molecularFormula: "C15H24O2",
      molecularWeight: 236.35,
      productForm: "Brownish Pellets",
    },
    {
      id: "CAS-66789-22-3",
      name: "Omniquan AN 168 ",
      img: "../product8.png",
      usage: "Specialized Stabilizer for Enhanced Chemical Resistance",
      description:
        "A unique stabilizer engineered to provide exceptional chemical resistance and longevity to polymer materials. It is widely applied in industrial coatings and advanced composites.",
      casNumber: "66789-22-3",
      chemicalName: "Epoxy Stabilizer",
      molecularFormula: "C21H25O5",
      molecularWeight: 356.43,
      productForm: "Transparent Gel",
    },
  ];

  const [isFormOpen, setFormOpen] = useState(false); // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null); // To pass product details to the form

  const product = products.find((p) => p.id === productId);

  const handleImageClick = () => {
    setSelectedProduct(product); // Pass the clicked product details
    setFormOpen(true); // Open the form modal
  };

  if (!product) {
    return (
      <div className="container mx-auto px-6 lg:px-16 py-10">
        <h1 className="text-2xl font-semibold text-center">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10 mb-8">
      {/* Product Banner */}
      <div className="relative mb-16 cursor-pointer" onClick={handleImageClick}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full rounded-xl object-cover object-center h-64 sm:h-96"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold inset-0 flex items-center justify-center">
          {product.name}
        </h1>
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start">
        <h1 className="text-[#023B3B] text-xl font-bold mb-4">
          About {product.name} – CAS: {product.casNumber}
        </h1>
        <h3 className="text-[#023B3B] font-bold mb-4">{product.usage}</h3>
        <p className="text-justify mb-8">{product.description}</p>

        <div className="bg-[#F2F2F2] w-full rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-6 px-4">Product Details</h1>
          <ul className="list-disc list-inside space-y-4 marker:text-[#8AA823] px-4">
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">CAS Number</h3>
              <p className="text-gray-700">{product.casNumber}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Chemical Name</h3>
              <p className="text-gray-700">{product.chemicalName}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Molecular Formula</h3>
              <p className="text-gray-700">{product.molecularFormula}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Molecular Weight (g/mol)</h3>
              <p className="text-gray-700">{product.molecularWeight}</p>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
              <h3 className="font-bold w-48">Product Form</h3>
              <p className="text-gray-700">{product.productForm}</p>
            </li>
          </ul>
        </div>

        {/* Download Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <button className="bg-[#023B3B] text-white px-24 py-2 text-lg rounded-lg w-full sm:w-auto">
            Download MSDS
          </button>
          <button className="bg-[#023B3B] text-white px-24 py-2 text-lg rounded-lg w-full sm:w-auto">
            Download TDS
          </button>
        </div>
      </div>

      {/* Modal for Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <RequestFileForm
              product={selectedProduct} // Pass product details to form
              onClose={() => setFormOpen(false)} // Close the form
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
