import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Search({ onSearchChange }) {
    const [propertyType, setPropertyType] = useState("Any");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minBedrooms, setMinBedrooms] = useState("");
    const [maxBedrooms, setMaxBedrooms] = useState("");
    const [dateAdded, setDateAdded] = useState("");
    const [postcode, setPostcode] = useState("");

    useEffect(() => {
        onSearchChange({
            propertyType,
            minPrice,
            maxPrice,
            minBedrooms,
            maxBedrooms,
            dateAdded,
            postcode,
        });
    }, [
        propertyType,
        minPrice,
        maxPrice,
        minBedrooms,
        maxBedrooms,
        dateAdded,
        postcode,
        onSearchChange,
    ]);

    const handleReset = () => {
        setPropertyType("Any");
        setMinPrice("");
        setMaxPrice("");
        setMinBedrooms("");
        setMaxBedrooms("");
        setDateAdded("");
        setPostcode("");
        onSearchChange({
            propertyType: "Any",
            minPrice: "",
            maxPrice: "",
            minBedrooms: "",
            maxBedrooms: "",
            dateAdded: "",
            postcode: "",
        });
    };

    return (
        <div className="card p-3 mb-3">
            <h5 className="mb-3">Filter & Search</h5>
            <form>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                    {/* Property Type */}
                    <div className="col">
                        <label className="form-label">Property Type</label>
                        <select
                            className="form-select"
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                        >
                            <option value="Any">Any</option>
                            <option value="House">House</option>
                            <option value="Flat">Flat</option>
                            <option value="Bungalow">Bungalow</option>
                        </select>
                    </div>

                    {/* Min Price */}
                    <div className="col">
                        <label className="form-label">Min Price</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            placeholder="0"
                        />
                    </div>

                    {/* Max Price */}
                    <div className="col">
                        <label className="form-label">Max Price</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="9999999"
                        />
                    </div>

                    {/* Min Bedrooms */}
                    <div className="col">
                        <label className="form-label">Min Beds</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={minBedrooms}
                            onChange={(e) => setMinBedrooms(e.target.value)}
                            placeholder="1"
                        />
                    </div>

                    {/* Max Bedrooms */}
                    <div className="col">
                        <label className="form-label">Max Beds</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={maxBedrooms}
                            onChange={(e) => setMaxBedrooms(e.target.value)}
                            placeholder="10"
                        />
                    </div>

                    {/* Date Added */}
                    <div className="col">
                        <label className="form-label">Date Added</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateAdded}
                            onChange={(e) => setDateAdded(e.target.value)}
                        />
                    </div>

                    {/* Postcode */}
                    <div className="col">
                        <label className="form-label">Postcode</label>
                        <input
                            type="text"
                            className="form-control"
                            value={postcode}
                            onChange={(e) =>
                                setPostcode(e.target.value.toUpperCase())
                            }
                            placeholder="e.g. BR1"
                        />
                    </div>

                    {/* Reset Button */}
                    <div className="col d-flex align-items-end">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

Search.propTypes = {
    onSearchChange: PropTypes.func.isRequired,
};

export default Search;
