// eslint-disable-next-line react/prop-types, no-unused-vars
function IcgHeaderSection({ pageTitle, titleImage }) {
  console.log(titleImage);
  console.log("Title", title);
  return (
    <>
      {/* <div className="relative mb-16">
      
      <img
        src={titleImage}
        alt="About ICG"
        className="w-full rounded-xl object-cover object-center h-full"
        style={{ width: "1235.96px", height: "427.22px" }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      
      <h1 className="absolute text-white text-lg lg:text-3xl font-bold top-[193.32px] left-[480.04px]">
        {pageTitle}
      </h1>
    </div> */}
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
    </>
  );
}

export default IcgHeaderSection;
