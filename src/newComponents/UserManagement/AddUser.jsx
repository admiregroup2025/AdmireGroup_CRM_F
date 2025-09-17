import React, { useState, useRef, useCallback } from "react";
import Modal from "./Modal.jsx";

const ROLES = ["Admin", "Manager", "User", "Sales Rep"];
const DEPARTMENTS = ["IT", "Sales", "Marketing", "Engineering", "HR", "Finance"];

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    password: "",
    isActive: true
  });

  // Dropdown states
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const roleRef = useRef(null);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formData.department) {
      newErrors.department = "Please select a department";
    }
    
    if (!formData.role) {
      newErrors.role = "Please select a role";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and close modal
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        role: "",
        password: "",
        isActive: true
      });
      setIsOpen(false);
      
      // Show success message (you might want to use a toast library)
      alert("User added successfully!");
      
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setErrors({});
    // Reset form when closing
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      role: "",
      password: "",
      isActive: true
    });
  }, []);

  const handleRoleSelect = useCallback((selectedRole) => {
    handleInputChange('role', selectedRole);
    setRoleDropdownOpen(false);
  }, [handleInputChange]);

  return (
    <>
      {/* Add User Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        aria-label="Add new user"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
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
        Add User
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} maxWidth="max-w-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New User</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Enter full name"
                  className={`w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.fullName 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter email address"
                  className={`w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.phone 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department *
                </label>
                <select
                  id="department"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  className={`w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.department 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-describedby={errors.department ? "department-error" : undefined}
                >
                  <option value="">Select department</option>
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                {errors.department && (
                  <p id="department-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.department}
                  </p>
                )}
              </div>

              {/* Role (Custom Dropdown) */}
              <div className="relative" ref={roleRef}>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role *
                </label>
                <button
                  type="button"
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.role 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-expanded={roleDropdownOpen}
                  aria-haspopup="listbox"
                  aria-describedby={errors.role ? "role-error" : undefined}
                >
                  <span className={formData.role ? 'text-gray-900' : 'text-gray-500'}>
                    {formData.role || 'Select role'}
                  </span>
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
                    className={`text-gray-600 transition-transform ${
                      roleDropdownOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Role Dropdown */}
                {roleDropdownOpen && (
                  <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {ROLES.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => handleRoleSelect(role)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                        role="option"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                )}
                {errors.role && (
                  <p id="role-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.role}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Temporary Password *
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Enter temporary password"
                  className={`w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors.password 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                  disabled={isSubmitting}
                  aria-describedby={errors.password ? "password-error" : "password-help"}
                />
                {errors.password ? (
                  <p id="password-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.password}
                  </p>
                ) : (
                  <p id="password-help" className="text-gray-500 text-xs mt-1">
                    Minimum 8 characters
                  </p>
                )}
              </div>

            </div>

            {/* Account Active Toggle */}
            <div className="flex items-center gap-2">
              <input
                id="isActive"
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => handleInputChange('isActive', e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                disabled={isSubmitting}
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Account Active
              </label>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Adding...
                  </>
                ) : (
                  'Add User'
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddUser;