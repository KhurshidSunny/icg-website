import React from "react";
import { PiSubtitlesBold } from "react-icons/pi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";
function Career() {
  const { jobId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["single_article"],
    queryFn: async () => {
      const data = await axiosInstance.get(`/jobs/${jobId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      return data.data.data.job;
    },
  });

  console.log("Single Job", data);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        <img
          src="/assets/JobsPageImages/Jobs.jpg"
          alt="New Release"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1408.96px", height: "427.22px" }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
          ICG Career
        </h1>
      </div>

      <div className="flex sm:flex-col xl:flex-row xl:justify-between">
        <div>
          <h1 className="sm:text-3xl font-[700] 2xl:text-3xl">{data?.title}</h1>
          <div className="mt-5">
            <h2 className="sm:text-xl font-[700] ">Who Are We Looking For</h2>
            <div className="px-4 mt-2">{data?.description}</div>
          </div>
        </div>

        <div className="w-full h-[410px] bg-[#F8F7F7] rounded-[8px] mt-10 xl:w-[410px]">
          <h1 className="sm:text-2xl font-[700] px-8 mt-5">
            Job <span className="text-[#8AA823]">Summary</span>
          </h1>
          <div className="flex flex-col gap-3 mt-5 px-8">
            <div className="flex items-center gap-2">
              <PiSubtitlesBold className="sm:text-xl" />
              <h1>{data?.title}</h1>
            </div>
            <div className="flex items-center gap-2">
              <BsFillBagCheckFill className="sm:text-xl" />
              <div className="flex flex-col">
                <h1>Employment Type</h1>
                <h1>{data?.employment_type}</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MdOutlineWatchLater className="sm:text-xl" />
              <div className="flex flex-col">
                <h1>Deparmnet</h1>
                <h1>{data?.department}</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaLocationDot className="sm:text-xl" />
              <div className="flex flex-col">
                <h1>Location</h1>
                <h1>no location</h1>
              </div>
            </div>
          </div>
          {/* 
          <div className="mt-10">
            <h1 className="sm:text-[18px] font-[700] mt-5 underline decoration-[#8AA823] px-6">
              View all Job
            </h1>
          </div> */}

          <div className="px-2">
            <button className="w-full mt-5 py-3 rounded-[8px] bg-[#8AA823] text-white">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
