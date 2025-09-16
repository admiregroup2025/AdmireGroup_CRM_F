import { useState } from "react";
import Modal from "../UserManagement/Modal";

const status = ["Select Status", "Hot", "Warm", "Cold"];

const AddLead = () => {
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
        <p className="text-white">Add Lead</p>
      </button>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-semibold mb-6">Add New Lead</h2>

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

          {/* Company */}
          <div>
            <label className="block text-sm mb-1">Company</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm mb-1">Status</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100">
              <option>Hot</option>
              <option>Warm</option>
              <option>Cold</option>
            </select>
          </div>


          {/* Expected value */}
          <div>
            <label className="block text-sm mb-1">Expected value</label>
            <input
              type="text"
              placeholder="$10,000"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
            />
          </div>

          
{/* Lead Source */}
<div className="col-span-2">
  <label className="block text-sm mb-1">Lead Source</label>
  <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100">
    <option>Select source</option>
    <option>Website</option>
    <option>Referral</option>
    <option>Cold Call</option>
    <option>LinkedIn</option>
    <option>Trade Show</option>
  </select>
</div>

{/* Notes */}
<div className="col-span-2">
  <label className="block text-sm mb-1">Notes</label>
  <input
    type="text"
    placeholder="Additional notes about the lead..."
    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-[#f3f3f5] focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
  />
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
            Add Lead
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddLead;
