/* eslint-disable react/prop-types */
function IcgFinalSection({ finalParagraph }) {
  return (
    <div className="mb-12">
      {finalParagraph && (
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-justify">
          {finalParagraph}
        </p>
      )}
    </div>
  );
}

export default IcgFinalSection;