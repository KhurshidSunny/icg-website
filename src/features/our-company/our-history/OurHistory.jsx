function OurHistory() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* About ICG Section */}
      <div className="relative mb-16">
        {/* Image */}
        <img
          src="./history-image.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "427.22px" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        {/* Text */}
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          Our History
        </h1>
      </div>

      {/* record */}
      <div className="flex flex-col my-24 items-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl text-[#8AA823]">ICG Chemical Milestones:</h1>
          <h1 className="text-2xl">
            A Journey of Innovation and Sustainability
          </h1>
        </div>

        <div className="rounded-lg ">
          <img src="Story.png" alt="record-image" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default OurHistory;
