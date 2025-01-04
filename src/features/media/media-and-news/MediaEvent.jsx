import React from "react";

function MediaEvent() {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        <img
          src="/assets/MediaNewsImages/event.png"
          alt="Event"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1408.96px", height: "427.22px" }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
          Events
        </h1>
      </div>
      <div>
        <h1 className="sm:text-2xl font-[700] 2xl:text-3xl">
          Event <span className="text-[#8AA823] 2xl:text-3xl"> Name :</span>
        </h1>
        <p className="mt-3 font-[400] 2xl:text-xl 2xl:w-[910px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>

      <div className="mt-10 bg-[#F2F2F2] px-2 py-5 w-full  rounded-[8px] mb-[60px]">
        <h1 className="sm:text-2xl px-6 text-[#8AA823] font-[700]  2xl:text-3xl">
          Event Details
        </h1>
        <div className="px-5 flex flex-col gap-[2rem] mt-[40px]">
          <p className="sm:text-[16px] sm:w-[570px] md:w-[700px] lg:text-[18px] lg:w-[852px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <p className=" sm:text-[16px] sm:w-[570px] md:w-[700px] lg:text-[18px] lg:w-[852px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <p className=" sm:text-[16px] sm:w-[570px] md:w-[700px] lg:text-[18px] lg:w-[852px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <p className="sm:text-[16px] sm:w-[570px] md:w-[700px] lg:text-[18px] lg:w-[852px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediaEvent;
