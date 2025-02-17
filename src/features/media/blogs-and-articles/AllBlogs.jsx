import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../../axios";
import { useQuery } from "@tanstack/react-query";

function AllBlogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = parseInt(searchParams.get("page")) || 1;
  let limit = parseInt(searchParams.get("limit")) || 10;

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 10) limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["allBlogs", page, limit],
    queryFn: async () => {
      const data = await axiosInstance.get(
        `/blogs/?page=${page}&limit=${limit}`,
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

  console.log("All blogs");

  return (

    <div className="container mx-auto px-6 lg:px-16 py-10  dark:bg-gray-800 ">
    <div className="flex justify-center">
      <h1 className="uppercase text-[#8AA823] text-xl font-bold sm:text-[18px] md:text-xl lg:text-xl 2xl:text-xl dark:text-white">
        All Blogs
      </h1>

   

      {isLoading && <h1 className="text-center mt-10">Loading...</h1>}

      <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-6">
        {data?.blogs.map((item) => (
          <div
            className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl shadow-lg"
            key={item._id}
          >
            <img
              className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl"
              src={item.banner}
              alt={item.title}
            />
            <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
              <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
                {item.title}
              </h1>
              <p className="text-[#868686] mb-4 sm:text-[18px]">
                {item.description}
              </p>
              <a
                className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]"
                href={`/blog/${item._id}`}
              >
                Read me
              </a>
            </div>
          </div>
        ))}
      </div>

      {data?.blogs.length === 0 && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
          <p className="text-center">No data available</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
          <p className="text-center">Error fetching data</p>
        </div>
      )}

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
  
    {isLoading && <h1 className="text-center mt-10 dark:text-gray-300">Loading...</h1>}
  
    <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-6">
      {data?.blogs.map((item) => (
        <div
          className="relative h-[400px] w-full bg-[#FFFFFF] dark:bg-gray-800 rounded-3xl shadow-lg"
          key={item._id}
        >
          <img
            className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl"
            src={item.banner}
            alt={item.title}
          />
          <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
            <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl text-black dark:text-white">
              {item.title}
            </h1>
            <p className="text-[#868686] dark:text-gray-300 mb-4 sm:text-[18px]">
              {item.description}
            </p>
            <a
              className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] dark:text-[#8AA823] dark:decoration-[#8AA823]"
              href={`/blog-articles/${item._id}`}
            >
              Read me
            </a>
          </div>
        </div>
      ))}
    </div>
  
    {data?.blogs.length === 0 && (
      <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px] dark:text-gray-300">
        <p className="text-center">No data available</p>
      </div>
    )}
  
    {error && (
      <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px] dark:text-gray-300">
        <p className="text-center">Error fetching data</p>
      </div>
    )}
  
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
        <span className="dark:text-white">
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
  
  );
}

export default AllBlogs;
