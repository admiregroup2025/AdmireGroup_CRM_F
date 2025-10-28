// import {
//   BarChart3,
//   Clock4,
//   UserCheck,
//   Users,
//   TrendingUp,
//   TrendingDown,
// } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const MainDashboard = () => {
//   const navigate = useNavigate();
//   const [lead, setLead] = useState([]);
//   const [loadingLeads, setLoadingLeads] = useState(true);
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loadingAttendance, setLoadingAttendance] = useState(true);
//   const [companies, setCompanies] = useState([]);
//   const [loadingCompanies, setLoadingCompanies] = useState(true);
//   const [errorCompanies, setErrorCompanies] = useState("");
//   const [selectedDate, setSelectedDate] = useState(
//     new Date().toISOString().split("T")[0]
//   );
//  const checkTokenExpiry = () => {
//     const token = localStorage.getItem("token");
//     const expiry = localStorage.getItem("tokenExpiry");

//     if (!token || !expiry) return false;

//     if (new Date().getTime() > Number(expiry)) {
//       // Token expired, remove all related data
//       localStorage.removeItem("token");
//       localStorage.removeItem("tokenExpiry");
//       localStorage.removeItem("userId");
//       localStorage.removeItem("userName");
//       localStorage.removeItem("role");
//       localStorage.removeItem("companyId");
//       return false;
//     }
//     return true;
//   };

//   // ✅ Check token expiry on mount and every 5 seconds
//   useEffect(() => {
//     if (!checkTokenExpiry()) {
//       alert("Session expired. Please login again.");
//       navigate("/");
//     }

//     const interval = setInterval(() => {
//       if (!checkTokenExpiry()) {
//         alert("Session expired. Please login again.");
//         navigate("/");
//       }
//     }, 5000); // check every 5 seconds

//     return () => clearInterval(interval);
//   }, [navigate]);
//   // ✅ Fetch Attendance
//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const res = await fetch(
//           "http://localhost:4000/attendance/getAllAttendance"
//         );
//         const data = await res.json();
//         const attendance = Array.isArray(data) ? data : data.data || [];
//         setAttendanceData(attendance);
//       } catch (err) {
//         console.error("Error fetching attendance:", err);
//       } finally {
//         setLoadingAttendance(false);
//       }
//     };
//     fetchAttendance();
//   }, []);

//   // ✅ Fetch Leads (LIVE DATA)
//   useEffect(() => {
//     const fetchLeads = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/leads/");
//         const data = await res.json();
//         const leadData = Array.isArray(data) ? data : data.data || [];
//         setLead(leadData);
//       } catch (err) {
//         console.error("Error fetching leads:", err);
//       } finally {
//         setLoadingLeads(false);
//       }
//     };
//     fetchLeads();
//   }, []);

//   // ✅ Fetch Companies
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/company/all");
//         setCompanies(response.data?.companies || []);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//         setErrorCompanies("Failed to load companies");
//       } finally {
//         setLoadingCompanies(false);
//       }
//     };
//     fetchCompanies();
//   }, []);

//   // ✅ Filter Attendance by Date
//   useEffect(() => {
//     const target = new Date(selectedDate);
//     const filtered = attendanceData.filter((item) => {
//       if (!item.date) return false;
//       const itemDate = new Date(item.date);
//       return (
//         itemDate.getFullYear() === target.getFullYear() &&
//         itemDate.getMonth() === target.getMonth() &&
//         itemDate.getDate() === target.getDate()
//       );
//     });
//     setFilteredData(filtered);
//   }, [selectedDate, attendanceData]);

//   // ✅ Utility functions
//   const getStatusColor = (status) => {
//     if (!status) return "bg-gray-400";
//     switch (status.toLowerCase()) {
//       case "present":
//         return "bg-green-500 hover:bg-green-600";
//       case "absent":
//         return "bg-red-500 hover:bg-red-600";
//       case "late":
//         return "bg-yellow-500 hover:bg-yellow-600";
//       case "hot":
//         return "bg-red-500 hover:bg-red-600";
//       case "warm":
//         return "bg-yellow-500 hover:bg-yellow-600";
//       case "cold":
//         return "bg-gray-500 hover:bg-gray-600";
//       case "active":
//         return "bg-green-500 hover:bg-green-600";
//       case "inactive":
//         return "bg-gray-500 hover:bg-gray-600";
//       default:
//         return "bg-gray-500 hover:bg-gray-600";
//     }
//   };

