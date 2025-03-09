function WhyOus() {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-16">
      {/* Text Content */}
      <div className="lg:w-1/2 w-full px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 dark:text-gray-300">
          Why
          <span
            className="text-[#8AA823]
        ]"
          >
            Us?
          </span>
        </h2>

        <div className="mb-8">
          <h3 className="text-md font-semibold mb-2 dark:text-gray-300">Our Commitment</h3>
          <p className="text-gray-700 dark:text-gray-300">
            ICG Specialty Chemicals FZCO is a leading provider of specialty
            chemicals, recognized for our commitment to quality and innovation.
            With our globally trusted brand, Omnistab®, and our own registered
            trademark, Omniquan®, we serve a wide range of industries, including
            Masterbatch, Plastics, Resins, Compounding, Inks, and Coatings
            across the Middle East and Asia.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2 dark:text-gray-300">Sustainable Practices</h3>
          <p className="text-gray-700 dark:text-gray-300">
            We take pride in our sustainable manufacturing processes. Our
            commitment to the environment is demonstrated through our innovative
            approaches that ensure minimal impact on the planet.
          </p>
        </div>
      </div>

      <div className="relative flex lg:w-1/2 w-full px-4 lg:px-8 gap-0">
        {/* First Image */}
        <div className="relative w-[249.65px] h-[364.69px] overflow-hidden rounded-tl-[13.87px]">
          <img
            src="./why-us-image1.png"
            alt="Why Us Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-[249.65px] h-[364.69px] overflow-hidden rounded-tl-[13.87px]">
          <img
            src="./why-us-image2.png"
            alt="Why Us Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Box */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="bg-white px-4 py-2 rounded-md shadow-md text-center dark:bg-background-dark">
            <span className="block text-[#8AA823] font-extrabold text-lg ">
              +20
            </span>
            <span className="block text-gray-700 text-sm dark:text-gray-300">
              years Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyOus;
