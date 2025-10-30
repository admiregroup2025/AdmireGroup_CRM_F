// import { useEffect, useState } from "react";
// import { CalendarIcon, LogIn, LogOut, Edit } from "lucide-react";
// import StatusBadge from "./StatusBadge.jsx";

// // EditModal component
// const EditModal = ({ attendance, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     clockIn: attendance.clockIn || "",
//     clockOut: attendance.clockOut || "",
//     status: attendance.status || "Present",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//       <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
//         <h2 className="mb-4 text-lg font-semibold text-center">Edit Attendance</h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Clock In</label>
//             <input
//               type="datetime-local"
//               name="clockIn"
//               value={formData.clockIn?.split(".")[0] || ""}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Clock Out</label>
//             <input
//               type="datetime-local"
//               name="clockOut"
//               value={formData.clockOut?.split(".")[0] || ""}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full rounded border px-3 py-2"
//             >
//               <option value="Present">Present</option>
//               <option value="Absent">Absent</option>
//               <option value="On Leave">On Leave</option>
//             </select>
//           </div>

//           <div className="flex justify-end gap-2 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="rounded bg-gray-200 px-4 py-2"
//             >
//               Cancel
//             </button>
//             <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
//               Save
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // EmployeeTable component
// const EmployeeTable = () => {
//   const [employeeData, setEmployeeData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingAttendance, setEditingAttendance] = useState(null);
//   const [data,getData] = useState(null)

//   const userId = localStorage.getItem("userId");
//   const role = localStorage.getItem("role");

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const res = await fetch("http://localhost:4000/attendance/getAllAttendance");
//         const data = await res.json();

//         let allData = Array.isArray(data) ? data : data.data || [];

//         if (role === "Employee") {
//           allData = allData.filter((item) => item.employee?._id === userId);
//         }

//         allData.sort((a, b) => new Date(b.date) - new Date(a.date));

//         setEmployeeData(allData);
//       } catch (err) {
//         console.error("Error fetching attendance:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAttendance();
//   }, [userId, role]);
// // 
// useEffect(() => {
//   const fetchAttendanceByEmployee = async () => {
//     try {
//       const res = await fetch(
//         `http://localhost:4000/attendance/employee/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`, // if your backend requires token
//           },
//         }
//       );
//       const data = await res.json();
//       if (data.data) {
//         setEmployeeData(data.data); // save attendance to state
//       } else {
//         setEmployeeData([]);
//       }
//     } catch (error) {
//       console.error("Error fetching attendance by employee ID:", error);
//       setEmployeeData([]);
//     } finally {
//       setLoading(false);
//     }
// };

//   const formatTime = (time) =>
//     time ? new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-";

//   const formatDate = (date) =>
//     date
//       ? new Date(date).toLocaleDateString([], {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//         })
//       : "-";

//   const handleSave = async (updatedData) => {
//     try {
//       const res = await fetch(
//         `http://localhost:4000/attendance/${editingAttendance._id}`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(updatedData),
//         }
//       );

//       if (!res.ok) throw new Error("Failed to update");

//       const updatedAttendance = await res.json();

//       setEmployeeData((prev) =>
//         prev.map((att) => (att._id === updatedAttendance._id ? updatedAttendance : att))
//       );

//       setEditingAttendance(null);
//     } catch (err) {
//       console.error("Error updating attendance:", err);
//     }
//   };

//   const calculateWorkingHours = (clockIn, clockOut, status) => {
//     if (clockIn && clockOut) {
//       return ((new Date(clockOut) - new Date(clockIn)) / 36e5).toFixed(2);
//     } else if (status === "Absent") return "0.00";
//     return "-";
//   };

//   return (
//     <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap overflow-x-auto">
//       <table className="w-full rounded-md overflow-hidden shadow-md border-gray-200">
//         <thead className="border-b border-gray-200 bg-gray-50">
//           <tr className="text-left">
//             <th className="p-3 text-sm font-semibold text-gray-700">Employee</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Department</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Date</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Check In</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Check Out</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Status</th>
//             <th className="p-3 text-sm font-semibold text-gray-700">Working Hours</th>
//             {role === "Admin" && (
//               <th className="p-3 text-sm font-semibold text-gray-700">Actions</th>
//             )}
//           </tr>
//         </thead>

//         <tbody>
//           {loading ? (
//             <tr>
//               <td colSpan="8" className="p-4 text-center text-gray-500">
//                 Loading...
//               </td>
//             </tr>
//           ) : employeeData.length === 0 ? (
//             <tr>
//               <td colSpan="8" className="p-4 text-center text-gray-500">
//                 No attendance records found.
//               </td>
//             </tr>
//           ) : (
//             employeeData.map((u) => (
//               <tr key={u._id} className="hover:bg-gray-50 transition-colors">
//                 <td className="p-3">
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-800">
//                       {u.employee?.fullName?.charAt(0)?.toUpperCase() || "?"}
//                     </div>
//                     <div>
//                       <div className="font-medium text-sm text-slate-900">
//                         {u.employee?.fullName || "Unknown"}
//                       </div>
//                       {u.employee?.email && (
//                         <div className="text-xs text-gray-400">{u.employee.email}</div>
//                       )}
//                     </div>
//                   </div>
//                 </td>

//                 <td className="p-3 text-sm text-gray-700">{u.employee?.department || "N/A"}</td>

//                 <td className="p-3 text-sm text-gray-600">
//                   <div className="flex items-center gap-1">
//                     <CalendarIcon className="w-4 h-4" />
//                     <span>{formatDate(u.date)}</span>
//                   </div>
//                 </td>

//                 <td className="p-3 text-sm text-gray-700">
//                   <div className="flex items-center gap-2">
//                     <LogIn className="w-4 h-4 text-green-600" />
//                     <span>{formatTime(u.clockIn)}</span>
//                   </div>
//                 </td>