//   const formatTime = (isoString) => {
//     if (!isoString) return "—";
//     const date = new Date(isoString);
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   };

//   const cards = [
//     {
//       title: "Total Leads",
//       value: lead.length.toString(),
//       percentage: "+12% from last month",
//       icon: <Users className="w-5 h-5" />,
//       trend: "up",
//       color: "text-blue-600",
//     },
//     {
//       title: "Total Users",
//       value: "4",
//       percentage: "+8% from last month",
//       icon: <UserCheck className="w-5 h-5" />,
//       trend: "up",
//       color: "text-green-600",
//     },
//     {
//       title: "Avg Time",
//       value: "00:45",
//       percentage: "-2% from last month",
//       icon: <Clock4 className="w-5 h-5" />,
//       trend: "down",
//       color: "text-orange-600",
//     },
//     {
//       title: "Conversions",
//       value: "76",
//       percentage: "+5% from last month",
//       icon: <BarChart3 className="w-5 h-5" />,
//       trend: "up",
//       color: "text-purple-600",
//     },
//   ];

//   return (
//     <div className="flex-1 max-h-[85vh] overflow-y-auto px-4 py-6 bg-gray-50">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//         <p className="text-gray-600 mt-1">
//           Welcome back! Here's what's happening today.
//         </p>
//       </div>

