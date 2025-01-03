import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import icgMarketData from "../icgMarketData.json";
import Footer from "./ui/footer/Footer";
import AboutUs from "./features/home/AboutUs";
import IcgManagement from "./features/home/IcgManagement";
import OurHistory from "./features/home/OurHistory";
import AvailableStock from "./features/home/AvailableStock";
import ProductDetail from "./features/home/ProductDetail";
import MediaPage from "./features/media/media-and-news/MediaPage";
import BlogsAndArticles from "./features/media/blogs-and-articles/BlogsAndArticles";
import Blog from "./features/media/blogs-and-articles/Blog";
import MediaText from "./features/media/MediaText";
import MediaEvents from "./features/media/MediaEvents";
import Contact from "./features/Contact/Contact";
import ICGCareer from "./features/Jobs/ICGCareer";
import Career from "./features/Jobs/Career";
import Gallery from "./features/media/gallery/Gallery";
import Home from "./ui/home-screen/home";
import IcgMarketTemplate from "./product-and-solutions/icg-market/IcgMarketTemplate";
import IcgLayout from "./product-and-solutions/icg-market/IcgLayout";
import ProductDetail from "./features/our-company/available-stocks/ProductDetail";
import AvailableStock from "./features/our-company/available-stocks/AvailableStock";
import IcgManagement from "./features/our-company/icg-management/IcgManagement";
import AboutUs from "./features/our-company/about/AboutUs";
import OurHistory from "./features/our-company/our-history/OurHistory";
import OurCompany from "./pages/OurCompnay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<OurCompany />} />

          {/* redirect /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/icg-management" element={<IcgManagement />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/available-stocks" element={<AvailableStock />} />
          <Route path="/media-news" element={<MediaPage />} />
          <Route path="/blog-articles" element={<BlogsAndArticles />} />
          <Route path="/blog-articles/:blogId" element={<Blog />} />
          <Route path="/blog-articles" element={<MediaText />} />
          <Route path="/media-events" element={<MediaEvents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/life-at-icg" element={<ICGCareer />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/available-stocks/:productId"
            element={<ProductDetail />}
          />

          {/* ICG Market */}
          <Route path="/products-and-solutions" element={<IcgLayout />}>
            <Route index element={<Home />} />
            <Route
              path=":pageName"
              element={
                <IcgMarketTemplate icgMarketData={icgMarketData.icgMarket} />
              }
            />
          </Route>
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
