import React, { useState } from 'react';
import { FaFilePdf, FaChevronLeft, FaChevronRight, FaStepBackward, FaStepForward } from 'react-icons/fa';
import './rejectedLeave.css'; // Import your CSS file for styling

const RejectedLeave = () => {
  // Sample user photos
  const userPhotos = {
    DEMO0009: 'https://randomuser.me/api/portraits/men/32.jpg',
    
  };

  // Sample rejected leave data (11 items)
  const allLeaveData = [
    {
      id: 1, userId: 'DEMO0009', userName: 'Demo Manager', leaveType: 'Peld Leave',
      startDate: '2025-03-11', endDate: '2025-03-12', createdOn: '10th, Mar 2025',
      days: 2, status: 'Rejected', remarks: 'Jedrind', rejectedBy: 'Hi Manager', rejectionRemarks: 'jfff'
    },
    {
      id: 2, userId: 'DEMO0009', userName: 'Akash Singh', leaveType: 'Catsuil Leave',
      startDate: '2025-03-14', endDate: '2025-03-14', createdOn: '7th, Mar 2025',
      days: 1, status: 'Rejected', remarks: 'wasa', rejectedBy: 'Hi Manager', rejectionRemarks: 'give proper reason'
    },
    // Add 9 more items to make total 11
    {
      id: 3, userId: 'DEMO0009', userName: 'Demo Manager', leaveType: 'Catsuil Leave',
      startDate: '2025-03-08', endDate: '2025-03-08', createdOn: '7th, Mar 2025',
      days: 1, status: 'Rejected', remarks: 'sssfoad', rejectedBy: 'Admin Admin', rejectionRemarks: 'assac'
    },
    {
      id: 4, userId: 'DEMO0009', userName: 'Rahul Sharma', leaveType: 'Sick Leave',
      startDate: '2025-03-15', endDate: '2025-03-16', createdOn: '14th, Mar 2025',
      days: 2, status: 'Rejected', remarks: 'Fever', rejectedBy: 'HR Manager', rejectionRemarks: 'Medical certificate required'
    },
    {
      id: 5, userId: 'DEMO0009', userName: 'Priya Patel', leaveType: 'Casual Leave',
      startDate: '2025-03-18', endDate: '2025-03-18', createdOn: '17th, Mar 2025',
      days: 1, status: 'Rejected', remarks: 'Personal work', rejectedBy: 'Team Lead', rejectionRemarks: 'Busy schedule'
    },
    {
      id: 6, userId: 'DEMO0009', userName: 'Amit Kumar', leaveType: 'Emergency Leave',
      startDate: '2025-03-20', endDate: '2025-03-21', createdOn: '19th, Mar 2025',
      days: 2, status: 'Rejected', remarks: 'Family emergency', rejectedBy: 'HR Manager', rejectionRemarks: 'Not approved'
    },
    {
      id: 7, userId: 'DEMO0009', userName: 'Neha Gupta', leaveType: 'Vacation Leave',
      startDate: '2025-03-25', endDate: '2025-03-27', createdOn: '24th, Mar 2025',
      days: 3, status: 'Rejected', remarks: 'Holiday trip', rejectedBy: 'Manager', rejectionRemarks: 'Peak season'
    },
    {
      id: 8, userId: 'DEMO0009', userName: 'Vikram Singh', leaveType: 'Half Day Leave',
      startDate: '2025-03-28', endDate: '2025-03-28', createdOn: '27th, Mar 2025',
      days: 0.5, status: 'Rejected', remarks: 'Doctor appointment', rejectedBy: 'Team Lead', rejectionRemarks: 'Reschedule'
    },
    {
      id: 9, userId: 'DEMO0009', userName: 'Anjali Mehta', leaveType: 'Work From Home',
      startDate: '2025-04-01', endDate: '2025-04-01', createdOn: '31th, Mar 2025',
      days: 1, status: 'Rejected', remarks: 'Internet issue', rejectedBy: 'Manager', rejectionRemarks: 'Come to office'
    },
    {
      id: 10, userId: 'DEMO0009', userName: 'Rajesh Verma', leaveType: 'Paternity Leave',
      startDate: '2025-04-05', endDate: '2025-04-10', createdOn: '4th, Apr 2025',
      days: 6, status: 'Rejected', remarks: 'Child birth', rejectedBy: 'HR Manager', rejectionRemarks: 'Not eligible yet'
    },
    {
      id: 11, userId: 'DEMO0009', userName: 'Sneha Reddy', leaveType: 'Maternity Leave',
      startDate: '2025-04-15', endDate: '2025-05-15', createdOn: '14th, Apr 2025',
      days: 31, status: 'Rejected', remarks: 'Delivery', rejectedBy: 'HR Head', rejectionRemarks: 'Apply through portal'
    }
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 11;
  const totalRecords = allLeaveData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allLeaveData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(totalPages);

  const exportToPDF = () => {
    console.log('Exporting to PDF...');
  };

  return (
    <div className="rejected-leave-container">
      <div className="header">
        <div className="title-section">
          <h1>Rejected Leaves <span className="count-badge">{totalRecords}</span></h1>
          <p>You can see all rejected leave requests here</p>
        </div>
        <button className="export-btn" onClick={exportToPDF}>
          <FaFilePdf className="pdf-icon" /> Export PDF
        </button>
      </div>

      <div className="table-container">
        <table className="leave-table">
          <thead>
            <tr>
              <th>User Profile</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Created On</th>
              <th>Days</th>
              <th>Status</th>
              <th>Remarks</th>
              <th>Rejected By</th>
              <th>Rejection Remarks</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((leave) => (
              <tr key={leave.id}>
                <td className="user-profile-cell">
                  <div className="user-profile-wrapper">
                    <img 
                      src={userPhotos[leave.userId] || 'https://via.placeholder.com/40'} 
                      alt="User" 
                      className="user-avatar"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/40';
                      }}
                    />
                    <div className="user-info">
                      <div className="user-id">{leave.userId}</div>
                      <div className="user-name">{leave.userName}</div>
                    </div>
                  </div>
                </td>
                <td>{leave.leaveType}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td>{leave.createdOn}</td>
                <td>{leave.days}</td>
                <td>
                  <span className="status-badge rejected">{leave.status}</span>
                </td>
                <td className="remarks">{leave.remarks}</td>
                <td>{leave.rejectedBy}</td>
                <td className="rejection-remarks">{leave.rejectionRemarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <div className="pagination-info">
          Showing {indexOfFirstRecord + 1} to {Math.min(indexOfLastRecord, totalRecords)} of {totalRecords} results
        </div>
        <div className="pagination-controls">
          <button 
            className="pagination-btn first-page" 
            onClick={firstPage}
            disabled={currentPage === 1}
          >
            <FaStepBackward />
          </button>
          <button 
            className="pagination-btn" 
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> Previous
          </button>
          <span className="page-indicator">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            className="pagination-btn" 
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next <FaChevronRight />
          </button>
          <button 
            className="pagination-btn last-page" 
            onClick={lastPage}
            disabled={currentPage === totalPages}
          >
            <FaStepForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectedLeave;