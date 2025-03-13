/* eslint-disable react/prop-types */
function IcgAdditionalSection({
  image3,
  section1Heading3,
  section1Paragraph3,
  section1Heading4,
  section1Paragraph4,
  section1Heading5,
  section1Paragraph5,
  section1Heading6,
  section1Paragraph6,
  section1Heading7,
  section1Paragraph7,
  section1Heading8,
  section1Paragraph8,
  section1Heading9,
  section1Paragraph9,
}) {
  return (
    <div className="flex flex-col gap-10 mb-12">
      {/* Top Row: Image and First Heading/Paragraph */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image3}
            alt="Additional Section Image"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
          />
        </div>
        {/* Right: First Heading and Paragraph */}
        <div className="w-full md:w-1/2 space-y-3">
          {section1Heading3 && (
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading3}
            </h2>
          )}
          {section1Paragraph3 && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph3}
            </p>
          )}
        </div>
      </div>
      {/* Remaining Content Stacked Vertically */}
      <div className="space-y-6">
        {section1Heading4 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading4}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph4}
            </p>
          </div>
        )}
        {section1Heading5 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading5}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph5}
            </p>
          </div>
        )}
        {section1Heading6 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading6}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph6}
            </p>
          </div>
        )}
        {section1Heading7 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading7}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph7}
            </p>
          </div>
        )}
        {section1Heading8 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading8}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph8}
            </p>
          </div>
        )}
        {section1Heading9 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading9}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph9}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default IcgAdditionalSection;