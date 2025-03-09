/* eslint-disable react/prop-types */
function IcgHeaderSection({ title, titleImage }) {
  return (
    <div
      className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${titleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
      <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
        {title}
      </h1>
    </div>
  );
}

export default IcgHeaderSection;