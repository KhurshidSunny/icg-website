function IcgManagement() {
  return (
    <div className="min-h-screen dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-10">
        {/* Hero Section */}
        <div
          className="relative mb-12 w-full h-[300px] sm:h-[400px] lg:h-[427.22px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("../../../assets/icg-management.png")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <h1 className="relative z-10 text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            ICG Management
          </h1>
        </div>

        {/* CEO Message Section */}
        <section className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Box (CEO Image and Name) */}
          <div className="flex flex-col items-center w-full lg:w-1/3">
            <img
              src="./ceo.png"
              alt="CEO"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl font-bold text-[#8AA823] text-center">
              Mr. Ishfaq Ahmed
            </h3>
          </div>

          {/* Right Box (CEO Message) */}
          <div className="w-full lg:w-2/3 space-y-6 text-justify">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-900 dark:text-white">
              <span className="text-[#8AA823]">CEO</span> Message
            </h2>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 dark:text-gray-300">
              At ICG Chemicals, my vision is to lead in the development and
              delivery of high-quality chemical solutions that meet the diverse
              needs of industries across the globe. My commitment to excellence,
              innovation, and sustainability drives us to continually evolve,
              ensuring that we provide safe, effective, and eco-friendly solutions
              that empower our clients to excel in their respective fields.
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 dark:text-gray-300">
              As we move forward, we are dedicated to not only advancing our
              product offerings but also fostering a collaborative environment
              that promotes growth, inclusivity, and social responsibility.
              Together, with our customers and partners, we are shaping a future
              where chemistry contributes positively to a sustainable world.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default IcgManagement;