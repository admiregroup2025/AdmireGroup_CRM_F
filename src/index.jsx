import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./newComponents/loginSection/ForgotPassword.jsx";
import ScreenLayout from "./newComponents/ScreenLayout.jsx";
import ChangePassword from "./newComponents/loginSection/ChangePassword.jsx";
import ResetLink from "./newComponents/loginSection/ResetLink.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },

    {
        path: "/dashboard",
        element: <ScreenLayout />,
    },
    {
        path: "/lead-management",
        element: <ScreenLayout />,
    },
    {
        path: "/user-management",
        element: <ScreenLayout />,
    },
    {
        path: "/attendance",
        element: <ScreenLayout />,
    },
    {
        path: "/companies",
        element: <ScreenLayout />,
    },
    {
        path: "/settings",
        element: <ScreenLayout />,
    },
    {
        path: "reset-password",
        element: <ResetLink />,
    },
    {
        path:"change-password",
        element:<ChangePassword/>
    }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
