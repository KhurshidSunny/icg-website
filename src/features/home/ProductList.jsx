import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ProductCards() {
  const products = [
    { id: "CAS 31570-04-4", name: "Product 1", img: "./product1.png" },
    { id: "CAS 12345-67-8", name: "Product 2", img: "./product2.png" },
    { id: "CAS 98765-43-2", name: "Product 3", img: "./product3.png" },
    { id: "CAS 56789-01-2", name: "Product 4", img: "./product4.png" },
    { id: "CAS 13579-68-4", name: "Product 5", img: "./product5.png" },
    { id: "CAS 24680-35-7", name: "Product 6", img: "./product6.png" },
    { id: "CAS 11223-44-5", name: "Product 7", img: "./product7.png" },
    { id: "CAS 66789-22-3", name: "Product 8", img: "./product8.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
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
          </div>
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
