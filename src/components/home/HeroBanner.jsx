import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../../assets/home/Propaty-hero-banner-image.jpg";

function HeroBanner() {
    return (
        <section
            className="p-5 text-white bg-dark d-flex align-items-center justify-content-center"
            style={{
                minHeight: "50vh",
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="container text-center">
                <h1>Welcome to FindMyHome</h1>
                <p>Discover your dream property with ease.</p>
            </div>
        </section>
    );
}

export default HeroBanner;