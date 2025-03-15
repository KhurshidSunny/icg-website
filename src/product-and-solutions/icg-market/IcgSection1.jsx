/* eslint-disable react/prop-types */
function IcgSection1({
  section1Heading1,
  section1Paragraph1,
  section1Heading2,
  section1Paragraph2,
  image1,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6 lg:gap-10">
      {/* Left Box */}
      <div className="w-full lg:w-1/2 space-y-6">
        {section1Heading1 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading1}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph1}
            </p>
          </div>
        )}
        {section1Heading2 && (
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading2}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph2}
            </p>
          </div>
        )}
      </div>
      {/* Right Box */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image1}
          alt="Section 1 Content"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default IcgSection1;