function IcgManagement() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      {/* About ICG Section */}
      <div className="relative mb-16">
        <img
          src="./about-us-main.png"
          alt="About ICG"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1235.96px", height: "427.22px" }}
        />
        <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
          About ICG
        </h1>
      </div>

      {/* CEO Message Section */}
      <section
        className="flex flex-col lg:flex-row w-[1235.96px] mx-auto items-start gap-8"
        style={{ width: "1235.96px" }}
      >
        {/* Left Box */}
        <div
          className="flex flex-col items-center w-1/3"
          style={{ width: "30%" }}
        >
          <div className="rounded-full overflow-hidden border-[1px] border-[#8AA823]">
            <img
              src="./ceo.png"
              alt="CEO"
              className="object-cover w-full h-full"
              style={{ width: "250px", height: "250px" }}
            />
          </div>

          <h3 className="mt-4 text-lg lg:text-xl font-bold text-[#8AA823]">
            Mr. Ishfaq Ahmed
          </h3>
        </div>

        {/* Right Box */}
        <div className="w-2/3 space-y-6 text-justify" style={{ width: "59%" }}>
          <h2
            className="text-2xl lg:text-3xl font-bold text-teal-900"
            style={{ width: "812px" }}
          >
            <span className="text-[#8AA823]">CEO</span> Message
          </h2>
          <p className="text-gray-700 text-base leading-7 text-justify">
            At ICG Chemicals, my vision is to lead in the development and
            delivery of high-quality chemical solutions that meet the diverse
            needs of industries across the globe. My commitment to excellence,
            innovation, and sustainability drives us to continually evolve,
            ensuring that we provide safe, effective, and eco-friendly solutions
            that empower our clients to excel in their respective fields.
          </p>
          <p className="text-gray-700 text-base leading-7">
            As we move forward, we are dedicated to not only advancing our
            product offerings but also fostering a collaborative environment
            that promotes growth, inclusivity, and social responsibility.
            Together, with our customers and partners, we are shaping a future
            where chemistry contributes positively to a sustainable world.
          </p>
        </div>
      </section>
    </div>
  );
}

export default IcgManagement;
