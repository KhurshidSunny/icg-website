import { useQuery } from "@tanstack/react-query";
import React from "react";
import { axiosInstance } from "../../../axios";

export default function BlogsAndArticles() {
  const [selectedTab, setSelectedTab] = React.useState("blogs");

  async function fetchBlogs() {
    const data = await axiosInstance.get("/blogs/?page=1&limit=10", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    return data.data.data;
  }

  async function fetchNews() {
    const data = await axiosInstance.get("/mediaAndNews/?page=1&limit=10", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    return data.data.data;
  }

  async function fetchArticles() {
    const data = await axiosInstance.get("/articles/?page=1&limit=10", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    });
    return data.data.data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-articles-all-data"],
    queryFn: async () => {
      const [blogs, news, articles] = await Promise.all([
        fetchBlogs(),
        fetchNews(),
        fetchArticles(),
      ]);

      return { blogs, news, articles };
    },
  });

  console.log("data", data);

  return (
    <div className="container mx-auto px-6 lg:px-16 py-10">
      <div
        className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("./assets/MediaNewsImages/blogs-and-updates/blogs-cover.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
        <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
          Blogs
        </h1>
      </div>

      <div className="flex justify-center gap-4 ">
        <button onClick={() => setSelectedTab("news-release")}>
          <h4
            className={`cursor-pointer text-sm md:text-lg  tracking-widest ${
              selectedTab === "news-release" &&
              "text-[#8AA823] font-bold border-b-2"
            }`}
          >
            NEWS RELEASE
          </h4>
        </button>
        <button onClick={() => setSelectedTab("blogs")}>
          <h4
            className={`cursor-pointer text-sm md:text-lg tracking-widest ${
              selectedTab === "blogs" && "text-[#8AA823] font-bold border-b-2"
            } `}
          >
            BLOGS
          </h4>
        </button>
        <button onClick={() => setSelectedTab("articles")}>
          <h4
            className={`cursor-pointer text-sm md:text-lg tracking-widest ${
              selectedTab === "articles" &&
              "text-[#8AA823] font-bold border-b-2"
            }`}
          >
            ARTICLES
          </h4>
        </button>
      </div>

      {/* No blogs found */}
      {/* Error */}
      {/* All blogs */}

      {/* Blogs */}
      {selectedTab === "blogs" && (
        <>
          <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4   2xl:gap-x-6 2xl:gap-y-6 ">
            {data?.blogs?.blogs.map((blog) => (
              <div
                key={blog._id}
                className="relative  w-full bg-[#FFFFFF] rounded-3xl     "
              >
                <img
                  className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
                  src={blog.banner}
                  alt=""
                />
                <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
                  <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
                    {blog.title}
                  </h1>
                  {/* <p className="text-[#868686] mb-4 sm:text-[18px]">
                    {blog.description}
                  </p> */}
                  <a
                    href={`/blog/${blog._id}`}
                    className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]"
                  >
                    Read me
                  </a>
                </div>
              </div>
            ))}
          </div>
          {data?.blogs?.blogs.length === 0 && (
            <div className="flex justify-center items-center  w-full bg-[#FFFFFF] rounded-3xl     text-[#868686] text-[18px]">
              No Blogs Found
            </div>
          )}

          {data?.news?.mediaAndNews.length > 0 && (
            <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
              <a href="/all-blogs?page=1&limit=10">See all blogs</a>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center  w-full bg-[#FFFFFF] rounded-3xl     text-[#868686] text-[18px]">
              Error fetching data
            </div>
          )}
        </>
      )}

      {/* News */}
      {selectedTab === "news-release" && (
        <>
          <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4   2xl:gap-x-6 2xl:gap-y-6">
            {data?.news?.mediaAndNews.map((news) => (
              <div
                key={news._id}
                className="relative  w-full bg-[#FFFFFF] rounded-3xl     "
              >
                <img
                  className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
                  src={news.banner}
                  alt=""
                />
                <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
                  <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
                    {news.title}
                  </h1>
                  <p className="text-[#868686] mb-4 sm:text-[18px]">
                    {news.description}
                  </p>
                  <a
                    href={`/media-news/${news._id}`}
                    className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]"
                  >
                    Read me
                  </a>
                </div>
              </div>
            ))}
          </div>
          {data?.news?.mediaAndNews.length === 0 && (
            <div className="flex justify-center items-center  w-full bg-[#FFFFFF] rounded-3xl     text-[#868686] text-[18px]">
              No News Found
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
              <p className="text-center">Error fetching data</p>
            </div>
          )}

          {data?.news?.mediaAndNews.length > 0 && (
            <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
              <a href="/all-media-and-news?page=1&limit=10">
                See all media and news
              </a>
            </div>
          )}
        </>
      )}

      {/* Articles */}
      {selectedTab === "articles" && (
        <>
          <div className="grid mt-10 sm:grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 2xl:grid-cols-4   2xl:gap-x-6 2xl:gap-y-6">
            {data?.articles?.articles.map((article) => (
              <div
                key={article._id}
                className="relative  w-full bg-[#FFFFFF] rounded-3xl     "
              >
                <img
                  className="h-[60%] w-full object-cover rounded-tr-3xl rounded-tl-3xl "
                  src={article.banner}
                  alt=""
                />
                <div className="flex flex-col px-20 mt-5 gap-2 2xl:px-8">
                  <h1 className="sm:text-3xl tracking-wide font-[500] md:text-2xl 2xl:text-xl">
                    {article.title}
                  </h1>
                  <p className="text-[#868686] mb-4 sm:text-[18px]">
                    {article.description}
                  </p>
                  <a
                    href={`/article/${article._id}`}
                    className="underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B]"
                  >
                    Read me
                  </a>
                </div>
              </div>
            ))}
          </div>
          {data?.articles?.articles.length === 0 && (
            <div className="flex justify-center items-center  w-full bg-[#FFFFFF] rounded-3xl     text-[#868686] text-[18px]">
              No Articles Found
            </div>
          )}

          {data?.articles?.articles.length > 0 && (
            <div className="flex justify-center items-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
              <a href="/all-articles?page=1&limit=10">See all media and news</a>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center text-center mt-20 underline decoration-[#023B3B] decoration-2 cursor-pointer text-[#023B3B] sm:text-[20px]">
              <p className="text-center">Error fetching data</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
