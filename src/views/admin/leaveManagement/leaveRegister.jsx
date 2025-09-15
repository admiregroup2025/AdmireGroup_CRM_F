import React from 'react'
import {
  FaUser,
  FaVenusMars,
  FaProcedures,
  FaBaby,
  FaMale,
  FaUmbrellaBeach,
  FaMoneyBillWave,
} from 'react-icons/fa'
import './leaveRegister.css' // Assuming you have a CSS file for styling

const LeaveRegister = () => {
  // Sample data
  const leaveData = [
    {
      id: 'DEM00004',
      name: 'Demo Emp',
      gender: 'Male',
      sickLeave: { used: 0, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 0, total: 6 },
      casualLeave: { used: 2, total: 49 },
      paidLeave: { used: 10, total: 2 },
    },
    {
      id: 'EMP00001',
      name: 'John Doe',
      gender: 'Male',
      sickLeave: { used: 3, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 2, total: 5 },
      casualLeave: { used: 5, total: 20 },
      paidLeave: { used: 8, total: 12 },
    },
    {
      id: 'EMP00002',
      name: 'Jane Smith',
      gender: 'Female',
      sickLeave: { used: 1, total: 10 },
      maternityLeave: { used: 90, total: 90 },
      paternityLeave: { used: 0, total: 'Not Applicable' },
      casualLeave: { used: 3, total: 15 },
      paidLeave: { used: 5, total: 10 },
    },
    {
      id: 'EMP00003',
      name: 'Michael Brown',
      gender: 'Male',
      sickLeave: { used: 2, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 5, total: 6 },
      casualLeave: { used: 4, total: 18 },
      paidLeave: { used: 6, total: 8 },
    },
    {
      id: 'EMP00004',
      name: 'Emily Davis',
      gender: 'Female',
      sickLeave: { used: 0, total: 10 },
      maternityLeave: { used: 0, total: 90 },
      paternityLeave: { used: 0, total: 'Not Applicable' },
      casualLeave: { used: 7, total: 20 },
      paidLeave: { used: 3, total: 5 },
    },
    {
      id: 'EMP00005',
      name: 'Chris Wilson',
      gender: 'Male',
      sickLeave: { used: 4, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 3, total: 6 },
      casualLeave: { used: 6, total: 25 },
      paidLeave: { used: 9, total: 10 },
    },
    {
      id: 'EMP00006',
      name: 'Sophia Johnson',
      gender: 'Female',
      sickLeave: { used: 2, total: 10 },
      maternityLeave: { used: 60, total: 90 },
      paternityLeave: { used: 0, total: 'Not Applicable' },
      casualLeave: { used: 8, total: 30 },
      paidLeave: { used: 4, total: 6 },
    },
    {
      id: 'EMP00007',
      name: 'David Martinez',
      gender: 'Male',
      sickLeave: { used: 1, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 4, total: 6 },
      casualLeave: { used: 10, total: 40 },
      paidLeave: { used: 7, total: 9 },
    },
    {
      id: 'EMP00008',
      name: 'Olivia Taylor',
      gender: 'Female',
      sickLeave: { used: 0, total: 10 },
      maternityLeave: { used: 30, total: 90 },
      paternityLeave: { used: 0, total: 'Not Applicable' },
      casualLeave: { used: 5, total: 20 },
      paidLeave: { used: 6, total: 8 },
    },
    {
      id: 'EMP00009',
      name: 'Liam Anderson',
      gender: 'Male',
      sickLeave: { used: 3, total: 10 },
      maternityLeave: { used: 0, total: 'Not Applicable' },
      paternityLeave: { used: 6, total: 6 },
      casualLeave: { used: 12, total: 50 },
      paidLeave: { used: 10, total: 15 },
    },
    {
      id: 'EMP00010',
      name: 'Ava Thomas',
      gender: 'Female',
      sickLeave: { used: 2, total: 10 },
      maternityLeave: { used: 45, total: 90 },
      paternityLeave: { used: 0, total: 'Not Applicable' },
      casualLeave: { used: 9, total: 25 },
      paidLeave: { used: 5, total: 7 },
    },
  ]

  return (
    <div className="leave-register-container">
      <div className="header">
        <h1>Leave Register</h1>
        <p>You can see all employee leave records here</p>
      </div>

      <div className="table-container">
        <table className="leave-table">
          <thead>
            <tr>
              <th className="table-header">
                <div className="header-content">
                  <FaUser className="header-icon" />
                  <span>User Profile</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaVenusMars className="header-icon" />
                  <span>Gender</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaProcedures className="header-icon" />
                  <span>Sick Leave</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaBaby className="header-icon" />
                  <span>Maternity Leave</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaMale className="header-icon" />
                  <span>Paternity Leave</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaUmbrellaBeach className="header-icon" />
                  <span>Casual Leave</span>
                </div>
              </th>
              <th className="table-header">
                <div className="header-content">
                  <FaMoneyBillWave className="header-icon" />
                  <span>Paid Leave</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((employee) => (
              <tr key={employee.id}>
                <td className="user-profile">
                  <div className="user-id">{employee.id}</div>
                  <div className="user-name">{employee.name}</div>
                </td>
                <td className="gender">
                  <span className="gender-icon">✅</span> {employee.gender}
                </td>
                <td className="leave-data sick-leave">
                  {employee.sickLeave.used}{' '}
                  <span className="leave-out-of">Out of {employee.sickLeave.total}</span>
                </td>
                <td className="leave-data maternity-leave">
                  {employee.maternityLeave.used}{' '}
                  <span className="leave-out-of">
                    {employee.maternityLeave.total === 'Not Applicable'
                      ? 'Not Applicable'
                      : `Out of ${employee.maternityLeave.total}`}
                  </span>
                </td>
                <td className="leave-data paternity-leave">
                  {employee.paternityLeave.used}{' '}
                  <span className="leave-out-of">Out of {employee.paternityLeave.total}</span>
                </td>
                <td className="leave-data casual-leave">
                  {employee.casualLeave.used}{' '}
                  <span className="leave-out-of">Out of {employee.casualLeave.total}</span>
                </td>
                <td className="leave-data paid-leave">
                  {employee.paidLeave.used}{' '}
                  <span className="leave-out-of">Out of {employee.paidLeave.total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeaveRegister
