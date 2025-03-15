function StrategyPriorities() {
  return (
    <div className="container mx-auto py-16 px-6 md:px-8 lg:px-16 bg-[#F2F2F2] dark:bg-background-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Box: Images */}
        <div className="relative flex justify-center md:justify-end mb-8 md:mb-0">
          {/* Big Image */}
          <img
            src="./strategy-image1.png"
            alt="Big Strategy"
            className="w-[300px] h-[300px] object-cover rounded-lg"
          />
          {/* Small Image */}
          <img
            src="./strategy-image2.png"
            alt="Small Strategy"
            className="absolute bottom-[-20%] left-[5%] w-40 h-40 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Box: Content */}
        <div className="flex flex-col justify-center px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
            Our strategic <span className="text-[#8AA823]">priorities</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify dark:text-gray-300">
            To achieve our goals and drive impactful growth, we have developed a
            visionary strategy centered on four core priorities. These
            priorities guide our actions, foster innovation, and ensure we
            create sustainable value for our customers, partners, and
            communities. Each priority reflects our commitment to excellence,
            integrity, and forward-thinking solutions that shape the future of
            the chemical industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StrategyPriorities;