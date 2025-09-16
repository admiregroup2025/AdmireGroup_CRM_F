import { useState } from "react";
import Modal from "./Modal";

const roles = ["Select role", "Admin", "Manager", "User"];

const AddUser = () => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("Select role");
  const [roleOpen, setRoleOpen] = useState(false);

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setRoleOpen(false);
  };

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md"
      >
        <div className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
        <p className="text-white">Add User</p>
      </button>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-semibold mb-6">Add New User</h2>

        <form className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="john@company.com"
              className="w-full rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm mb-1">Department</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100">
              <option>Select department</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
            </select>
          </div>

          {/* Role (custom dropdown) */}
          <div className="relative">
            <label className="block text-sm mb-1">Role</label>

            {/* Parent */}
            <div
              className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-md px-3 py-2 cursor-pointer"
              onClick={() => setRoleOpen(!roleOpen)}
            >
              <span className="text-black">{role}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-chevron-down text-gray-600 transition-transform ${
                  roleOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {/* Dropdown */}
            {roleOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
                {roles.map((r) => (
                  <div
                    key={r}
                    onClick={() => handleRoleSelect(r)}
                    className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {r}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Temporary Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Account Active toggle */}
          <div className="col-span-2 flex items-center gap-2 mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="toggle-checkbox" />
              Account Active
            </label>
          </div>
        </form>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            type="button"
            className="px-4 py-2 border rounded-md"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={() => setOpen(false)}
            className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md text-white"
          >
            Add User
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddUser;
