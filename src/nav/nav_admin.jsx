import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilClock, cilCalendar, cilMoney, cilTask, cilSettings, cilUser, cilFile,
  cilPeople, cilListRich, cilCalendarCheck, cilCash, cilChartLine,
  cilBriefcase, cilLocationPin, cilSpreadsheet, cilEnvelopeOpen,cilBuilding
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/adminDashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Create Company',
    to: '/admin/create-company',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Create HR',
    to: '/admin/create-hr',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Employees',
    to: '/admin/employee',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Salary',
    to: '/admin/salary',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    items: [
      
      {
        component: CNavItem,
        name: 'Today\'s Attendance',
        to: '/admin/attendance/todaysattendance',
      },
      {
        component: CNavItem,
        name: 'View Attendance',
        to: '/admin/attendance/viewattendance',
      },
      {
        component: CNavItem,
        name: 'Attendance Register',
        to: '/admin/attendance/register',
      },
      {
        component: CNavItem,
        name: 'Update Attendance',
        to: '/admin/attendance/update',
      },
      {
        component: CNavItem,
        name: 'Shift Management',
        to: '/admin/attendance/shifts',
      },
      {
        component: CNavItem,
        name: 'NCNS & Sandwich',
        to: '/admin/attendance/ncns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Leave',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Leave Requests',
        to: '/admin/leave/requests',
      },
      {
        component: CNavItem,
        name: 'Approve Leave',
        to: '/admin/leave/approve',
      },
      {
        component: CNavItem,
        name: 'Rejected Leave',
        to: '/admin/leave/rejected',
      },
      {
        component: CNavItem,
        name: 'Leave Register',
        to: '/admin/leave/register',
      },
      {
        component: CNavItem,
        name: 'Leave Assign',
        to: '/admin/leave/assign',
      },
    ],
  },
  
]

export default _nav