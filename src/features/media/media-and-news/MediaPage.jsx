import { axiosInstance } from "../../../axios";
import { useQuery } from "@tanstack/react-query";

function MediaPage() {
  console.log("access", import.meta.env.VITE_ACCESS_TOKEN);

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
    <div className="container mx-auto px-6 lg:px-16 py-10">
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

      <div className="flex justify-center ">
        <h1 className="uppercase text-[#8AA823] text-xl font-bold sm:text-[18px] md:text-xl lg:text-xl 2xl:text-xl">
          Latest News and updates{" "}
        </h1>
      </div>

      {isLoading && <h1 className="text-center mt-10">Loading...</h1>}

      <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4   2xl:gap-x-6 2xl:gap-y-6 ">
        {data?.mediaAndNews.map((item) => (
          <div
            className="relative h-[400px] w-full bg-[#FFFFFF] rounded-3xl  shadow-lg    "
            key={item._id}
          >
            <img
              className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
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
                href={`/media-events/${item._id}`}
              >
                Read me
              </a>
            </div>
            <div className="absolute text-white font-[700] top-5 right-5 bg-[#45CE3896] py-2 px-6 rounded-full">
              <h1>Announcement</h1>
            </div>
          </div>
        ))}
      </div>
      {data?.mediaAndNews.length === 0 && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
          <p className="text-center">No data available</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
          <p className="text-center">Error fetching data</p>
        </div>
      )}

      {data?.mediaAndNews.length > 0 && (
        <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
          <a href="/all-media-events?page=1&limit=10">See all media and news</a>
        </div>
      )}
    </div>
  );
}

export default MediaPage;
