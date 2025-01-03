/* eslint-disable react/prop-types */
function IcgSection1({
  section1Heading1,
  section1Paragraph1,
  section1Heading2,
  section1Paragraph2,
  image1,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-16">
      {/* Left Box */}
      <div className="flex flex-col space-y-6 w-full lg:w-1/2 gap-y-8 ">
        {/* Content 1 */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">
            {section1Heading1}
            {/* <span className="text-[#8AA823]">Construction Solutions</span> */}
          </h2>
          <p className="text-sm lg:text-base text-gray-600 text-justify">
            {section1Paragraph1}
          </p>
        </div>
        {/* Content 2 */}
        <div>
          <h2 className="text-xl lg:text-2xl font-bold  text-gray-800 mb-4">
            {section1Heading2}
          </h2>
          <p className="text-sm lg:text-base text-gray-600 text-justify">
            {section1Paragraph2}
          </p>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-full lg:w-1/2">
        <img
          src={image1}
          alt="Right Content"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default IcgSection1;
