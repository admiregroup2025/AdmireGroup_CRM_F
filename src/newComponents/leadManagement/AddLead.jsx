import React, { useState, useCallback } from "react";
import { Plus, X, AlertCircle, Check } from "lucide-react";
import Modal from "../UserManagement/Modal.jsx";
import { leadSources, leadStatuses, validationRules } from "./data.js";

// 🧩 Input Field Component
const InputField = React.memo(({ name, type = "text", placeholder, required = false, value, error, onChange, onBlur, isSubmitting }) => (
  <div className="h-[4.5rem]">
    <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor={name}>
      {name.charAt(0).toUpperCase() + name.slice(1)} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value || ""}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`w-full px-3 py-1.5 border rounded-lg transition-colors duration-200 text-sm
        focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
        ${error ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
      aria-invalid={!!error}
      disabled={isSubmitting}
      autoComplete="off"
    />
    <div className="h-4 mt-0.5">
      {error && (
        <div className="flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{error}</span>
        </div>
      )}
    </div>
  </div>
));

// 🧩 Select Field Component
const SelectField = React.memo(({ name, options, placeholder, required = false, value, error, onChange, onBlur, isSubmitting }) => (
  <div className="h-[4.5rem]">
    <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor={name}>
      {name === "leadStatus" ? "Status" : name.charAt(0).toUpperCase() + name.slice(1)}{" "}
      {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value || ""}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-3 py-1.5 border rounded-lg transition-colors duration-200 text-sm
        focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none
        ${error ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"}`}
      aria-invalid={!!error}
      disabled={isSubmitting}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((opt) => (
        <option key={opt.value || opt} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
    <div className="h-4 mt-0.5">
      {error && (
        <div className="flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{error}</span>
        </div>
      )}
    </div>
  </div>
));

// 🧠 Main AddLead Component
const AddLead = ({ onLeadAdded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    leadStatus: "Hot",
    value: "",
    source: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // 🧩 Validate single field
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
        case "email":
          return "Please enter a valid email address";
        case "phone":
          return "Please enter a valid phone number";
        case "value":
          return "Please enter a valid amount";
        default:
          return `Invalid ${name} format`;
      }
    }
    return "";
  }, []);

  // 🧩 Handle input change
  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [validateField]
  );

  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach((field) => {
      if (validationRules[field]) {
        const error = validateField(field, formData[field]);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    });
    if (!formData.source) {
      newErrors.source = "Please select a lead source";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }, [formData, validateField]);

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      leadStatus: "Hot",
      value: "",
      source: "",
      notes: "",
    });
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
    setApiError("");
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    resetForm();
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(resetForm, 300);
  }, [resetForm]);

  // 🧩 Submit handler (with real API call)
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        const allTouched = {};
        Object.keys(formData).forEach((key) => (allTouched[key] = true));
        setTouched(allTouched);
        return;
      }

      setIsSubmitting(true);
      setApiError("");
      try {
        const res = await fetch("http://localhost:4000/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || "Failed to add lead");
        }

        setSubmitSuccess(true);
        onLeadAdded?.(); // trigger parent refresh
        setTimeout(handleClose, 1500);
      } catch (err) {
        console.error("Error adding lead:", err);
        setApiError(err.message || "Something went wrong while saving lead");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onLeadAdded, handleClose]
  );

  return (
    <>
      {/* Open Modal Button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base whitespace-nowrap"
      >
        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Add Lead</span>
        <span className="sm:hidden">Add</span>
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleClose} size="large">
        <div className="flex flex-col h-full max-h-[95vh]">
          {/* Header */}
          <div className="flex-shrink-0 p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between">
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

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {submitSuccess && (
              <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <div>
                    <h3 className="text-sm font-medium text-green-800">Lead Added!</h3>
                    <p className="text-xs text-green-600">Successfully added to pipeline.</p>
                  </div>
                </div>
              </div>
            )}

            {apiError && (
              <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <InputField name="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} error={errors.name} required isSubmitting={isSubmitting} />
                <InputField name="email" type="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} error={errors.email} required isSubmitting={isSubmitting} />
                <InputField name="phone" type="tel" value={formData.phone} onChange={handleInputChange} onBlur={handleBlur} error={errors.phone} required isSubmitting={isSubmitting} />
                <InputField name="company" value={formData.company} onChange={handleInputChange} onBlur={handleBlur} error={errors.company} required isSubmitting={isSubmitting} />
                <SelectField name="leadStatus" options={leadStatuses} value={formData.leadStatus} onChange={handleInputChange} onBlur={handleBlur} error={errors.leadStatus} required isSubmitting={isSubmitting} />
                <InputField name="value" value={formData.value} onChange={handleInputChange} onBlur={handleBlur} error={errors.value} required isSubmitting={isSubmitting} />
              </div>

              {/* Source */}
              <SelectField
                name="source"
                options={leadSources}
                placeholder="Select lead source"
                value={formData.source}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.source}
                required
                isSubmitting={isSubmitting}
              />

              {/* Notes */}
              <div className="h-[4rem]">
                <label className="block text-xs font-medium text-gray-700 mb-0.5" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
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

          {/* Footer */}
          <div className="flex-shrink-0 p-4 sm:p-5 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row gap-2">
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
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white ${
                isSubmitting || submitSuccess ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
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
      </Modal>
    </>
  );
};

export default AddLead;