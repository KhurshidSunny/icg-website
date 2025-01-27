import { axiosInstance } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function MediaEvent() {
  const { mediaId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["single_newsAndUpdates"],
    queryFn: async () => {
      const data = await axiosInstance.get(`/mediaAndNews/${mediaId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
      });
      return data.data.data;
    },
  });

  console.log("Single Event", data);

  return (
    <>
      <div className="container mx-auto px-6 lg:px-16 py-10">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching data</p>}
        <div>
          <div className="relative mb-16">
            <img
              src={data?.mediaAndNews.banner}
              alt="Event"
              className="w-full rounded-xl object-cover object-center h-full"
              style={{ width: "1408.96px", height: "427.22px" }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

            <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
              {data?.mediaAndNews.title}
            </h1>
          </div>
          <div>
            <h1 className="sm:text-2xl font-[700] 2xl:text-3xl">
              {data?.mediaAndNews.title}
            </h1>
            <p className="mt-3 font-[400] 2xl:text-xl 2xl:w-[910px]">
              {data?.mediaAndNews.description}
            </p>
          </div>

          <div className="mt-10 bg-[#F2F2F2] px-2 py-5 w-full  rounded-[8px] mb-[60px]">
            <h1 className="sm:text-2xl px-6 text-[#8AA823] font-[700]  2xl:text-3xl">
              Event Details
            </h1>
            <div className="px-5 flex flex-col gap-[2rem] mt-[40px]">
              <p>{data?.mediaAndNews.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaEvent;
