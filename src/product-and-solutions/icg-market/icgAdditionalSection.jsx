/* eslint-disable react/prop-types */
function IcgAdditionalSection({
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
      <div className="flex flex-col gap-y-8">
        {/* Content 3 */}
        {section1Heading3 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading3}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph3}
            </p>
          </div>
        )}
  
        {/* Content 4 */}
        {section1Heading4 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading4}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph4}
            </p>
          </div>
        )}
  
        {/* Content 5 */}
        {section1Heading5 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading5}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph5}
            </p>
          </div>
        )}
  
        {/* Content 6 */}
        {section1Heading6 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading6}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph6}
            </p>
          </div>
        )}
  
        {/* Content 7 */}
        {section1Heading7 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading7}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph7}
            </p>
          </div>
        )}
  
        {/* Content 8 */}
        {section1Heading8 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading8}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph8}
            </p>
          </div>
        )}
  
        {/* Content 9 */}
        {section1Heading9 && (
          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200">
              {section1Heading9}
            </h2>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
              {section1Paragraph9}
            </p>
          </div>
        )}
      </div>
    );
  }
  
  export default IcgAdditionalSection;