import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import propertyData from "../../data/propertyData.json";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const PropertyContent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("description");
    const property = propertyData.find((prop) => prop.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!property) return <div>Property not found</div>;

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div className="container mt-4 flex-grow-1">
                {/* Back Button */}
                <button
                    className="btn btn-secondary mb-4"
                    onClick={() => navigate("/property")}
                >
                    <i className="bi bi-arrow-left"></i> Back to Properties
                </button>

                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="mb-4">
                            <div
                                id="propertyCarousel"
                                className="carousel slide mb-2"
                            >
                                <div className="carousel-inner">
                                    {property.images.map((image, index) => (
                                        <div
                                            className={`carousel-item ${
                                                index === currentImageIndex
                                                    ? "active"
                                                    : ""
                                            }`}
                                            key={index}
                                        >
                                            <img
                                                src={image}
                                                className="d-block w-100"
                                                alt={`Property ${index + 1}`}
                                                style={{
                                                    height: "400px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === 0
                                                ? property.images.length - 1
                                                : prev - 1
                                        )
                                    }
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    onClick={() =>
                                        setCurrentImageIndex((prev) =>
                                            prev === property.images.length - 1
                                                ? 0
                                                : prev + 1
                                        )
                                    }
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                </button>
                            </div>

                            {/* Thumbnails */}
                            <div className="d-flex gap-2 justify-content-center flex-wrap">
                                {property.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`cursor-pointer ${
                                            currentImageIndex === index
                                                ? "border border-primary"
                                                : ""
                                        }`}
                                        style={{
                                            width: "80px",
                                            height: "60px",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            borderRadius: "4px",
                                            margin: "2px",
                                        }}
                                        onClick={() =>
                                            setCurrentImageIndex(index)
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tabs */}
                        <ul className="nav nav-tabs mb-3">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${
                                        activeTab === "description"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("description")}
                                >
                                    Description
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${
                                        activeTab === "floorplan"
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() => setActiveTab("floorplan")}
                                >
                                    Floor Plan
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${
                                        activeTab === "location" ? "active" : ""
                                    }`}
                                    onClick={() => setActiveTab("location")}
                                >
                                    Location
                                </button>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {/* Discription  */}
                            {activeTab === "description" && (
                                <div className="tab-pane fade show active">
                                    <p>{property.longDescription}</p>
                                </div>
                            )}
                            {/* Floorplan  */}
                            {activeTab === "floorplan" && (
                                <div className="tab-pane fade show active">
                                    <img
                                        src={property.floorPlan}
                                        alt="Floor Plan"
                                        className="img-fluid"
                                    />
                                </div>
                            )}
                            {/* Location  */}
                            {activeTab === "location" && (
                                <div className="tab-pane fade show active">
                                    <LoadScript googleMapsApiKey="AIzaSyAGwxdsoc6fOtS0pBV_FV8g45wRxukJt9Q">
                                        <GoogleMap
                                            mapContainerStyle={{
                                                width: "100%",
                                                height: "400px",
                                            }}
                                            center={{
                                                lat: parseFloat(
                                                    property.location.latitude
                                                ),
                                                lng: parseFloat(
                                                    property.location.longitude
                                                ),
                                            }}
                                            zoom={15}
                                        >
                                            <Marker
                                                position={{
                                                    lat: parseFloat(
                                                        property.location
                                                            .latitude
                                                    ),
                                                    lng: parseFloat(
                                                        property.location
                                                            .longitude
                                                    ),
                                                }}
                                            />
                                        </GoogleMap>
                                    </LoadScript>
                                    <div className="mt-3">
                                        <a
                                            href={property.location.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary"
                                        >
                                            <i className="bi bi-geo-alt me-2"></i>
                                            View on Google Maps
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Section - 4 columns on desktop */}
                    <div className="col-12 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Type</th>
                                            <td>{property.type}</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>
                                                £
                                                {property.price.toLocaleString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Bedrooms</th>
                                            <td>{property.bedrooms}</td>
                                        </tr>
                                        <tr>
                                            <th>Date Added</th>
                                            <td>
                                                {new Date(
                                                    property.dateAdded
                                                ).toLocaleDateString()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Postcode</th>
                                            <td>{property.postcode}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyContent;
