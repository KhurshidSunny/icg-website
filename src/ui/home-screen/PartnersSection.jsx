import "./partnerSection.css";
function PartnersSection() {
  return (
    <div className="line-section">
      <div className="line-text">
        <span className="ourpartner">OUR PARTNERS IN </span>
        <span className="highlight">CHEMICALS</span>
      </div>

      {/* Vertical line between text and marquee */}
      <div className="vertical-line"></div>

      {/* Marquee content */}
      <div className="marquee">
        <div className="marquee-content">
          <img
            src="./assets/partners logo/1.png.png"
            alt="CMA"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/4.png.png"
            alt="Virgin"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/5.webp.png"
            alt="Emirates"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/6.webp.png"
            alt="Hapaq"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/7.webp.png"
            alt="Maersk"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/1.png.png"
            alt="CMA"
            className="img-fluid"
          />
          <img
            src="./assets/partners logo/5.webp.png"
            alt="Emirates"
            className="img-fluid"
          />

          {/* <img src="../../assets/imgs/Airlines logos/British.svg" alt="British" className="img-fluid" />
              <img src="../../assets/imgs/Airlines logos/Qatar.svg" alt="Qatar" className="img-fluid" />
              <img src="../../assets/imgs/Airlines logos/Etihad.svg" alt="Etihad" className="img-fluid" />
              <img src="../../assets/imgs/Airlines logos/KLM.svg" alt="KLM" className="img-fluid" /> */}
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
