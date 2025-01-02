import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import Footer from "./ui/footer/Footer";
import AboutUs from "./features/our-company/about/AboutUs";
import IcgManagement from "./features/our-company/icg-management/IcgManagement";
import OurHistory from "./features/our-company/our-history/OurHistory";
import AvailableStock from "./features/our-company/available-stocks/AvailableStock";
import ProductDetail from "./features/our-company/available-stocks/ProductDetail";
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
