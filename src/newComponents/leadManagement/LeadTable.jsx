import React, { useState, useMemo, useCallback } from "react";
import { Eye, Edit2, Trash2, Phone, Mail, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { leadData } from "./leads.js";

const LeadTable = ({ searchText = "", selectedStatus = "All Status", refreshTrigger }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Status color mapping
  const getStatusColor = (status) => {
    const colors = {
      Hot: "bg-red-500 text-white",
      Warm: "bg-orange-500 text-white", 
      Cold: "bg-blue-500 text-white",
    };
    return colors[status] || "bg-gray-500 text-white";
  };

  // Filter and search leads
  const filteredLeads = useMemo(() => {
    return leadData.filter(lead => {
      // Status filter
      const statusMatch = selectedStatus === "All Status" || lead.leadStatus === selectedStatus;
      
      // Search filter
      const searchMatch = !searchText || 
        lead.name.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.phone.includes(searchText);

      return statusMatch && searchMatch;
    });
  }, [searchText, selectedStatus, refreshTrigger]);

  // Sort leads
  const sortedLeads = useMemo(() => {
    if (!sortConfig.key) return filteredLeads;

    return [...filteredLeads].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Handle value field (remove $ and convert to number)
      if (sortConfig.key === 'value') {
        aValue = parseFloat(aValue.replace(/[$,]/g, ''));
        bValue = parseFloat(bValue.replace(/[$,]/g, ''));
      }

      // Handle date fields
      if (sortConfig.key === 'lastContact' || sortConfig.key === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredLeads, sortConfig]);  // Pagination
  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedLeads.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedLeads, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);

  // Handle sorting
  const handleSort = useCallback((key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  // Handle row selection
  const handleSelectLead = useCallback((leadId) => {
    setSelectedLeads(current => 
      current.includes(leadId) 
        ? current.filter(id => id !== leadId)
        : [...current, leadId]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedLeads(current => 
      current.length === paginatedLeads.length 
        ? []
        : paginatedLeads.map(lead => lead.id)
    );
  }, [paginatedLeads]);

  // Action handlers
  const handleView = useCallback((lead) => {
    console.log('View lead:', lead);
    // Implement view logic
  }, []);

  const handleEdit = useCallback((lead) => {
    console.log('Edit lead:', lead);
    // Implement edit logic
  }, []);

  const handleDelete = useCallback((lead) => {
    console.log('Delete lead:', lead);
    // Implement delete logic with confirmation
  }, []);

  const handleCall = useCallback((phone) => {
    window.open(`tel:${phone}`);
  }, []);

  const handleEmail = useCallback((email) => {
    window.open(`mailto:${email}`);
  }, []);  // Sortable header component
  const SortableHeader = ({ column, children }) => (
    <th 
      className="px-3 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={() => handleSort(column)}
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <ArrowUpDown className="w-4 h-4" />
      </div>
    </th>
  );

  if (filteredLeads.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Eye className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No leads found</h3>
        <p className="text-gray-500">
          {searchText || selectedStatus !== "All Status" 
            ? "Try adjusting your search or filter criteria"
            : "Get started by adding your first lead"
          }
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Table Header with Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Leads ({filteredLeads.length})
          </h3>
          {selectedLeads.length > 0 && (
            <span className="text-sm text-blue-600 font-medium">
              {selectedLeads.length} selected
            </span>
          )}
        </div>
        
        {selectedLeads.length > 0 && (
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              Bulk Edit
            </button>
            <button className="px-3 py-2 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors">
              Delete Selected
            </button>
          </div>
        )}
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-6 py-4 w-12">
                  <input
                    type="checkbox"
                    checked={selectedLeads.length === paginatedLeads.length && paginatedLeads.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </th>
                <SortableHeader column="name">Lead</SortableHeader>
                <th className="hidden sm:table-cell px-3 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <SortableHeader column="company">Company</SortableHeader>
                <SortableHeader column="leadStatus">Status</SortableHeader>
                <SortableHeader column="value">Value</SortableHeader>
                <th className="hidden lg:table-cell px-3 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('lastContact')}>
                  <div className="flex items-center gap-2">
                    <span>Last Contact</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="hidden xl:table-cell px-3 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleSort('source')}>
                  <div className="flex items-center gap-2">
                    <span>Source</span>
                    <ArrowUpDown className="w-4 h-4" />
                  </div>
                </th>
                <th className="px-3 sm:px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedLeads.map((lead) => (
                <tr 
                  key={lead.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    selectedLeads.includes(lead.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="px-3 sm:px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => handleSelectLead(lead.id)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </td>

                  {/* Lead Name with Avatar */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm flex-shrink-0">
                        {lead.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{lead.name}</div>
                        <div className="text-xs text-gray-500">ID: #{lead.id}</div>
                        {/* Mobile: Show contact info */}
                        <div className="sm:hidden mt-1 space-y-1">
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Mail className="w-3 h-3" />
                            <span className="truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600">
                            <Phone className="w-3 h-3" />
                            <span>{lead.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Contact Information - Hidden on mobile */}
                  <td className="hidden sm:table-cell px-3 sm:px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <button 
                          onClick={() => handleEmail(lead.email)}
                          className="hover:text-blue-600 hover:underline transition-colors truncate"
                        >
                          {lead.email}
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <button 
                          onClick={() => handleCall(lead.phone)}
                          className="hover:text-blue-600 hover:underline transition-colors"
                        >
                          {lead.phone}
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* Company */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="font-medium text-gray-900 text-sm truncate">{lead.company}</div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-3 sm:px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.leadStatus)}`}>
                      {lead.leadStatus}
                    </span>
                  </td>

                  {/* Value */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="font-semibold text-green-600 text-sm">{lead.value}</div>
                  </td>

                  {/* Last Contact - Hidden on small screens */}
                  <td className="hidden lg:table-cell px-3 sm:px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {new Date(lead.lastContact).toLocaleDateString()}
                    </div>
                  </td>

                  {/* Source - Hidden on extra small screens */}
                  <td className="hidden xl:table-cell px-3 sm:px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-800">
                      {lead.source}
                    </span>
                  </td>                  {/* Actions */}
                  <td className="px-3 sm:px-6 py-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() => handleView(lead)}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View lead details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleEdit(lead)}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit lead"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleDelete(lead)}
                        className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      {/* More actions dropdown - hidden on small screens */}
                      <button className="hidden sm:block p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, sortedLeads.length)} of {sortedLeads.length} results
          </div>
          
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Prev
            </button>
            
            <div className="hidden sm:flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
                  return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
                })
                .map((page, index, array) => (
                  <React.Fragment key={page}>
                    {index > 0 && array[index - 1] !== page - 1 && (
                      <span className="px-2 text-gray-400">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))
              }
            </div>

            {/* Mobile: Just show current page */}
            <div className="sm:hidden px-3 py-2 text-sm bg-blue-600 text-white rounded-lg">
              {currentPage} / {totalPages}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default LeadTable;