const CoreValues = () => {
  const values = [
    {
      heading: "Quick follow up, no Nonsense",
      paragraph:
        "ICG Chemicals represents a commitment to uncompromising efficiency.",
      icon: "🚀", // Replace with your chosen icons or use a library like Font Awesome
    },
    {
      heading: "Long term partnerships",
      paragraph:
        "We pride ourselves on cultivating long-term partnerships, with a specific emphasis on specific needs.",
      icon: "🤝",
    },
    {
      heading: "Offering the alternative",
      paragraph:
        "We source and create partner-based solutions, products, and services.",
      icon: "🔄",
    },
    {
      heading: "Low(est) price guarantee",
      paragraph: "We believe in keeping our company lean and competitive.",
      icon: "💰",
    },
    {
      heading: "Local stock",
      paragraph:
        "Local stock ensures that all our top-performing products are readily available.",
      icon: "📦",
    },
    {
      heading: "Global Presence",
      paragraph:
        "Our global presence allows us to handle business directly from our Utrecht headquarters or through local distributors.",
      icon: "🌍",
    },
  ];

  return (
    <section
      className="relative w-full max-w-screen-xl mx-auto bg-cover bg-center py-16 px-4"
      //   style={{
      //     backgroundImage: "url('./core-values-bg.png')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     position: "relative",
      //     zIndex: 3,
      //   }}
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold text-teal-900 mb-12">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div
              className="flex items-center justify-center w-20 h-20 border-[1px] border-[#8AA823] rounded-full"
              style={{ width: "100px", height: "100px" }}
            >
              <span className="text-white text-3xl ">{value.icon}</span>
            </div>
            <h5
              className="font-bold text-lg text-teal-900"
              style={{
                fontFamily: "Albert Sans",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "28.8px",
              }}
            >
              {value.heading}
            </h5>
            <p
              className="text-base text-teal-900"
              style={{
                fontFamily: "Albert Sans",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19.2px",
              }}
            >
              {value.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
