import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCards() {
  const products = [
    {
      id: "CAS-31570-04-4",
      name: "Omniquan AN 168 ",
      img: "./product1.png",
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
      img: "./product2.png",
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
      img: "./product3.png",
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
      name: "Omniquan AN 565 ",
      img: "./product4.png",
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
      img: "./product5.png",
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
      img: "./product6.png",
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
      id: "CAS -11223-44-5",
      name: "Omniquan AN 168 ",
      img: "./product7.png",
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
      img: "./product8.png",
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/available-stocks/${product.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{product.id}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Left Arrow */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaArrowLeft className="text-gray-600" />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-[#8AA823] rounded-full">
            1
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
            2
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
            3
          </button>
        </div>

        {/* Right Arrow */}
        <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
          <FaArrowRight className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default ProductCards;
