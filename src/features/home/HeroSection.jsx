import { useState } from "react";
import "./herosection.css";

function HeroSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
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
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for CAS no. or Product name"
            />
            <button className="search-button">
              {/* <i className="fas fa-search"></i> */}
              <img
                className="searchicon"
                src="./assets/searchicon.png"
                alt="icon"
              ></img>
              {/* <i className="bi bi-search"></i> */}
            </button>
          </div>
        </div>
        <div className="vectors">
          <div className="vector-left"></div>
          <div className="vector-right"></div>
        </div>
      </div>

      <div className="chat-bot">
        <button className="chat-button" onClick={toggleChat}>
          Chat With Us
        </button>
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h3>Chatbot</h3>
              <button onClick={toggleChat}>&times;</button>
            </div>
            <div className="chat-body">
              <p>How can we assist you?</p>
            </div>
            <div className="chat-footer">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
