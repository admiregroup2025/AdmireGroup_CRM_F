import { useState } from "react";
import { Search } from "lucide-react";

const SearchLead = () => {
  const [text, setText] = useState("");

  return (
    <div
      className="bg-[#f3f3f5] w-fit px-1 py-2 flex gap-2 rounded-md"
      role="search"
      aria-label="Search companies"
    >
      {/* Search Icon */}
      <div className="text-gray-500 flex items-center" aria-hidden="true">
        <Search size={24} />
      </div>

      {/* Search Input */}
      <input
        id="company-search"
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-black bg-[#f3f3f5] focus:border-gray-600 focus:outline-none focus:ring-0"
        placeholder="Search companies..."
        aria-label="Search companies by name"
        autoComplete="off"
      />
    </div>
  );
};

export default SearchLead;
