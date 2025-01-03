import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import icgMarketData from "../icgMarketData.json";
import Footer from "./ui/footer/Footer";
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
