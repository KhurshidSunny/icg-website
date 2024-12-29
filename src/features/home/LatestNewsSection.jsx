const LatestNewsSection = () => {
  const newsData = [
    {
      id: 1,
      title:
        "Exciting news! We are thrilled to announce that we are attending Plast Eurasia 2024",
      location: "New York, USA",
      date: "December 3-5",
      image: "./news1.png",
    },
    {
      id: 2,
      title:
        "Chinaplas 2023 Exhibition in Guangzhou, China, the largest international Plastic and Rubber trade fair in Asia.",
      location: "Berlin, Germany",
      date: "December 10-12",
      image: "./news2.png",
    },
    {
      id: 3,
      title:
        "Our team will be visiting the exhibition in Guangzhou, China, from December 3–5, and we’re looking forward to connecting with our valued partners.",
      location: "Tokyo, Japan",
      date: "January 15-17",
      image: "./news3.png",
    },
    // Add more objects as needed
  ];

  return (
    <div
      className="p-20" // Increased padding around the container
      style={{
        backgroundImage: "url('./news_release_bg_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative", // For overlay positioning
      }}
    >
      {/* Overlay for background image shadow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 1)", // Blackish shadow overlay
          zIndex: -1, // Ensures overlay is behind content
        }}
      ></div>

      <div className="flex justify-between items-center mb-10 ">
        <h2 className="text-2xl font-bold text-white">Latest News</h2>
        <button className="px-4 py-2 border border-gray-400  rounded-md hover:bg-[#8AA823] text-white transition-all">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {/* Added gap for spacing between cards */}
        {newsData.map((news) => (
          <div
            key={news.id}
            className="flex flex-col overflow-hidden rounded-lg shadow-md"
            style={{
              minWidth: "280px", // Set minimum width for each card
              maxWidth: "380px", // Allow the cards to expand up to 380px
              height: "auto", // Allow height to adjust based on content
            }}
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-40 object-cover"
              style={{
                filter: "brightness(0.6)", // Dimming effect on image
              }}
            />
            <div className="bg-[#8AA823] text-white p-4 flex flex-col justify-between flex-grow">
              <p className="text-sm font-semibold">{news.title}</p>
              <div className="text-xs mt-2">
                <p>{news.location}</p>
                <p>{news.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsSection;
