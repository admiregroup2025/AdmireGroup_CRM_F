import {
  BarChart3,
  Clock4,
  UserCheck,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const leads = [
  { id: 1, Profile: "JD", name: "John Doe", email: "john@example.com", status: "Hot", amount: "$12,000" },
  { id: 2, Profile: "SM", name: "Sarah Miller", email: "sarah@example.com", status: "Warm", amount: "$8,500" },
  { id: 3, Profile: "MJ", name: "Mike Johnson", email: "mike@example.com", status: "Cold", amount: "$5,200" },
  { id: 4, Profile: "AL", name: "Anna Lee", email: "anna@example.com", status: "Hot", amount: "$15,300" },
  { id: 5, Profile: "RW", name: "Robert Wilson", email: "robert@example.com", status: "Warm", amount: "$9,800" },
];

const companies = [
  { id: 1, name: "TechCorp Solutions", deals: 12, revenue: "$45,000", status: "Active" },
  { id: 2, name: "Digital Dynamics", deals: 8, revenue: "$32,000", status: "Active" },
  { id: 3, name: "Innovation Labs", deals: 15, revenue: "$67,000", status: "Active" },
  { id: 4, name: "Future Systems", deals: 6, revenue: "$28,000", status: "Inactive" },
];

const MainDashboard = () => {
  const navigate = useNavigate();

  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // today's date (yyyy-mm-dd)

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await fetch("http://localhost:4000/attendance/getAllAttendance");
        const data = await res.json();
        const attendance = Array.isArray(data) ? data : data.data || [];

        setAttendanceData(attendance);
        filterByDate(attendance, selectedDate);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // ✅ Refilter whenever date changes
  useEffect(() => {
    filterByDate(attendanceData, selectedDate);
  }, [selectedDate, attendanceData]);

  const filterByDate = (data, dateString) => {
    const target = new Date(dateString);
    const filtered = data.filter((item) => {
      if (!item.date) return false;
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === target.getFullYear() &&
        itemDate.getMonth() === target.getMonth() &&
        itemDate.getDate() === target.getDate()
      );
    });
    setFilteredData(filtered);
  };

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-400";
    switch (status.toLowerCase()) {
      case "present":
        return "bg-green-500 hover:bg-green-600";
      case "absent":
        return "bg-red-500 hover:bg-red-600";
      case "late":
        return "bg-yellow-500 hover:bg-yellow-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const formatTime = (isoString) => {
    if (!isoString) return "—";
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const cards = [
    { title: "Total Leads", value: "1,234", percentage: "+12% from last month", icon: <Users className="w-5 h-5" />, trend: "up", color: "text-blue-600" },
    { title: "Total Users", value: "987", percentage: "+8% from last month", icon: <UserCheck className="w-5 h-5" />, trend: "up", color: "text-green-600" },
    { title: "Avg Time", value: "00:45", percentage: "-2% from last month", icon: <Clock4 className="w-5 h-5" />, trend: "down", color: "text-orange-600" },
    { title: "Conversions", value: "76", percentage: "+5% from last month", icon: <BarChart3 className="w-5 h-5" />, trend: "up", color: "text-purple-600" },
  ];

  return (
    <div className="flex-1 max-h-[85vh] overflow-y-auto px-4 py-6 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Top Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, index) => (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} bg-opacity-10`}>
                <span className={item.color}>{item.icon}</span>
              </div>
              {item.trend === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{item.title}</h3>
            <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
            <div
              className={`text-sm font-medium ${
                item.trend === "up" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.percentage}
            </div>
          </div>
        ))}
      </div>

      {/* Leads + Attendance */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
        {/* Recent Leads */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900">Recent Leads</h4>
            <p className="text-sm text-gray-600 mt-1">Latest prospects and their status</p>
          </div>
          <div className="p-6 max-h-80 space-y-4 overflow-y-auto">
            {leads.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
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
                  <button className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(item.status)}`}>
                    {item.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Filtered Attendance */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Attendance</h4>
              <p className="text-sm text-gray-600 mt-1">Filtered by Date</p>
            </div>
            {/* Date Picker */}
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-6">
            {loading ? (
              <p className="text-gray-500 text-sm text-center">Loading attendance data...</p>
            ) : filteredData.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">No attendance records found for this date.</p>
            ) : (
              <div className="max-h-80 space-y-4 overflow-y-auto">
                {filteredData.map((item) => (
                  <div key={item._id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 font-semibold text-white text-sm">
                        {item.employee?.fullName?.charAt(0) || "?"}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-900 block">{item.employee?.fullName || "Unknown"}</span>
                        <span className="text-xs text-gray-500">
                          🕒 {formatTime(item.clockIn)} - {formatTime(item.clockOut)}
                        </span>
                        <span className="block text-xs text-gray-400">
                          {item.firstHalf}/{item.secondHalf}
                        </span>
                      </div>
                    </div>
                    <button className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(item.status)}`}>
                      {item.status}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Companies, Quick Actions (same as before) */}
    </div>
  );
};

export default MainDashboard;
