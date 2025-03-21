/* eslint-disable react/prop-types */
import { parseParagraph } from "./../../utils/ParagraphParser";

function IcgFinalSection({ finalParagraph, productMap }) {
  return (
    <div className="mb-12">
      {finalParagraph && (
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
          {parseParagraph(finalParagraph, productMap)}
        </p>
      )}
    </div>
  );
}

export default IcgFinalSection;