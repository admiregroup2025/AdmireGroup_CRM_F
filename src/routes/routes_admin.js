import React from 'react';
 
//dashboard
const Dashboard = React.lazy(() => import('../views/admin/adminDashboard/dashboard.jsx'));

// create
const CreateCompany = React.lazy(() => import('../views/admin/CreateCompany.jsx'));
const CreateHR = React.lazy(() => import('../views/admin/CreateHr.jsx'));


 
//Employee
const Employee = React.lazy(() => import('../views/admin/employee/Employee'));
 
//Salary
const Salary = React.lazy(() => import('../views/admin/Salary/Salary.jsx'));
 
//Attendance
const TodayAttendance = React.lazy(() => import('../views/admin/attendance/todayAttendance.jsx'));
const ViewAttendance = React.lazy(() => import('../views/admin/attendance/viewAttendance.jsx'));
const AttendanceRegister = React.lazy(() => import('../views/admin/attendance/attendanceRegister'));
const UpdateAttendance = React.lazy(() => import('../views/admin/attendance/UpdateAttendance'));
const ShiftManagement = React.lazy(() => import('../views/admin/attendance/shiftMangment'));
const NCNS = React.lazy(() => import('../views/admin/attendance/NCNS'));
 
//Leave Management
const LeaveRequest = React.lazy(() => import('../views/admin/leaveManagement/leaveRequest'));
const ApprovedLeave = React.lazy(() => import('../views/admin/leaveManagement/approvedLeave'));
const RejectedLeave = React.lazy(() => import('../views/admin/leaveManagement/rejectedLeave'));
const LeaveRegister = React.lazy(() => import('../views/admin/leaveManagement/leaveRegister'));
const LeaveAssign = React.lazy(() => import('../views/admin/leaveManagement/leaveAssign'));
 
//Payroll
const Payroll = React.lazy(() => import('../views/admin/Payroll/payrollDashboard'));
const runPayroll = React.lazy(() => import('../views/admin/Payroll/runPayroll'));
const enployeeSalarySlips = React.lazy(() => import('../views/admin/Payroll/employeeSalarySlips'));
const mySalarySlip = React.lazy(() => import('../views/admin/Payroll/mySalarySlip'));
 
//Task
const Task = React.lazy(() => import('../views/admin/Task/Task'));
 
//Daily Report
const DailyReport = React.lazy(() => import('../views/admin/Report/DailyReport'));
const MarketingReport = React.lazy(() => import('../views/admin/Report/MarketingReport'));
 
//Management Unit
const managementRole = React.lazy(() => import('../views/admin/ManagementUnit/mangementRole'));
const managementPosition = React.lazy(() => import('../views/admin/ManagementUnit/mangementPosition'));
const managementDepartment = React.lazy(() => import('../views/admin/ManagementUnit/mangementDepartment'));
 
//Company
const Company = React.lazy(() => import('../views/admin/Company/Company'));
 
//Location
const Country = React.lazy(() => import('../views/admin/Location/country'));
const State = React.lazy(() => import('../views/admin/Location/state'));
const City = React.lazy(() => import('../views/admin/Location/city'));
 
//Notice
const Notice = React.lazy(() => import('../views/admin/Notice/notice'));
 
 
//Request Details
const requestOpen = React.lazy(() => import('../views/admin/RequestDetails/requestOpen'));
const requestClose = React.lazy(() => import('../views/admin/RequestDetails/requestClose'));
 
//Holiday
const Holiday = React.lazy(() => import('../views/admin/Holiday/Holiday'));
 
//Project
const projectMaster = React.lazy(() => import('../views/admin/Projects/projectMaster'));
const projectBidding = React.lazy(() => import('../views/admin/Projects/projectBidding'));
 
 
const routes = [
  
  { path: '/adminDashboard', name: 'Dashboard', element: Dashboard },
  { path: '/create-company', name: 'Create-Company', element:CreateCompany },
  { path: '/create-hr', name: 'Create-HR', element:CreateHR },



 
  //Employee
  { path: '/employee', name: 'Employee', element:  Employee},
 
  //Salary
  { path: '/Salary', name: 'Salary', element:  Salary},
 
  //Attendance
  { path: '/attendance/todaysattendance', name: 'TodayAttendance', element:  TodayAttendance},
  { path: '/attendance/viewattendance', name: 'ViewAttendance', element:  ViewAttendance},
  { path: '/attendance/register', name: 'AttendanceRegister', element:  AttendanceRegister},
  { path: '/attendance/update', name: 'UpdateAttendance', element:  UpdateAttendance},
  { path: '/attendance/shifts', name: 'ShiftManagement', element:  ShiftManagement},
  { path: '/attendance/ncns', name: 'NCNS', element:  NCNS},
 
  //Leave Management
  { path: '/leave/requests', name: 'LeaveRequest', element:  LeaveRequest},
  { path: '/leave/approve', name: 'ApprovedLeave', element:  ApprovedLeave},
  { path: '/leave/rejected', name: 'RejectedLeave', element:  RejectedLeave},
  { path: '/leave/register', name: 'LeaveRegister', element:  LeaveRegister},
  { path: '/leave/assign', name: 'LeaveAssign', element:  LeaveAssign},
 
 
  //Payroll
  { path: '/payroll/dashboard', name: 'Payrolldashboard', element:  Payroll},
  { path: '/payroll/run', name: 'runPayroll', element:  runPayroll},
  { path: '/payroll/slips', name: 'enployeeSalarySlips', element:  enployeeSalarySlips},
  { path: '/payroll/my-slip', name: 'mySalarySlip', element:  mySalarySlip},
 
 
  //Task
  { path: '/tasks', name: 'Task', element:  Task},
 
  //Management Unit
  { path: '/management/roles', name: 'managementRole', element:  managementRole},
  { path: '/management/positions', name: 'managementPosition', element:  managementPosition},
  { path: '/management/departments', name: 'managementDepartment', element:  managementDepartment},
 
  //Daily Report
  { path: '/reports/daily', name: 'DailyReport', element:  DailyReport},
  { path: '/reports/marketing', name: 'MarketingReport', element:  MarketingReport},
 
  //Company
  { path: '/company', name: 'Company', element:  Company},
 
  //Location
  { path: '/locations/countries', name: 'Country', element:  Country},
  { path: '/locations/states', name: 'State', element:  State},
  { path: '/locations/cities', name: 'City', element:  City},
 
 
  //Notice
  { path: '/notices', name: 'Notice', element:  Notice},
 
  //Request Details
  { path: '/requests/open', name: 'requestOpen', element:  requestOpen},
  { path: '/requests/closed', name: 'requestClose', element:  requestClose},
 
  //Holiday
  { path: '/holidays', name: 'Holiday', element:  Holiday},
 
 
  //Project
 
  { path: '/projects/bidding', name: 'projectBidding', element:  projectBidding},
  { path: '/projects/master', name: 'projectMaster', element:  projectMaster},
 
 
];
 
export default routes;