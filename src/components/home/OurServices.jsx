import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function OurServices() {
    const services = [
        {
            title: "Property Listings",
            description:
                "Explore a wide range of properties tailored to your preferences. Find your dream home or ideal investment opportunity.",
        },
        {
            title: "Sell Your Property",
            description:
                "List your property with us and reach thousands of potential buyers. Fast, reliable, and hassle-free service.",
        },
        {
            title: "Rentals Made Easy",
            description:
                "Find the perfect rental property to match your needs. Affordable options for families, individuals, and businesses.",
        },
        {
            title: "Property Valuation",
            description:
                "Get an accurate market value for your property. Our experts provide reliable appraisals and guidance.",
        },
        {
            title: "Legal Assistance",
            description:
                "Navigate property transactions with ease. Our legal experts ensure a smooth and secure process.",
        },
        {
            title: "Customized Solutions",
            description:
                "Tailored property solutions to fit your unique needs. From consultancy to closing deals, we're here for you.",
        },
    ];

    const cardStyle = {
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
    };

    const hoverStyle = {
        transform: "translateY(-5px)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    };

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="container my-5">
            <h2 className="mb-4 text-center font-weight-bold">Our Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div
                            className="card h-100 shadow p-3 bg-white rounded"
                            style={{
                                ...cardStyle,
                                ...(hoveredCard === index ? hoverStyle : {}),
                            }}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text flex-grow-1">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurServices;
