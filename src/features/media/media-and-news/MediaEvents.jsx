import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { axiosInstance } from "../../../axios";
import { useSearchParams } from "react-router-dom";
function MediaEvents() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = parseInt(searchParams.get("page")) || 1;
  let limit = parseInt(searchParams.get("limit")) || 10;

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 10) limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["articles", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/events/?page=${page}&limit=${limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      );
      return data.data.data;
    },
  });

  // Function to handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > data.totalPages) return;
    setSearchParams({ page: newPage, limit });
  };

  console.log("Events", data);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div className="relative mb-16">
        <img
          src="./assets/MediaNewsImages/MediaEventImage.png"
          alt="New Release"
          className="w-full rounded-xl object-cover object-center h-full"
          style={{ width: "1408.96px", height: "427.22px" }}
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
          Events
        </h1>
      </div>

      <div className="flex sm:flex-col gap-5  sm:items-center xl:flex-row xl:justify-between ">
        <div className="2xl:w-[80%] sm:w-[70%] sm:flex sm:justify-center lg:flex lg:justify-start 2xl:justify-start">
          <div className="bg-white sm:w-[70%]   border   border-[#9C9C9C] rounded-md  flex items-center  px-3">
            <CiSearch className="text-2xl text-[#9C9C9C]" />
            <input
              type="text"
              placeholder="Search"
              className="px-2 outline-none py-2 bg-transparent sm:w-[80%] "
            />
          </div>
        </div>

        <div className="sm:w-full sm:flex py-3 sm:justify-between xl:gap-3 px-2">
          <select
            className="sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white"
            id="category"
            name="category"
          >
            <option value="technology">Topic</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <select
            className="sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white"
            id="category"
            name="category"
          >
            <option value="technology">Industry</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>
          <select
            className="sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white"
            id="category"
            name="category"
          >
            <option value="technology">Publish Data</option>
            <option value="business">Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 mt-10">
        {data?.events?.map((event) => (
          <a
            href={`/media-events/${event._id}`}
            key={event._id}
            className="w-full p-5 h-[200px] flex justify-between rounded-[8px] bg-[#F2F2F2] xl:h-[300px ] 2xl:h-[240px]"
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-2">
                <h1 className="sm:text-xl xl:text-2xl">
                  {format(event.start_date, "dd MMM yyyy")} -----{" "}
                </h1>
                <h1 className="sm:text-xl xl:text-2xl">
                  {format(event.end_date, "dd MMM yyyy")}
                </h1>
              </div>
              <div className="flex gap-2 2xl:mb-[20px]">
                <h1 className="sm:text-2xl xl:text-3xl">{event.name}</h1>
              </div>
              <p className="sm:text-[16px] font-[400]">{event.description}</p>
            </div>
            <div className="flex flex-col gap-20 2xl:justify-around">
              <button className="bg-[#8AA823] text-white sm:text-[18px] rounded-full px-10 py-1">
                {event.status}
              </button>
              <button className="border border-[#8AA823] px-5 py-2 rounded-md">
                Add to Calendar
              </button>
            </div>
          </a>
        ))}
      </div>
      {/* Pagination Controls */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {page} of {data.totalPages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.totalPages}
            className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default MediaEvents;
