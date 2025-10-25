import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch both Admins and Employees
  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const [adminRes, employeeRes] = await Promise.all([
        fetch(`${API_URL}/getAdmin`),
        fetch(`${API_URL}/employee/allEmployee`),
      ]);

      const adminData = await adminRes.json();
      const employeeData = await employeeRes.json();

      if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
      if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

      // ✅ Normalize data (handle various API structures)
      const admins = adminData.admins || adminData.employees || adminData || [];
      const employees = employeeData.employees || employeeData.users || employeeData || [];

      // ✅ Combine both arrays
      const combined = [...admins, ...employees];

      // ✅ Sort by creation date (newest first)
      combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setUsers(combined);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch users or admins. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete employee or admin by ID
  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete employee");
      }

      console.log("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Role Badge
  const getRoleBadge = (role) => {
    const colors = {
      Admin: "bg-[#ad46ff]",
      Manager: "bg-[#2b7fff]",
      "Sales Rep": "bg-[#00c951]",
      User: "bg-[#6a7282]",
    };
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
          colors[role] || "bg-gray-400"
        }`}
      >
        {role}
      </span>
    );
  };

  // ✅ Status Badge
  const getStatusBadge = (status) => (
    <span
      className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
        status === "Active" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
      <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

      {loading ? (
        <div className="text-center py-6 text-gray-600">Loading data...</div>
      ) : error ? (
        <div className="text-center py-6 text-red-500">{error}</div>
      ) : users.length === 0 ? (
        <div className="text-center py-6 text-gray-500">No records found.</div>
      ) : (
        <table className="w-full rounded-md overflow-hidden border-gray-200">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr className="text-left text-sm text-gray-700">
              <th className="p-3">User</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Role</th>
              <th className="p-3">Department</th>
              <th className="p-3">Status</th>
              <th className="p-3">Join Date</th>
              <th className="p-3">Last Login</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u._id}
                className="border-b hover:bg-gray-100 transition cursor-pointer"
              >
                {/* User */}
                <td className="p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                    {u.fullName?.[0]?.toUpperCase() || "?"}
                  </div>
                  <span className="font-medium">{u.fullName || "Unnamed User"}</span>
                </td>

                {/* Contact */}
                <td className="p-3 text-sm text-gray-600">
                  <div>{u.email || "—"}</div>
                  <div>{u.phone || "—"}</div>
                </td>

                {/* Role */}
                <td className="p-3">{getRoleBadge(u.role || "User")}</td>

                {/* Department */}
                <td className="p-3">{u.department || "—"}</td>

                {/* Status */}
                <td className="p-3">
                  {getStatusBadge(u.accountActive ? "Active" : "Inactive")}
                </td>

                {/* Join Date */}
                <td className="p-3 text-sm text-gray-600">
                  {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
                </td>

                {/* Last Login */}
                <td className="p-3 text-sm text-gray-600">
                  {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
                </td>

                {/* Actions */}
                <td className="p-3 flex gap-2">
                  <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                    View
                  </button>
                  <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
                    onClick={() => deleteEmployee(u._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
