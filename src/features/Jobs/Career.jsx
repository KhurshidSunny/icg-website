import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PiSubtitlesBold } from "react-icons/pi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { axiosInstance } from "../../axios";

function Career() {
  const { jobId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [applied, setApplied] = useState(false);

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

  function handleApplyButtonClick(e) {
    e.preventDefault();

    if (!applied) {
      setApplied(true);
    }
  }

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: `url(/assets/JobsPageImages/Jobs.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          ICG Career
        </h1>
      </div>

      <div className="flex sm:flex-col xl:flex-row xl:justify-between">
        <div>
          <h1 className="sm:text-3xl font-[700] 2xl:text-3xl">{data?.title}</h1>
          <div className="mt-5">
            <h2 className="sm:text-xl font-[700]">Who Are We Looking For</h2>
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
                <h1>Department</h1>
                <h1>{data?.department}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaLocationDot className="sm:text-xl" />
              <div className="flex flex-col">
                <h1>Location</h1>
                <h1>No location</h1>
              </div>
            </div>
          </div>
          <div className="px-2">
            <button
              onClick={() => setShowModal(true)}
              className="w-full mt-5 py-3 rounded-[8px] bg-[#8AA823] text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Apply Here</h2>
            <form onClick={handleApplyButtonClick}>
              <div className="mb-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">
                  Applying Position
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg"
                  defaultValue={data?.title}
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium">Resume</label>
                <input
                  type="file"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  disabled={applied}
                  className="px-4 py-2 bg-[#8AA823] text-white rounded-lg disabled:opacity-50"
                >
                  {applied ? "Applied" : "Apply"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Career;
