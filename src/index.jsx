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
import MainLeadManagement from "./newComponents/leadManagement/MainLeadManagement.jsx";
import MainUserManagement from "./newComponents/userManagement/MainUserManagement.jsx";
import MainAttendance from "./newComponents/attendance/MainAttendance.jsx";
import MainAllCompanies from "./newComponents/allCompanies/MainAllCompanies.jsx";
import MainSettings from "./newComponents/Settings/MainSettings.jsx";
import MainDashboard from "./newComponents/dashboard/MainDashboard.jsx";
import AddLeadShortcut from "./newComponents/dashboard/AddLeadShortcut.jsx";
import AddUserShortcut from "./newComponents/dashboard/AddUserShortcut.jsx";
import ClockInOutShortcut from "./newComponents/dashboard/ClockInOutShortcut.jsx";
import ViewReportsShortcut from "./newComponents/dashboard/ViewReportsShortcut.jsx";
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
        path: "/",
        element: <ScreenLayout />,
        children: [
            {
                path: "/dashboard",
                element: <MainDashboard />,
            },
            {
                path: "/lead-management",
                element: <MainLeadManagement />,
            },
            {
                path: "/user-management",
                element: <MainUserManagement />,
            },
            {
                path: "/attendance",
                element: <MainAttendance />,
            },
            {
                path: "/companies",
                element: <MainAllCompanies />,
            },
            {
                path: "/settings",
                element: <MainSettings />,
            },
            {
                path: "/add-lead",
                element: <AddLeadShortcut />,
            },
            {
                path: "/add-user",
                element: <AddUserShortcut />,
            },
            {
                path: "/clock-in-out",
                element: <ClockInOutShortcut />,
            },
            {
                path: "/view-reports",
                element: <ViewReportsShortcut />,
            },
        ],
    },

    {
        path: "/reset-password",
        element: <ResetLink />,
    },
    {
        path: "/change-password",
        element: <ChangePassword />,
    },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
