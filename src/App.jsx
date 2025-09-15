import React, { lazy , Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSpinner, useColorModes } from '@coreui/react';
import './index.css';

// Lazy load components
const DefaultLayout = lazy(() => import('./layout/DefaultLayout.jsx'));
const HrLayout = lazy(() => import('./layout/HrLayout.jsx'));
const AdminLayout = lazy(() => import('./layout/AdminLayout.jsx'));
const MgrLayout = lazy(() => import('./layout/MgrLayout.jsx'));
const CompanyPage = lazy(() => import('./views/CompanyPage.jsx'));
const LoginPage = lazy(() => import('./loginPage/Loginpage.jsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const [storedTheme, setStoredTheme] = useState('light');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1]);
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0];
    
    if (theme) {
      setColorMode(theme);
      setStoredTheme(theme);
      return;
    }

    if (!isColorModeSet()) {
      setColorMode(storedTheme);
    }
  }, [storedTheme, isColorModeSet, setColorMode]);

  return (
    <Router>
      <Suspense fallback={<div className="pt-3 text-center"><CSpinner color="primary" /></div>}>
        <div className="app-container">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<CompanyPage />} />

            {/* Protected Routes */}
            <Route path="/hr" element={
              // <ProtectedRoute>
              //   <HrLayout />
              // </ProtectedRoute>
                <HrLayout />

            } />

            <Route path="/admin/" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            } />

            <Route path="/manager/*" element={
              // <ProtectedRoute>
                // <MgrLayout />
              // </ProtectedRoute>
                <MgrLayout />

            } />

            <Route path="/employee/*" element={
              // <ProtectedRoute>
              //   <DefaultLayout />
              // </ProtectedRoute>

                <DefaultLayout />

            } />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
