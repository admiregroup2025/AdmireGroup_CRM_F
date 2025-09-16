
import React, { useState, useEffect, useRef, useCallback } from "react";

const ROLES = ["All Roles", "Admin", "Manager", "Sales Rep", "User"];

const SearchRole = ({ onRoleChange, defaultRole = "All Roles" }) => {
  const [role, setRole] = useState(defaultRole);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSelect = useCallback((selectedRole) => {
    setRole(selectedRole);
    setIsOpen(false);
    
    if (onRoleChange) {
      onRoleChange(selectedRole);
    }
  }, [onRoleChange]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown' && isOpen) {
      e.preventDefault();
      const firstOption = dropdownRef.current?.querySelector('[role="option"]');
      firstOption?.focus();
    }
  }, [isOpen]);

  const handleOptionKeyDown = useCallback((e, selectedRole) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect(selectedRole);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextSibling = e.target.nextElementSibling;
      nextSibling?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevSibling = e.target.previousElementSibling;
      if (prevSibling) {
        prevSibling.focus();
      } else {
        buttonRef.current?.focus();
        setIsOpen(false);
      }
    }
  }, [handleSelect]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        className={`flex items-center justify-between bg-gray-50 rounded-md px-3 py-2 cursor-pointer min-w-[160px] transition-all duration-200 ${
          isOpen ? 'ring-2 ring-blue-500 bg-white' : 'hover:bg-gray-100'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Filter by role"
      >
        <div className="flex items-center gap-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
            aria-hidden="true"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <span className="font-medium">{role}</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 py-1">
          {ROLES.map((roleOption, index) => (
            <button
              key={roleOption}
              type="button"
              role="option"
              aria-selected={role === roleOption}
              onClick={() => handleSelect(roleOption)}
              onKeyDown={(e) => handleOptionKeyDown(e, roleOption)}
              className={`w-full text-left px-3 py-2 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors ${
                role === roleOption ? 'bg-blue-100 text-blue-900 font-medium' : 'text-gray-700'
              }`}
              tabIndex={-1}
            >
              {roleOption}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { SearchRole} ;