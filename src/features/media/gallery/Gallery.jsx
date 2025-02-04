import React from "react";

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("/assets/MediaNewsImages/gallery/gallery-cover.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          Gallery
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
        <img
          src="./assets/MediaNewsImages/gallery/img1.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img2.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img3.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img4.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img5.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img6.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img7.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
        <img
          src="./assets/MediaNewsImages/gallery/img8.png"
          alt="Gallery Images"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* <div className="mt-10 text-center">
        <button
          to="/available-stocks"
          className="mx-auto  px-4 py-2 bg-[#8AA823] text-white font-bold rounded cursor-pointer"
        >
          Sell All Pictures
        </button>
      </div> */}
    </div>
  );
}
