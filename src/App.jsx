import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutusPage from "./pages/AboutusPage.jsx";
import PropertyPage from "./pages/PropertyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/about-us" element={<AboutusPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
    );
}

export default App;
