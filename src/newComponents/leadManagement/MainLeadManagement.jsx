import React, { useState, useCallback } from "react";
import { cardData } from "./data.js";
import MyCard from "../UserManagement/MyCards.jsx";
import SearchLead from "./SearchLead.jsx";
import SearchStatus from "./SearchStatus.jsx";
import AddLead from "./AddLead.jsx";
import LeadTable from "./LeadTable.jsx";

const MainLeadManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Handle search text change
  const handleSearchChange = useCallback((text) => {
    setSearchText(text);
  }, []);

  // Handle status filter change
  const handleStatusChange = useCallback((status) => {
    setSelectedStatus(status);
  }, []);

  // Handle successful lead addition
  const handleLeadAdded = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  return (
    <div className=" max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Management</h1>
        <p className="text-gray-600">Track and manage your sales leads efficiently</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cardData.map((card, index) => (
          <MyCard
            key={`lead-card-${index}-${card.title}`}
            title={card.title}
            value={card.value}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>

      {/* Filters and Actions */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <SearchLead 
            onSearchChange={handleSearchChange}
            placeholder="Search leads by name, email, or company..."
          />
          <SearchStatus 
            onStatusChange={handleStatusChange}
            selectedStatus={selectedStatus}
          />
        </div>
        <AddLead onLeadAdded={handleLeadAdded} />
      </div>

      {/* Lead Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <LeadTable 
          searchText={searchText}
          selectedStatus={selectedStatus}
          refreshTrigger={refreshTrigger}
        />
      </div>
    </div>
  );
};

export default MainLeadManagement;