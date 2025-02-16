function PartnersSection() {
  return (
    <div className="flex items-center justify-start w-full h-[100px] pl-[80px] bg-background-light dark:bg-background-dark">
      <div className="font-montserrat text-[21px] font-medium text-text-light dark:text-text-dark capitalize whitespace-nowrap mr-[20px]">
        <span className="text-primary dark:text-primary-light">OUR PARTNERS IN </span>
        <span className="text-secondary dark:text-secondary-light">CHEMICALS</span>
      </div>

      {/* Vertical line between text and marquee */}
      <div className="w-[2px] h-full bg-neutral-light dark:bg-neutral-dark mr-[20px]" />

      {/* Marquee content */}
      <div className="relative overflow-hidden w-full h-full whitespace-nowrap mr-[40px] bg-background-light dark:bg-background-dark pt-0">
        <div className="inline-flex items-center animate-marquee mt-[10px]">
          <img
            src="./assets/partners logo/1.png.png"
            alt="CMA"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/4.png.png"
            alt="Virgin"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/5.webp.png"
            alt="Emirates"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/6.webp.png"
            alt="Hapaq"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/7.webp.png"
            alt="Maersk"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/1.png.png"
            alt="CMA"
            className="h-[80px] mr-[20px] object-contain"
          />
          <img
            src="./assets/partners logo/5.webp.png"
            alt="Emirates"
            className="h-[80px] mr-[20px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;