import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const LeaveAdmin = () => {
  const [leaves, setLeaves] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Filters
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const departments = [
    "IT",
    "Sales",
    "Marketing",
    "Engineering",
    "HR",
    "Finance",
  ];

  // ✅ Fetch all companies for dropdown
  const fetchCompanies = async () => {
    try {
      const res = await axios.get("http://localhost:4000/company/all");
      setCompanies(res.data?.companies || res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch companies");
    }
  };

  // ✅ Fetch all leave requests
  const fetchLeaves = async () => {
    try {
      const res = await axios.get("http://localhost:4000/admin/all-leaves");
      const leaveData = res.data?.leaves || res.data;
      setLeaves(leaveData);

      // Fetch Employee and Company details
      const employeePromises = leaveData.map(async (leave) => {
        const empId = leave.employeeId?._id || leave.employeeId;
        if (!empId) return null;
        const empRes = await axios.get(
          `http://localhost:4000/employee/getEmployee/${empId}`
        );
        return { empId, data: empRes.data.employee };
      });

      const employeeResults = await Promise.all(employeePromises);
      const empDataMap = {};
      const companyIds = new Set();

      employeeResults.forEach((item) => {
        if (item) {
          empDataMap[item.empId] = item.data;
          if (item.data?.company) {
            companyIds.add(item.data.company);
          }
        }
      });

      // Fetch unique company details
      const companyPromises = [...companyIds].map(async (companyId) => {
        const compRes = await axios.get(
          `http://localhost:4000/company/${companyId}`
        );
        return { companyId, data: compRes.data.company };
      });

      const companyResults = await Promise.all(companyPromises);
      const compDataMap = {};
      companyResults.forEach((item) => {
        if (item) compDataMap[item.companyId] = item.data;
      });

      setEmployeeDetails(empDataMap);
      setCompanyDetails(compDataMap);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch leave data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
    fetchLeaves();
  }, []);

  // ✅ Handle Approve / Reject
  const handleAction = async (leaveId, status) => {
    try {
      const adminRemark =
        status === "Approved"
          ? "Leave approved by admin"
          : "Leave rejected by admin";

      await axios.put(`http://localhost:4000/admin/update-leave/${leaveId}`, {
        status,
        adminRemark,
      });

      toast.success(`Leave ${status.toLowerCase()} successfully!`);
      fetchLeaves();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update leave status");
    }
  };

  // ✅ Apply Filters
  const filteredLeaves = leaves.filter((leave) => {
    const empId = leave.employeeId?._id || leave.employeeId;
    const emp = employeeDetails[empId];
    const comp =
      emp?.company && companyDetails[emp.company]
        ? companyDetails[emp.company]
        : null;

    const matchesCompany =
      !selectedCompany || comp?._id === selectedCompany;
    const matchesDept =
      !selectedDepartment || emp?.department === selectedDepartment;
    const matchesStatus =
      !selectedStatus || leave.status === selectedStatus;

    return matchesCompany && matchesDept && matchesStatus;
  });

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading leave requests...
      </div>
    );
  }

  return (
    <div className="max-h-[85vh] overflow-y-auto bg-[#f8f9fa] p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Leave Management
        </h1>
        <p className="text-gray-600">
          Review, approve, or reject leave requests from employees
        </p>
      </div>

      {/* 🔹 Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Company Filter */}
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm bg-white shadow-sm focus:outline-none"
        >
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.companyName}
            </option>
          ))}
        </select>

        {/* Department Filter */}
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm bg-white shadow-sm focus:outline-none"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Status Filter */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm bg-white shadow-sm focus:outline-none"
        >
          <option value="">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
        </select>

        {/* Clear Filters Button */}
        {(selectedCompany || selectedDepartment || selectedStatus) && (
          <button
            onClick={() => {
              setSelectedCompany("");
              setSelectedDepartment("");
              setSelectedStatus("");
            }}
            className="text-sm bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300 transition"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Leave Table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        {filteredLeaves.length === 0 ? (
          <p className="p-6 text-center text-gray-500">
            No leave requests found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 text-left font-semibold">Employee Name</th>
                  <th className="p-3 text-left font-semibold">Department</th>
                  <th className="p-3 text-left font-semibold">Company</th>
                  <th className="p-3 text-left font-semibold">Leave Type</th>
                  <th className="p-3 text-left font-semibold">Start Date</th>
                  <th className="p-3 text-left font-semibold">End Date</th>
                  <th className="p-3 text-left font-semibold">Status</th>
                  <th className="p-3 text-center font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {filteredLeaves.map((leave) => {
                  const empId = leave.employeeId?._id || leave.employeeId;
                  const emp = employeeDetails[empId];
                  const comp =
                    emp?.company && companyDetails[emp.company]
                      ? companyDetails[emp.company]
                      : null;

                  return (
                    <tr
                      key={leave._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-3">{emp?.fullName || "—"}</td>
                      <td className="p-3">{emp?.department || "—"}</td>
                      <td className="p-3 text-gray-700">
                        {comp?.companyName || "—"}
                      </td>
                      <td className="p-3 font-medium">{leave.leaveType}</td>
                      <td className="p-3 text-gray-700">
                        {new Date(leave.startDate).toLocaleDateString()}
                      </td>
                      <td className="p-3 text-gray-700">
                        {new Date(leave.endDate).toLocaleDateString()}
                      </td>
                      <td
                        className={`p-3 font-medium ${
                          leave.status === "Approved"
                            ? "text-green-600"
                            : leave.status === "Rejected"
                            ? "text-red-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {leave.status}
                      </td>
                      <td className="p-3 text-center space-x-2">
                        {leave.status === "Pending" ? (
                          <>
                            <button
                              onClick={() => handleAction(leave._id, "Approved")}
                              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleAction(leave._id, "Rejected")}
                              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-gray-500 italic">
                            Action taken
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};