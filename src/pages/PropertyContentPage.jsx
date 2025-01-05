import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import PropertyContent from "../components/property/Propertycontent";

function PropertyContentPage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navbar />
            <div style={{ flex: "1 0 auto" }}>
                <PropertyContent />
            </div>
            <Footer />
        </div>
    );
}

export default PropertyContentPage;
