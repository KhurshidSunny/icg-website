/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from "./Card";

function IcgSolutionsSection({
  section2Heading1,
  section2Paragraph1,
  section2Heading2,
  section2Paragraph2,
  section2Heading3,
  section2Paragraph3,
  image3,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <Card title={section2Heading1} paragraph={section2Paragraph1} />
      <Card title={section2Heading2} paragraph={section2Paragraph2} />

      {/* Box 3 image */}
      <div className=" bg-white  rounded-xl flex items-center">
        <img
          src={image3}
          alt="ICG Market"
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>

      <Card title={section2Heading3} paragraph={section2Paragraph3} />
    </div>
  );
}

export default IcgSolutionsSection;
