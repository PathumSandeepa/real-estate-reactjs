import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutusPage from "./pages/AboutusPage.jsx";
import PropertyPage from "./pages/PropertyPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import BlogContentPage from "./pages/BlogContentPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/about-us" element={<AboutusPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogContentPage />} />
        </Routes>
    );
}

export default App;
