/* eslint-disable react/prop-types */
function IcgFinalSection({ finalParagraph }) {
  return (
    <div className="my-16">
      {finalParagraph && (
        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 text-justify">
          {finalParagraph}
        </p>
      )}
    </div>
  );
}

export default IcgFinalSection;