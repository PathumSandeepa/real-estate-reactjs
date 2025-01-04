import Navbar from "../components/global/Navbar.jsx";
import HeroBanner from "../components/home/HeroBanner.jsx";
import OurServices from "../components/home/OurServices.jsx";
import ImageTextSection from "../components/home/ImageTextSection.jsx";
import Footer from "../components/global/Footer.jsx";

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <OurServices />
            <ImageTextSection />
            <Footer />
        </>
    );
}

export default HomePage;
