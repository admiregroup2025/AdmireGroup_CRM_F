import React from "react";
import { ChartNoAxesCombined, Clock4, UserCheck, Users, LogIn, LogOut, Download ,Calendar} from "lucide-react";

import Attendance from "../attendance/Attendence";
import EmployeeTable from "./EmployeeTable";
import SearchEmployes from "./SearchEmployes";
import AllStatus from "./AllStatus";

const MainAttendance = () => {
     const stats = [
        { id: 1, title: "Total Employees", value: "89", subtitle: "Active employees", icon: <Users /> },
        { id: 2, title: "Open Positions", value: "84", subtitle: "Positions to fill", icon: <UserCheck /> },
        { id: 3, title: "On Leave", value: "5", subtitle: "Employees on leave", icon: <Clock4 /> },
        { id: 4, title: "New Joins", value: "12", subtitle: "Joined this month", icon: <ChartNoAxesCombined /> },
    ];

      const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US");

    return  <div className="flex max-h-[82vh] flex-col gap-6 overflow-y-auto px-4 py-6">
            {/* Top Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((item, key) => (
                    <div
                        key={key}
                        className="w-full rounded-md"
                    >
                        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                                <div className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500">{item.icon}</div>
                            </div>
                            <div>
                               <div
  className={`text-left font-semibold leading-tight ${
    item.value === "5" || item.value === "12"
      ? "text-red-500"
      : item.value === "84"
      ? "text-green-500"
      : "text-slate-700"
  }`}
>
  {item.value}
</div>
                                <div className="mt-1 text-left text-sm font-medium text-gray-500">{item.subtitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-6 md:flex-row">
                {/* Quick Actions */}
                <div className="flex h-96 w-80 flex-col gap-4 rounded-md border bg-white p-5 shadow-sm">
                    <p className="text-lg font-semibold">Quick Actions</p>
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-slate-900 hover:bg-gray-50">
                            <LogIn size={18} />
                            Clock In
                        </button>
                        <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-slate-900 hover:bg-gray-50">
                            <LogOut size={18} />
                            Clock Out
                        </button>
                        <button className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-slate-900 hover:bg-gray-50">
                            <Download size={18} />
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Attendance Calendar */}
                <div className="w-full rounded-lg border border-gray-200 bg-white p-6">
                    <Attendance />
                </div>
            </div>

            <div >
                <div className="flex justify-between py-5 "><SearchEmployes/>
                  <AllStatus/>
                    <div className="flex items-center gap-2 text-gray-700">
      {/* Calendar Icon */}
      <Calendar size={20} className="text-gray-500" />

      {/* Dynamic Date */}
      <span className="text-sm">{formattedDate}</span>
    </div>
                     
                </div>
                <div>
                    <EmployeeTable/>
                </div>
            </div>



        </div>;
};

export default MainAttendance;
