import { useState } from "react";
import Modal from "../UserManagement/Modal";

const AddCompany = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Select Status");
  const [statusOpen, setStatusOpen] = useState(false);

  const handleStatusSelect = (selectedStatus) => {
    setStatus(selectedStatus);
    setStatusOpen(false);
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
        <p className="text-white">Add Company</p>
      </button>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
         <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Add New Company</h2>

      <form className="grid grid-cols-2 gap-6">
  {/* Company Name */}
  <div>
    <label className="block text-sm mb-1">Company Name</label>
    <input
      type="text"
      placeholder="Tech Corp Solutions"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Industry */}
  <div>
    <label className="block text-sm mb-1">Industry</label>
    <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
      <option>Select industry</option>
      <option>Technology</option>
      <option>Manufacturing</option>
      <option>Finance</option>
      <option>Healthcare</option>
      <option>Retail</option>
      <option>Consulting</option>
    </select>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm mb-1">Email</label>
    <input
      type="email"
      placeholder="contact@company.com"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="block text-sm mb-1">Phone</label>
    <input
      type="text"
      placeholder="+1 (555) 123-4567"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Website */}
  <div className="col-span-2">
    <label className="block text-sm mb-1">Website</label>
    <input
      type="text"
      placeholder="www.company.com"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Address */}
  <div className="col-span-2">
    <label className="block text-sm mb-1">Address</label>
    <input
      type="text"
      placeholder="123 Business Street, City, State ZIP"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Number of Employees */}
  <div>
    <label className="block text-sm mb-1">Number of Employees</label>
    <input
      type="number"
      placeholder="100"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
    />
  </div>

  {/* Status */}
  <div>
    <label className="block text-sm mb-1">Status</label>
    <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
      <option>Select status</option>
      <option>Active</option>
      <option>Pending</option>
      <option>Inactive</option>
    </select>
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
            Add Company
          </button>
        </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCompany;
