/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import IcgHeaderSection from "./IcgHeaderSection";
import IcgSection1 from "./IcgSection1";
import IcgFullImageSection from "./IcgFullImageSection";
import IcgSolutionsSection from "./IcgSolutionsSection";
import IcgAdditionalSection from "./IcgAdditionalSection"
import IcgFinalSection from "./IcgFinalSection";

const IcgMarketTemplate = ({ icgMarketData }) => {
  const { pageName } = useParams();
  const pageData = icgMarketData.find(
    (data) => data.pageName.toLowerCase().split(" ").join("-") === pageName
  );

  if (!pageData) {
    return <div className="p-4 text-gray-800 dark:text-gray-200">Page not found.</div>;
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
    finalParagraph,
    pageName: title,
  } = pageData;

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
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
        section2Heading4={section2Heading4}
        section2Paragraph4={section2Paragraph4}
        section2Heading5={section2Heading5}
        section2Paragraph5={section2Paragraph5}
        section2Heading6={section2Heading6}
        section2Paragraph6={section2Paragraph6}
        section2Heading7={section2Heading7}
        section2Paragraph7={section2Paragraph7}
        image3={image3}
      />
      <IcgAdditionalSection
        section1Heading3={section1Heading3}
        section1Paragraph3={section1Paragraph3}
        section1Heading4={section1Heading4}
        section1Paragraph4={section1Paragraph4}
        section1Heading5={section1Heading5}
        section1Paragraph5={section1Paragraph5}
        section1Heading6={section1Heading6}
        section1Paragraph6={section1Paragraph6}
        section1Heading7={section1Heading7}
        section1Paragraph7={section1Paragraph7}
        section1Heading8={section1Heading8}
        section1Paragraph8={section1Paragraph8}
        section1Heading9={section1Heading9}
        section1Paragraph9={section1Paragraph9}
      />
      <IcgFinalSection finalParagraph={finalParagraph} />
    </div>
  );
};

export default IcgMarketTemplate;