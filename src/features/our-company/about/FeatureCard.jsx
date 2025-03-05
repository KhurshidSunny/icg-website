/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function FeatureCard({ svg, title, paragraph }) {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-[31.66px] gap-4 md:gap-[27.71px] rounded-lg bg-gray-100 dark:bg-gray-800 w-full max-w-[450px] md:max-w-[500px]">
      <div className="w-[60px] h-[60px] md:w-[82.14px] md:h-[82.14px] p-[12px] md:p-[19.34px] bg-[#023B3B] rounded-full flex items-center justify-center shrink-0">
        <img
          src={svg}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-[11.87px] w-full">
        <h3 className="text-base md:text-lg font-bold dark:text-white">{title}</h3>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{paragraph}</p>
      </div>
    </div>
  );
}

export default FeatureCard;