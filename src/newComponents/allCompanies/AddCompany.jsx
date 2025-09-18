// import { useState, useCallback, useMemo } from "react";
// import Modal from "../UserManagement/Modal";

// const statusOptions = ["Active", "Pending", "Inactive"];
// const industryOptions =["Technology", "Manufacturing", "Finance", "Healthcare", "Retail", "Consulting"],;

// const AddCompany = () => {
//   const [open, setOpen] = useState(false);
//   const [status, setStatus] = useState("Select Status");
//   const [statusOpen, setStatusOpen] = useState(false);

  
//   const handleStatusSelect = useCallback((selectedStatus) => {
//     setStatus(selectedStatus);
//     setStatusOpen(false);
//   }, []);

//   const handleOpenModal = useCallback(() => setOpen(true), []);
//   const handleCloseModal = useCallback(() => setOpen(false), []);

//   return (
//     <div>
//       {/* Button to open modal */}
//       <button
//         onClick={handleOpenModal}
//         aria-haspopup="dialog"
//         aria-expanded={open}
//         aria-controls="add-company-modal"
//         className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md"
//       >
//         <div className="text-gray-500" aria-hidden="true">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="lucide lucide-plus"
//           >
//             <path d="M5 12h14" />
//             <path d="M12 5v14" />
//           </svg>
//         </div>
//         <span className="text-white">Add Company</span>
//       </button>

//       {/* Modal */}
//       <Modal
//         id="add-company-modal"
//         isOpen={open}
//         onClose={handleCloseModal}
//         aria-label="Add new company form"
//       >
//         <div className="p-6">
//           <h2 className="text-xl font-semibold mb-6" id="add-company-title">
//             Add New Company
//           </h2>

// <form
//   className="grid grid-cols-2 gap-6"
//   aria-labelledby="add-company-title"
//   onSubmit={(e) => {
//     e.preventDefault();
//     if (e.currentTarget.checkValidity()) {
//       handleCloseModal();
//     } else {
//       e.currentTarget.reportValidity(); // ✅ show browser error tooltips
//     }
//   }}
// >
//             {/* Company Name */}
//             <div>
//               <label htmlFor="companyName" className="block text-sm mb-1">
//                 Company Name
//               </label>
//               <input
//               required
//                 id="companyName"
//                 type="text"
//                 placeholder="Tech Corp Solutions"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//                 aria-required="true"
//               />
//             </div>

//             {/* Industry */}
// <div>
//   <label htmlFor="industry" className="block text-sm mb-1">
//     Industry
//   </label>
//   <select
//     id="industry"
//     required
//     aria-required="true"
//     className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
//   >
//     <option value="">Select industry</option>
//     {industryOptions.map((ind, idx) => (
//       <option key={idx} value={ind}>
//         {ind}
//       </option>
//     ))}
//   </select>
// </div>


//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm mb-1">
//                 Email
//               </label>
//               <input
//               required
//                 id="email"
//                 type="email"
//                 placeholder="contact@company.com"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//                 aria-required="true"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label htmlFor="phone" className="block text-sm mb-1">
//                 Phone
//               </label>
//               <input
//               required
//                 id="phone"
//                 type="text"
//                 placeholder="+1 (555) 123-4567"
//                 aria-required="true"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//               />
//             </div>

//             {/* Website */}
//             <div className="col-span-2">
//               <label htmlFor="website" className="block text-sm mb-1">
//                 Website
//               </label>
//               <input
//               required
//                 id="website"
//                 type="text"
//                 placeholder="www.company.com"
//                 aria-required="true"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//               />
//             </div>

//             {/* Address */}
//             <div className="col-span-2">
//               <label htmlFor="address" className="block text-sm mb-1">
//                 Address
//               </label>
//               <input
//               required
//                 id="address"
//                 type="text"
//                 placeholder="123 Business Street, City, State ZIP"
//                 aria-required="true"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//               />
//             </div>

//             {/* Number of Employees */}
//             <div>
//               <label htmlFor="employees" className="block text-sm mb-1">
//                 Number of Employees
//               </label>
//               <input
//               required
//                 id="employees"
//                 type="number"
//                 placeholder="100"
//                 aria-required="true"
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:border-gray-600 focus:outline-gray-300 focus:ring-0"
//               />
//             </div>

//             {/* Status */}
// <div>
//   <label htmlFor="status" className="block text-sm mb-1">
//     Status
//   </label>
//   <select
//     id="status"
//     name="status"
//     required
//     aria-required="true"
//     aria-label="Company status"
//     className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
//     value={status}
//     onChange={(e) => handleStatusSelect(e.target.value)}
//   >
//     <option value="">Select status</option>
//     {statusOptions.map((s, idx) => (
//       <option key={idx} value={s}>
//         {s}
//       </option>
//     ))}
//   </select>
// </div>
          
//   {/* Footer buttons */}
//   <div className="flex justify-start gap-2 mt-6">
//     <button
//       type="button"
//       className="px-4 py-2 border rounded-md"
//       onClick={handleCloseModal}
//       aria-label="Cancel and close the add company form"
//     >
//       Cancel
//     </button>

//     <button
//       type="submit"
//       className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md text-white"
//       aria-label="Submit form to add company and close modal"
//     >
//       Add Company
//     </button>
//   </div>
// </form>

//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default AddCompany;
import { useState, useCallback } from "react";
import Modal from "../UserManagement/Modal";

const statusOptions = ["Active", "Pending", "Inactive"];
const industryOptions = ["Technology", "Manufacturing", "Finance", "Healthcare", "Retail", "Consulting"];

const initialFormData = {
  companyName: "",
  industry: "",
  email: "",
  phone: "",
  website: "",
  address: "",
  employees: "",
  status: "",
};

const AddCompany = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name, value) => {
    if (!value || value.toString().trim() === "") {
      return `${name.replace(/([A-Z])/g, " $1")} is required`;
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    if (name === "employees" && (isNaN(value) || Number(value) <= 0)) {
      return "Enter a valid number of employees";
    }
    return "";
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const allTouched = {};
      Object.keys(formData).forEach(key => (allTouched[key] = true));
      setTouched(allTouched);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API
      alert("Company added successfully!");
      setFormData(initialFormData);
      setOpen(false);
      setErrors({});
      setTouched({});
    } catch (err) {
      console.error("Error adding company:", err);
      alert("Failed to add company. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
  }, []);

  return (
    <div>
      {/* Open Modal Button */}
      <button
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="add-company-modal"
        className="bg-black w-fit px-3 py-2 flex gap-2 rounded-md text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
        Add Company
      </button>

      {/* Modal */}
      <Modal id="add-company-modal" isOpen={open} onClose={handleClose} aria-label="Add new company form">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6" id="add-company-title">
            Add New Company
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6" aria-labelledby="add-company-title">
            
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm mb-1">
                Company Name *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                onBlur={handleBlur}
                placeholder="Tech Corp Solutions"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.companyName ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.companyName ? "companyName-error" : undefined}
                aria-required="true"
              />
              {errors.companyName && (
                <p id="companyName-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Industry */}
            <div>
              <label htmlFor="industry" className="block text-sm mb-1">
                Industry *
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                onBlur={handleBlur}
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.industry ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.industry ? "industry-error" : undefined}
                aria-required="true"
              >
                <option value="">Select industry</option>
                {industryOptions.map((ind, idx) => (
                  <option key={idx} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p id="industry-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.industry}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={handleBlur}
                placeholder="contact@company.com"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-required="true"
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm mb-1">
                Phone *
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onBlur={handleBlur}
                placeholder="+1 (555) 123-4567"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.phone ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-required="true"
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Website */}
            <div className="col-span-2">
              <label htmlFor="website" className="block text-sm mb-1">
                Website *
              </label>
              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                onBlur={handleBlur}
                placeholder="www.company.com"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.website ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.website ? "website-error" : undefined}
                aria-required="true"
              />
              {errors.website && (
                <p id="website-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.website}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm mb-1">
                Address *
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                onBlur={handleBlur}
                placeholder="123 Business Street, City, State ZIP"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.address ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.address ? "address-error" : undefined}
                aria-required="true"
              />
              {errors.address && (
                <p id="address-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Employees */}
            <div>
              <label htmlFor="employees" className="block text-sm mb-1">
                Number of Employees *
              </label>
              <input
                id="employees"
                name="employees"
                type="number"
                value={formData.employees}
                onChange={(e) => handleInputChange("employees", e.target.value)}
                onBlur={handleBlur}
                placeholder="100"
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.employees ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.employees ? "employees-error" : undefined}
                aria-required="true"
              />
              {errors.employees && (
                <p id="employees-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.employees}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm mb-1">
                Status *
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
                onBlur={handleBlur}
                className={`w-full border rounded-md px-3 py-2 ${
                  errors.status ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                }`}
                disabled={isSubmitting}
                aria-describedby={errors.status ? "status-error" : undefined}
                aria-required="true"
              >
                <option value="">Select status</option>
                {statusOptions.map((s, idx) => (
                  <option key={idx} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.status && (
                <p id="status-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.status}
                </p>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-start gap-2 mt-6 col-span-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border rounded-md"
                disabled={isSubmitting}
                aria-label="Cancel and close add company form"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black px-3 py-2 rounded-md text-white flex items-center gap-2"
                disabled={isSubmitting}
                aria-label="Submit form to add company"
              >
                {isSubmitting ? "Adding..." : "Add Company"}
              </button>
            </div>

          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCompany;
