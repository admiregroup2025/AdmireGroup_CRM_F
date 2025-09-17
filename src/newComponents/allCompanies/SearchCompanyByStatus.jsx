import { useState, useEffect, useRef } from "react";
import { Funnel, ChevronDown } from "lucide-react";

const statuses = ["All Status", "Active", "Pending", "Inactive"];

const SearchCompanyByStatus = () => {
  const [status, setStatus] = useState("All Status");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (selectedStatus) => {
    setStatus(selectedStatus);
    setOpen(false);
    console.log("Selected Status:", selectedStatus);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      {/* Parent (Dropdown Trigger) */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="status-listbox"
        aria-label="Filter companies by status"
        className="flex items-center justify-between w-full bg-[#f3f3f5] rounded-md px-2 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 text-black">
          {/* Funnel Icon */}
          <span aria-hidden="true">
            <Funnel size={18} className="text-gray-500" />
          </span>
          <span>{status}</span>
        </div>
        {/* Chevron Icon */}
        <span aria-hidden="true">
          <ChevronDown
            size={18}
            className={`text-gray-600 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Dropdown List */}
      {open && (
        <ul
          id="status-listbox"
          role="listbox"
          aria-label="Company status options"
          className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10"
        >
          {statuses.map((s) => (
            <li key={s} role="option" aria-selected={status === s}>
              <button
                type="button"
                onClick={() => handleSelect(s)}
                className="w-full text-left px-2 py-2 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchCompanyByStatus;
