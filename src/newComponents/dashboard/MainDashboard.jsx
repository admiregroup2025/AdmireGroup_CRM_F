import { ChartNoAxesCombined, Clock4, UserCheck, Users } from "lucide-react";
import React from "react";
import { leads, attendanceData } from "../tempData/dashboardData/Leadsdata.js";

const MainDashboard = () => {
  const cards = [
    { title: "Total Leads", value: "1,234", percentage: "+12% from last month", icon: <Users /> },
    { title: "Total Users", value: "987", percentage: "+8% from last month", icon: <UserCheck /> },
    { title: "Avg Time", value: "00:45", percentage: "-2% from last month", icon: <Clock4 /> },
    { title: "Conversions", value: "76", percentage: "+5% from last month", icon: <ChartNoAxesCombined /> },
  ];

  return (
    <div className="flex-1 px-4 py-4">
      {/* Top cards — responsive grid: 1 col mobile, 2 cols small, 4 cols large */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((item, index) => (
          <div key={index} className="w-full rounded-md">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>

                <div className="flex h-7 w-7 items-center justify-center rounded-md text-gray-500">{item.icon}</div>
              </div>

              <div>
                <div className="text-3xl font-semibold leading-tight text-slate-900">{item.value}</div>
                <div className="mt-1 text-sm font-medium text-gray-500">{item.percentage}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Leads & Attendance — stack on mobile, two columns on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Recent Leads */}
        <div className="rounded-lg border px-4 py-2 shadow-md bg-white">
          <h4 className="text-lg font-semibold mb-3">Recent Leads</h4>
          <div className="max-h-64 overflow-y-auto pr-2 space-y-4">
            {leads.map((item, index) => (
              <div key={item.id ?? index} className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-800">
                    {item.Profile}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900">{item.name}</span>
                    <span className="text-sm text-gray-400">{item.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className={`rounded-xl px-2 py-1 text-sm font-semibold text-white ${
                      item.status === "Hot" ? "bg-red-500" : item.status === "Warm" ? "bg-orange-500" : "bg-blue-500"
                    }`}
                  >
                    {item.status}
                  </button>
                  <span className="text-sm text-gray-600">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <div className="rounded-lg border px-4 py-2 shadow-md bg-white">
          <h4 className="text-lg font-semibold mb-3">Today's Attendance</h4>
          <div className="max-h-64 overflow-y-auto pr-2 space-y-4">
            {attendanceData.map((item, index) => (
              <div key={item.id ?? index} className="flex justify-between items-start">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-800">
                    {item.name?.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-900">{item.name}</span>
                    <span className="text-sm text-gray-400">{item.time ?? "Not checked in"}</span>
                  </div>
                </div>
                <div>
                  <button
                    className={`rounded-md px-2 py-1 text-sm font-semibold ${item.status === "Present" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                  >
                    {item.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies row — responsive wrap */}
      <div className="mt-4 rounded-lg border px-4 py-4 shadow-md bg-white">
        <h4 className="text-lg font-semibold mb-4">Companies</h4>
        <div className="flex flex-wrap gap-4">
          {/* Example static cards — replace with your companies array if available */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-base font-medium text-slate-900">Tech Corp</h3>
                <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Active</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">12 deals</div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
              </div>
            </div>
          </div>
         
             <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-base font-medium text-slate-900">Tech Corp</h3>
                <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Active</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">12 deals</div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
              </div>
            </div>
          </div>

           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-base font-medium text-slate-900">Tech Corp</h3>
                <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Active</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">12 deals</div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
              </div>
            </div>
          </div>
           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
            <div className="rounded-xl border border-gray-100 bg-white p-5">
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-base font-medium text-slate-900">Tech Corp</h3>
                <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Active</span>
              </div>
              <div>
                <div className="text-sm text-gray-500">12 deals</div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
              </div>
            </div>
          </div>
          
          {/* add more company cards here as needed */}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 rounded-lg border px-4 py-4 shadow-md bg-white">
        <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex w-52 h-20 items-center justify-center rounded-md bg-black text-white">+ Add Lead</div>
          <div className="flex w-52 h-20 items-center justify-center rounded-md border">Add User</div>
          <div className="flex w-52 h-20 items-center justify-center rounded-md border">Clock In/Out</div>
          <div className="flex w-52 h-20 items-center justify-center rounded-md border">View Reports</div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
