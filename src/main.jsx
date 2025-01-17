import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DndProvider>
);
