import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilClock, cilCalendar, cilMoney, cilTask, cilSettings, cilUser, cilFile, cilBell, cilBuilding, cilFolder, cilBriefcase, cilList } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/hr/dashboard',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employee',
    to: '/hr/employee',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,

  },
  {
    component: CNavItem,
    name: 'Salary',
    to: '/hr/salary',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,

    


  },

//   // Attendance
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'My Attendance', to: '/hr/attendance/myAttendance' },
      { component: CNavItem, name: 'Attendance Register', to: '/hr/attendance/attendanceRegister' },
    ],
  },

//   // Leave Management
  {
    component: CNavGroup,
    name: 'Leave Management',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Apply Leave', to: '/hr/leaveManagement/apply' },
      { component: CNavItem, name: 'Pending', to: '/hr/leaveManagement/pending' },
      { component: CNavItem, name: 'Accepted', to: '/hr/leaveManagement/accepted' },
      { component: CNavItem, name: 'Rejected', to: '/hr/leaveManagement/rejected' },
      { component: CNavItem, name: 'Assign Leave', to: '/hr/leaveManagement/assign' },
      { component: CNavItem, name: 'Emp Leave Balance', to: '/hr/leaveManagement/balance' },
      { component: CNavItem, name: 'Leave Register', to: '/hr/leaveManagement/leaveRegister' },
    ],
  },

//   // Payroll
  
  
]

export default _nav
