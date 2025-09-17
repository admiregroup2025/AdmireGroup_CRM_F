import { users } from "./users.js";

const UserTable = () => {
  const getRoleBadge = (role) => {
    const colors = {
      Admin: "bg-[#ad46ff]",
      Manager: "bg-[#2b7fff]",
      "Sales Rep": "bg-[#00c951]",
      User: "bg-[#6a7282]",
    };
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-xs font-medium ${colors[role]}`}
      >
        {role}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    return (
      <span
        className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
          status === "Active" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="border border-gray-200 rounded-md bg-[#ffffff] whitespace-nowrap">
      <table className="w-full rounded-md overflow-hidden shadow-md border-gray-200">
        <thead className="border-b border-gray-200">
          <tr className="text-left">
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
            <tr key={u.id} className="border-b hover:bg-gray-100 cursor-pointer">
              {/* User */}
              <td className="p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                  {u.name[0]}
                </div>
                <span className="font-medium">{u.name}</span>
              </td>

              {/* Contact */}
              <td className="p-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  {u.email}
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                  {u.phone}
                </div>
              </td>

              {/* Role */}
              <td className="p-3">{getRoleBadge(u.role)}</td>

              {/* Department */}
              <td className="p-3">{u.department}</td>

              {/* Status */}
              <td className="p-3">{getStatusBadge(u.status)}</td>

              {/* Join Date */}
              <td className="p-3 text-sm">
                  <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                  {u.joinDate}
                </div></td>



              {/* Last Login */}
              <td className="p-3 text-sm">{u.lastLogin}</td>

              {/* Actions */}
              <td className="p-3 flex gap-2">
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                </button>
                <button className="text-red-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
