import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Eye, Edit2, Trash2, ArrowUpDown } from "lucide-react";

const LeadTable = ({ searchText = "", selectedStatus = "All Status", refreshTrigger }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [leads, setLeads] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLead, setCurrentLead] = useState(null);

  // Fetch leads from API
  const fetchLeadData = async () => {
    try {
      const response = await fetch("http://localhost:4000/leads");
      const result = await response.json();
      console.log("API Response:", result);
      if (result.success) {
        setLeads(result.data || result);
      } else {
        setLeads([]);
      }
    } catch (error) {
      console.error("Error fetching lead data:", error);
      setLeads([]);
    }
  };

  useEffect(() => {
    fetchLeadData();
  }, []);

  // Status colors
  const getStatusColor = (status) => {
    const colors = { Hot: "bg-red-500 text-white", Warm: "bg-orange-500 text-white", Cold: "bg-blue-500 text-white" };
    return colors[status] || "bg-gray-500 text-white";
  };

  // Filter and search
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const statusMatch = selectedStatus === "All Status" || lead.leadStatus === selectedStatus;
      const searchMatch =
        !searchText ||
        lead.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.email?.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.company?.toLowerCase().includes(searchText.toLowerCase()) ||
        lead.phone?.includes(searchText);
      return statusMatch && searchMatch;
    });
  }, [leads, searchText, selectedStatus]);

  // Sort leads
  const sortedLeads = useMemo(() => {
    if (!sortConfig.key) return filteredLeads;
    return [...filteredLeads].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      if (sortConfig.key === "value") {
        aValue = parseFloat(aValue?.replace(/[$,]/g, "") || 0);
        bValue = parseFloat(bValue?.replace(/[$,]/g, "") || 0);
      }
      if (sortConfig.key === "lastContact" || sortConfig.key === "createdAt") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredLeads, sortConfig]);

  // Pagination
  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedLeads.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedLeads, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedLeads.length / itemsPerPage);

  // Handlers
  const handleSort = useCallback((key) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  }, []);

  const handleSelectLead = useCallback((leadId) => {
    setSelectedLeads((current) =>
      current.includes(leadId) ? current.filter((id) => id !== leadId) : [...current, leadId]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedLeads((current) =>
      current.length === paginatedLeads.length ? [] : paginatedLeads.map((lead) => lead._id)
    );
  }, [paginatedLeads]);

  const handleView = useCallback((lead) => console.log("View lead:", lead), []);
  
  // Open modal for editing
  const handleEdit = useCallback((lead) => {
    setCurrentLead(lead);
    setIsModalOpen(true);
  }, []);

  // Delete API
  const handleDelete = useCallback(
    async (lead) => {
      if (!window.confirm(`Are you sure you want to delete ${lead.name}?`)) return;
      try {
        const response = await fetch(`http://localhost:4000/leads/${lead._id}`, { method: "DELETE" });
        const result = await response.json();
        if (result.success) {
          setLeads((currentLeads) => currentLeads.filter((l) => l._id !== lead._id));
          console.log(`${lead.name} deleted successfully`);
        } else {
          console.error("Failed to delete lead:", result.message || "Unknown error");
        }
      } catch (error) {
        console.error("Error deleting lead:", error);
      }
    },
    [setLeads]
  );

  // Update API
  const handleUpdateLead = async (updatedLead) => {
    try {
      const response = await fetch(`http://localhost:4000/leads/${updatedLead._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedLead),
      });
      const result = await response.json();
      if (result.success) {
        setLeads((currentLeads) =>
          currentLeads.map((lead) => (lead._id === updatedLead._id ? { ...lead, ...updatedLead } : lead))
        );
        setIsModalOpen(false);
      } else {
        alert(result.message || "Failed to update lead");
      }
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  // Modal form
  const EditModal = ({ lead, onClose, onSave }) => {
    const [formData, setFormData] = useState({ ...lead });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    if (!lead) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold">Edit Lead</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded border px-3 py-2"
            />
            <input
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded border px-3 py-2"
            />
            <input
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full rounded border px-3 py-2"
            />
            <input
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
              placeholder="Company"
              className="w-full rounded border px-3 py-2"
            />
            <select
              name="leadStatus"
              value={formData.leadStatus || "Cold"}
              onChange={handleChange}
              className="w-full rounded border px-3 py-2"
            >
              <option value="Hot">Hot</option>
              <option value="Warm">Warm</option>
              <option value="Cold">Cold</option>
            </select>
            <input
              name="value"
              value={formData.value || ""}
              onChange={handleChange}
              placeholder="Value"
              className="w-full rounded border px-3 py-2"
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="rounded bg-gray-200 px-4 py-2">
                Cancel
              </button>
              <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const SortableHeader = ({ column, children }) => (
    <th
      className="cursor-pointer px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 transition-colors hover:bg-gray-100 sm:px-6"
      onClick={() => handleSort(column)}
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <ArrowUpDown className="h-4 w-4" />
      </div>
    </th>
  );

  if (filteredLeads.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="mb-2 text-lg font-medium text-gray-900">No leads found</h3>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-4 sm:px-6">
                <input
                  type="checkbox"
                  checked={selectedLeads.length === paginatedLeads.length && paginatedLeads.length > 0}
                  onChange={handleSelectAll}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                />
              </th>
              <SortableHeader column="name">Name</SortableHeader>
              <SortableHeader column="email">Email</SortableHeader>
              <SortableHeader column="phone">Phone</SortableHeader>
              <SortableHeader column="company">Company</SortableHeader>
              <SortableHeader column="leadStatus">Status</SortableHeader>
              <SortableHeader column="value">Value</SortableHeader>
              <SortableHeader column="lastContact">Last Contact</SortableHeader>
              <SortableHeader column="createdAt">Created At</SortableHeader>
              <th className="px-3 py-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {paginatedLeads.map((lead) => (
              <tr key={lead._id} className={selectedLeads.includes(lead._id) ? "bg-gray-100" : ""}>
                <td className="px-3 py-4 sm:px-6">
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead._id)}
                    onChange={() => handleSelectLead(lead._id)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600"
                  />
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{lead.name}</td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{lead.email}</td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{lead.phone}</td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{lead.company}</td>
                <td className="px-3 py-4 sm:px-6">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(lead.leadStatus)}`}>
                    {lead.leadStatus}
                  </span>
                </td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{lead.value}</td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{new Date(lead.lastContact).toLocaleDateString()}</td>
                <td className="px-3 py-4 text-sm text-gray-900 sm:px-6">{new Date(lead.createdAt).toLocaleDateString()}</td>
                <td className="flex items-center gap-2 px-3 py-4 text-sm font-medium sm:px-6">
                  <button onClick={() => handleView(lead)} className="text-blue-500 hover:text-blue-700">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleEdit(lead)} className="text-green-500 hover:text-green-700">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(lead)} className="text-red-500 hover:text-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-between">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1} className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50">
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50">
            Next
          </button>
        </div>
      </div>

      {isModalOpen && <EditModal lead={currentLead} onClose={() => setIsModalOpen(false)} onSave={handleUpdateLead} />}
    </div>
  );
};

export default LeadTable;
