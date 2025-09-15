import React from 'react';
import HrContent from '../components/hr/HrContent';
import HrSidebar from '../components/hr/HrSidebar';
import { AppFooter, AppHeader } from '../components';

const HrLayout = () => {
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
        <HrSidebar />
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
            <HrContent />
          </div>
        </div>
      </div>
      {/* Footer placed outside the main content container */}
      <AppFooter />
    </div>
  );
};

export default HrLayout;