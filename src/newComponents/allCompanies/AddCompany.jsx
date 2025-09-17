import { useState, useCallback, useMemo } from "react";
import Modal from "../UserManagement/Modal";

const AddCompany = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Select Status");
  const [statusOpen, setStatusOpen] = useState(false);

  const statusOptions = useMemo(
    () => ["Active", "Pending", "Inactive"],
    []
  );

  const industryOptions = useMemo(
    () => ["Technology", "Manufacturing", "Finance", "Healthcare", "Retail", "Consulting"],
    []
  );

  const handleStatusSelect = useCallback((selectedStatus) => {
    setStatus(selectedStatus);
    setStatusOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => setOpen(true), []);
  const handleCloseModal = useCallback(() => setOpen(false), []);

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={handleOpenModal}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="add-company-modal"
        className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md"
      >
        <div className="text-gray-500" aria-hidden="true">
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
        <span className="text-white">Add Company</span>
      </button>

      {/* Modal */}
      <Modal
        id="add-company-modal"
        isOpen={open}
        onClose={handleCloseModal}
        aria-label="Add new company form"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6" id="add-company-title">
            Add New Company
          </h2>

<form
  className="grid grid-cols-2 gap-6"
  aria-labelledby="add-company-title"
  onSubmit={(e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      handleCloseModal();
    } else {
      e.currentTarget.reportValidity(); // ✅ show browser error tooltips
    }
  }}
>
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm mb-1">
                Company Name
              </label>
              <input
              required
                id="companyName"
                type="text"
                placeholder="Tech Corp Solutions"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
                aria-required="true"
              />
            </div>

            {/* Industry */}
<div>
  <label htmlFor="industry" className="block text-sm mb-1">
    Industry
  </label>
  <select
    id="industry"
    required
    aria-required="true"
    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
  >
    <option value="">Select industry</option>
    {industryOptions.map((ind, idx) => (
      <option key={idx} value={ind}>
        {ind}
      </option>
    ))}
  </select>
</div>


            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email
              </label>
              <input
              required
                id="email"
                type="email"
                placeholder="contact@company.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
                aria-required="true"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">
                Phone
              </label>
              <input
              required
                id="phone"
                type="text"
                placeholder="+1 (555) 123-4567"
                aria-required="true"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
              />
            </div>

            {/* Website */}
            <div className="col-span-2">
              <label htmlFor="website" className="block text-sm mb-1">
                Website
              </label>
              <input
              required
                id="website"
                type="text"
                placeholder="www.company.com"
                aria-required="true"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm mb-1">
                Address
              </label>
              <input
              required
                id="address"
                type="text"
                placeholder="123 Business Street, City, State ZIP"
                aria-required="true"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
              />
            </div>

            {/* Number of Employees */}
            <div>
              <label htmlFor="employees" className="block text-sm mb-1">
                Number of Employees
              </label>
              <input
              required
                id="employees"
                type="number"
                placeholder="100"
                aria-required="true"
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
              />
            </div>

            {/* Status */}
<div>
  <label htmlFor="status" className="block text-sm mb-1">
    Status
  </label>
  <select
    id="status"
    name="status"
    required
    aria-required="true"
    aria-label="Company status"
    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
    value={status}
    onChange={(e) => handleStatusSelect(e.target.value)}
  >
    <option value="">Select status</option>
    {statusOptions.map((s, idx) => (
      <option key={idx} value={s}>
        {s}
      </option>
    ))}
  </select>
</div>
          
  {/* Footer buttons */}
  <div className="flex justify-start gap-2 mt-6">
    <button
      type="button"
      className="px-4 py-2 border rounded-md"
      onClick={handleCloseModal}
      aria-label="Cancel and close the add company form"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md text-white"
      aria-label="Submit form to add company and close modal"
    >
      Add Company
    </button>
  </div>
</form>

        </div>
      </Modal>
    </div>
  );
};

export default AddCompany;
