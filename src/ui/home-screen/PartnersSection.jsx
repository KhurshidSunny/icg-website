import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PartnersSection() {
  const settings = {
    infinite: true,
    speed: 3000, // Speed of sliding
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: "linear", // Ensures smooth scrolling
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Don't pause on hover
    swipe: false, // Disable swipe to maintain continuous effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-background-light dark:bg-background-dark py-4 px-6">
      <div className="flex items-center mb-4">
        <h2 className="font-montserrat text-[21px] font-medium text-text-light dark:text-text-dark capitalize">
          <span className="text-primary dark:text-primary-light">
            OUR PARTNERS IN{" "}
          </span>
          <span className="text-secondary dark:text-secondary-light">
            CHEMICALS
          </span>
        </h2>
      </div>

      <Slider {...settings}>
        {[
          "./assets/partners logo/1.png.png",
          "./assets/partners logo/4.png.png",
          "./assets/partners logo/5.webp.png",
          "./assets/partners logo/6.webp.png",
          "./assets/partners logo/7.webp.png",
          "./assets/partners logo/1.png.png",
          "./assets/partners logo/5.webp.png",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Partner ${index + 1}`}
            className="h-[80px] object-contain dark:invert"
          />
        ))}
      </Slider>
    </div>
  );
}

export default PartnersSection;
