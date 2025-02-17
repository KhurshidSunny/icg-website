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
  <div className="container dark:bg-gray-800 mx-auto px-6 lg:px-16 py-10">
    <div className="relative mb-16">
      <img
        src="/assets/JobsPageImages/Jobs.jpg"
        alt="New Release"
        className="w-full rounded-xl object-cover object-center h-full"
        style={{ width: "1408.96px", height: "427.22px" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <h1 className="absolute text-white text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
        ICG Career
      </h1>
    </div>

    <div>
      <h1 className="sm:text-2xl font-[700] 2xl:text-3xl text-black dark:text-white">
        Our <span className="text-[#8AA823] 2xl:text-3xl">Career</span>
      </h1>
      <p className="mt-3 font-[400] 2xl:text-xl text-black dark:text-gray-300">
        At ICG, we offer exciting career opportunities in a dynamic and
        innovative environment. Join our team to contribute to cutting-edge
        solutions in the chemical industry, where your skills and creativity
        can thrive. Grow with us and be part of a company that values
        collaboration, sustainability, and excellence.
      </p>
    </div>

    <div className="mt-10 flex flex-col gap-2 justify-center items-center">
      <h1 className="sm:text-2xl font-[700] text-black dark:text-white">
        Want to join Team{" "}
        <span className="text-[#8AA823]">ICG Chemicals?</span>
      </h1>
      <p className="sm:text-[16px] sm:w-[430px] sm:text-center 2xl:text-xl text-black dark:text-gray-300">
        Check out our open form below and fill the application form by
        clicking on it.
      </p>
    </div>

    <div>
      {data?.jobs?.map((job) => (
        <div
          key={job._id}
          className="w-full sm:h-[200px] py-4 px-8 rounded-[8px] mt-10 bg-[#F9D0D0]  dark:bg-gray-800 border dark:border-gray-600"
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="sm:text-2xl 2xl:text-3xl text-black dark:text-white">
                  {job.title}
                </h1>
                <p className="sm:text-[16px] sm:w-[330px] 2xl:text-xl 2xl:w-[560px] text-black dark:text-gray-300">
                  {job.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-6 py-2 sm:text-[18px] border-[#8AA823] border rounded-[6.65px] text-black dark:text-white dark:border-[#8AA823]">
                  {job.employment_type}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href={`/job/${job._id}`}
                className="px-6 py-2 sm:text-[18px] bg-[#8AA823] text-white rounded-[6.5px] dark:bg-[#8AA823] dark:text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
      ))}

      {data?.jobs?.length === 0 && (
        <div className="w-full sm:h-[200px] py-4 px-8 rounded-[8px] mt-10 bg-[#F9D0D0] dark:bg-[#333333] border-2 border-[#F2B6B6] flex items-center justify-center">
          <h1 className="sm:text-2xl 2xl:text-3xl text-black dark:text-white">
            No Jobs Found
          </h1>
        </div>
      )}

      {error && <p className="text-black dark:text-white">Error fetching data</p>}

      {/* Pagination Controls */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50 dark:bg-[#8AA823] dark:text-white"
          >
            Previous
          </button>
          <span className="text-black dark:text-white">
            Page {page} of {data.totalPages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.totalPages}
            className="px-4 py-2 bg-[#8AA823] text-white rounded disabled:opacity-50 dark:bg-[#8AA823] dark:text-white"
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
