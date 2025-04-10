/* eslint-disable react/prop-types */
function IcgHeaderSection({ title, titleImage }) {
  return (
    <div
      className="relative mb-10 w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${titleImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1 className="relative z-10 text-white text-xl sm:text-2xl lg:text-4xl font-bold text-center px-4">
        {title}
      </h1>
    </div>
  );
}

export default IcgHeaderSection;