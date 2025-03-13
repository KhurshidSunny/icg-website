function Growth() {
  return (
    <div className="py-16 px-6 md:px-16 bg-gray-50 dark:bg-background-dark">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-7xl mx-auto gap-8">
        {/* Left Box */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug dark:text-white">
            Ensuring sustainable growth{" "}
            <span className="text-[#8AA823]">
              for our planet and its people
            </span>
            .
          </h2>
        </div>

        {/* Right Box */}
        <div className="w-full md:w-1/2 space-y-8">
          <p className="text-gray-700 leading-relaxed dark:text-gray-300">
            At ICG Chemicals, we drive progress with innovative, sustainable
            solutions across diverse sectors. With over 16 years of expertise,
            we lead in environmentally friendly chemistry, shaping a future
            where everyone thrives. From pioneering products to mastering
            innovation, we’re committed to advancing essential chemistry for
            generations to come.
          </p>

          {/* Small Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white text-center p-4 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-2xl font-bold" style={{ color: "#8AA823" }}>
                1k
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">Satisfied Clients</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-center p-4 rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-2xl font-bold" style={{ color: "#8AA823" }}>
                100+
              </h3>
              <p className="text-gray-700 text-sm dark:text-gray-300">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
