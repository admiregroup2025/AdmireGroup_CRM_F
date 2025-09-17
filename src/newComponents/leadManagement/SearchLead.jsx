import React, { useState, useCallback } from "react";
import { Search, X } from "lucide-react";

const SearchLead = ({ onSearchChange, placeholder = "Search leads..." }) => {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearchChange?.(value);
  }, [onSearchChange]);

  const clearSearch = useCallback(() => {
    setSearchText("");
    onSearchChange?.("");
  }, [onSearchChange]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearSearch();
    }
  };

  return (
    <div className="relative min-w-[280px] max-w-md">
      <div 
        className={`
          flex items-center gap-3 bg-white border rounded-lg px-4 py-3 
          transition-all duration-200 shadow-sm
          ${isFocused 
            ? 'border-blue-500 ring-2 ring-blue-100 shadow-md' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
      >
        <Search 
          className={`w-5 h-5 transition-colors ${
            isFocused ? 'text-blue-500' : 'text-gray-400'
          }`} 
        />
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none"
          aria-label="Search leads"
        />
        {searchText && (
          <button
            onClick={clearSearch}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      
      {/* Search suggestions or results count could go here */}
      {searchText && (
        <div className="absolute top-full mt-1 w-full text-xs text-gray-500 px-2">
          Searching for "{searchText}"...
        </div>
      )}
    </div>
  );
};

export default SearchLead;