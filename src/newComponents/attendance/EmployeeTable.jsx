import { useEffect, useState } from "react";
import { CalendarIcon, LogIn, LogOut } from "lucide-react";
import StatusBadge from "./StatusBadge.jsx";

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user info
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role"); // "Super admin" or "Employee"

  // Fetch attendance data
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await fetch("http://localhost:4000/attendance/getAllAttendance");
        const data = await res.json();
        let allData = Array.isArray(data) ? data : data.data || [];

        // Filter only for logged-in employee if role is Employee
        if (role === "Employee") {
          allData = allData.filter((item) => item.employee?._id === userId);
        }

        setEmployeeData(allData);
      } catch (err) {
        console.error("Error fetching attendance:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [userId, role]);

  // Function to format time
  const formatTime = (time) =>
    time ? new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-";

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
          {loading ? (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan="8">
                Loading...
              </td>
            </tr>
          ) : employeeData.length === 0 ? (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan="8">
                No attendance records found.
              </td>
            </tr>
          ) : (
            employeeData.map((u) => {
              const checkIn = u.clockIn ? formatTime(u.clockIn) : "-";
              const checkOut = u.clockOut ? formatTime(u.clockOut) : "-";
              const date = u.clockIn ? new Date(u.clockIn).toLocaleDateString() : "-";
              const workingHours =
                u.clockIn && u.clockOut
                  ? Math.round((new Date(u.clockOut) - new Date(u.clockIn)) / 36e5 * 100) / 100
                  : "-";
              const overtime =
                workingHours !== "-" && workingHours > 8
                  ? `${(workingHours - 8).toFixed(2)} hrs`
                  : "-";

              return (
                <tr key={u._id} className="hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-800">
                        {u.employee?.name?.charAt(0) || "?"}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-slate-900">{u.employee?.name}</div>
                        {u.employee?.email && (
                          <div className="text-xs text-gray-400">{u.employee.email}</div>
                        )}
                      </div>
                    </div>
                  </td>

                  <td className="p-3 text-sm text-gray-700">{u.employee?.department || "N/A"}</td>

                  <td className="p-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{date}</span>
                    </div>
                  </td>

                  <td className="p-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600"><LogIn /></span>
                      <span>{checkIn}</span>
                    </div>
                  </td>

                  <td className="p-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600"><LogOut /></span>
                      <span>{checkOut}</span>
                    </div>
                  </td>

                  <td className="p-3">
                    <StatusBadge status={u.status} />
                  </td>

                  <td className="p-3 text-sm font-medium text-gray-800">
                    {workingHours !== "-" ? `${workingHours} hrs` : "-"}
                  </td>

                  <td className="p-3 text-sm text-blue-600">{overtime}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
