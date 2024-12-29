import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/header/Navbar";
import Footer from "./ui/footer/Footer";
import AboutUs from "./features/home/AboutUs";
import IcgManagement from "./features/home/IcgManagement";
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
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
