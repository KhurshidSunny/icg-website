import ProductList from "./ProductList";

function AvailableStock() {
  return (
 <>
 <div className="dark:bg-background-dark">
 <div className="container mx-auto px-6 lg:px-16 py-10 dark:bg-gray-800">
    {/* About ICG Section */}
    <div className="relative mb-16">
      {/* Image */}
      <img
        src="./availablestock.png"
        alt="About ICG"
        className="w-full rounded-xl object-cover object-center h-full"
        style={{ width: "1235.96px", height: "427.22px" }}
      />
  
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
  
      {/* Text */}
      <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
        Available Stock
      </h1>
    </div>
  
    {/* Products */}
    <div className="dark:text-white">
      <ProductList />
    </div>
  </div>
 </div>
 </>
  
  );
}

export default AvailableStock;
