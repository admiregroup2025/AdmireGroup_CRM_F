import { useState } from "react";
import Modal from "./Modal";

const AddUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button to open modal */}
            <button  onClick={() => setOpen(true)} className='bg-black w-fit px-1 py-2 flex gap-2 rounded-md'>
        <div className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </div>
        <p className='text-white'>Add User</p>
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
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="john@company.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
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

          {/* Role */}
          <div>
            <label className="block text-sm mb-1">Role</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100">
              <option>Select role</option>
              <option>Admin</option>
              <option>Manager</option>
              <option>User</option>
            </select>
          </div>

          {/* Temporary Password */}
          <div>
            <label className="block text-sm mb-1">Temporary Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
            />
          </div>

          {/* Account Active toggle (full row) */}
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
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Add User
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddUser;
