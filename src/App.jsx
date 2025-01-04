import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import Footer from "./ui/footer/Footer";
import MediaPage from "./features/media/media-and-news/MediaPage";
import BlogsAndArticles from "./features/media/blogs-and-articles/BlogsAndArticles";
import Blog from "./features/media/blogs-and-articles/Blog";
import MediaText from "./features/media/media-and-news/MediaText";
import MediaEvents from "./features/media/media-and-news/MediaEvents";
import Contact from "./features/Contact/Contact";
import ICGCareer from "./features/Jobs/ICGCareer";
import Career from "./features/Jobs/Career";
import Gallery from "./features/media/gallery/Gallery";
import Home from "./ui/home-screen/home";
import IcgMarketTemplate from "./product-and-solutions/icg-market/IcgMarketTemplate";
import IcgLayout from "./product-and-solutions/icg-market/IcgLayout";
import ProductDetail from "./features/our-company/available-stocks/ProductDetail";
import AvailableStock from "./features/our-company/available-stocks/AvailableStock";
import OurCompany from "./pages/OurCompnay";
import AboutUs from "./features/our-company/about/AboutUs";
import IcgManagement from "./features/our-company/icg-management/IcgManagement";
import OurHistory from "./features/our-company/our-history/OurHistory";
import icgMarketData from "../icgMarketData.json";
import Antioxidant from "./features/category/Antioxidant";
import HinderedAminLightStabilizers from "./features/category/HinderedAminLightStabilizers";
import UVAbsorbers from "./features/category/UVAbsorbers";
import FlameRetardant from "./features/category/FlameRetardant";
import OpticalBrightner from "./features/category/OpticalBrightner";
import PigmentDyes from "./features/category/PigmentDyes";
import PolymersAndResins from "./features/category/PolymersAndResins";
import NucleactingAgents from "./features/category/NucleactingAgents";
import MasterBatch from "./features/category/MasterBatch";
import AntiBlock from "./features/category/AntiBlock";
import MediaEvent from "./features/media/media-and-news/MediaEvent";

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
          <Route path="/media-events/:mediaId" element={<MediaEvent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/life-at-icg" element={<ICGCareer />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/products-and-solutions/antioxidants-(na)"
            element={<Antioxidant />}
          />
          <Route
            path="/products-and-solutions/hindered-amine-light-stabilizers-(hals)"
            element={<HinderedAminLightStabilizers />}
          />
          <Route
            path="/products-and-solutions/uv-absorbers"
            element={<UVAbsorbers />}
          />
          <Route
            path="/products-and-solutions/flame-retardants"
            element={<FlameRetardant />}
          />
          <Route
            path="/products-and-solutions/opticalbrighteners(ob)"
            element={<OpticalBrightner />}
          />
          <Route
            path="/products-and-solutions/pigmentsand-dyes"
            element={<PigmentDyes />}
          />
          <Route
            path="/products-and-solutions/ppolymers-and-resins"
            element={<PolymersAndResins />}
          />
          <Route
            path="/products-and-solutions/nucleating-agents"
            element={<NucleactingAgents />}
          />
          <Route
            path="/products-and-solutions/masterbatch"
            element={<MasterBatch />}
          />
          <Route
            path="/products-and-solutions/anti-blocks"
            element={<AntiBlock />}
          />

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
