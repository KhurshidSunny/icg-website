// eslint-disable-next-line react/prop-types, no-unused-vars
function IcgHeaderSection({ pageTitle, titleImage }) {
  console.log(titleImage);
  return (
    <div className="relative mb-16">
      {/* Image */}
      <img
        src={titleImage}
        alt="About ICG"
        className="w-full rounded-xl object-cover object-center h-full"
        style={{ width: "1235.96px", height: "427.22px" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      {/* Text */}
      <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
        {pageTitle}
      </h1>
    </div>
  );
}

export default IcgHeaderSection;
