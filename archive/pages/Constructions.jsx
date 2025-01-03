import "./construction.css";

const Construction = () => {
    return (
        <div className="construction-page">
            {" "}
            {/* Corrected class name */}
            {/* Header Section */}
            <div className="header-section">
                <div className="header-text">
                    <h1>Electronics</h1>
                </div>
            </div>
            {/* Main Content Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Printing and Packaging Solutions</h2>
                    <p>
                        ICG Chemical is committed to advancing the printing and packaging
                        industry with innovative chemical solutions that elevate efficiency,
                        quality, and environmental responsibility.
                    </p>
                    <h3>High-Performance Inks and Coatings</h3>
                    <p>
                        ICG Chemical provides a diverse selection of high-performance
                        resins, pigments, and additives tailored for the printing and
                        packaging sectors. Our portfolio includes solutions like low-VOC
                        solvents and water-based emulsions that ensure vivid colors,
                        excellent adhesion, and fast drying times. These products enhance
                        the durability and visual appeal of printed materials, supporting
                        eco-friendly practices and complying with the latest environmental
                        regulations.
                    </p>
                </div>

                <div className="image-section">
                    <img
                        src="./assets/image.png"
                        alt="Printer with vivid colors"
                        style={{ width: "556px", height: "476px", objectFit: "cover" }}
                    />
                </div>
            </div>
            {/* Solutions Section */}
            <div className="solutions-section">
                <div className="solution">
                    <h3>Sustainable Adhesives for Packaging</h3>
                    <p>
                        We offer a range of environmentally friendly adhesives designed to
                        meet the demands of modern packaging. From bio-based hot-melt
                        adhesives to high-bond pressure-sensitive options, our products
                        deliver strong, reliable performance across various substrates,
                        including paper, plastic, and metal. By reducing waste and
                        optimizing bonding efficiency, our adhesives contribute to
                        sustainable packaging solutions without compromising quality.
                    </p>
                </div>

                <div className="solution">
                    <h3>Barrier Coatings for Enhanced Product Protection</h3>
                    <p>
                        ICG Chemical’s advanced barrier coatings provide exceptional
                        protection against moisture, oxygen, and grease, ensuring the
                        longevity and safety of packaged goods. Our sustainable coatings,
                        including biodegradable and compostable options, are ideal for food
                        packaging applications and comply with stringent food safety
                        regulations. These coatings maintain the integrity of packaged
                        products while supporting brands’ environmental goals.
                    </p>
                </div>
            </div>
            <div className="content-section">
                <div className="text-section">
                    <h2>Green Solvents for Printing Efficiency</h2>
                    <p>
                        Our green solvents, including Isopropanol, Ethyl Acetate, and
                        MIBCOL, are specially formulated to enhance the efficiency of
                        printing processes. With fast evaporation rates, excellent solvency,
                        and reduced toxicity, these solvents ensure superior ink performance
                        and easy cleanup. By reducing environmental impact and meeting
                        regulatory requirements, our solvents align with sustainable
                        printing practices.
                    </p>
                </div>
            </div>
            {/* Footer Section */}
            <div className="footer-section">
                <p>
                    ICG Chemical’s comprehensive solutions for printing and packaging are
                    designed to improve operational efficiency, product quality, and
                    sustainability, empowering the industry to meet modern demands with
                    innovative, eco-conscious chemical technologies.
                </p>
            </div>
        </div>
    );
};

export default Construction;
