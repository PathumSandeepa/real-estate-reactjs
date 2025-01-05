import { useState } from "react";
import Navbar from "../components/global/Navbar.jsx";
import Footer from "../components/global/Footer.jsx";
import Search from "../components/property/Search.jsx";
import ProductCards from "../components/property/ProductCards.jsx";
import Favourites from "../components/property/FavouritesSec.jsx";

function PropertyPage() {
    const [searchFilters, setSearchFilters] = useState({
        propertyType: "Any",
        minPrice: "",
        maxPrice: "",
        minBedrooms: "",
        maxBedrooms: "",
        dateAdded: "",
        postcode: "",
    });

    const handleSearchChange = (filters) => {
        setSearchFilters(filters);
    };

    const handleAddToFavorites = (property) => {
        const favorites =
            JSON.parse(localStorage.getItem("favoriteProperties")) || [];
        if (!favorites.find((f) => f.id === property.id)) {
            const newFavorites = [...favorites, property];
            localStorage.setItem(
                "favoriteProperties",
                JSON.stringify(newFavorites)
            );
            // Force Favourites component to update
            window.dispatchEvent(new Event("storage"));
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Search onSearchChange={handleSearchChange} />
                <div className="row mt-4">
                    <div className="col-md-8">
                        <ProductCards
                            searchFilters={searchFilters}
                            onAddToFavorites={handleAddToFavorites}
                        />
                    </div>
                    <div className="col-md-4">
                        <Favourites />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PropertyPage;
