import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../axios";

function ICGCareer() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = parseInt(searchParams.get("page")) || 1;
  let limit = parseInt(searchParams.get("limit")) || 10;

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 10) limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["articles", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/jobs/?page=${page}&limit=${limit}`,
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

  console.log("Jobs", data);

  return (
    <>
      <div className="dark:bg-background-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-10">
          {/* Hero Section */}
          <div className="relative mb-10 sm:mb-16 w-full h-[250px] sm:h-[350px] lg:h-[427.22px] rounded-xl overflow-hidden">
            <img
              src="/assets/JobsPageImages/Jobs.jpg"
              alt="New Release"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              ICG Career
            </h1>
          </div>

          {/* Career Intro */}
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">
              Our <span className="text-[#8AA823]">Career</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base lg:text-xl text-black dark:text-gray-300 leading-6 sm:leading-7">
              At ICG, we offer exciting career opportunities in a dynamic and
              innovative environment. Join our team to contribute to
              cutting-edge solutions in the chemical industry, where your
              skills and creativity can thrive. Grow with us and be part of a
              company that values collaboration, sustainability, and
              excellence.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 sm:mt-10 flex flex-col gap-2 justify-center items-center text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white">
              Want to join Team{" "}
              <span className="text-[#8AA823]">ICG Chemicals?</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-black dark:text-gray-300 max-w-md">
              Check out our open form below and fill the application form by
              clicking on it.
            </p>
          </div>

          {/* Job Listings */}
          <div className="mt-8 sm:mt-10">
            {data?.jobs?.map((job) => (
              <div
                key={job._id}
                className="w-full py-4 px-4 sm:px-6 lg:px-8 rounded-lg mt-6 bg-[#F9D0D0] dark:bg-gray-800 border dark:border-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div className="flex flex-col gap-3 w-full sm:w-[70%]">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white font-semibold">
                    {job.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg text-black dark:text-gray-300 line-clamp-2">
                    {job.description}
                  </p>
                  <button className="px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base border-[#8AA823] border rounded-md text-black dark:text-white dark:border-[#8AA823] w-fit">
                    {job.employment_type}
                  </button>
                </div>
                <div className="flex justify-end w-full sm:w-auto">
                  <a
                    href={`/job/${job._id}`}
                    className="px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base bg-[#8AA823] text-white rounded-md dark:bg-[#8AA823] dark:text-white flex items-center gap-2"
                  >
                    View <GoArrowRight />
                  </a>
                </div>
              </div>
            ))}

            {data?.jobs?.length === 0 && (
              <div className="w-full py-4 px-4 sm:px-8 rounded-lg mt-6 bg-[#F9D0D0] dark:bg-[#333333] border-2 border-[#F2B6B6] flex items-center justify-center h-[150px] sm:h-[200px]">
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-black dark:text-white">
                  No Jobs Found
                </h1>
              </div>
            )}

            {error && (
              <p className="text-center text-black dark:text-white mt-6">
                Error fetching data
              </p>
            )}

            {/* Pagination Controls */}
            {data && data.totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 sm:mt-10 gap-4 flex-wrap">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#8AA823] text-white rounded text-sm sm:text-base disabled:opacity-50 dark:bg-[#8AA823] dark:text-white"
                >
                  Previous
                </button>
                <span className="text-sm sm:text-base text-black dark:text-white">
                  Page {page} of {data.totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === data.totalPages}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-[#8AA823] text-white rounded text-sm sm:text-base disabled:opacity-50 dark:bg-[#8AA823] dark:text-white"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ICGCareer;