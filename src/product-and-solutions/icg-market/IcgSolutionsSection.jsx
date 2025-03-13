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
}) {
  return (
    <div className="flex flex-col gap-10 mb-12">
      {/* First Solution Paragraph */}
      {section2Heading3 && (
        <div className="w-full">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200">
            {section2Heading3}
          </h3>
          {section2Paragraph3 && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mt-3 text-justify">
              {section2Paragraph3}
            </p>
          )}
        </div>
      )}
      {/* Remaining Content in Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {section2Heading1 && (
          <Card title={section2Heading1} paragraph={section2Paragraph1} />
        )}
        {section2Heading2 && (
          <Card title={section2Heading2} paragraph={section2Paragraph2} />
        )}
        {section2Heading4 && (
          <Card title={section2Heading4} paragraph={section2Paragraph4} />
        )}
        {section2Heading5 && (
          <Card title={section2Heading5} paragraph={section2Paragraph5} />
        )}
        {section2Heading6 && (
          <Card title={section2Heading6} paragraph={section2Paragraph6} />
        )}
        {section2Heading7 && (
          <Card title={section2Heading7} paragraph={section2Paragraph7} />
        )}
      </div>
    </div>
  );
}

export default IcgSolutionsSection;