import ProductList from "../our-company/available-stocks/ProductList";

function ProductFinderHomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        {/* Image Container */}
        <div
          className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          style={{
            backgroundImage: `url('./product-finder.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 rounded-xl"></div>
          <h1 className="relative z-10 text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide animate-fade-in">
            What are you looking for?
          </h1>
        </div>

        {/* Product List */}
        <div className="mt-8">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default ProductFinderHomePage;
