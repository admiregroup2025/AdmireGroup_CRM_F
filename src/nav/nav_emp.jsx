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
  cilClock, cilCalendar,cilMoney, cilTask, cilSettings, cilUser,cilFile
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import classNames from 'classnames'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/employee/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },
  // {
  //   component: CNavItem,
  //   name: 'Profile',
  //   to: '/profile',
  //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />, // Profile ke liye better icon
  // },
  
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/my-attendance',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  },
  

  {
    component: CNavItem,
    name: 'Leave',
    to: '/leave',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,

  },
  // {
  //   component: CNavItem,
  //   name: 'Salary',
  //   to: '/salary',
  //   icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  // },
  
  // {
  //   component: CNavItem,
  //   name: 'Task', // Added Task
  //   to: '/task',
  //   icon: <CIcon icon={cilTask} customClassName="nav-icon" />, 
  // },

  // New Reports Section

  // {
  //   component: CNavItem,
  //   name: 'Report', // Added Report
  //   to: '/report',
  //   icon: <CIcon icon={cilFile} customClassName="nav-icon" />, 
  // },

 
  // Chat Section (New)
  // {
  //   component: CNavGroup,
  //   name: 'Chat',
  //   icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'danger',
  //     text: '5',
  //   },
    
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Direct Messages',
  //       to: '/chat',
  //       badge: {
  //         color: 'warning',
  //         text: '3',
  //       }
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Group Chats',
  //       to: '/chat/groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Announcements',
  //       to: '/chat/announcements',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Chat Settings',
  //       to: '/chat/settings',
  //     }
  //   ],
  // },



  // {
  //   component: CNavGroup,
  //   name: 'Tickets',
  //   icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Create Ticket',
  //       to: '/tickets/create',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'My Tickets',
  //       to: '/tickets/my',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Closed Ticket',
  //       to: '/tickets/Closed',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Settings',
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Account Settings',
  //       to: '/settings/account',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'System Settings',
  //       to: '/settings/system',
  //     },
  //   ],
  // },
  
  

]

export default _nav
