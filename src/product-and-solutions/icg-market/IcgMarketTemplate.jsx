/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import IcgHeaderSection from "./IcgHeaderSection";
import IcgSection1 from "./IcgSection1";
import IcgFullImageSection from "./IcgFullImageSection";
import IcgSolutionsSection from "./IcgSolutionsSection";
import IcgFinalSection from "./IcgFinalSection";
const IcgMarketTemplate = ({ icgMarketData }) => {
  const { pageName } = useParams();
  const pageData = icgMarketData.find(
    (data) => data.pageName.toLowerCase().split(" ").join("-") === pageName
  );

  if (!pageData) {
    return <div className="p-4">Page not found.</div>;
  }

  const {
    
    titleImage,
    image1,
    image2,
    image3,
    section1Heading1,
    section1Paragraph1,
    section1Heading2,
    section1Paragraph2,
    section2Heading1,
    section2Paragraph1,
    section2Heading2,
    section2Paragraph2,
    section2Heading3,
    section2Paragraph3,
    finalParagraph,
    pageName: title,
  } = pageData;

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <IcgHeaderSection titleImage={titleImage} title={title} />
      <IcgSection1
        section1Heading1={section1Heading1}
        section1Paragraph1={section1Paragraph1}
        section1Heading2={section1Heading2}
        section1Paragraph2={section1Paragraph2}
        image1={image1}
      />
      <IcgFullImageSection fullImage={image2} />
      <IcgSolutionsSection
        section2Heading1={section2Heading1}
        section2Paragraph1={section2Paragraph1}
        section2Heading2={section2Heading2}
        section2Paragraph2={section2Paragraph2}
        section2Heading3={section2Heading3}
        section2Paragraph3={section2Paragraph3}
        image3={image3}
      />
      <IcgFinalSection finalParagraph={finalParagraph} />
    </div>
  );
};

export default IcgMarketTemplate;
