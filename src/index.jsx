



import React from "react";
import { createRoot } from "react-dom/client";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import ScreenLayout from "./newComponents/ScreenLayout.jsx";
import MainDashboard from "./newComponents/dashboard/MainDashboard.jsx";
import MainLeadManagement from "./newComponents/leadManagement/MainLeadManagement.jsx";
import MainUserManagement from "./newComponents/UserManagement/MainUserManagement.jsx";
import MainAttendance from "./newComponents/attendance/MainAttendance.jsx";
import MainAllCompanies from "./newComponents/allCompanies/MainAllCompanies.jsx";
import MainSettings from "./newComponents/Settings/MainSettings.jsx";
import AddLeadShortcut from "./newComponents/dashboard/AddLeadShortcut.jsx";
import AddUserShortcut from "./newComponents/dashboard/AddUserShortcut.jsx";
import ClockInOutShortcut from "./newComponents/dashboard/ClockInOutShortcut.jsx";
import ViewReportsShortcut from "./newComponents/dashboard/ViewReportsShortcut.jsx";
import ForgotPassword from "./newComponents/loginSection/ForgotPassword.jsx";
import ResetLink from "./newComponents/loginSection/ResetLink.jsx";
import ChangePassword from "./newComponents/loginSection/ChangePassword.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import EditUser from "./newComponents/UserManagement/EditUser.jsx";
import { LeaveAdmin } from "./views/admin/leaveManagement/LeaveAdmin.jsx";
import { LeavePage } from "./views/employee/LeaveSection/LeavePage.jsx";

// ✅ ROUTER CONFIGURATION
const router = createBrowserRouter([
  // 🟢 Public route: Login Page
  {
    path: "/",
    element: <App />, // contains SignIn
  },

  // 🟢 Auth-related public routes
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetLink />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },

  // 🔒 Protected Routes (inside layout)
  {
    element: (
      <ProtectedRoute>
        <ScreenLayout />
      </ProtectedRoute>
    ),
    children: [
      // ✅ Both admin + employee can access
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <MainDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/lead-management",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <MainLeadManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/attendance",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <MainAttendance />
          </ProtectedRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <MainSettings />
          </ProtectedRoute>
        ),
      },

      // ✅ Admin only
      {
        path: "/user-management",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <MainUserManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "/companies",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <MainAllCompanies />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit/:role/:id",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <EditUser />
          </ProtectedRoute>
        ),
      },

      // ✅ Optional dashboard shortcuts (if both can access)
      {
        path: "/add-lead",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <AddLeadShortcut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-user",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AddUserShortcut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/clock-in-out",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <ClockInOutShortcut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/view-reports",
        element: (
          <ProtectedRoute allowedRoles={["admin", "employee"]}>
            <ViewReportsShortcut />
          </ProtectedRoute>
        ),
      },
      {
      path: "/leave-apply",
      element: (
        <ProtectedRoute allowedRoles={["employee"]}>
          <LeavePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/leaves",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <LeaveAdmin />
        </ProtectedRoute>
      ),
    },
    ],
  },
]);

// ✅ ROOT RENDER
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </React.StrictMode>
);
