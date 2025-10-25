// // import React from "react";
// // import { createRoot } from "react-dom/client";
// // import { Provider } from "react-redux";
// // import "@coreui/coreui/dist/css/coreui.min.css";
// // import "./index.css";
// // import App from "./App.jsx";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import ForgotPassword from "./newComponents/loginSection/ForgotPassword.jsx";
// // import ScreenLayout from "./newComponents/ScreenLayout.jsx";
// // import ChangePassword from "./newComponents/loginSection/ChangePassword.jsx";
// // import ResetLink from "./newComponents/loginSection/ResetLink.jsx";
// // import MainLeadManagement from "./newComponents/leadManagement/MainLeadManagement.jsx";
// // import MainUserManagement from "./newComponents/userManagement/MainUserManagement.jsx";
// // import MainAttendance from "./newComponents/attendance/MainAttendance.jsx";
// // import MainAllCompanies from "./newComponents/allCompanies/MainAllCompanies.jsx";
// // import MainSettings from "./newComponents/Settings/MainSettings.jsx";
// // import MainDashboard from "./newComponents/dashboard/MainDashboard.jsx";
// // import AddLeadShortcut from "./newComponents/dashboard/AddLeadShortcut.jsx";
// // import AddUserShortcut from "./newComponents/dashboard/AddUserShortcut.jsx";
// // import ClockInOutShortcut from "./newComponents/dashboard/ClockInOutShortcut.jsx";
// // import ViewReportsShortcut from "./newComponents/dashboard/ViewReportsShortcut.jsx";
// // const router = createBrowserRouter([
// //     {
// //         path: "/",
// //         element: <App />,
// //     },
// //     {
// //         path: "/forgot-password",
// //         element: <ForgotPassword />,
// //     },

// //     {
// //         path: "/",
// //         element: <ScreenLayout />,
// //         children: [
// //             {
// //                 path: "/dashboard",
// //                 element: <MainDashboard />,
// //             },
// //             {
// //                 path: "/lead-management",
// //                 element: <MainLeadManagement />,
// //             },
// //             {
// //                 path: "/user-management",
// //                 element: <MainUserManagement />,
// //             },
// //             {
// //                 path: "/attendance",
// //                 element: <MainAttendance />,
// //             },
// //             {
// //                 path: "/companies",
// //                 element: <MainAllCompanies />,
// //             },
// //             {
// //                 path: "/settings",
// //                 element: <MainSettings />,
// //             },
// //             {
// //                 path: "/add-lead",
// //                 element: <AddLeadShortcut />,
// //             },
// //             {
// //                 path: "/add-user",
// //                 element: <AddUserShortcut />,
// //             },
// //             {
// //                 path: "/clock-in-out",
// //                 element: <ClockInOutShortcut />,
// //             },
// //             {
// //                 path: "/view-reports",
// //                 element: <ViewReportsShortcut />,
// //             },
// //         ],
// //     },

// //     {
// //         path: "/reset-password",
// //         element: <ResetLink />,
// //     },
// //     {
// //         path: "/change-password",
// //         element: <ChangePassword />,
// //     },
// // ]);

// // createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import "@coreui/coreui/dist/css/coreui.min.css";
// import "./index.css";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Pages
// import ForgotPassword from "./newComponents/loginSection/ForgotPassword.jsx";
// import ScreenLayout from "./newComponents/ScreenLayout.jsx";
// import ChangePassword from "./newComponents/loginSection/ChangePassword.jsx";
// import ResetLink from "./newComponents/loginSection/ResetLink.jsx";
// import MainLeadManagement from "./newComponents/leadManagement/MainLeadManagement.jsx";
// import MainUserManagement from "./newComponents/userManagement/MainUserManagement.jsx";
// import MainAttendance from "./newComponents/attendance/MainAttendance.jsx";
// import MainAllCompanies from "./newComponents/allCompanies/MainAllCompanies.jsx";
// import MainSettings from "./newComponents/Settings/MainSettings.jsx";
// import MainDashboard from "./newComponents/dashboard/MainDashboard.jsx";
// import AddLeadShortcut from "./newComponents/dashboard/AddLeadShortcut.jsx";
// import AddUserShortcut from "./newComponents/dashboard/AddUserShortcut.jsx";
// import ClockInOutShortcut from "./newComponents/dashboard/ClockInOutShortcut.jsx";
// import ViewReportsShortcut from "./newComponents/dashboard/ViewReportsShortcut.jsx";
// import SignIn from "./newComponents/loginSection/SignIn.jsx";

// // Define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/",
//     element: <ScreenLayout />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <MainDashboard />,
//       },
//       {
//         path: "/lead-management",
//         element: <MainLeadManagement />,
//       },
//       {
//         path: "/user-management",
//         element: <MainUserManagement />,
//       },
//       {
//         path: "/attendance",
//         element: <MainAttendance />,
//       },
//       {
//         path: "/companies",
//         element: <MainAllCompanies />,
//       },
//       {
//         path: "/settings",
//         element: <MainSettings />,
//       },
//       {
//         path: "/add-lead",
//         element: <AddLeadShortcut />,
//       },
//       {
//         path: "/add-user",
//         element: <AddUserShortcut />,
//       },
//       {
//         path: "/clock-in-out",
//         element: <ClockInOutShortcut />,
//       },
//       {
//         path: "/view-reports",
//         element: <ViewReportsShortcut />,
//       },
//     ],
//   },
//   {
//     path: "/reset-password",
//     element: <ResetLink />,
//   },
//   {
//     path: "/change-password",
//     element: <ChangePassword />,
//   },
// ]);

// // Render the app
// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Optional: wrap with Redux provider if using redux store */}
//     {/* <Provider store={store}> */}
//     <>
//       <RouterProvider router={router} />
//       <ToastContainer position="top-right" autoClose={3000} />
//     </>
//     {/* </Provider> */}
//   </React.StrictMode>
// );




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
import MainUserManagement from "./newComponents/userManagement/MainUserManagement.jsx";
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

const router = createBrowserRouter([
  // 🟢 Public route: Login Page
  {
    path: "/",
    element: <App />, // contains SignIn
  },

  // 🟢 (Optional) Other public auth-related routes
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

  // 🔒 Private routes: everything inside ScreenLayout
  {
    element: (
      <ProtectedRoute>
        <ScreenLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <MainDashboard /> },
      { path: "/lead-management", element: <MainLeadManagement /> },
      { path: "/user-management", element: <MainUserManagement /> },
      { path: "/attendance", element: <MainAttendance /> },
      { path: "/companies", element: <MainAllCompanies /> },
      { path: "/settings", element: <MainSettings /> },
      { path: "/add-lead", element: <AddLeadShortcut /> },
      { path: "/add-user", element: <AddUserShortcut /> },
      { path: "/clock-in-out", element: <ClockInOutShortcut /> },
      { path: "/view-reports", element: <ViewReportsShortcut /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  </React.StrictMode>
);
