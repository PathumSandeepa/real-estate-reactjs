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
            style={{ border: isOver ? "2px dashed #333" : "none" }}
            className="card p-3"
        >
            <h5 className="mb-3">Favorites</h5>
            <ul className="list-group mb-3">
                {favorites.map((fav) => (
                    <li
                        key={fav.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        {fav.type} - £{fav.price}
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => removeProperty(fav.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            {favorites.length > 0 && (
                <button className="btn btn-warning" onClick={clearAll}>
                    Clear All
                </button>
            )}
            {favorites.length === 0 && <p>No favorites yet.</p>}
        </div>
    );
}

export default Favourites;