//       {/* Top Cards */}
//       <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {cards.map((item, index) => (
//           <div
//             key={index}
//             className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <div
//                 className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} bg-opacity-10`}
//               >
//                 {item.icon}
//               </div>
//               {item.trend === "up" ? (
//                 <TrendingUp className="w-4 h-4 text-green-500" />
//               ) : (
//                 <TrendingDown className="w-4 h-4 text-red-500" />
//               )}
//             </div>
//             <h3 className="text-sm font-medium text-gray-600 mb-1">
//               {item.title}
//             </h3>
//             <div className="text-3xl font-bold text-gray-900 mb-2">
//               {item.value}
//             </div>
//             <div
//               className={`text-sm font-medium ${
//                 item.trend === "up" ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               {item.percentage}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Leads + Attendance */}
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
//         {/* ✅ Recent Leads (LIVE DATA) */}
//         <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//           <div className="px-6 py-4 border-b border-gray-100">
//             <h4 className="text-lg font-semibold text-gray-900">Recent Leads</h4>
//             <p className="text-sm text-gray-600 mt-1">
//               Latest prospects and their status
//             </p>
//           </div>
//           <div className="p-6 max-h-80 space-y-4 overflow-y-auto">
//             {loadingLeads ? (
//               <p className="text-sm text-gray-500 text-center">
//                 Loading leads...
//               </p>
//             ) : lead.length === 0 ? (
//               <p className="text-sm text-gray-500 text-center">
//                 No leads found.
//               </p>
//             ) : (
//               lead.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white text-sm">
//                       {item.name?.charAt(0)?.toUpperCase() || "?"}
//                     </div>
//                     <div>
//                       <span className="text-sm font-medium text-gray-900 block">
//                         {item.name}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {item.email}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-sm font-semibold text-gray-900">
//                       ₹{item.value}
//                     </span>
//                     <button
//                       className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(
//                         item.leadStatus
//                       )}`}
//                     >
//                       {item.leadStatus}
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Attendance */}
//         <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//           <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
//             <div>
//               <h4 className="text-lg font-semibold text-gray-900">
//                 Attendance
//               </h4>
//               <p className="text-sm text-gray-600 mt-1">Filtered by Date</p>
//             </div>
//             <input
//               type="date"
//               value={selectedDate}
//               onChange={(e) => setSelectedDate(e.target.value)}
//               className="border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="p-6">
//             {loadingAttendance ? (
//               <p className="text-gray-500 text-sm text-center">
//                 Loading attendance data...
//               </p>
//             ) : filteredData.length === 0 ? (
//               <p className="text-gray-500 text-sm text-center">
//                 No attendance records found for this date.
//               </p>
//             ) : (
//               <div className="max-h-80 space-y-4 overflow-y-auto">
//                 {filteredData.map((item) => (
//                   <div
//                     key={item._id}
//                     className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-600 font-semibold text-white text-sm">
//                         {item.employee?.fullName?.charAt(0) || "?"}
//                       </div>
//                       <div>
//                         <span className="text-sm font-medium text-gray-900 block">
//                           {item.employee?.fullName || "Unknown"}
//                         </span>
//                         <span className="text-xs text-gray-500">
//                           🕒 {formatTime(item.clockIn)} -{" "}
//                           {formatTime(item.clockOut)}
//                         </span>
//                         <span className="block text-xs text-gray-400">
//                           {item.firstHalf}/{item.secondHalf}
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(
//                         item.status
//                       )}`}
//                     >
//                       {item.status}
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Companies */}
//       <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm">
//         <div className="px-6 py-4 border-b border-gray-100">
//           <h4 className="text-lg font-semibold text-gray-900">Companies</h4>
//           <p className="text-sm text-gray-600 mt-1">
//             Active business partnerships
//           </p>
//         </div>
//         <div className="p-6">
//           {loadingCompanies ? (
//             <p className="text-gray-500 text-sm">Loading companies...</p>
//           ) : errorCompanies ? (
//             <p className="text-red-500 text-sm">{errorCompanies}</p>
//           ) : companies.length === 0 ? (
//             <p className="text-gray-500 text-sm">No companies found.</p>
//           ) : (
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {companies.map((company) => (
//                 <div
//                   key={company._id}
//                   className="rounded-lg border border-gray-200 bg-gray-50 p-4 hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex items-start justify-between mb-3">
//                     <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
//                       {company.companyName}
//                     </h3>
//                     <span
//                       className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold text-white ${getStatusColor(
//                         company.status
//                       )}`}
//                     >
//                       {company.status}
//                     </span>
//                   </div>
//                   <div className="space-y-1">
//                     {company.industry && (
//                       <div className="text-xs text-gray-600 capitalize">
//                         {company.industry} industry
//                       </div>
//                     )}
//                     {company.email && (
//                       <div className="text-xs text-gray-500">
//                         {company.email}
//                       </div>
//                     )}
//                     {company.numberOfEmployees !== undefined && (
//                       <div className="text-sm font-semibold text-gray-800">
//                         Employees: {company.numberOfEmployees}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Quick Actions */}
//       <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
//         <div className="px-6 py-4 border-b border-gray-100">
//           <h4 className="text-lg font-semibold text-gray-900">Quick Actions</h4>
//           <p className="text-sm text-gray-600 mt-1">
//             Common tasks and shortcuts
//           </p>
//         </div>
//         <div className="p-6">
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             <button
//               onClick={() => navigate("/add-lead")}
//               className="flex flex-col items-center justify-center h-24 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-md"
//             >
//               <Users className="w-6 h-6 mb-2" />
//               <span className="font-semibold">Add Lead</span>
//             </button>

//             <button
//               onClick={() => navigate("/user-management")}
//               className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
//             >
//               <UserCheck className="w-6 h-6 mb-2 text-gray-600" />
//               <span className="font-semibold text-gray-700">Add User</span>
//             </button>

//             <button
//               onClick={() => navigate("/attendance")}
//               className="flex flex-col items-center justify-center h-24 rounded-lg border-2 border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 transform hover:scale-105"
//             >
//               <Clock4 className="w-6 h-6 mb-2 text-gray-600" />
//               <span className="font-semibold text-gray-700">Clock In/Out</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;


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
import axios from "axios";

const MainDashboard = () => {
  const navigate = useNavigate();
  const [lead, setLead] = useState([]);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [attendanceData, setAttendanceData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loadingAttendance, setLoadingAttendance] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [errorCompanies, setErrorCompanies] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const role = localStorage.getItem("role"); // Super admin or employee

  const checkTokenExpiry = () => {
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("tokenExpiry");

    if (!token || !expiry) return false;

    if (new Date().getTime() > Number(expiry)) {
      // Token expired, remove all related data
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("userId");
      localStorage.removeItem("userName");
      localStorage.removeItem("role");
      localStorage.removeItem("companyId");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!checkTokenExpiry()) {
      alert("Session expired. Please login again.");
      navigate("/");
    }

    const interval = setInterval(() => {
      if (!checkTokenExpiry()) {
        alert("Session expired. Please login again.");
        navigate("/");
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
  const fetchAttendance = async () => {
    try {
      const res = await fetch(
        "http://localhost:4000/attendance/getAllAttendance"
      );
      const data = await res.json();
      console.log("Fetched attendance data:", data);
      const attendance = Array.isArray(data) ? data : data.data || [];

      const userId = localStorage.getItem("userId"); // logged-in employee id

      // Filter only attendance records for logged-in employee
      const userAttendance = attendance.filter(
        (item) => item.employee?._id === userId
      );

      setAttendanceData(userAttendance);
    } catch (err) {
      console.error("Error fetching attendance:", err);
    } finally {
      setLoadingAttendance(false);
    }
  };

  fetchAttendance();
}, []);


  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("http://localhost:4000/leads/");
        const data = await res.json();
        const leadData = Array.isArray(data) ? data : data.data || [];
        setLead(leadData);
      } catch (err) {
        console.error("Error fetching leads:", err);
      } finally {
        setLoadingLeads(false);
      }
    };
    fetchLeads();
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/company/all");
        setCompanies(response.data?.companies || []);
      } catch (err) {
        console.error("Error fetching companies:", err);
        setErrorCompanies("Failed to load companies");
      } finally {
        setLoadingCompanies(false);
      }
    };
    fetchCompanies();
  }, []);

  useEffect(() => {
    const target = new Date(selectedDate);
    const filtered = attendanceData.filter((item) => {
      if (!item.date) return false;
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === target.getFullYear() &&
        itemDate.getMonth() === target.getMonth() &&
        itemDate.getDate() === target.getDate()
      );
    });
    setFilteredData(filtered);
  }, [selectedDate, attendanceData]);

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-400";
    switch (status.toLowerCase()) {
      case "present":
      case "active":
        return "bg-green-500 hover:bg-green-600";
      case "absent":
        return "bg-red-500 hover:bg-red-600";
      case "late":
      case "warm":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "hot":
        return "bg-red-500 hover:bg-red-600";
      case "cold":
      case "inactive":
        return "bg-gray-500 hover:bg-gray-600";
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
    {
      title: "Total Leads",
      value: lead.length.toString(),
      percentage: "+12% from last month",
      icon: <Users className="w-5 h-5" />,
      trend: "up",
      color: "text-blue-600",
    },
    {
      title: "Total Users",
      value: "4",
      percentage: "+8% from last month",
      icon: <UserCheck className="w-5 h-5" />,
      trend: "up",
      color: "text-green-600",
    },
    {
      title: "Avg Time",
      value: "00:45",
      percentage: "-2% from last month",
      icon: <Clock4 className="w-5 h-5" />,
      trend: "down",
      color: "text-orange-600",
    },
    {
      title: "Conversions",
      value: "76",
      percentage: "+5% from last month",
      icon: <BarChart3 className="w-5 h-5" />,
      trend: "up",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="flex-1 max-h-[85vh] overflow-y-auto px-4 py-6 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Top Cards (ALL roles) */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color} bg-opacity-10`}
              >
                {item.icon}
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

      {/* Conditional Sections */}
      {role === "Super admin" && (
        <>
          {/* Leads, Attendance, Companies, Quick Actions for Super Admin */}
          {/* You can reuse your original code for all sections here */}
        </>
      )}

      {role === "employee" && (
        <>
          {/* Recent Leads */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-8">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900">Recent Leads</h4>
              </div>
              <div className="p-6 max-h-80 space-y-4 overflow-y-auto">
                {loadingLeads ? (
                  <p className="text-sm text-gray-500 text-center">Loading leads...</p>
                ) : lead.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center">No leads found.</p>
                ) : (
                  lead.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-semibold text-white text-sm">
                          {item.name?.charAt(0)?.toUpperCase() || "?"}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900 block">
                            {item.name}
                          </span>
                          <span className="text-xs text-gray-500">{item.email}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-900">
                          ₹{item.value}
                        </span>
                        <button
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(
                            item.leadStatus
                          )}`}
                        >
                          {item.leadStatus}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Attendance */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Attendance</h4>
          <p className="text-sm text-gray-600 mt-1">
            Attendance for {selectedDate}
          </p>
        </div>
        <input
          type="date"
          className="border rounded px-2 py-1 text-sm"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="p-6 max-h-80 space-y-4 overflow-y-auto">
        {loadingAttendance ? (
          <p className="text-sm text-gray-500 text-center">Loading attendance...</p>
        ) : filteredData.length === 0 ? (
          <p className="text-sm text-gray-500 text-center">
            No attendance records for this date.
          </p>
        ) : (
          filteredData.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-900">
                {item.employee?.fullName || "Unknown"}
              </span>
              <span className="text-sm text-gray-500">
                In: {formatTime(item.clockIn)} | Out: {formatTime(item.clockOut)}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Lead
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Add User
              </button>
              <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                View Reports
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Settings
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MainDashboard;
