import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../../axios";

export default function Article() {
  const { articleId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["single_article"],
    queryFn: async () => {
      const data = await axiosInstance.get(`/articles/${articleId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      return data.data.data.article;
    },
  });

  return (
    <div className="bg-background-light dark:bg-background-dark">

<div className="container mx-auto px-6 lg:px-16 py-10 dark:bg-background-dark dark:text-white">
  <div
    className="relative mb-16 max-w-[1408.96px] min-h-[427.22px] w-full h-full object-cover object-center flex items-center justify-center"
    style={{
      backgroundImage: `url(${data?.banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
    <h1 className="relative z-10 text-white text-lg lg:text-3xl font-bold md:text-[25px]">
      {data?.title}
    </h1>
  </div>

  <div className="my-2 dark:text-gray-300">{data?.description}</div>
</div>
</div>
  );
}
