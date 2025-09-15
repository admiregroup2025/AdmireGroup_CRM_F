import React from 'react';
import AdminSidebar from '../components/Admin/Admin.Sidebar';
import { AppFooter, AppHeader } from '../components';
import { Outlet } from 'react-router-dom';
import AdminContent from '../components/Admin/AdminContent';

const AdminLayout = () => {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column',
      position: 'relative',
      paddingBottom: '60px' // Equal to footer height
    }}>
      <div style={{ 
        display: 'flex', 
        flex: 1,
        minHeight: 'calc(100vh - 60px)' // Account for footer height
      }}>
        <AdminSidebar />
        <div className="wrapper d-flex flex-column" style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AppHeader />
          <div className="body flex-grow-1" style={{ 
            overflowY: 'auto',
            padding: '1rem',
            marginBottom: '1rem' // Extra space before footer
          }}>
            <Outlet />
            <AdminContent />
          </div>
        </div>
      </div>
      {/* Footer placed outside the main content container */}
      <AppFooter />
    </div>
  );
};

export default AdminLayout;