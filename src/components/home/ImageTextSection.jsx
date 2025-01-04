import "bootstrap/dist/css/bootstrap.min.css";
import whyChooseUsImage from "../../assets/home/image-text-section-image.jpg";

function ImageTextSection() {
    return (
        <section className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-3">
                    <h2>Why Choose Us?</h2>
                    <p>
                        Discover your dream property with confidence. We offer a
                        seamless experience, connecting you with the best homes,
                        competitive pricing, and personalized services to make
                        your journey hassle-free.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src={whyChooseUsImage}
                        alt="Modern real estate property"
                        className="img-fluid rounded"
                    />
                </div>
            </div>
        </section>
    );
}

export default ImageTextSection;
