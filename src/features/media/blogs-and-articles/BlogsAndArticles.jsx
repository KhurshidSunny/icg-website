import React from "react";

export default function BlogsAndArticles() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("./assets/MediaNewsImages/blogs-and-updates/blogs-cover.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          Blogs
        </h1>
      </div>

      <div className="flex justify-center gap-4 ">
        <h4 className="cursor-pointer text-sm md:text-lg tracking-widest">
          NEWS RELEASE
        </h4>
        <h4 className="cursor-pointer text-sm md:text-lg tracking-widest text-[#8AA823] border-b-2">
          BLOGS
        </h4>
        <h4 className="cursor-pointer text-sm md:text-lg tracking-widest">
          ARTICLES
        </h4>
      </div>

      <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4   2xl:gap-x-6 2xl:gap-y-6 ">
        <div className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl  shadow-lg   ">
          <img
            className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
            src="./assets/MediaNewsImages/LatestUpdateImages/box5Image.png"
            alt=""
          />
          <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
            <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
              Title of the Blog
            </h1>
            <p className="text-[#868686] mb-4 sm:text-[18px]">
              Short Description
            </p>
            <h2 className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]">
              Read me
            </h2>
          </div>
        </div>

        <div className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl  shadow-lg   ">
          <img
            className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
            src="./assets/MediaNewsImages/LatestUpdateImages/box6Image.png"
            alt=""
          />
          <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
            <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
              Title of the Blog
            </h1>
            <p className="text-[#868686] mb-4 sm:text-[18px]">
              Short Description
            </p>
            <h2 className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]">
              Read me
            </h2>
          </div>
        </div>

        <div className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl  shadow-lg   ">
          <img
            className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
            src="./assets/MediaNewsImages/LatestUpdateImages/box7Image.png"
            alt=""
          />
          <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
            <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
              Title of the Blog
            </h1>
            <p className="text-[#868686] mb-4 sm:text-[18px]">
              Short Description
            </p>
            <h2 className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]">
              Read me
            </h2>
          </div>
        </div>

        <div className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl  shadow-lg   ">
          <img
            className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
            src="./assets/MediaNewsImages/LatestUpdateImages/box8Image.png"
            alt=""
          />
          <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
            <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
              Title of the Blog
            </h1>
            <p className="text-[#868686] mb-4 sm:text-[18px]">
              Short Description
            </p>
            <h2 className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]">
              Read me
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
        See all blogs
      </div>
    </div>
  );
}
