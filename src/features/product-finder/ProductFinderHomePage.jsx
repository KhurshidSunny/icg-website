import ProductList from "../our-company/available-stocks/ProductList";

function ProductFinderHomePage() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10 bg-background-light dark:bg-background-dark">
      {/* Image Container */}

      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: `url('./product-finder.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          What are you looking for?
        </h1>
      </div>

      {/* Product List */}
      <ProductList />
    </div>
  );
}

export default ProductFinderHomePage;
