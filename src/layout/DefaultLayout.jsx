import React from 'react';
import { useSelector } from 'react-redux';
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components';
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index';

const DefaultLayout = () => {
  const isSidebarMinimized = useSelector((state) => state.sidebarUnfoldable);

  return (
    <div className={`default-layout ${isSidebarMinimized ? 'sidebar-collapsed' : 'sidebar-expanded'}`}
         style={{ 
           display: 'flex', 
           minHeight: '100vh',
           flexDirection: 'column',
           paddingBottom: '60px' // Add padding equal to footer height
         }}>
      <div style={{ display: 'flex', flex: 1 }}>
        <AppSidebar />
        <div className="wrapper d-flex flex-column" style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AppHeader />
          <div className="body flex-grow-1" style={{ 
            overflowY: 'auto',
            padding: '0'
          }}>
            <AppContent />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;