import { BarChart3, Clock4, UserCheck, Users, TrendingUp, TrendingDown } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

// Mock data since original imports aren't available
const leads = [
  { id: 1, Profile: "JD", name: "John Doe", email: "john@example.com", status: "Hot", amount: "$12,000" },
  { id: 2, Profile: "SM", name: "Sarah Miller", email: "sarah@example.com", status: "Warm", amount: "$8,500" },
  { id: 3, Profile: "MJ", name: "Mike Johnson", email: "mike@example.com", status: "Cold", amount: "$5,200" },
  { id: 4, Profile: "AL", name: "Anna Lee", email: "anna@example.com", status: "Hot", amount: "$15,300" },
  { id: 5, Profile: "RW", name: "Robert Wilson", email: "robert@example.com", status: "Warm", amount: "$9,800" },
];

const attendanceData = [
  { id: 1, name: "John Smith", time: "09:00 AM", status: "Present" },
  { id: 2, name: "Jane Doe", time: "09:15 AM", status: "Present" },
  { id: 3, name: "Mike Brown", time: "Late", status: "Present" },
  { id: 4, name: "Sarah Davis", time: null, status: "Absent" },
  { id: 5, name: "Tom Wilson", time: "08:45 AM", status: "Present" },
];

const companies = [
  { id: 1, name: "TechCorp Solutions", deals: 12, revenue: "$45,000", status: "Active" },
  { id: 2, name: "Digital Dynamics", deals: 8, revenue: "$32,000", status: "Active" },
  { id: 3, name: "Innovation Labs", deals: 15, revenue: "$67,000", status: "Active" },
  { id: 4, name: "Future Systems", deals: 6, revenue: "$28,000", status: "Inactive" },
];

const MainDashboard = () => {
    // Mock navigate function for demo
    // const navigate = (path) => console.log(`Navigating to: ${path}`);
    const navigate = useNavigate()
    const cards = [
        { 
            title: "Total Leads", 
            value: "1,234", 
            percentage: "+12% from last month", 
            icon: <Users className="w-5 h-5" />,
            trend: "up",
            color: "text-blue-600"
        },
        { 
            title: "Total Users", 
            value: "987", 
            percentage: "+8% from last month", 
            icon: <UserCheck className="w-5 h-5" />,
            trend: "up",
            color: "text-green-600"
        },
        { 
            title: "Avg Time", 
            value: "00:45", 
            percentage: "-2% from last month", 
            icon: <Clock4 className="w-5 h-5" />,
            trend: "down",
            color: "text-orange-600"
        },
        { 
            title: "Conversions", 
            value: "76", 
            percentage: "+5% from last month", 
            icon: <BarChart3 className="w-5 h-5" />,
            trend: "up",
            color: "text-purple-600"
        },
    ];

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "hot": return "bg-red-500 hover:bg-red-600";
            case "warm": return "bg-orange-500 hover:bg-orange-600";
            case "cold": return "bg-blue-500 hover:bg-blue-600";
            case "present": return "bg-green-500 hover:bg-green-600";
            case "absent": return "bg-red-500 hover:bg-red-600";
            case "active": return "bg-emerald-500 hover:bg-emerald-600";
            case "inactive": return "bg-gray-500 hover:bg-gray-600";
            default: return "bg-gray-500 hover:bg-gray-600";
        }
    };

    return (
        <div className="flex-1 max-h-[82vh] overflow-y-auto px-4 py-6 bg-gray-50">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
            </div>

            {/* Top cards — improved responsive grid */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer transition-all duration-200 hover:scale-105"
                    >
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} bg-opacity-10`}>
                                    <span className={item.color}>{item.icon}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {item.trend === "up" ? (
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4 text-red-500" />
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-600 mb-1">{item.title}</h3>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                                <div className={`text-sm font-medium flex items-center gap-1 ${
                                    item.trend === "up" ? "text-green-600" : "text-red-600"
                                }`}>
                                    {item.percentage}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Leads & Attendance — improved layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
                {/* Recent Leads */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900">Recent Leads</h4>
                        <p className="text-sm text-gray-600 mt-1">Latest prospects and their status</p>
                    </div>
                    <div className="p-6">
                        <div className="max-h-80 space-y-4 overflow-y-auto">
                            {leads.map((item, index) => (
                                <div
                                    key={item.id ?? index}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white text-sm">
                                            {item.Profile}
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900 block">{item.name}</span>
                                            <span className="text-xs text-gray-500">{item.email}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                                        <button
                                            className={`rounded-full px-3 py-1 text-xs font-semibold text-white transition-colors ${getStatusColor(item.status)}`}
                                        >
                                            {item.status}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Attendance */}
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h4 className="text-lg font-semibold text-gray-900">Today's Attendance</h4>
                        <p className="text-sm text-gray-600 mt-1">Team check-in status</p>
                    </div>
                    <div className="p-6">
                        <div className="max-h-80 space-y-4 overflow-y-auto">
                            {attendanceData.map((item, index) => (
                                <div
                                    key={item.id ?? index}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 font-semibold text-white text-sm">
                                            {item.name?.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="text-sm font-medium text-gray-900 block">{item.name}</span>
                                            <span className="text-xs text-gray-500">
                                                {item.time || "Not checked in"}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        className={`rounded-full px-3 py-1 text-xs font-semibold text-white transition-colors ${getStatusColor(item.status)}`}
                                    >
                                        {item.status}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Companies section — improved with dynamic data */}
            <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900">Companies</h4>
                    <p className="text-sm text-gray-600 mt-1">Active business partnerships</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {companies.map((company) => (
                            <div key={company.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{company.name}</h3>
                                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white ${getStatusColor(company.status)}`}>
                                        {company.status}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs text-gray-600">{company.deals} active deals</div>
                                    <div className="text-xl font-bold text-gray-900">{company.revenue}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions — improved design */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
                    <p className="text-sm text-gray-600 mt-1">Common tasks and shortcuts</p>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <button
                            onClick={() => navigate("/add-lead")}
                            className="flex flex-col items-center justify-center h-24 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                            <Users className="w-6 h-6 mb-2" />
                            <span className="font-semibold">Add Lead</span>
                        </button>
                        <button
                            onClick={() => navigate("/add-user")}
                            className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                        >
                            <UserCheck className="w-6 h-6 mb-2 text-gray-600" />
                            <span className="font-semibold text-gray-700">Add User</span>
                        </button>
                        <button
                            onClick={() => navigate("/clock-in-out")}
                            className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 transform hover:scale-105"
                        >
                            <Clock4 className="w-6 h-6 mb-2 text-gray-600" />
                            <span className="font-semibold text-gray-700">Clock In/Out</span>
                        </button>
                        <button
                            onClick={() => navigate("/view-reports")}
                            className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 transform hover:scale-105"
                        >
                            <BarChart3 className="w-6 h-6 mb-2 text-gray-600" />
                            <span className="font-semibold text-gray-700">View Reports</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;