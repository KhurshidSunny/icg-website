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
    <div className="dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-10 dark:bg-gray-800 dark:text-white">
        {/* Hero Section */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <img
            src="./assets/MediaNewsImages/MediaEventImage.png"
            alt="New Release"
            className="w-full rounded-xl object-cover object-center h-[250px] sm:h-[350px] lg:h-[427.22px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          <h1 className="absolute text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[48px] font-bold tracking-tight top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Events
          </h1>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col xl:flex-row xl:justify-between gap-4 sm:gap-6">
          <div className="w-full xl:w-2/3 flex justify-center xl:justify-start">
            <div className="bg-white w-full max-w-md border border-[#9C9C9C] rounded-md flex items-center px-3 py-1 sm:py-2">
              <CiSearch className="text-xl sm:text-2xl text-[#9C9C9C]" />
              <input
                type="text"
                placeholder="Search"
                className="px-2 outline-none py-1 sm:py-2 bg-transparent w-full"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full xl:w-auto justify-center xl:justify-end">
            <select
              className="w-full sm:w-1/3 py-2 sm:py-3 px-3 font-normal text-[#B9B9B9] border rounded-md border-[#9C9C9C] bg-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 text-sm sm:text-base"
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
              className="w-full sm:w-1/3 py-2 sm:py-3 px-3 font-normal text-[#B9B9B9] border rounded-md border-[#9C9C9C] bg-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 text-sm sm:text-base"
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
              className="w-full sm:w-1/3 py-2 sm:py-3 px-3 font-normal text-[#B9B9B9] border rounded-md border-[#9C9C9C] bg-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 text-sm sm:text-base"
              id="category"
              name="category"
            >
              <option value="technology">Publish Date</option>
              <option value="business">Business</option>
              <option value="health">Health</option>
              <option value="sports">Sports</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
        </div>

        {/* Event List */}
        <div className="w-full flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-10">
          {data?.events?.map((event) => (
            <a
              href={`/media-events/${event._id}`}
              key={event._id}
              className="w-full p-4 sm:p-5 flex flex-col xl:flex-row justify-between items-start xl:items-center rounded-[8px] bg-[#F2F2F2] h-auto min-h-[200px] xl:h-[240px] dark:bg-gray-800 dark:text-white dark:border dark:border-gray-600"
            >
              <div className="flex flex-col gap-2 sm:gap-3 w-full xl:w-3/4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <h1 className="text-lg sm:text-xl xl:text-2xl">
                    {format(event.start_date, "dd MMM yyyy")} -----
                  </h1>
                  <h1 className="text-lg sm:text-xl xl:text-2xl">
                    {format(event.end_date, "dd MMM yyyy")}
                  </h1>
                </div>
                <h1 className="text-xl sm:text-2xl xl:text-3xl font-semibold">
                  {event.name}
                </h1>
                <p className="text-sm sm:text-base xl:text-lg font-normal line-clamp-2">
                  {event.description}
                </p>
              </div>
              <div className="flex flex-row xl:flex-col gap-4 sm:gap-6 xl:gap-8 mt-4 xl:mt-0 w-full xl:w-auto justify-center xl:justify-around">
                <button className="bg-[#8AA823] text-white text-sm sm:text-base xl:text-lg rounded-full px-6 sm:px-8 xl:px-10 py-1">
                  {event.status}
                </button>
                <button className="border border-[#8AA823] text-sm sm:text-base xl:text-lg px-4 sm:px-5 py-1 sm:py-2 rounded-md">
                  Add to Calendar
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Controls */}
        {data && data.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-10 gap-4 sm:gap-6">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-[#8AA823] text-white rounded text-sm sm:text-base disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm sm:text-base">
              Page {page} of {data.totalPages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data.totalPages}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-[#8AA823] text-white rounded text-sm sm:text-base disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaEvents;