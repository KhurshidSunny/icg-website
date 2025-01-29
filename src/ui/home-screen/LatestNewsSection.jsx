import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios"; // Ensure correct path
import { format } from "date-fns"; // Import date-fns for formatting

const fetchNews = async () => {
  try {
    const response = await axiosInstance.get("/contents/?page=1&limit=10");
    console.log("API Response:", response.data); // Debugging Log
    return response.data || {}; // Return empty object if data is missing
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Rethrow error for React Query to handle
  }
};

const formatPublishDate = (publishDate) => {
  if (!publishDate) return "No Date Available";

  const startDate = new Date(publishDate);
  const endDate = new Date(); // Today's date

  return `${format(startDate, "MMMM d")} - ${format(endDate, "d")}`;
};

const LatestNewsSection = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["latestNews"],
    queryFn: fetchNews,
    refetchOnWindowFocus: false,
  });

  // Extract news list safely
  const newsData = data?.data?.contents || []; // Avoids undefined errors
  const [showAll, setShowAll] = useState(false); // State to toggle between 3 and all news

  if (isLoading) {
    return <div className="text-center text-white py-10">Loading latest news...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">
        Error loading news: {error.message}
      </div>
    );
  }

  // Show only 3 news initially, show all if "View More" is clicked
  const visibleNews = showAll ? newsData : newsData.slice(0, 3);

  return (
    <div
      className="p-20 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/news_release_bg_image.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 -z-10"></div>

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        {newsData.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 border border-gray-400 rounded-md hover:bg-[#8AA823] text-white transition-all"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleNews.length > 0 ? (
          visibleNews.map((news) => (
            <div
              key={news._id}
              className="flex flex-col overflow-hidden rounded-lg shadow-md min-w-[280px] max-w-[380px]"
            >
              <img
                src={news.banner || "/default-news-image.jpg"} // Fallback image
                alt={news.title}
                className="w-full h-40 object-cover brightness-75"
              />
              <div className="bg-[#8AA823] text-white p-4 flex flex-col justify-between flex-grow">
                <p className="text-sm font-semibold">{news.title}</p>
                <div className="text-xs mt-2">
                  <p>{news.location || "Unknown Location"}</p>
                  <p>{formatPublishDate(news.publish_date)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-white col-span-3">No news available.</div>
        )}
      </div>
    </div>
  );
};

export default LatestNewsSection;
