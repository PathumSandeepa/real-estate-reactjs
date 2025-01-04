import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import aboutUsImage1 from "../../assets/aboutUs/aboutUs-image-01.jpg";
import aboutUsImage2 from "../../assets/aboutUs/aboutUs-image-02.jpg";
import aboutUsImage3 from "../../assets/aboutUs/aboutUs-image-03.jpg";

function AboutUs() {
    const images = [aboutUsImage1, aboutUsImage2, aboutUsImage3];
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "opacity 1s ease-in-out",
    };

    return (
        <section className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4">
                    <h2 className="fw-bold mb-3">Who We Are</h2>
                    <p>
                        We are a trusted and innovative property solutions
                        provider, dedicated to helping individuals, families,
                        and businesses find their perfect space. Whether
                        you&apos;re buying, selling, or renting, our platform
                        combines simplicity and efficiency to make the process
                        seamless.
                    </p>

                    <h2 className="fw-bold mt-4 mb-3">Our Mission</h2>
                    <p>
                        To empower our clients with transparent, reliable, and
                        professional real estate services while creating
                        meaningful experiences in every transaction.
                    </p>

                    <h2 className="fw-bold mt-4 mb-3">Why Choose Us?</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            A vast network of properties tailored to your needs
                        </li>
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            Expert guidance every step of the way
                        </li>
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-check-circle-fill text-primary me-2"></i>
                            Cutting-edge tools for a hassle-free experience
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div
                        className="position-relative"
                        style={{ height: "400px" }}
                    >
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`About Us Slide ${index + 1}`}
                                style={{
                                    ...imageStyle,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    opacity: currentImage === index ? 1 : 0,
                                }}
                                className="rounded shadow"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card shadow p-4">
                        <h2 className="fw-bold mb-3">Our Commitment</h2>
                        <p>
                            At FindMyHome, we understand that finding the right
                            property is more than just a transaction—it’s about
                            building dreams and securing futures. With years of
                            expertise in the real estate industry, our team is
                            committed to delivering personalized solutions that
                            meet the unique needs of each client. Our platform
                            is designed to bring clarity and convenience to the
                            property-buying journey. Whether you’re searching
                            for a cozy home, a lucrative investment, or a rental
                            property that suits your lifestyle, we’ve got you
                            covered. Integrity, transparency, and customer
                            satisfaction are at the heart of everything we do.
                            From expert property valuations to legal guidance
                            and cutting-edge marketing strategies, we ensure a
                            seamless experience from start to finish.
                        </p>
                        <p>
                            Join us on this journey to discover your dream
                            property and experience the difference of working
                            with a team that genuinely cares. At FindMyHome,
                            your dreams are our priority.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
