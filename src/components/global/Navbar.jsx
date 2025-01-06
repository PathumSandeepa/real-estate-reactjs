import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    FindMyHome
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-controls="navLinks"
                    aria-expanded={isNavOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navLinks">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/" onClick={() => setIsNavOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/property" onClick={() => setIsNavOpen(false)}>
                                Property
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/about-us" onClick={() => setIsNavOpen(false)}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/contact-us" onClick={() => setIsNavOpen(false)}>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/blogs" onClick={() => setIsNavOpen(false)}>
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;