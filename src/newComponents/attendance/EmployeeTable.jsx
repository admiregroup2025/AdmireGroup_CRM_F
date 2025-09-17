import { CalendarIcon,LogIn, LogOut } from "lucide-react";
import StatusBadge from "./StatusBadge.jsx"

import {  Employeeattendance } from "./employee.js";

const EmployeeTable = () => {
  const getRoleBadge = (role) => {
    const colors = {
      Admin: "bg-[#ad46ff]",
      Manager: "bg-[#2b7fff]",
      "Sales Rep": "bg-[#00c951]",
      User: "bg-[#6a7282]",
    };
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-xs font-medium ${colors[role]}`}
      >
        {role}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
          status === "Active" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="border border-gray-200 rounded-md bg-[#ffffff] whitespace-nowrap">
      <table className="w-full rounded-md overflow-hidden shadow-md border-gray-200">
        <thead className="border-b border-gray-200">
          <tr className="text-left">
            <th className="p-3">Employee</th>
            <th className="p-3">Department</th>
            <th className="p-3">Date</th>
            <th className="p-3">Check In</th>
            <th className="p-3">Check Out</th>
            <th className="p-3">Status</th>
            <th className="p-3">Working Hour</th>
            <th className="p-3">Overtime</th>
          </tr>
        </thead>
        <tbody>
           {Employeeattendance.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                {/* Employee */}
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-800">
                      {u.name?.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-slate-900">{u.name}</div>
                      {/* optional small email line */}
                      {u.email && <div className="text-xs text-gray-400">{u.email}</div>}
                    </div>
                  </div>
                </td>

                {/* Department */}
                <td className="p-3 text-sm text-gray-700">{u.department}</td>

                {/* Date */}
                <td className="p-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarIcon />
                    <span>{u.date}</span>
                  </div>
                </td>

                {/* Check In */}
                <td className="p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600"><LogIn /></span>
                    <span>{u.checkIn}</span>
                  </div>
                </td>

                {/* Check Out */}
                <td className="p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600"><LogOut /></span>
                    <span>{u.checkOut}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="p-3">
                  <StatusBadge status={u.status} />
                </td>

                {/* Working Hours */}
                <td className="p-3 text-sm font-medium text-gray-800">{u.workingHours}</td>

                {/* Overtime */}
                <td className="p-3 text-sm text-blue-600">{u.overtime}</td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:bg-gray-100 p-2 rounded">
                      {/* view icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>

                    <button className="text-gray-500 hover:bg-gray-100 p-2 rounded">
                      {/* edit icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                      </svg>
                    </button>

                    <button className="text-red-500 hover:bg-gray-100 p-2 rounded">
                      {/* trash icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