//                 <td className="p-3 text-sm text-gray-700">
//                   <div className="flex items-center gap-2">
//                     <LogOut className="w-4 h-4 text-red-600" />
//                     <span>{formatTime(u.clockOut)}</span>
//                   </div>
//                 </td>

//                 <td className="p-3">
//                   <StatusBadge status={u.status} />
//                 </td>

//                 <td className="p-3 text-sm font-medium text-gray-800">
//                   {calculateWorkingHours(u.clockIn, u.clockOut, u.status) !== "-"
//                     ? `${calculateWorkingHours(u.clockIn, u.clockOut, u.status)} hrs`
//                     : "-"}
//                 </td>

//                 {role === "admin" && (
//                   <td className="p-3 text-sm text-gray-700">
//                     <button
//                       onClick={() => setEditingAttendance(u)}
//                       className="flex items-center gap-1 text-blue-500"
//                     >
//                       <Edit className="w-4 h-4" />
//                       Edit
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {editingAttendance && (
//         <EditModal
//           attendance={editingAttendance}
//           onClose={() => setEditingAttendance(null)}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// };

// export default EmployeeTable;


import { useEffect, useState } from "react";
import { CalendarIcon, LogIn, LogOut, Edit } from "lucide-react";
import StatusBadge from "./StatusBadge.jsx";

const EditModal = ({ attendance, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    clockIn: attendance.clockIn || "",
    clockOut: attendance.clockOut || "",
    status: attendance.status || "Present",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-lg font-semibold text-center">Edit Attendance</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Clock In</label>
            <input
              type="datetime-local"
              name="clockIn"
              value={formData.clockIn?.split(".")[0] || ""}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Clock Out</label>
            <input
              type="datetime-local"
              name="clockOut"
              value={formData.clockOut?.split(".")[0] || ""}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2"
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-200 px-4 py-2"
            >
              Cancel
            </button>
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAttendance, setEditingAttendance] = useState(null);

  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        let url = "";
        if (role?.toLowerCase() === "employee") {
          url = `http://localhost:4000/attendance/${userId}`;
        } else {
          url = "http://localhost:4000/attendance/getAllAttendance";
        }

        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        let allData = Array.isArray(data) ? data : data.data || [];

        // Filter employee data for safety
        if (role?.toLowerCase() === "employee") {
          allData = allData.filter((item) => item.employee?._id === userId);
        }

        // Sort by date descending
        allData.sort((a, b) => new Date(b.date) - new Date(a.date));

        setEmployeeData(allData);
      } catch (err) {
        console.error("Error fetching attendance:", err);
        setEmployeeData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [userId, role, token]);

  const formatTime = (time) =>
    time ? new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-";

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString([], {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "-";

  const calculateWorkingHours = (clockIn, clockOut, status) => {
    if (clockIn && clockOut) return ((new Date(clockOut) - new Date(clockIn)) / 36e5).toFixed(2);
    if (status === "Absent") return "0.00";
    return "-";
  };

  const handleSave = async (updatedData) => {
    try {
      const res = await fetch(
        `http://localhost:4000/attendance/${editingAttendance._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!res.ok) throw new Error("Failed to update");
      const updatedAttendance = await res.json();

      setEmployeeData((prev) =>
        prev.map((att) => (att._id === updatedAttendance._id ? updatedAttendance : att))
      );

      setEditingAttendance(null);
    } catch (err) {
      console.error("Error updating attendance:", err);
    }
  };

  return (
    <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap overflow-x-auto">
      <table className="w-full rounded-md overflow-hidden shadow-md border-gray-200">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr className="text-left">
            <th className="p-3 text-sm font-semibold text-gray-700">Employee</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Department</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Date</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Check In</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Check Out</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Status</th>
            <th className="p-3 text-sm font-semibold text-gray-700">Working Hours</th>
            {role?.toLowerCase() === "admin" && (
              <th className="p-3 text-sm font-semibold text-gray-700">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="8" className="p-4 text-center text-gray-500">
                Loading...
              </td>
            </tr>
          ) : employeeData.length === 0 ? (
            <tr>
              <td colSpan="8" className="p-4 text-center text-gray-500">
                No attendance records found.
              </td>
            </tr>
          ) : (
            employeeData.map((u) => (
              <tr key={u._id} className="hover:bg-gray-50 transition-colors">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-800">
                      {u.employee?.fullName?.charAt(0)?.toUpperCase() || "?"}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-slate-900">{u.employee?.fullName || "Unknown"}</div>
                      {u.employee?.email && <div className="text-xs text-gray-400">{u.employee.email}</div>}
                    </div>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700">{u.employee?.department || "N/A"}</td>
                <td className="p-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(u.date)}</span>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <LogIn className="w-4 h-4 text-green-600" />
                    <span>{formatTime(u.clockIn)}</span>
                  </div>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <LogOut className="w-4 h-4 text-red-600" />
                    <span>{formatTime(u.clockOut)}</span>
                  </div>
                </td>
                <td className="p-3">
                  <StatusBadge status={u.status} />
                </td>
                <td className="p-3 text-sm font-medium text-gray-800">
                  {calculateWorkingHours(u.clockIn, u.clockOut, u.status) !== "-"
                    ? `${calculateWorkingHours(u.clockIn, u.clockOut, u.status)} hrs`
                    : "-"}
                </td>
                {role?.toLowerCase() === "admin" && (
                  <td className="p-3 text-sm text-gray-700">
                    <button
                      onClick={() => setEditingAttendance(u)}
                      className="flex items-center gap-1 text-blue-500"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editingAttendance && (
        <EditModal
          attendance={editingAttendance}
          onClose={() => setEditingAttendance(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
