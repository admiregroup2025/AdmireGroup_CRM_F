import React, { useState } from 'react';
import { FaFilePdf, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './approvedLeave.css'; // Assuming you have a CSS file for styling

const ApprovedLeave = () => {
  // Sample user photos
  const userPhotos = {
    IDEA00004: 'https://randomuser.me/api/portraits/women/44.jpg',
    IDEA00003: 'https://randomuser.me/api/portraits/men/32.jpg',
    IDEA00009: 'https://randomuser.me/api/portraits/women/68.jpg',
    IDEA00010: 'https://randomuser.me/api/portraits/men/75.jpg',
    IDEA00011: 'https://randomuser.me/api/portraits/women/25.jpg',
    IDEA00012: 'https://randomuser.me/api/portraits/men/22.jpg',
    IDEA00013: 'https://randomuser.me/api/portraits/women/33.jpg',
    IDEA00014: 'https://randomuser.me/api/portraits/men/44.jpg',
  };

  // Sample leave data
const allLeaveData = [
  {
    id: 1, userId: 'IDEA00004', userName: 'Demo Emp', leaveType: 'Palo! Leave',
    startDate: '18-03-2025', endDate: '18-03-2025', createdOn: '17th, Mar 2025',
    days: 1, status: 'Approved', remarks: 'ABC:', approver: 'Demo Manager'
  },
  {
    id: 2, userId: 'IDEA00004', userName: 'Demo Emp', leaveType: 'Casual Leave',
    startDate: '19-03-2025', endDate: '20-03-2025', createdOn: '17th, Mar 2025',
    days: 3, status: 'Approved', remarks: 'Attend wedding', approver: 'Hr Manager'
  },
  {
    id: 3, userId: 'IDEA00003', userName: 'John Doe', leaveType: 'Sick Leave',
    startDate: '21-03-2025', endDate: '22-03-2025', createdOn: '20th, Mar 2025',
    days: 2, status: 'Approved', remarks: 'Medical reasons', approver: 'Team Lead'
  },
  {
    id: 4, userId: 'IDEA00009', userName: 'Jane Smith', leaveType: 'Maternity Leave',
    startDate: '01-04-2025', endDate: '30-06-2025', createdOn: '15th, Mar 2025',
    days: 90, status: 'Approved', remarks: 'Maternity', approver: 'HR Manager'
  },
  {
    id: 5, userId: 'IDEA00010', userName: 'Michael Brown', leaveType: 'Paternity Leave',
    startDate: '05-04-2025', endDate: '15-04-2025', createdOn: '01st, Apr 2025',
    days: 10, status: 'Approved', remarks: 'Newborn care', approver: 'HR Manager'
  },
  {
    id: 6, userId: 'IDEA00011', userName: 'Emily Davis', leaveType: 'Annual Leave',
    startDate: '10-05-2025', endDate: '20-05-2025', createdOn: '01st, May 2025',
    days: 10, status: 'Approved', remarks: 'Vacation', approver: 'Team Lead'
  },
  {
    id: 7, userId: 'IDEA00012', userName: 'Chris Wilson', leaveType: 'Sick Leave',
    startDate: '15-05-2025', endDate: '16-05-2025', createdOn: '14th, May 2025',
    days: 2, status: 'Approved', remarks: 'Flu', approver: 'Manager'
  },
  {
    id: 8, userId: 'IDEA00013', userName: 'Sophia Johnson', leaveType: 'Casual Leave',
    startDate: '20-05-2025', endDate: '21-05-2025', createdOn: '18th, May 2025',
    days: 2, status: 'Approved', remarks: 'Family event', approver: 'Team Lead'
  },
  {
    id: 9, userId: 'IDEA00014', userName: 'David Martinez', leaveType: 'Annual Leave',
    startDate: '25-05-2025', endDate: '30-05-2025', createdOn: '20th, May 2025',
    days: 6, status: 'Approved', remarks: 'Vacation', approver: 'HR Manager'
  },
  {
    id: 10, userId: 'IDEA00004', userName: 'Demo Emp', leaveType: 'Sick Leave',
    startDate: '01-06-2025', endDate: '02-06-2025', createdOn: '31st, May 2025',
    days: 2, status: 'Approved', remarks: 'Medical reasons', approver: 'Manager'
  },
  {
    id: 11, userId: 'IDEA00003', userName: 'John Doe', leaveType: 'Casual Leave',
    startDate: '05-06-2025', endDate: '06-06-2025', createdOn: '03rd, Jun 2025',
    days: 2, status: 'Approved', remarks: 'Personal work', approver: 'Team Lead'
  }
];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalRecords = allLeaveData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = allLeaveData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  const exportToPDF = () => {
    console.log('Exporting to PDF...');
  };

  return (
    <div className="approved-leave-container">
      <div className="header">
        <div className="title-section">
          <h1>Approved Leaves <span className="count-badge">{totalRecords}</span></h1>
          <p>You can see all approved leave requests here</p>
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
              <th>Approver</th>
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
                  <span className="status-badge approved">{leave.status}</span>
                </td>
                <td className="remarks">{leave.remarks}</td>
                <td>{leave.approver}</td>
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
            className="pagination-btn" 
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft /> Previous
          </button>
          <button 
            className="pagination-btn" 
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedLeave;