import { axiosInstance } from "../../../axios";
import { useQuery } from "@tanstack/react-query";

function MediaAndNewsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["NewsAndUpdates"],
    queryFn: async () => {
      const data = await axiosInstance.get("/mediaAndNews/?page=1&limit=10", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      return data.data.data;
    },
  });

  console.log("Query", data);

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-[541px] py-[34px] flex justify-center items-center px-[20px] bg-background-light dark:bg-background-dark">
    <div className="bg-white dark:bg-gray-800 py-[34px] px-[20px] sm:px-[50px] shadow-[0px_9px_21px_rgba(0,_0,_0,_0.07)] rounded-[10px] max-w-full sm:max-w-[70%] w-full flex flex-col items-center">
      {/* Background Image Section */}
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("./assets/MediaNewsImages/NewsPaperImage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          New Releases
        </h1>
      </div>
  
      {/* Latest News Title */}
      <div className="flex justify-center">
        <h1 className="uppercase text-[#8AA823] text-xl font-bold sm:text-[18px] md:text-xl lg:text-xl 2xl:text-xl">
          Latest News and updates
        </h1>
      </div>
  
      {isLoading && <h1 className="text-center mt-10 text-white">Loading...</h1>}
  
      {/* News Grid */}
      <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-6">
        {data?.mediaAndNews.map((item) => (
          <div
            className="relative h-[400px] w-full bg-white dark:bg-gray-800 rounded-3xl shadow-lg dark:border dark:border-gray-600"
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
              <p className="text-[#868686] mb-4 sm:text-[18px] text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
              <a
                className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] dark:text-white"
                href={`/media-news/${item._id}`}
              >
                Read me
              </a>
            </div>
          </div>
        ))}
      </div>
  
      {/* No Data Available Message */}
      {data?.mediaAndNews.length === 0 && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px] dark:text-white">
          <p className="text-center">No data available</p>
        </div>
      )}
  
      {/* Error Message */}
      {error && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px] dark:text-white">
          <p className="text-center">Error fetching data</p>
        </div>
      )}
  
      {/* See All Media and News */}
      {data?.mediaAndNews.length > 0 && (
        <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px] dark:text-white">
          <a href="/all-media-and-news?page=1&limit=10">
            See all media and news
          </a>
        </div>
      )}
    </div>
  </div>
  
  
  );
}

export default MediaAndNewsPage;
