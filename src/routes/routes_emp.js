import { element } from 'prop-types'
import React from 'react'


const Dashboard = React.lazy(() => import('../views/employee/dashboard/Dashboard.jsx'))
// profile
// const Profile = React.lazy(() => import('../views/employee/profile/Profile'))
// attendance
const Attendance = React.lazy(() => import('../views/employee/MyAttendance.jsx'))
// leave
const Leave =  React.lazy(() => import('../views/employee/leave/Leave.jsx'))
// salary
// const Salary =  React.lazy(() => import('../views/employee/salary/Salary'))

// Base
// const Task = React.lazy(() => import('../views/employee/task/Task'))
// const Report = React.lazy(() => import('../views/employee/Reports/Report'))




//  Ticket
// const Ticket = React.lazy(() => import('../views/employee/ticket/createticket/Createticket'))
// const Myticket = React.lazy(() => import('../views/employee/ticket/myticket/Myticket'))
// const Closedticket = React.lazy(() => import('../views/employee/ticket/closedticket/ClosedTicket'))




//Forms


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/profile', name: 'Profile', element: Profile },
  {path: 'my-attendance', name: 'Attendance', element: Attendance},
  { path: '/leave', name: 'Leave', element: Leave},
  // { path: '/salary', name: 'Salary', element: Salary},

  // { path: '/tickets/create', name: 'Create Ticket', element: Ticket },
  // { path: '/tickets/my', name: 'My Tickets', element: Myticket },
  // { path: '/tickets/closed', name: 'Closed Ticket', element: Closedticket },


  // { path: '/task', name: 'Task', element: Task },
  // { path: '/Report', name: 'Report', element: Report },



  

]

export default routes