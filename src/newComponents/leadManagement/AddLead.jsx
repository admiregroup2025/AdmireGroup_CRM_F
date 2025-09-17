import React, { useState, useCallback } from "react";
import { Plus, X, AlertCircle, Check } from "lucide-react";
import Modal from "../UserManagement/Modal";
import { leadSources, leadStatuses, validationRules } from "./data";

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
  }, []);  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field if it has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [touched, validateField]);

  // Handle field blur
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

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
  }, [formData, validateField]);  // Reset form
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
  }, [formData, validateForm, onLeadAdded, handleClose]);  // Input field component
  const InputField = ({ name, type = "text", placeholder, required = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`
          w-full px-4 py-3 border rounded-lg transition-colors duration-200
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
          ${errors[name] 
            ? 'border-red-300 bg-red-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        disabled={isSubmitting}
      />
      {errors[name] && (
        <div id={`${name}-error`} className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  // Select field component
  const SelectField = ({ name, options, placeholder, required = false }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {name === 'leadStatus' ? 'Status' : name.charAt(0).toUpperCase() + name.slice(1)} 
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        className={`
          w-full px-4 py-3 border rounded-lg transition-colors duration-200
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
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
      {errors[name] && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );  return (
    <>
      {/* Add Lead Button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Add new lead"
      >
        <Plus className="w-5 h-5" />
        <span>Add Lead</span>
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} size="large">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Add New Lead</h2>
              <p className="text-sm text-gray-600 mt-1">Enter lead information to get started</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Success Message */}
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <div>
                  <h3 className="font-medium text-green-800">Lead Added Successfully!</h3>
                  <p className="text-sm text-green-600">The new lead has been added to your pipeline.</p>
                </div>
              </div>
            </div>
          )}          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Source Field - Full Width */}
            <SelectField
              name="source"
              options={leadSources}
              placeholder="Select lead source"
              required
            />

            {/* Notes Field - Full Width */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="notes">
                Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                onBlur={handleBlur}
                rows={3}
                placeholder="Additional notes about the lead..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none hover:border-gray-400 transition-colors duration-200 resize-none"
                disabled={isSubmitting}
              />
            </div>            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`
                  flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-200
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
                    Adding Lead...
                  </span>
                ) : submitSuccess ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    Lead Added!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Lead
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddLead;