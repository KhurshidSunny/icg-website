import heroImage from '../assets/images/hero-image.jpg'; // Add your hero image here
import cropImage1 from '../assets/images/crop1.jpg'; // Add crop image 1 here
import cropImage2 from '../assets/images/crop2.jpg'; // Add crop image 2 here
import cropImage3 from '../assets/images/crop3.jpg'; // Add crop image 3 here

const AgricultureFeedAndFood = () => {
    return (
        <div className="agriculture-feed-food-page">
            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '60vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="hero-content">
                    <h1>Agriculture Feed & Food</h1>
                </div>
            </section>

            {/* Crop Protection Section */}
            <section className="section crop-protection">
                <div className="section-content">
                    <h2>Crop Protection and Pest Management</h2>
                    <p>
                        <strong>Challenges:</strong> Safeguarding crops from pests and diseases while ensuring sustainability and compliance with regulations.
                    </p>
                    <p>
                        <strong>Solutions:</strong> <i>Omniquan FR200</i> - A non-halogenated flame retardant used in agricultural films to provide flame resistance and UV stability, protecting crops from environmental stress and enhancing film longevity.
                    </p>
                    <p>
                        <i>Omniquan Dicumene</i> - Used as a stabilizer for agrochemical formulations, improving the performance and shelf life of pest control agents.
                    </p>
                </div>
                <div className="section-image">
                    <img src={cropImage1} alt="Crop Protection" />
                </div>
            </section>

            {/* Specialty Chemicals Solutions Section */}
            <section className="section specialty-chemicals">
                <div className="section-content">
                    <h2>Key Segments and ICG Specialty Chemicals&apos; Solutions</h2>
                    <p>
                        <strong>Challenges:</strong> Construction materials often face extreme weather, UV exposure, and mechanical stress, requiring adhesives that offer robust bonding and long-term durability.
                    </p>
                    <p>
                        <strong>Solutions:</strong> <i>Omniquan AN168</i> - A powerful antioxidant that enhances thermal stability in structural adhesives.
                    </p>
                    <p>
                        <i>Omniquan UV 234</i> - A high-performance UV absorber that protects construction adhesives from photodegradation, extending their lifespan.
                    </p>
                    <p>
                        <i>Omniquan AN245</i> - Improves flexibility and stress tolerance in sealants, ensuring durability under variable loads.
                    </p>
                </div>
                <div className="section-image">
                    <img src={cropImage2} alt="Specialty Chemicals Solutions" />
                </div>
            </section>

            {/* Additional Image Section */}
            <section className="section additional-image">
                <img src={cropImage3} alt="Farmer in the field" />
            </section>
        </div>
    );
};

export default AgricultureFeedAndFood;
