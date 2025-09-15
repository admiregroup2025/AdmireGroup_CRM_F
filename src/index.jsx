import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
