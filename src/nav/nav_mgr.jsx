import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilClock, cilCalendar, cilMoney, cilTask, cilSettings, cilUser, cilFile, cilBell, cilBuilding, cilFolder, cilBriefcase, cilList } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/manager/dashboard',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  //   // Attendance
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'My Attendance', to: '/manager/attendance/myAttendance' },
      { component: CNavItem, name: 'Today\'s Attendance', to: '/manager/attendance/todayAttendance' },
      { component: CNavItem, name: 'View Attendance', to: '/manager/attendance/ViewAttendance' },
    ],
  },
  {
    component: CNavItem,
    name: 'Salary',
    to: '/manager/salary',  // Updated path for HR Dashboard
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,


  },



//   // Leave Management
  {
    component: CNavGroup,
    name: 'Leave',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'My Leave', to: '/manager/leave/myLeave' },
      { component: CNavItem, name: 'Leave Request', to: '/manager/leave/leaveRequest' },
      { component: CNavItem, name: 'Accepted Leave', to: '/manager/leave/acceptedLeave' },
      { component: CNavItem, name: 'Rejected Leave', to: '/manager/leave/rejectedLeave' },
    ],
  },
 {
    component: CNavItem,
    name: 'Task', // Added Task
    to: '/manager/task',
    icon: <CIcon icon={cilTask} customClassName="nav-icon" />, 
  },


  {
    component: CNavGroup,
    name: 'Team Report',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />, 
    items: [
      { component: CNavItem, name: 'Daily Report', to: '/manager/teamReport/dailyReport' },
      { component: CNavItem, name: 'SEO Report', to: '/manager/teamReport/seoReport' },

    ],


  },


//   // Notice
  {
    component: CNavItem,
    name: 'Notice',
    to: '/manager/notice',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'My Request',
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Raise Request', to: '/manager/myRequest/raise' },
      { component: CNavItem, name: 'Open Request', to: '/manager/myRequest/open' },
      { component: CNavItem, name: 'Closed Request', to: '/manager/myRequest/Closed' },
    ],
  },
  {
    component: CNavGroup,
    name: 'Team Request',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    items: [
      { component: CNavItem, name: 'Open Request', to: '/manager/teamRequest/open' },
      { component: CNavItem, name: 'Closed Request', to: '/manager/teamRequest/closed' },
    ],
  },
 
  {
    component: CNavItem,
    name: 'Profile',
    to: '/manager/profile',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
 
  
]

export default _nav
