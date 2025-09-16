import { ChartNoAxesCombined, Clock4, UserCheck, Users } from "lucide-react";
import React from "react";
import { leads, attendanceData } from "../tempData/dashboardData/Leadsdata.js";

const MainDashboard = () => {
    console.log(leads);
    const cards = [
        {
            title: "Total Leads",
            value: "1,234",
            percentage: "+12% from last month",
            icon: <Users />,
        },
        {
            title: "Total Users",
            value: "987",
            percentage: "+8% from last month",
            icon: <UserCheck />,
        },
        {
            title: "Total Users",
            value: "987",
            percentage: "+8% from last month",
            icon: <Clock4 />,
        },
        {
            title: "Total Users",
            value: "987",
            percentage: "+8% from last month",
            icon: <ChartNoAxesCombined />,
        },
    ];

    return (
        <div className="flex flex-col gap-4 px-4 py-2">
            {/*Main-Div Card-Design */}
            <div className="my-10 flex gap-3 text-6xl font-bold">
                {/* cards */}
                {cards.map((item, index) => (
                    <div
                        class="mx-auto w-full max-w-md rounded-md"
                        key={index}
                    >
                        <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                            <div class="mb-4 flex items-center justify-between">
                                <h3 class="text-sm font-semibold text-slate-900">{item.title}</h3>

                                <div class="flex h-7 w-7 items-center justify-center rounded-md text-gray-500">{item.icon}</div>
                            </div>

                            <div>
                                <div class="text-3xl font-semibold leading-tight text-slate-900">{item.value}</div>
                                <div class="mt-1 text-sm font-medium text-gray-500">{item.percentage}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/*Leads-Card And Attendence-Cards*/}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
                {/*Recent-Leads-Page */}

                <div className="rounded-lg border px-4 py-2 shadow-md">
                    <h4>Recent Leads</h4>
                     <div className="max-h-64 overflow-y-auto pr-2">
                    {leads.map((item, index) => (
                        <>
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-800">
                                        {item.Profile}
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{item.name}</span>
                                        <span>{item.email}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className={`rounded-xl border px-2 py-1 text-white ${item.status === "Hot" ? "bg-red-500" : ""} ${item.status === "Warm" ? "bg-orange-500" : ""} ${item.status === "Cold" ? "bg-blue-500" : ""} `}
                                        >
                                            {item.status}
                                        </button>
                                        <span>{item.amount}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>

                {/*Attendence-Page*/}

                <div className="rounded-lg border px-4 py-2 shadow-md">
                    <h4>Today's Attendance</h4>
                    <div className="max-h-64 overflow-y-auto pr-2">
                    {attendanceData.map((item, index) => (
                        <>
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold text-gray-800">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span>{item.name}</span>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <button
                                            className={`rounded-md border px-2 py-1 ${item.status === "Present" ? "bg-green-500" : "bg-red-500"}`}
                                        >
                                            {item.status}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                    </div>
                </div>
            </div>
             {/*Companies-Card */}

             <div className="rounded-lg border px-4 py-2 flex gap-3 shadow-md">
               <h4>Companies</h4>



                 <div class="my-10 w-full max-w-xs rounded-md">
  <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-start justify-between">
      {/* <!-- Title --> */}
      <h3 class="text-base font-medium text-slate-900">Tech Corp</h3>

      {/* <!-- Active badge --> */}
      <span
        class="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-emerald-500 text-white"
        role="status"
        aria-label="Active"
      >
        Active
      </span>
    </div>

    <div>
      {/* <!-- small meta (deals) --> */}
      <div class="text-sm text-gray-500">12 deals</div>

      {/* <!-- big amount --> */}
      <div class="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
    </div>
  </div>
</div>

             
                      <div class="my-10 w-full max-w-xs rounded-md">
  <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-start justify-between">
      {/* <!-- Title --> */}
      <h3 class="text-base font-medium text-slate-900">Tech Corp</h3>

      {/* <!-- Active badge --> */}
      <span
        class="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-emerald-500 text-white"
        role="status"
        aria-label="Active"
      >
        Active
      </span>
    </div>

    <div>
      {/* <!-- small meta (deals) --> */}
      <div class="text-sm text-gray-500">12 deals</div>

      {/* <!-- big amount --> */}
      <div class="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
    </div>
  </div>
</div>

                        <div class="my-10 w-full max-w-xs rounded-md">
  <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-start justify-between">
      {/* <!-- Title --> */}
      <h3 class="text-base font-medium text-slate-900">Tech Corp</h3>

      {/* <!-- Active badge --> */}
      <span
        class="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-emerald-500 text-white"
        role="status"
        aria-label="Active"
      >
        Active
      </span>
    </div>

    <div>
      {/* <!-- small meta (deals) --> */}
      <div class="text-sm text-gray-500">12 deals</div>

      {/* <!-- big amount --> */}
      <div class="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
    </div>
  </div>
</div>

                        <div class="my-10 w-full max-w-xs rounded-md">
  <div class="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
    <div class="mb-4 flex items-start justify-between">
      {/* <!-- Title --> */}
      <h3 class="text-base font-medium text-slate-900">Tech Corp</h3>

      {/* <!-- Active badge --> */}
      <span
        class="inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-emerald-500 text-white"
        role="status"
        aria-label="Active"
      >
        Active
      </span>
    </div>

    <div>
      {/* <!-- small meta (deals) --> */}
      <div class="text-sm text-gray-500">12 deals</div>

      {/* <!-- big amount --> */}
      <div class="mt-3 text-2xl font-semibold text-slate-900">$45K</div>
    </div>
  </div>
</div>

             </div>



             {/*Quick-Action-Card*/}

             <div className="rounded-lg border px-4 py-2 flex gap-3 shadow-md">
              <h4>Quick Actions</h4>

              {/*Card-Section*/}
              <div className="flex gap-4 my-4">
              <div className="flex flex-col justify-center items-center border gap-4 rounded-md w-52 py-2  bg-black texe-center text-white">
                <span>+</span><span>Add Leads</span>
              </div>


              <div className="flex flex-col justify-center items-center border gap-4 rounded-md w-52 py-2  texe-center ">
                <span>+</span><span>Add Leads</span>
              </div>
 
              <div className="flex flex-col justify-center items-center border gap-4 rounded-md w-52 py-2  texe-center ">
                <span>+</span><span>Add Leads</span>
              </div>

              <div className="flex flex-col justify-center items-center border gap-4 rounded-md w-52 py-2  texe-center ">
                <span>+</span><span>Add Leads</span>
              </div>
                </div>
             </div>
             
        </div>
    );
};

export default MainDashboard;
