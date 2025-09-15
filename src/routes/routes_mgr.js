import React from 'react'

// Lazy Imports
const Dashboard = React.lazy(() => import('../views/manager/dashboard/MgrDashboard.jsx'))
// Employee
// salary
// const Salary = React.lazy(() => import('../views/manager/salary/Salary.jsx'));


// const MyAttendance = React.lazy(() => import('../views/manager/attendance/myAttendance/MyAttendance.jsx'))
// const TodaysAttendance = React.lazy(() => import('../views/manager/attendance/todayAttendance/TodayAttendance.jsx'))
// const ViewAttendance = React.lazy(() => import('../views/manager/attendance/ViewAttendance/ViewAttendance.jsx'))

// const MyLeave = React.lazy(() => import('../views/manager/leave/myLeave/MyLeave'))
// const AcceptedLeave = React.lazy(() => import('../views/manager/leave/acceptedLeave/AcceptedLeave.jsx'))
// const RejectedLeave = React.lazy(() => import('../views/manager/leave/rejectedLeave/RejectedLeave.jsx'))
// const LeaveRequest = React.lazy(() => import('../views/manager/leave/leaveRequest/LeaveRequest.jsx'))


const Notice = React.lazy(() => import('../views/manager/notice/Notice.jsx'))






const routes = [
  // { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/salary', name: 'Salary', element: Salary}, 

  // Attendance
  // { path: '/attendance/myAttendance', name: 'My Attendance', element: MyAttendance },
  // { path: '/attendance/todayAttendance', name: 'Today\'s Attendance', element: TodaysAttendance },
  // { path: '/attendance/ViewAttendance', name: 'View Attendance', element: ViewAttendance },


  // leave
  // { path: '/leave/myLeave', name: 'My Leave', element: MyLeave },

  // { path: '/leave/acceptedLeave', name: 'Accepted Leave', element: AcceptedLeave },
  // { path: '/leave/rejectedLeave', name: 'Accepted Leave', element: RejectedLeave },
  // { path: '/leave/leaveRequest', name: 'Leave Request', element: LeaveRequest },


  { path: '/notice', name: 'Notice', element: Notice },



  // // Leave Management
//   { path: '/leaveManagement/apply', name: 'Apply Leave', element: ApplyLeave },
//   { path: '/leaveManagement/pending', name: 'Pending Leave', element: PendingLeave },
//   { path: '/leaveManagement/accepted', name: 'Accepted Leave', element: AcceptedLeave },
//   { path: '/leaveManagement/rejected', name: 'Rejected Leave', element: RejectedLeave },
//   { path: '/leaveManagement/assign', name: 'Assign Leave', element: AssignLeave },
//   { path: '/leaveManagement/balance', name: 'Emp Leave Balance', element: LeaveBalance },
//   { path: '/leaveManagement/leaveRegister', name: 'Leave Register', element: LeaveRegister },

//   // // Payroll
//   { path: '/payroll/dashboard', name: 'Payroll Dashboard', element: PayrollDashboard },
//   { path: '/payroll/run', name: 'Run Payroll', element: RunPayroll },
//   { path: '/payroll/slips', name: 'Employee Salary Slips', element: SalarySlips },
//   { path: '/payroll/mySlip', name: 'My Salary Slip', element: MySalarySlip },

//   // // Management
//   { path: '/managementUnit/roles', name: 'Roles', element: Roles },
//   { path: '/managementUnit/positions', name: 'Positions', element: Positions },
//   { path: '/managementUnit/departments', name: 'Departments', element: Departments },

//   // // Company & Notice
//   { path: '/company', name: 'Company', element: Company },
//   { path: '/notice', name: 'Notice', element: Notice },

//   { path: '/myRequest/open', name: 'Open Request', element: Open },
//   { path: '/myRequest/raise', name: 'Raise Request', element: Raise },
//   { path: '/myRequest/closed', name: 'Closed Request', element: Closed },

//   { path: '/holiday', name: 'Holiday', element: Holiday },

//   { path: '/profile', name: 'Profile', element: Profile },
//   { path: '/weekend', name: 'Weekend Setting', element: Weekend },





//   { path: '/teamRequest/closed', name: 'Closed Request', element: ClosedTeamRequest },





]

export default routes
