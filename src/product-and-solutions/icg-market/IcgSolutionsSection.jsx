/* eslint-disable react/prop-types */
import Card from "./Card";

function IcgSolutionsSection({
  section2Heading1,
  section2Paragraph1,
  section2Heading2,
  section2Paragraph2,
  section2Heading3,
  section2Paragraph3,
  section2Heading4,
  section2Paragraph4,
  section2Heading5,
  section2Paragraph5,
  section2Heading6,
  section2Paragraph6,
  section2Heading7,
  section2Paragraph7,
  image3,
}) {
  return (
    <div className="flex flex-col gap-16">
      {/* Image and First Solution Paragraph */}
      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image3}
            alt="ICG Market"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* First Solution Paragraph */}
        <div className="w-full md:w-1/2">
          {section2Heading3 && (
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-200">
              {section2Heading3}
            </h3>
          )}
          {section2Paragraph3 && (
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mt-4 text-justify">
              {section2Paragraph3}
            </p>
          )}
        </div>
      </div>

      {/* Remaining Content in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Card 1 */}
        {section2Heading1 && (
          <Card title={section2Heading1} paragraph={section2Paragraph1} />
        )}

        {/* Card 2 */}
        {section2Heading2 && (
          <Card title={section2Heading2} paragraph={section2Paragraph2} />
        )}

        {/* Card 4 */}
        {section2Heading4 && (
          <Card title={section2Heading4} paragraph={section2Paragraph4} />
        )}

        {/* Card 5 */}
        {section2Heading5 && (
          <Card title={section2Heading5} paragraph={section2Paragraph5} />
        )}

        {/* Card 6 */}
        {section2Heading6 && (
          <Card title={section2Heading6} paragraph={section2Paragraph6} />
        )}

        {/* Card 7 */}
        {section2Heading7 && (
          <Card title={section2Heading7} paragraph={section2Paragraph7} />
        )}
      </div>
    </div>
  );
}

export default IcgSolutionsSection;