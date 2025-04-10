import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../../axios";

export default function MediaEvent() {
  const { eventId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["single_event"],
    queryFn: async () => {
      const data = await axiosInstance.get(`/events/${eventId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      return data.data.data.event;
    },
  });

  console.log("Single event", data);

  return (
    <div className="dark:bg-background-dark">
    <div className="container mx-auto px-6 lg:px-16 py-10">
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
        {data?.name}
      </h1>
    </div>
  
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        Event <span className="text-[#8AA323] dark:text-[#8AA823]">Name:</span> {data?.name}
      </h2>
      <p className="text-black dark:text-gray-300">{data?.description}</p>
    </div>
  </div>
  </div>
  );
}
