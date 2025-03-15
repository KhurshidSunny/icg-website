import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="mt-16 md:mt-24">
      <div className="flex flex-wrap gap-6 justify-center px-4 md:px-0">
        <FeatureCard
          svg="SVG (1).png"
          title="Market Leadership"
          paragraph="ICG Chemicals offers innovative and eco-friendly chemical solutions for industries worldwide, focusing on Masterbatch, Compounding, Inks, and Coatings."
        />
        <FeatureCard
          svg="SVG (4).png"
          title="Cost & Process Leadership"
          paragraph="At ICG Chemicals, we streamline and innovate processes, enhancing supply chain efficiency and energy use to deliver cost-effective, sustainable solutions."
        />
        <FeatureCard
          svg="SVG (5).png"
          title="Energy Transition"
          paragraph="ICG Chemicals aims for carbon neutrality by 2050, leveraging sustainability to boost profitability and secure a competitive, greener future."
        />
        <FeatureCard
          svg="SVG (6).png"
          title="Cost Discipline"
          paragraph="At ICG Chemicals, capital discipline and strategic cash management drive value creation, safeguard investments, and ensure consistent returns, supporting sustainable growth."
        />
      </div>
    </section>
  );
}

export default Features;