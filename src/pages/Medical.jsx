import "./Medical.css";

const Medical = () => {
    return (
        <div className="medical-page">
            {/* Header Section */}
            <div className="header-section">
                <div className="header-text">
                    <h1>Pharmaceutical and Medical Solutions</h1>
                </div>
            </div>

            {/* Pharmaceutical Packaging Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Pharmaceutical Packaging</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>UV Degradation: Packaging materials like polyolefins and polyester films are prone to degradation from UV exposure, which can compromise the stability of sensitive pharmaceutical contents.</li>
                        <li>Oxidative Stress: Thermo-oxidative degradation of polymers in packaging reduces their mechanical integrity and protective capabilities.</li>
                        <li>Microbial Growth: Packaging in healthcare applications must also resist microbial contamination to ensure sterility and product integrity.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>UV Protection: OMNIQUAN BP2 and UV 1789: UV stabilizers that protect packaging materials from UV-induced degradation, ensuring the stability and effectiveness of pharmaceutical products.</li>
                        <li>Omniquan LS 770: A HALS-based stabilizer that enhances resistance to UV and oxidative stress, with additional antimicrobial properties to prevent microbial contamination.</li>
                        <li>Omniquan 5151: A hybrid HALS/UV absorber that extends material life while providing added antimicrobial benefits.</li>
                        <li>Antioxidant Stabilization: OMNIQUAN 1076 and OMNIQUAN 5057: Prevent oxidation in packaging materials, preserving their structural integrity and preventing premature product degradation.</li>
                    </ul>
                </div>
            </div>

            {/* Medical Device Manufacturing Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Medical Device Manufacturing</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>Durability and Wear: Medical devices are subject to frequent use, friction, and wear, which can compromise material performance over time.</li>
                        <li>Thermal Stress: Devices exposed to sterilization processes must resist degradation due to high temperatures.</li>
                        <li>Fire Resistance: Safety regulations require medical devices to be flame-retardant without compromising material strength.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>Durability Enhancers: OMNIQUAN 329 and OMNIQUAN 1330: Stabilizers that improve the mechanical and thermal properties of polymers, ensuring long-lasting durability under wear and friction.</li>
                        <li>Flame Retardants: OMNIQUAN BEO and OMNIQUAN BDDP: Environmentally friendly flame retardants that enhance fire resistance in medical device housings and laboratory equipment.</li>
                    </ul>
                </div>
            </div>

            {/* Personal Care and Cosmetic Packaging Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Personal Care and Cosmetic Packaging</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>UV Exposure: Packaging for skincare and cosmetic products is prone to degradation from UV rays, which can compromise the stability of the formulations.</li>
                        <li>Material Compatibility: Packaging materials must maintain integrity when in contact with emulsions and gels, ensuring no compromise to the product.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>UV Absorbers: UV Avobenzone and UV BEMOTRIZONOL: High-performance UV absorbers that provide broad-spectrum protection for personal care formulations and their packaging, extending their shelf life.</li>
                    </ul>
                </div>
            </div>

            {/* Laboratory and Healthcare Equipment Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Laboratory and Healthcare Equipment</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>Thermal and Mechanical Stress: Equipment used in laboratories and hospitals must endure repeated sterilization and mechanical strain without degrading.</li>
                        <li>Fire Safety: Equipment must meet stringent fire safety regulations to ensure safe operation in sensitive environments.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>Thermal Stability: OMNIQUAN 329 and OMNIQUAN 1330: Enhance the heat and friction resistance of healthcare equipment, ensuring longevity and reliability.</li>
                        <li>Flame Retardants: OMNIQUAN BEO and OMNIQUAN BDDP: Offer flame retardancy with eco-friendly profiles, ensuring compliance with safety standards.</li>
                    </ul>
                </div>
            </div>

            {/* Sterilizable Packaging Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Sterilizable Packaging</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>Oxidation Resistance: Materials must withstand high temperatures and oxidative stress during sterilization processes.</li>
                        <li>Microbial Contamination: Packaging must ensure sterility to maintain product safety and extend shelf life.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>Antioxidant Stabilizers: OMNIQUAN 1076 and OMNIQUAN 5057: Prevent thermo-oxidative degradation of polymers used in sterilizable packaging, preserving their integrity.</li>
                        <li>Antimicrobial Stabilizers: Omniquan LS 770: Offer added antimicrobial protection, reducing risks of microbial contamination and ensuring sterility.</li>
                    </ul>
                </div>
            </div>

            {/* Sustainable Medical Applications Section */}
            <div className="content-section">
                <div className="text-section">
                    <h2>Sustainable Medical Applications</h2>
                    <h3>Challenges:</h3>
                    <ul>
                        <li>Environmental Compliance: The medical industry is under pressure to adopt sustainable and eco-friendly materials without compromising performance.</li>
                        <li>Material Longevity: Sustainable materials must still provide the necessary mechanical and thermal properties required in medical applications.</li>
                    </ul>
                    <h3>ICG Solutions:</h3>
                    <ul>
                        <li>Sustainable Additives: OMNIQUAN 802 and OMNIQUAN 1084 NQ: Eco-friendly additives that enhance the durability and environmental compatibility of medical materials, supporting sustainable practices.</li>
                    </ul>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <p>
                    ICG Chemical’s comprehensive solutions for pharmaceutical and medical applications are designed to improve operational efficiency, product quality, and sustainability, empowering the industry to meet modern demands with innovative, eco-conscious chemical technologies.
                </p>
            </div>
        </div>
    );
};

export default Medical;
