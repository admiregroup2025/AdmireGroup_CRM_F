import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./newComponents/loginSection/ForgotPassword.jsx"
import ChangePassword from "./newComponents/loginSection/ChangePassword.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
     {
        path: "/forgot-passwrod",
        element: <ForgotPassword/>,
    },
    {
        path:"change-password",
        element:<ChangePassword/>
    }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
