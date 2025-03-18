/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./../../axios"; // Adjust path as needed
import IcgHeaderSection from "./IcgHeaderSection";
import IcgSection1 from "./IcgSection1";
import IcgFullImageSection from "./IcgFullImageSection";
import IcgSolutionsSection from "./IcgSolutionsSection";
import IcgAdditionalSection from "./IcgAdditionalSection";
import IcgFinalSection from "./IcgFinalSection";

const API_URL = "/products";

const fetchAllProducts = async () => {
  let allProducts = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    do {
      const response = await axiosInstance.get(API_URL, {
        params: { page: currentPage, limit: 50 },
      });

      console.log(`Page ${currentPage} Response:`, response.data);

      if (response.status === 200) {
        const data = response.data?.data;
        allProducts = [...allProducts, ...(data?.products || [])];
        totalPages = data?.totalPages || 1;
        currentPage++;
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } while (currentPage <= totalPages);
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }

  console.log("All Fetched Products:", allProducts);
  return allProducts;
};

const IcgMarketTemplate = ({ icgMarketData }) => {
  const { pageName } = useParams();
  const pageData = icgMarketData.find(
    (data) => data.pageName.toLowerCase().split(" ").join("-") === pageName
  );

  const { data: allProducts = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const productMap = allProducts.reduce((map, product) => {
    const originalName = product.name; // e.g., "OMNIQUAN  AN 245"
    const normalizedName = originalName
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim(); // e.g., "omniquan an 245"

    // If the product starts with "omniquan", map "omniquan" to its ID
    if (normalizedName.startsWith("omniquan")) {
      // Only set "omniquan" once (first match wins), or update logic if needed
      if (!map["omniquan"]) {
        map["omniquan"] = product._id;
      }
      // Optionally keep full name for reference
      map[normalizedName] = product._id;
    }
    return map;
  }, {});

  console.log("Product Map:", productMap);
  console.log("Check - omniquan:", productMap["omniquan"]);
  console.log("Check - omniquan an 245:", productMap["omniquan an 245"]);
  console.log("Check - omniquan mpp:", productMap["omniquan mpp"]);

  if (!pageData) {
    return <div className="p-4 text-gray-800 dark:text-gray-200">Page not found.</div>;
  }

  if (isLoading) {
    return <div className="p-4 text-gray-800 dark:text-gray-200">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600 dark:text-red-400">Error loading products: {error.message}</div>;
  }

  const {
    titleImage,
    image1,
    image2,
    image3,
    section1Heading1,
    section1Paragraph1,
    section1Heading2,
    section1Paragraph2,
    section1Heading3,
    section1Paragraph3,
    section1List1,
    section1Heading4,
    section1Paragraph4,
    section1List2,
    section1Heading5,
    section1Paragraph5,
    section1List3,
    section1Heading6,
    section1Paragraph6,
    section1List4,
    section1Heading7,
    section1Paragraph7,
    section1List5,
    section1Heading8,
    section1Paragraph8,
    section1List6,
    section1Heading9,
    section1Paragraph9,
    section2Heading1,
    section2Paragraph1,
    section2Heading2,
    section2Paragraph2,
    section2Heading3,
    section2Paragraph3,
    section2Heading4,
    section2Paragraph4,
    section2Heading5,
    section2Paragraph5,
    section2Heading6,
    section2Paragraph6,
    section2Heading7,
    section2Paragraph7,
    finalParagraph,
    pageName: title,
  } = pageData;

  console.log("Passing productMap to components:", productMap);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <IcgHeaderSection titleImage={titleImage} title={title} />
      <IcgSection1
        section1Heading1={section1Heading1}
        section1Paragraph1={section1Paragraph1}
        section1Heading2={section1Heading2}
        section1Paragraph2={section1Paragraph2}
        image1={image1}
        productMap={productMap}
      />
      <IcgFullImageSection fullImage={image2} />
      <IcgSolutionsSection
        section2Heading1={section2Heading1}
        section2Paragraph1={section2Paragraph1}
        section2Heading2={section2Heading2}
        section2Paragraph2={section2Paragraph2}
        section2Heading3={section2Heading3}
        section2Paragraph3={section2Paragraph3}
        section2Heading4={section2Heading4}
        section2Paragraph4={section2Paragraph4}
        section2Heading5={section2Heading5}
        section2Paragraph5={section2Paragraph5}
        section2Heading6={section2Heading6}
        section2Paragraph6={section2Paragraph6}
        section2Heading7={section2Heading7}
        section2Paragraph7={section2Paragraph7}
        productMap={productMap}
      />
      <IcgAdditionalSection
        image3={image3}
        section1Heading3={section1Heading3}
        section1Paragraph3={section1Paragraph3}
        section1List1={section1List1}
        section1Heading4={section1Heading4}
        section1Paragraph4={section1Paragraph4}
        section1List2={section1List2}
        section1Heading5={section1Heading5}
        section1Paragraph5={section1Paragraph5}
        section1List3={section1List3}
        section1Heading6={section1Heading6}
        section1Paragraph6={section1Paragraph6}
        section1List4={section1List4}
        section1Heading7={section1Heading7}
        section1Paragraph7={section1Paragraph7}
        section1List5={section1List5}
        section1Heading8={section1Heading8}
        section1Paragraph8={section1Paragraph8}
        section1List6={section1List6}
        section1Heading9={section1Heading9}
        section1Paragraph9={section1Paragraph9}
        productMap={productMap}
      />
      <IcgFinalSection finalParagraph={finalParagraph} productMap={productMap} />
    </div>
  );
};

export default IcgMarketTemplate;