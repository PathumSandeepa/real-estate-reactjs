import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

function Favourites() {
    const [favorites, setFavorites] = useState([]);

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "PROPERTY",
        drop: (item) => {
            const stored =
                JSON.parse(localStorage.getItem("favoriteProperties")) || [];
            if (!stored.find((i) => i.id === item.property.id)) {
                const updated = [...stored, item.property];
                localStorage.setItem(
                    "favoriteProperties",
                    JSON.stringify(updated)
                );
                window.dispatchEvent(new Event("storage"));
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    useEffect(() => {
        const loadFavorites = () => {
            const stored =
                JSON.parse(localStorage.getItem("favoriteProperties")) || [];
            setFavorites(stored);
        };
        loadFavorites();
        window.addEventListener("storage", loadFavorites);
        return () => window.removeEventListener("storage", loadFavorites);
    }, []);

    const removeProperty = (id) => {
        const updated = favorites.filter((item) => item.id !== id);
        setFavorites(updated);
        localStorage.setItem("favoriteProperties", JSON.stringify(updated));
    };

    const clearAll = () => {
        setFavorites([]);
        localStorage.removeItem("favoriteProperties");
    };

    return (
        <div
            ref={dropRef}
            className="card p-3"
            style={{
                border: isOver ? "2px dashed #007bff" : "2px solid #dee2e6",
                borderRadius: "8px",
                background: isOver ? "#f8f9fa" : "white",
                transition: "all 0.3s ease",
                minHeight: "200px",
                boxShadow: isOver ? "0 0 10px rgba(0,123,255,0.3)" : "none",
            }}
        >
            <div className="d-flex align-items-center mb-3">
                <h5 className="mb-0 me-2">Favorites</h5>
                <i className="bi bi-bookmark-heart text-primary"></i>
            </div>

            <ul className="list-group mb-3">
                {favorites.map((fav) => (
                    <li
                        key={fav.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        style={{
                            transition: "all 0.2s ease",
                            background: "#fff",
                            border: "1px solid #dee2e6",
                            marginBottom: "5px",
                            borderRadius: "4px",
                        }}
                    >
                        <div>
                            <i className="bi bi-house-door me-2"></i>
                            {fav.type} - £{fav.price}
                        </div>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeProperty(fav.id)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>

            {favorites.length > 0 && (
                <button className="btn btn-warning w-100" onClick={clearAll}>
                    <i className="bi bi-trash-fill me-2"></i>
                    Clear All
                </button>
            )}

            {favorites.length === 0 && (
                <div className="text-center py-4">
                    <i className="bi bi-arrow-down-circle display-4 text-muted mb-3"></i>
                    <p className="text-muted">
                        Drop properties here to add to favorites
                    </p>
                    <div
                        className="border-dashed p-3 mt-2"
                        style={{
                            border: "2px dashed #dee2e6",
                            borderRadius: "4px",
                        }}
                    >
                        <i className="bi bi-plus-circle me-2"></i>
                        Drag and Drop Zone
                    </div>
                </div>
            )}
        </div>
    );
}

export default Favourites;
