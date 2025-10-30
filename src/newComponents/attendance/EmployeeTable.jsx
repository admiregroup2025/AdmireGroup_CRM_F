import { useEffect, useState } from "react";
import { CalendarIcon, LogIn, LogOut, Edit2 } from "lucide-react";
import StatusBadge from "./StatusBadge.jsx";

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAttendance, setEditingAttendance] = useState(null);
  const [editClockIn, setEditClockIn] = useState("");
  const [editClockOut, setEditClockOut] = useState("");

  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  // ✅ Fetch attendance
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await fetch("http://localhost:4000/attendance/getAllAttendance");
        const data = await res.json();
        let allData = Array.isArray(data) ? data : data.data || [];
        console.log(allData)
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

  const formatTime = (time) =>
    time ? new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-";

  // ✅ Open edit modal
  const openEditModal = (attendance) => {
    setEditingAttendance(attendance);
    const clockInDate = attendance.clockIn ? new Date(attendance.clockIn) : new Date();
    const clockOutDate = attendance.clockOut ? new Date(attendance.clockOut) : new Date();
    setEditClockIn(
      `${String(clockInDate.getHours()).padStart(2, "0")}:${String(clockInDate.getMinutes()).padStart(2, "0")}`
    );
    setEditClockOut(
      `${String(clockOutDate.getHours()).padStart(2, "0")}:${String(clockOutDate.getMinutes()).padStart(2, "0")}`
    );
  };

  const closeEditModal = () => {
    setEditingAttendance(null);
  };

  // ✅ Save updated attendance
  const handleSave = async () => {
    const [inHours, inMinutes] = editClockIn.split(":").map(Number);
    const [outHours, outMinutes] = editClockOut.split(":").map(Number);

    if (
      [inHours, inMinutes, outHours, outMinutes].some(
        (n) => isNaN(n) || n < 0 || n > 59 || inHours > 23 || outHours > 23
      )
    ) {
      alert("Invalid time format! Use HH:MM in 24-hour format.");
      return;
    }

    const clockInDate = new Date(editingAttendance.clockIn || new Date());
    const clockOutDate = new Date(editingAttendance.clockOut || new Date());

    clockInDate.setHours(inHours, inMinutes, 0, 0);
    clockOutDate.setHours(outHours, outMinutes, 0, 0);

    try {
      const res = await fetch(`http://localhost:4000/attendance/${editingAttendance._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clockIn: clockInDate.toISOString(),
          clockOut: clockOutDate.toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Failed to update attendance");

      const updated = await res.json();
      setEmployeeData((prev) =>
        prev.map((item) => (item._id === editingAttendance._id ? updated.attendance : item))
      );
      closeEditModal();
    } catch (err) {
      console.error(err);
      alert("Error updating attendance: " + err.message);
    }
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
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan="9">
                Loading...
              </td>
            </tr>
          ) : employeeData.length === 0 ? (
            <tr>
              <td className="p-4 text-center text-gray-500" colSpan="9">
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
                  ? Math.round(((new Date(u.clockOut) - new Date(u.clockIn)) / 36e5) * 100) / 100
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
                        {u.employee?.fullName ? u.employee.fullName.charAt(0) : "?"}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-slate-900">
                          {u.employee?.fullName || "Unknown Employee"}
                        </div>
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
                      <span className="text-green-600">
                        <LogIn />
                      </span>
                      <span>{checkIn}</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600">
                        <LogOut />
                      </span>
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
                  <td className="p-3">
                    <button
                      onClick={() => openEditModal(u)}
                      className="flex items-center gap-1 text-sm text-indigo-600 hover:underline"
                    >
                      <Edit2 size={16} /> Edit
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* ✅ Edit Modal */}
      {editingAttendance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-semibold mb-4">Edit Attendance</h2>
            <div className="mb-3">
              <label className="block text-sm mb-1">Clock In (HH:MM)</label>
              <input
                type="time"
                value={editClockIn}
                onChange={(e) => setEditClockIn(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm mb-1">Clock Out (HH:MM)</label>
              <input
                type="time"
                value={editClockOut}
                onChange={(e) => setEditClockOut(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
