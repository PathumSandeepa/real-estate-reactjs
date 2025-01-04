import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import contactImage from "../../assets/contactUs/contact-us-image.jpg";

function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            alert("Form submitted!");
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div
                className="row align-items-center w-100"
                style={{ maxWidth: "1200px" }}
            >
                {/* Form Section */}
                <div
                    className="col-lg-6 p-0 d-flex align-items-center justify-content-center"
                    style={{ height: "80vh" }}
                >
                    <div
                        className="shadow-lg p-5 bg-white rounded-lg w-100 h-100 d-flex flex-column justify-content-center"
                        style={{
                            borderRadius: "1rem",
                            transition: "transform 0.3s ease",
                            maxWidth: "600px",
                        }}
                    >
                        <h2 className="mb-4 text-dark fw-bold text-center">
                            Contact Us
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="form-label fw-bold"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className={`form-control shadow-sm ${
                                        errors.name ? "is-invalid" : ""
                                    }`}
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="form-label fw-bold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`form-control shadow-sm ${
                                        errors.email ? "is-invalid" : ""
                                    }`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="form-label fw-bold"
                                >
                                    Message
                                </label>
                                <textarea
                                    className={`form-control shadow-sm ${
                                        errors.message ? "is-invalid" : ""
                                    }`}
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && (
                                    <div className="invalid-feedback">
                                        {errors.message}
                                    </div>
                                )}
                            </div>

                            <div className="d-flex justify-content-between">
                                <button
                                    type="submit"
                                    className="btn btn-success shadow-sm"
                                    style={{ borderRadius: "0.5rem" }}
                                >
                                    Submit
                                </button>
                                <button
                                    type="reset"
                                    className="btn btn-secondary shadow-sm"
                                    style={{ borderRadius: "0.5rem" }}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className="col-lg-6 p-0 d-flex align-items-center justify-content-center"
                    style={{ height: "80vh" }}
                >
                    <img
                        src={contactImage}
                        alt="Contact Us"
                        className="img-fluid shadow rounded-lg"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "1rem",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
