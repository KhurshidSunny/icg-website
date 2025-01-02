import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import Footer from "./ui/footer/Footer";
import AboutUs from "./features/home/AboutUs";
import IcgManagement from "./features/home/IcgManagement";
import OurHistory from "./features/home/OurHistory";
import AvailableStock from "./features/home/AvailableStock";
import ProductDetail from "./features/home/ProductDetail";
import MediaPage from "./features/media/MediaPage";
import MediaText from "./features/media/MediaText";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* redirect /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/icg-management" element={<IcgManagement />} />
          <Route path="/our-history" element={<OurHistory />} />
          <Route path="/available-stocks" element={<AvailableStock />} />
          <Route path="/media-news" element={<MediaPage />} />
          <Route path="/blog-articles" element={<MediaText />} />
          <Route
            path="/available-stocks/:productId"
            element={<ProductDetail />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
