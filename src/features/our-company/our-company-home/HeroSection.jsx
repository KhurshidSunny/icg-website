import { useState } from "react";
import "./herosection.css";

function HeroSection() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="landing-page">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source
            src="./assets/3191916-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1>SERVING CHEMICALS</h1>
          <p>
            AT ICG SPECIALTY CHEMICALS FZCO We Aim To Improve The Quality Of
            Your Products By Providing Environmental Friendly Chemicals
          </p>

          <div className="search-bar-container">
            <div className={`search-bar ${isSearchOpen ? "active" : ""}`}>
              <input
                type="text"
                placeholder="Search for CAS no. or Product name"
              />
              <button className="search-button">
                <img
                  className="searchicon"
                  src="./assets/searchicon.png"
                  alt="icon"
                ></img>
              </button>
            </div>
            <button className="mobile-toggle-button" onClick={toggleSearch}>
              {isSearchOpen ? "Hide Search" : "Show Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
