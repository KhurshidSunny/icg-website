
import "./Electronics.css";

const Electronics = () => {
    return (
        <div className="electronics-page">
            {/* Header Section */}
            <div className="header-section-electronic">
                <div className="header-text">
                    <h1>Electronics</h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Electronics Solutions</h2>
                    <p>
                        ICG Chemical supports the electronics industry with advanced
                        chemical solutions that enhance performance, reliability, and
                        sustainability in electronic devices and components.
                    </p>
                    <h3>High-Purity Electronic Chemicals</h3>
                    <p>
                        ICG Chemical provides ultra-high purity chemicals essential for
                        manufacturing semiconductors and microelectronics. Our portfolio
                        includes cleaning agents, etchants, and specialty gases designed for
                        precision and purity, ensuring optimal performance in sensitive
                        electronic components. These chemicals meet the stringent standards
                        of the electronics industry, helping to prevent contamination and
                        improve device reliability.
                    </p>
                </div>

                <div className="image-section">
                    <img
                        src="./assets/electronics.png"
                        alt="Printer with vivid colors"
                        style={{ width: "556px", height: "476px", objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Solutions Section */}

            <div className="image-section">
                <img
                    src="./assets/1714264394299 1.png"
                    alt="Printer with vivid colors"
                />
            </div>
            <div className="solutions-section">
                <div className="solution">
                    <h3>Thermal Management Materials</h3>
                    <p>
                        Our range of thermal management materials, such as thermally
                        conductive adhesives, pastes, and encapsulants, effectively
                        dissipate heat in electronic devices, ensuring stability and
                        prolonging component lifespan. These materials are designed for high
                        thermal conductivity, excellent adhesion, and durability, making
                        them ideal for applications in power electronics, LED lighting, and
                        more.
                    </p>
                </div>

                <div className="solution">
                    <h3>Advanced Dielectric Fluids for Circuit Boards</h3>
                    <p>
                        ICG Chemical offers a range of dielectric fluids that provide
                        exceptional insulation and stability for printed circuit boards
                        (PCBs) and other electronic components. Our solutions are engineered
                        to resist breakdown under high voltages and extreme conditions,
                        enhancing the safety and longevity of electronic assemblies in
                        demanding applications.
                    </p>
                </div>
            </div>

            <div className="image-section">
                <img
                    src="./assets/Electronic-Chemicalsn 1.png"
                    alt="Printer with vivid colors"
                />
            </div>
            <div className="content-section">
                <div className="text-section">
                    <h2>Green Solvents for Electronics Manufacturing</h2>
                    <p>
                        We supply environmentally friendly solvents, including low-VOC
                        options like Isopropanol and Ethyl Lactate, tailored for electronics
                        cleaning and degreasing. These green solvents are fast-drying,
                        effective at removing contaminants, and safe for sensitive
                        components, helping manufacturers maintain high-quality standards
                        while reducing environmental impact.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <p>
                    At ICG Chemical, we’re dedicated to driving sustainability and
                    efficiency in the automotive industry with cutting-edge materials and
                    solutions. Our portfolio enables our customers to meet the evolving
                    demands of the market, ensuring a cleaner and more efficient future
                    for mobility.
                </p>
            </div>
        </div>
    );
};

export default Electronics;