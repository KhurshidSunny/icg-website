/* eslint-disable react/prop-types */
import { parseParagraph } from "./../../utils/ParagraphParser";

function Card({ title, paragraph, productMap }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
        {parseParagraph(paragraph, productMap)}
      </p>
    </div>
  );
}

export default Card;