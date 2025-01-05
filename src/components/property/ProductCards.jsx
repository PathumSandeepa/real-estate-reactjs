import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import propertyData from "../../data/propertyData.json";

function DraggableCard({ property, onAddToFavorites }) {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "PROPERTY",
        item: { property },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return (
        <div
            ref={dragRef}
            style={{ opacity: isDragging ? 0.5 : 1 }}
            className="card h-100"
        >
            <img
                src={property.images[0]}
                className="card-img-top"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{property.type}</h5>
                <p className="card-text">
                    <strong>Price:</strong> £{property.price}
                    <br />
                    <strong>Bedrooms:</strong> {property.bedrooms}
                    <br />
                    <strong>Postcode:</strong> {property.postcode}
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => onAddToFavorites(property)}
                >
                    Favorite
                </button>
            </div>
        </div>
    );
}

function ProductCards({ searchFilters, onAddToFavorites }) {
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        let filtered = propertyData;
        if (searchFilters.propertyType !== "Any") {
            filtered = filtered.filter(
                (item) => item.type === searchFilters.propertyType
            );
        }
        if (searchFilters.minPrice) {
            filtered = filtered.filter(
                (item) => item.price >= parseInt(searchFilters.minPrice, 10)
            );
        }
        if (searchFilters.maxPrice) {
            filtered = filtered.filter(
                (item) => item.price <= parseInt(searchFilters.maxPrice, 10)
            );
        }
        if (searchFilters.minBedrooms) {
            filtered = filtered.filter(
                (item) =>
                    item.bedrooms >= parseInt(searchFilters.minBedrooms, 10)
            );
        }
        if (searchFilters.maxBedrooms) {
            filtered = filtered.filter(
                (item) =>
                    item.bedrooms <= parseInt(searchFilters.maxBedrooms, 10)
            );
        }
        if (searchFilters.dateAdded) {
            filtered = filtered.filter(
                (item) => item.dateAdded >= searchFilters.dateAdded
            );
        }
        if (searchFilters.postcode) {
            filtered = filtered.filter((item) =>
                item.postcode.toUpperCase().startsWith(searchFilters.postcode)
            );
        }
        setFilteredProperties(filtered);
    }, [searchFilters]);

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredProperties.map((property) => (
                <div className="col" key={property.id}>
                    <DraggableCard
                        property={property}
                        onAddToFavorites={onAddToFavorites}
                    />
                </div>
            ))}
        </div>
    );
}

DraggableCard.propTypes = {
    property: PropTypes.object.isRequired,
    onAddToFavorites: PropTypes.func.isRequired,
};

ProductCards.propTypes = {
    searchFilters: PropTypes.shape({
        propertyType: PropTypes.string.isRequired,
        minPrice: PropTypes.string,
        maxPrice: PropTypes.string,
        minBedrooms: PropTypes.string,
        maxBedrooms: PropTypes.string,
        dateAdded: PropTypes.string,
        postcode: PropTypes.string,
    }).isRequired,
    onAddToFavorites: PropTypes.func.isRequired,
};

export default ProductCards;
