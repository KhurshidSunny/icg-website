import { BiRightArrowAlt } from "react-icons/bi";
import ProductList from "../our-company/available-stocks/ProductList";

function ProductFinderHomePage() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10 bg-background-light dark:bg-background-dark">
      {/* Image Container */}
      <div className="relative mb-16">
        <img
          src="./product-finder.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "180px" }}
        />

        {/* Centered Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white dark:text-gray-200 text-lg lg:text-3xl font-bold">
            What are you looking for?
          </h1>
        </div>
      </div>

      {/* Product List */}
      <ProductList />
    </div>
  );
}

export default ProductFinderHomePage;
