import React, { useState, useCallback } from "react";
import { Plus, X, AlertCircle, Check } from "lucide-react";
import Modal from "../UserManagement/Modal.jsx";
import { leadSources, leadStatuses, validationRules } from "./data.js";


const AddLead = ({ onLeadAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    leadStatus: "Hot",
    value: "",
    source: "",
    notes: ""
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Validate individual field
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return "";

    if (rules.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be less than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      switch (name) {
        case 'email':
          return 'Please enter a valid email address';
        case 'phone':
          return 'Please enter a valid phone number';
        case 'value':
          return 'Please enter a valid monetary value (e.g., $10,000)';
        default:
          return `Invalid ${name} format`;
      }
    }

    return "";
  }, []);

  // Handle input changes with proper event handling
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Update form data immediately
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Only validate if field was previously touched (don't validate on every keystroke)
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [touched, validateField]);

  // Handle field blur - validate when user leaves field
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, [validateField]);

  // Validate entire form
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      if (validationRules[field]) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    });

    // Check if source is selected
    if (!formData.source) {
      newErrors.source = "Please select a lead source";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      leadStatus: "Hot",
      value: "",
      source: "",
      notes: ""
    });
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
  }, []);

  // Handle modal open/close
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    resetForm();
  }, [resetForm]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(resetForm, 300); // Reset after modal animation
  }, [resetForm]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Mark all fields as touched to show validation errors
      const allTouched = {};
      Object.keys(formData).forEach(key => {
        allTouched[key] = true;
      });
      setTouched(allTouched);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success feedback
      setSubmitSuccess(true);
      onLeadAdded?.();
      
      setTimeout(() => {
        handleClose();
      }, 1500);
      
    } catch (error) {
      console.error('Error adding lead:', error);
      // Handle error (could set error state here)
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, onLeadAdded, handleClose]);

  // Ultra-compact Input field component with stable refs
  const InputField = React.memo(({ name, type = "text", placeholder, required = false }) => (
    <div className="h-[4.5rem]"> {/* Fixed height container */}
      <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name] || ""}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`
          w-full px-3 py-1.5 border rounded-lg transition-colors duration-200 text-sm
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
          ${errors[name] 
            ? 'border-red-300 bg-red-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        disabled={isSubmitting}
        autoComplete="off"
      />
      {/* Fixed height error container */}
      <div className="h-4 mt-0.5">
        {errors[name] && (
          <div id={`${name}-error`} className="flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{errors[name]}</span>
          </div>
        )}
      </div>
    </div>
  ));

  // Ultra-compact Select field component with stable refs
  const SelectField = React.memo(({ name, options, placeholder, required = false }) => (
    <div className="h-[4.5rem]"> {/* Fixed height container */}
      <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor={name}>
        {name === 'leadStatus' ? 'Status' : name.charAt(0).toUpperCase() + name.slice(1)} 
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name] || ""}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`
          w-full px-3 py-1.5 border rounded-lg transition-colors duration-200 text-sm
          focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
          ${errors[name] 
            ? 'border-red-300 bg-red-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        aria-invalid={errors[name] ? 'true' : 'false'}
        disabled={isSubmitting}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {/* Fixed height error container */}
      <div className="h-4 mt-0.5">
        {errors[name] && (
          <div className="flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{errors[name]}</span>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <>
      {/* Add Lead Button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
        aria-label="Add new lead"
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Add Lead</span>
        <span className="sm:hidden">Add</span>
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} size="large">
        <div className="flex flex-col h-full max-h-[95vh]">
          {/* Fixed Header */}
          <div className="flex-shrink-0 p-4 sm:p-5 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Add New Lead</h2>
                <p className="text-xs text-gray-600 mt-0.5">Enter lead information</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {/* Compact Success Message */}
            {submitSuccess && (
              <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <div>
                    <h3 className="text-sm font-medium text-green-800">Lead Added!</h3>
                    <p className="text-xs text-green-600">Added to pipeline.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {/* Name Field */}
                <InputField
                  name="name"
                  placeholder="Enter full name"
                  required
                />

                {/* Email Field */}
                <InputField
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                />

                {/* Phone Field */}
                <InputField
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                />

                {/* Company Field */}
                <InputField
                  name="company"
                  placeholder="Company Name"
                  required
                />

                {/* Status Field */}
                <SelectField
                  name="leadStatus"
                  options={leadStatuses}
                  required
                />

                {/* Value Field */}
                <InputField
                  name="value"
                  placeholder="$10,000"
                  required
                />
              </div>

              {/* Source Field - Full Width with fixed height */}
              <div className="h-[4.5rem]">
                <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor="source">
                  Source <span className="text-red-500">*</span>
                </label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`
                    w-full px-3 py-1.5 border rounded-lg transition-colors duration-200 text-sm
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
                    ${errors.source 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-gray-300 hover:border-gray-400'
                    }
                  `}
                  disabled={isSubmitting}
                >
                  <option value="">Select lead source</option>
                  {leadSources.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>
                <div className="h-4 mt-0.5">
                  {errors.source && (
                    <div className="flex items-center gap-1 text-xs text-red-600">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{errors.source}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Ultra-compact Notes Field with fixed height */}
              <div className="h-[4rem]">
                <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes || ""}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  rows={2}
                  placeholder="Additional notes..."
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none hover:border-gray-400 transition-colors duration-200 resize-none text-sm"
                  disabled={isSubmitting}
                  autoComplete="off"
                />
              </div>
            </form>
          </div>

          {/* Fixed Footer */}
          <div className="flex-shrink-0 p-4 sm:p-5 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || submitSuccess}
                className={`
                  flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${isSubmitting || submitSuccess
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md'
                  }
                  text-white
                `}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Adding...
                  </span>
                ) : submitSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    Added!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Lead
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddLead
