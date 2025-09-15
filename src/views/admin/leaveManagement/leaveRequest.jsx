import React from 'react'
import { FaDownload, FaFilePdf, FaEdit, FaTrashAlt } from 'react-icons/fa'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import './leaveRequest.css'

const leaveData = [
  {
    id: 1,
    employeeId: 'E123',
    employee: 'John Doe',
    leaveType: 'Sick Leave',
    from: '2024-06-01',
    to: '2024-06-03',
    days: 3,
    remark: 'Fever and rest',
    status: 'Pending',
    createdAt: '2024-05-01',
  },
  {
    id: 2,
    employeeId: 'E124',
    employee: 'Jane Smith',
    leaveType: 'Casual Leave',
    from: '2024-06-05',
    to: '2024-06-07',
    days: 3,
    remark: 'Family event',
    status: 'Pending',
    createdAt: '2024-05-02',
  },
  {
    id: 3,
    employeeId: 'E125',
    employee: 'Robert Johnson',
    leaveType: 'Paid Leave',
    from: '2024-06-10',
    to: '2024-06-15',
    days: 6,
    remark: 'Vacation trip',
    status: 'Pending',
    createdAt: '2024-05-03',
  },
  {
    id: 4,
    employeeId: 'E126',
    employee: 'Alice Brown',
    leaveType: 'Sick Leave',
    from: '2024-06-12',
    to: '2024-06-14',
    days: 3,
    remark: 'Migraine',
    status: 'Pending',
    createdAt: '2024-05-04',
  },
  {
    id: 5,
    employeeId: 'E127',
    employee: 'Chris Davis',
    leaveType: 'Casual Leave',
    from: '2024-06-15',
    to: '2024-06-17',
    days: 3,
    remark: 'Personal matter',
    status: 'Pending',
    createdAt: '2024-05-05',
  },
  {
    id: 6,
    employeeId: 'E128',
    employee: 'Emily Wilson',
    leaveType: 'Paid Leave',
    from: '2024-06-18',
    to: '2024-06-23',
    days: 6,
    remark: 'Family vacation',
    status: 'Pending',
    createdAt: '2024-05-06',
  },
  {
    id: 7,
    employeeId: 'E129',
    employee: 'Michael Lee',
    leaveType: 'Sick Leave',
    from: '2024-06-20',
    to: '2024-06-22',
    days: 3,
    remark: 'Flu',
    status: 'Pending',
    createdAt: '2024-05-07',
  },
  {
    id: 8,
    employeeId: 'E130',
    employee: 'Sarah Clark',
    leaveType: 'Casual Leave',
    from: '2024-06-25',
    to: '2024-06-27',
    days: 3,
    remark: 'Urgent family matter',
    status: 'Pending',
    createdAt: '2024-05-08',
  },
  {
    id: 9,
    employeeId: 'E131',
    employee: 'David Evans',
    leaveType: 'Paid Leave',
    from: '2024-07-01',
    to: '2024-07-05',
    days: 5,
    remark: 'Anniversary trip',
    status: 'Pending',
    createdAt: '2024-05-09',
  },
  {
    id: 10,
    employeeId: 'E132',
    employee: 'Sophia Turner',
    leaveType: 'Sick Leave',
    from: '2024-07-02',
    to: '2024-07-04',
    days: 3,
    remark: 'Cold and cough',
    status: 'Pending',
    createdAt: '2024-05-10',
  },
]

const LeaveRequest = () => {
  const exportPDF = () => {
    const doc = new jsPDF()
    doc.text('Leave Requests', 14, 15)
    autoTable(doc, {
      startY: 20,
      head: [
        [
          'Employee ID',
          'Employee',
          'Leave Type',
          'From',
          'To',
          'Days',
          'Remark',
          'Status',
          'Created At',
        ],
      ],
      body: leaveData.map((l) => [
        l.employeeId,
        l.employee,
        l.leaveType,
        l.from,
        l.to,
        l.days,
        l.remark,
        l.status,
        l.createdAt,
      ]),
    })
    doc.save('LeaveRequests.pdf')
  }

  const handleEdit = (id) => {
    alert(`Edit Leave Request ID: ${id}`)
  }

  const handleDelete = (id) => {
    alert(`Delete Leave Request ID: ${id}`)
  }

  return (
    <div className="leave-container">
      <div className="leave-header">
        <div>
          <h2>Leave Requests</h2>
          <p>Overview of leave applications</p>
        </div>
        <button className="btn-pdf" onClick={exportPDF}>
          <FaFilePdf className="me-2" /> Export PDF
        </button>
      </div>

      <div className="table-responsive">
        <table className="leave-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Remark</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employeeId}</td>
                <td>{leave.employee}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.from}</td>
                <td>{leave.to}</td>
                <td>{leave.days}</td>
                <td className="truncate">{leave.remark}</td>
                <td>
                  <span
                    className={`badge ${leave.status === 'Approved' ? 'badge-success' : leave.status === 'Not Approved' ? 'badge-danger' : 'badge-warning'}`}
                  >
                    {leave.status}
                  </span>
                </td>
                <td>{leave.createdAt}</td>
                <td>
                  <button onClick={() => handleEdit(leave.id)} className="action-btn">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(leave.id)} className="action-btn">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveRequest
