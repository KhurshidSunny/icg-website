/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function FeatureCard({ svg, title, paragraph }) {
  return (
    <div className="flex  p-[31.66px] gap-[27.71px] rounded-lg bg-gray-100">
      <div className="w-[82.14px] h-[82.14px] p-[19.34px] bg-[#023B3B] rounded-full flex items-center justify-center">
        <img
          src={svg}
          alt="Market Leadership"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[345.32px] flex flex-col gap-[11.87px]">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
