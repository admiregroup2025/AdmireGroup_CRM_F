// // // // import { useState, useEffect } from "react";

// // // // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// // // // const UserTable = () => {
// // // //   const [users, setUsers] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");

// // // //   // ✅ Fetch both Admins and Employees
// // // //   // const fetchData = async () => {
// // // //   //   try {
// // // //   //     setLoading(true);
// // // //   //     setError("");

// // // //   //     const [adminRes, employeeRes] = await Promise.all([
// // // //   //       fetch(`${API_URL}/getAdmin`),
// // // //   //       fetch(`${API_URL}/employee/allEmployee`),
// // // //   //     ]);

// // // //   //     const adminData = await adminRes.json();
// // // //   //     const employeeData = await employeeRes.json();
// // // //   //     console.log("Admin Data:", adminData);
// // // //   //     console.log("Employee Data:", employeeData);

// // // //   //     if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
// // // //   //     if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

// // // //   //     // ✅ Normalize data (handle various API structures)
// // // //   //     const admins = adminData.admins || adminData.employees || adminData || [];
// // // //   //     const employees = employeeData.employees || employeeData.users || employeeData || [];

// // // //   //     // ✅ Combine both arrays
// // // //   //     const combined = [...admins, ...employees];

// // // //   //     // ✅ Sort by creation date (newest first)
// // // //   //     combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// // // //   //     setUsers(combined);
// // // //   //   } catch (error) {
// // // //   //     console.error("Error fetching data:", error);
// // // //   //     setError("Failed to fetch users or admins. Please try again.");
// // // //   //   } finally {
// // // //   //     setLoading(false);
// // // //   //   }
// // // //   // };

// // // // const fetchData = async () => {
// // // //   try {
// // // //     setLoading(true);
// // // //     setError("");

// // // //     const [adminRes, employeeRes] = await Promise.all([
// // // //       fetch(`${API_URL}/getAdmin`),
// // // //       fetch(`${API_URL}/employee/allEmployee`),
// // // //     ]);

// // // //     const adminData = await adminRes.json();
// // // //     const employeeData = await employeeRes.json();

// // // //     if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
// // // //     if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

// // // //     const admins = adminData.admins || adminData.employees || adminData || [];
// // // //     const employees = employeeData.employees || employeeData.users || employeeData || [];
// // // //     let combined = [...admins, ...employees];

// // // //     // ✅ Extract unique company IDs
// // // //     const companyIds = [...new Set(combined.map((u) => u.company).filter(Boolean))];

// // // //     // ✅ Fetch all company details in parallel
// // // //     const companyResponses = await Promise.all(
// // // //       companyIds.map((id) =>
// // // //         fetch(`${API_URL}/company/${id}`).then((res) => res.json())
// // // //       )
// // // //     );

// // // //     // ✅ Build companyId → companyName map (handles any response shape)
// // // //     const companyMap = {};
// // // //     companyResponses.forEach((data, i) => {
// // // //       const companyId = companyIds[i];
// // // //       const company = data?.company || data?.data || data;
// // // //       companyMap[companyId] =
// // // //         company?.companyName ||
// // // //         company?.name ||
// // // //         company?.title ||
// // // //         "Unknown Company";
// // // //     });

// // // //     // ✅ Attach company name
// // // //     combined = combined.map((u) => ({
// // // //       ...u,
// // // //       companyName: companyMap[u.company] || "—",
// // // //     }));

// // // //     // ✅ Sort by creation date
// // // //     combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// // // //     setUsers(combined);
// // // //   } catch (error) {
// // // //     console.error("Error fetching data:", error);
// // // //     setError("Failed to fetch users or companies. Please try again.");
// // // //   } finally {
// // // //     setLoading(false);
// // // //   }
// // // // };



// // // //   // ✅ Delete employee or admin by ID
// // // //   const deleteEmployee = async (id) => {
// // // //     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
// // // //     if (!confirmDelete) return;

// // // //     try {
// // // //       const response = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
// // // //         method: "DELETE",
// // // //         headers: { "Content-Type": "application/json" },
// // // //       });

// // // //       const data = await response.json();

// // // //       if (!response.ok) {
// // // //         throw new Error(data.message || "Failed to delete employee");
// // // //       }

// // // //       console.log("Record deleted successfully");
// // // //       fetchData(); // Refresh data
// // // //     } catch (error) {
// // // //       console.error("Error deleting employee:", error);
// // // //       alert(error.message);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchData();
// // // //   }, []);

// // // //   // ✅ Role Badge
// // // //   const getRoleBadge = (role) => {
// // // //     const colors = {
// // // //       Admin: "bg-[#ad46ff]",
// // // //       Manager: "bg-[#2b7fff]",
// // // //       "Sales Rep": "bg-[#00c951]",
// // // //       User: "bg-[#6a7282]",
// // // //     };
// // // //     return (
// // // //       <span
// // // //         className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// // // //           colors[role] || "bg-gray-400"
// // // //         }`}
// // // //       >
// // // //         {role}
// // // //       </span>
// // // //     );
// // // //   };

// // // //   // ✅ Status Badge
// // // //   const getStatusBadge = (status) => (
// // // //     <span
// // // //       className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// // // //         status === "Active" ? "bg-green-500" : "bg-red-500"
// // // //       }`}
// // // //     >
// // // //       {status}
// // // //     </span>
// // // //   );

// // // //   return (
// // // //     <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
// // // //       <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

// // // //       {loading ? (
// // // //         <div className="text-center py-6 text-gray-600">Loading data...</div>
// // // //       ) : error ? (
// // // //         <div className="text-center py-6 text-red-500">{error}</div>
// // // //       ) : users.length === 0 ? (
// // // //         <div className="text-center py-6 text-gray-500">No records found.</div>
// // // //       ) : (
// // // //         <table className="w-full rounded-md overflow-hidden border-gray-200">
// // // //           <thead className="border-b border-gray-200 bg-gray-50">
// // // //             <tr className="text-left text-sm text-gray-700">
// // // //               <th className="p-3">User</th>
// // // //               <th className="p-3">Contact</th>
// // // //               <th className="p-3">Role</th>
// // // //               <th className="p-3">Department</th>
// // // //               <th className="p-3">Company</th>

// // // //               <th className="p-3">Status</th>
// // // //               <th className="p-3">Join Date</th>
// // // //               <th className="p-3">Last Login</th>
// // // //               <th className="p-3">Actions</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {users.map((u) => (
// // // //               <tr
// // // //                 key={u._id}
// // // //                 className="border-b hover:bg-gray-100 transition cursor-pointer"
// // // //               >
// // // //                 {/* User */}
// // // //                 <td className="p-3 flex items-center gap-2">
// // // //                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
// // // //                     {u.fullName?.[0]?.toUpperCase() || "?"}
// // // //                   </div>
// // // //                   <span className="font-medium">{u.fullName || "Unnamed User"}</span>
// // // //                 </td>

// // // //                 {/* Contact */}
// // // //                 <td className="p-3 text-sm text-gray-600">
// // // //                   <div>{u.email || "—"}</div>
// // // //                   <div>{u.phone || "—"}</div>
// // // //                 </td>

// // // //                 {/* Role */}
// // // //                 <td className="p-3">{getRoleBadge(u.role || "User")}</td>

// // // //                 {/* Department */}
// // // //                 {/* <td className="p-3">{u.department || "—"}</td> */}
// // // //                 <td className="p-3">{u.department || "—"}</td>
// // // // <td className="p-3">{u.companyName || "—"}</td>


// // // //                 {/* Status */}
// // // //                 <td className="p-3">
// // // //                   {getStatusBadge(u.accountActive ? "Active" : "Inactive")}
// // // //                 </td>

// // // //                 {/* Join Date */}
// // // //                 <td className="p-3 text-sm text-gray-600">
// // // //                   {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
// // // //                 </td>

// // // //                 {/* Last Login */}
// // // //                 <td className="p-3 text-sm text-gray-600">
// // // //                   {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
// // // //                 </td>

// // // //                 {/* Actions */}
// // // //                 <td className="p-3 flex gap-2">
// // // //                   <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
// // // //                     View
// // // //                   </button>
// // // //                   <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
// // // //                     Edit
// // // //                   </button>
// // // //                   <button
// // // //                     className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
// // // //                     onClick={() => deleteEmployee(u._id)}
// // // //                   >
// // // //                     Delete
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UserTable;




// // // import { useState, useEffect } from "react";
// // // import { X } from "lucide-react";

// // // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// // // const UserTable = () => {
// // //   const [users, setUsers] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingUser, setEditingUser] = useState(null);
// // //   const [companies, setCompanies] = useState([]);
// // //   const [formData, setFormData] = useState({
// // //     fullName: "",
// // //     email: "",
// // //     phone: "",
// // //     department: "",
// // //     company: "",
// // //     role: "",
// // //     accountActive: true,
// // //   });

// // //   const fetchData = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError("");

// // //       const [adminRes, employeeRes] = await Promise.all([
// // //         fetch(`${API_URL}/getAdmin`),
// // //         fetch(`${API_URL}/employee/allEmployee`),
// // //       ]);

// // //       const adminData = await adminRes.json();
// // //       const employeeData = await employeeRes.json();

// // //       if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
// // //       if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

// // //       const admins = adminData.admins || adminData.employees || adminData || [];
// // //       const employees = employeeData.employees || employeeData.users || employeeData || [];
// // //       let combined = [...admins, ...employees];

// // //       const companyIds = [...new Set(combined.map((u) => u.company).filter(Boolean))];

// // //       const companyResponses = await Promise.all(
// // //         companyIds.map((id) =>
// // //           fetch(`${API_URL}/company/${id}`).then((res) => res.json())
// // //         )
// // //       );

// // //       const companyMap = {};
// // //       companyResponses.forEach((data, i) => {
// // //         const companyId = companyIds[i];
// // //         const company = data?.company || data?.data || data;
// // //         companyMap[companyId] =
// // //           company?.companyName ||
// // //           company?.name ||
// // //           company?.title ||
// // //           "Unknown Company";
// // //       });

// // //       combined = combined.map((u) => ({
// // //         ...u,
// // //         companyName: companyMap[u.company] || "—",
// // //       }));

// // //       combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// // //       setUsers(combined);
      
// // //       const companiesList = companyResponses.map((data, i) => ({
// // //         id: companyIds[i],
// // //         name: companyMap[companyIds[i]]
// // //       }));
// // //       setCompanies(companiesList);
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //       setError("Failed to fetch users or companies. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const deleteEmployee = async (id) => {
// // //     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
// // //     if (!confirmDelete) return;

// // //     try {
// // //       const response = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
// // //         method: "DELETE",
// // //         headers: { "Content-Type": "application/json" },
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message || "Failed to delete employee");
// // //       }

// // //       console.log("Record deleted successfully");
// // //       fetchData();
// // //     } catch (error) {
// // //       console.error("Error deleting employee:", error);
// // //       alert(error.message);
// // //     }
// // //   };

// // //   const handleEditClick = (user) => {
// // //     setEditingUser(user);
// // //     setFormData({
// // //       fullName: user.fullName || "",
// // //       email: user.email || "",
// // //       phone: user.phone || "",
// // //       department: user.department || "",
// // //       company: user.company || "",
// // //       role: user.role || "",
// // //       accountActive: user.accountActive !== undefined ? user.accountActive : true,
// // //     });
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setIsModalOpen(false);
// // //     setEditingUser(null);
// // //     setFormData({
// // //       fullName: "",
// // //       email: "",
// // //       phone: "",
// // //       department: "",
// // //       company: "",
// // //       role: "",
// // //       accountActive: true,
// // //     });
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: type === "checkbox" ? checked : value
// // //     }));
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const response = await fetch(`${API_URL}/employee/updateEmployee/${editingUser._id}`, {
// // //         method: "PUT",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify(formData),
// // //       });

// // //       const data = await response.json();

// // //       if (!response.ok) {
// // //         throw new Error(data.message || "Failed to update user");
// // //       }

// // //       alert("User updated successfully!");
// // //       handleCloseModal();
// // //       fetchData();
// // //     } catch (error) {
// // //       console.error("Error updating user:", error);
// // //       alert(error.message);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchData();
// // //   }, []);

// // //   const getRoleBadge = (role) => {
// // //     const colors = {
// // //       Admin: "bg-[#ad46ff]",
// // //       Manager: "bg-[#2b7fff]",
// // //       "Sales Rep": "bg-[#00c951]",
// // //       User: "bg-[#6a7282]",
// // //     };
// // //     return (
// // //       <span
// // //         className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// // //           colors[role] || "bg-gray-400"
// // //         }`}
// // //       >
// // //         {role}
// // //       </span>
// // //     );
// // //   };

// // //   const getStatusBadge = (status) => (
// // //     <span
// // //       className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// // //         status === "Active" ? "bg-green-500" : "bg-red-500"
// // //       }`}
// // //     >
// // //       {status}
// // //     </span>
// // //   );

// // //   return (
// // //     <>
// // //       <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
// // //         <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

// // //         {loading ? (
// // //           <div className="text-center py-6 text-gray-600">Loading data...</div>
// // //         ) : error ? (
// // //           <div className="text-center py-6 text-red-500">{error}</div>
// // //         ) : users.length === 0 ? (
// // //           <div className="text-center py-6 text-gray-500">No records found.</div>
// // //         ) : (
// // //           <table className="w-full rounded-md overflow-hidden border-gray-200">
// // //             <thead className="border-b border-gray-200 bg-gray-50">
// // //               <tr className="text-left text-sm text-gray-700">
// // //                 <th className="p-3">User</th>
// // //                 <th className="p-3">Contact</th>
// // //                 <th className="p-3">Role</th>
// // //                 <th className="p-3">Department</th>
// // //                 <th className="p-3">Company</th>
// // //                 <th className="p-3">Status</th>
// // //                 <th className="p-3">Join Date</th>
// // //                 <th className="p-3">Last Login</th>
// // //                 <th className="p-3">Actions</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {users.map((u) => (
// // //                 <tr
// // //                   key={u._id}
// // //                   className="border-b hover:bg-gray-100 transition cursor-pointer"
// // //                 >
// // //                   <td className="p-3 flex items-center gap-2">
// // //                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
// // //                       {u.fullName?.[0]?.toUpperCase() || "?"}
// // //                     </div>
// // //                     <span className="font-medium">{u.fullName || "Unnamed User"}</span>
// // //                   </td>

// // //                   <td className="p-3 text-sm text-gray-600">
// // //                     <div>{u.email || "—"}</div>
// // //                     <div>{u.phone || "—"}</div>
// // //                   </td>

// // //                   <td className="p-3">{getRoleBadge(u.role || "User")}</td>

// // //                   <td className="p-3">{u.department || "—"}</td>
// // //                   <td className="p-3">{u.companyName || "—"}</td>

// // //                   <td className="p-3">
// // //                     {getStatusBadge(u.accountActive ? "Active" : "Inactive")}
// // //                   </td>

// // //                   <td className="p-3 text-sm text-gray-600">
// // //                     {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
// // //                   </td>

// // //                   <td className="p-3 text-sm text-gray-600">
// // //                     {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
// // //                   </td>

// // //                   <td className="p-3 flex gap-2">
// // //                     <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
// // //                       View
// // //                     </button>
// // //                     <button 
// // //                       className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
// // //                       onClick={() => handleEditClick(u)}
// // //                     >
// // //                       Edit
// // //                     </button>
// // //                     <button
// // //                       className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
// // //                       onClick={() => deleteEmployee(u._id)}
// // //                     >
// // //                       Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>

// // //       {isModalOpen && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // //             <div className="flex items-center justify-between p-6 border-b">
// // //               <h2 className="text-xl font-semibold text-gray-800">Edit User</h2>
// // //               <button
// // //                 onClick={handleCloseModal}
// // //                 className="text-gray-400 hover:text-gray-600 transition"
// // //               >
// // //                 <X size={24} />
// // //               </button>
// // //             </div>

// // //             <div className="p-6">
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Full Name
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     name="fullName"
// // //                     value={formData.fullName}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Enter full name"
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Email
// // //                   </label>
// // //                   <input
// // //                     type="email"
// // //                     name="email"
// // //                     value={formData.email}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Enter email address"
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Phone
// // //                   </label>
// // //                   <input
// // //                     type="tel"
// // //                     name="phone"
// // //                     value={formData.phone}
// // //                     onChange={handleInputChange}
// // //                     placeholder="Phone number"
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Department
// // //                   </label>
// // //                   <select
// // //                     name="department"
// // //                     value={formData.department}
// // //                     onChange={handleInputChange}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// // //                   >
// // //                     <option value="">Select department</option>
// // //                     <option value="Sales">Sales</option>
// // //                     <option value="Marketing">Marketing</option>
// // //                     <option value="Engineering">Engineering</option>
// // //                     <option value="HR">HR</option>
// // //                     <option value="Finance">Finance</option>
// // //                     <option value="Operations">Operations</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Company
// // //                   </label>
// // //                   <select
// // //                     name="company"
// // //                     value={formData.company}
// // //                     onChange={handleInputChange}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// // //                   >
// // //                     <option value="">Select company</option>
// // //                     {companies.map((company) => (
// // //                       <option key={company.id} value={company.id}>
// // //                         {company.name}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// // //                     Role
// // //                   </label>
// // //                   <select
// // //                     name="role"
// // //                     value={formData.role}
// // //                     onChange={handleInputChange}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// // //                   >
// // //                     <option value="">Select Role</option>
// // //                     <option value="Admin">Admin</option>
// // //                     <option value="Manager">Manager</option>
// // //                     <option value="Sales Rep">Sales Rep</option>
// // //                     <option value="User">User</option>
// // //                   </select>
// // //                 </div>
// // //               </div>

// // //               <div className="mt-6 flex items-center">
// // //                 <input
// // //                   type="checkbox"
// // //                   name="accountActive"
// // //                   id="accountActive"
// // //                   checked={formData.accountActive}
// // //                   onChange={handleInputChange}
// // //                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// // //                 />
// // //                 <label htmlFor="accountActive" className="ml-2 text-sm font-medium text-gray-700">
// // //                   Account Active
// // //                 </label>
// // //               </div>

// // //               <div className="flex justify-end gap-3 mt-8">
// // //                 <button
// // //                   onClick={handleCloseModal}
// // //                   className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //                 <button
// // //                   onClick={handleSubmit}
// // //                   className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
// // //                 >
// // //                   Update User
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default UserTable;

// // import { useState, useEffect } from "react";
// // import { X } from "lucide-react";

// // const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// // const UserTable = () => {
// //   const [users, setUsers] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingUser, setEditingUser] = useState(null);
// //   const [companies, setCompanies] = useState([]);
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     department: "",
// //     company: "",
// //     role: "",
// //     accountActive: true,
// //   });

// //   const fetchData = async () => {
// //     try {
// //       setLoading(true);
// //       setError("");

// //       const [adminRes, employeeRes] = await Promise.all([
// //         fetch(`${API_URL}/getAdmin`),
// //         fetch(`${API_URL}/employee/allEmployee`),
// //       ]);

// //       const adminData = await adminRes.json();
// //       const employeeData = await employeeRes.json();

// //       if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
// //       if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

// //       const admins = adminData.admins || adminData.employees || adminData || [];
// //       const employees = employeeData.employees || employeeData.users || employeeData || [];
// //       let combined = [...admins, ...employees];

// //       const companyIds = [...new Set(combined.map((u) => u.company).filter(Boolean))];

// //       const companyResponses = await Promise.all(
// //         companyIds.map((id) =>
// //           fetch(`${API_URL}/company/${id}`).then((res) => res.json())
// //         )
// //       );

// //       const companyMap = {};
// //       companyResponses.forEach((data, i) => {
// //         const companyId = companyIds[i];
// //         const company = data?.company || data?.data || data;
// //         companyMap[companyId] =
// //           company?.companyName ||
// //           company?.name ||
// //           company?.title ||
// //           "Unknown Company";
// //       });

// //       combined = combined.map((u) => ({
// //         ...u,
// //         companyName: companyMap[u.company] || "—",
// //       }));

// //       combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

// //       setUsers(combined);
      
// //       const companiesList = companyResponses.map((data, i) => ({
// //         id: companyIds[i],
// //         name: companyMap[companyIds[i]]
// //       }));
// //       setCompanies(companiesList);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       setError("Failed to fetch users or companies. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const deleteEmployee = async (id) => {
// //     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
// //     if (!confirmDelete) return;

// //     try {
// //       const response = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
// //         method: "DELETE",
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(data.message || "Failed to delete employee");
// //       }

// //       console.log("Record deleted successfully");
// //       fetchData();
// //     } catch (error) {
// //       console.error("Error deleting employee:", error);
// //       alert(error.message);
// //     }
// //   };

// //   const handleEditClick = (user) => {
// //     setEditingUser(user);
// //     setFormData({
// //       fullName: user.fullName || "",
// //       email: user.email || "",
// //       phone: user.phone || "",
// //       department: user.department || "",
// //       company: user.company || "",
// //       role: user.role || "",
// //       accountActive: user.accountActive !== undefined ? user.accountActive : true,
// //     });
// //     setIsModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setEditingUser(null);
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       phone: "",
// //       department: "",
// //       company: "",
// //       role: "",
// //       accountActive: true,
// //     });
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === "checkbox" ? checked : value
// //     }));
// //   };

// //   const handleSubmit = async (_id) => {
// //     try {
// //       console.log("Submitting to:", `${API_URL}/employee/editEmployee/${editingUser._id}`);
// //       console.log("Form data:", formData);

// //       const response = await fetch(`${API_URL}/employee/editEmployee/${editingUser._id}`, {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       console.log("Response status:", response.status);
      
// //       const data = await response.json();
// //       console.log("Response data:", data);

// //       if (!response.ok) {
// //         throw new Error(data.message || data.error || `Failed to update user (Status: ${response.status})`);
// //       }

// //       alert("User updated successfully!");
// //       handleCloseModal();
// //       fetchData();
// //     } catch (error) {
// //       console.error("Error updating user:", error);
// //       alert(`Failed to update user: ${error.message}`);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const getRoleBadge = (role) => {
// //     const colors = {
// //       Admin: "bg-[#ad46ff]",
// //       Manager: "bg-[#2b7fff]",
// //       "Sales Rep": "bg-[#00c951]",
// //       User: "bg-[#6a7282]",
// //     };
// //     return (
// //       <span
// //         className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// //           colors[role] || "bg-gray-400"
// //         }`}
// //       >
// //         {role}
// //       </span>
// //     );
// //   };

// //   const getStatusBadge = (status) => (
// //     <span
// //       className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
// //         status === "Active" ? "bg-green-500" : "bg-red-500"
// //       }`}
// //     >
// //       {status}
// //     </span>
// //   );

// //   return (
// //     <>
// //       <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
// //         <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

// //         {loading ? (
// //           <div className="text-center py-6 text-gray-600">Loading data...</div>
// //         ) : error ? (
// //           <div className="text-center py-6 text-red-500">{error}</div>
// //         ) : users.length === 0 ? (
// //           <div className="text-center py-6 text-gray-500">No records found.</div>
// //         ) : (
// //           <table className="w-full rounded-md overflow-hidden border-gray-200">
// //             <thead className="border-b border-gray-200 bg-gray-50">
// //               <tr className="text-left text-sm text-gray-700">
// //                 <th className="p-3">User</th>
// //                 <th className="p-3">Contact</th>
// //                 <th className="p-3">Role</th>
// //                 <th className="p-3">Department</th>
// //                 <th className="p-3">Company</th>
// //                 <th className="p-3">Status</th>
// //                 <th className="p-3">Join Date</th>
// //                 <th className="p-3">Last Login</th>
// //                 <th className="p-3">Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {users.map((u) => (
// //                 <tr
// //                   key={u._id}
// //                   className="border-b hover:bg-gray-100 transition cursor-pointer"
// //                 >
// //                   <td className="p-3 flex items-center gap-2">
// //                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
// //                       {u.fullName?.[0]?.toUpperCase() || "?"}
// //                     </div>
// //                     <span className="font-medium">{u.fullName || "Unnamed User"}</span>
// //                   </td>

// //                   <td className="p-3 text-sm text-gray-600">
// //                     <div>{u.email || "—"}</div>
// //                     <div>{u.phone || "—"}</div>
// //                   </td>

// //                   <td className="p-3">{getRoleBadge(u.role || "User")}</td>

// //                   <td className="p-3">{u.department || "—"}</td>
// //                   <td className="p-3">{u.companyName || "—"}</td>

// //                   <td className="p-3">
// //                     {getStatusBadge(u.accountActive ? "Active" : "Inactive")}
// //                   </td>

// //                   <td className="p-3 text-sm text-gray-600">
// //                     {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
// //                   </td>

// //                   <td className="p-3 text-sm text-gray-600">
// //                     {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
// //                   </td>

// //                   <td className="p-3 flex gap-2">
// //                     <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
// //                       View
// //                     </button>
// //                     <button 
// //                       className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
// //                       onClick={() => handleEditClick(u)}
// //                     >
// //                       Edit
// //                     </button>
// //                     <button
// //                       className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
// //                       onClick={() => deleteEmployee(u._id)}
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>

// //       {isModalOpen && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// //             <div className="flex items-center justify-between p-6 border-b">
// //               <h2 className="text-xl font-semibold text-gray-800">Edit User</h2>
// //               <button
// //                 onClick={handleCloseModal}
// //                 className="text-gray-400 hover:text-gray-600 transition"
// //               >
// //                 <X size={24} />
// //               </button>
// //             </div>

// //             <div className="p-6">
// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Full Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="fullName"
// //                     value={formData.fullName}
// //                     onChange={handleInputChange}
// //                     placeholder="Enter full name"
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Email
// //                   </label>
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleInputChange}
// //                     placeholder="Enter email address"
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Phone
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleInputChange}
// //                     placeholder="Phone number"
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Department
// //                   </label>
// //                   <select
// //                     name="department"
// //                     value={formData.department}
// //                     onChange={handleInputChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// //                   >
// //                     <option value="">Select department</option>
// //                     <option value="Sales">Sales</option>
// //                     <option value="Marketing">Marketing</option>
// //                     <option value="Engineering">Engineering</option>
// //                     <option value="HR">HR</option>
// //                     <option value="Finance">Finance</option>
// //                     <option value="Operations">Operations</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Company
// //                   </label>
// //                   <select
// //                     name="company"
// //                     value={formData.company}
// //                     onChange={handleInputChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// //                   >
// //                     <option value="">Select company</option>
// //                     {companies.map((company) => (
// //                       <option key={company.id} value={company.id}>
// //                         {company.name}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Role
// //                   </label>
// //                   <select
// //                     name="role"
// //                     value={formData.role}
// //                     onChange={handleInputChange}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
// //                   >
// //                     <option value="">Select Role</option>
// //                     <option value="Admin">Admin</option>
// //                     <option value="Employee">Employee</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="mt-6 flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="accountActive"
// //                   id="accountActive"
// //                   checked={formData.accountActive}
// //                   onChange={handleInputChange}
// //                   className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// //                 />
// //                 <label htmlFor="accountActive" className="ml-2 text-sm font-medium text-gray-700">
// //                   Account Active
// //                 </label>
// //               </div>

// //               <div className="flex justify-end gap-3 mt-8">
// //                 <button
// //                   onClick={handleCloseModal}
// //                   className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   onClick={handleSubmit}
// //                   className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
// //                 >
// //                   Update User
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default UserTable;


// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [companies, setCompanies] = useState([]);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     department: "",
//     company: "",
//     role: "",
//     accountActive: true,
//   });

//   // ✅ Fetch Admins, Employees, and Companies
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const [adminRes, employeeRes] = await Promise.all([
//         fetch(`${API_URL}/getAdmin`),
//         fetch(`${API_URL}/employee/allEmployee`),
//       ]);

//       const adminData = await adminRes.json();
//       const employeeData = await employeeRes.json();

//       if (!adminRes.ok) throw new Error(adminData.message || "Failed to fetch admins");
//       if (!employeeRes.ok) throw new Error(employeeData.message || "Failed to fetch employees");

//       const admins = adminData.admins || [];
//       const employees = employeeData.employees || [];

//       let combined = [...admins, ...employees];
//       const companyIds = [...new Set(combined.map((u) => u.company).filter(Boolean))];

//       // Fetch each company
//       const companyResponses = await Promise.all(
//         companyIds.map((id) => fetch(`${API_URL}/company/${id}`).then((res) => res.json()))
//       );

//       const companyMap = {};
//       companyResponses.forEach((data, i) => {
//         const companyId = companyIds[i];
//         const company = data?.company || data?.data || data;
//         companyMap[companyId] = company?.companyName || company?.name || "Unknown";
//       });

//       combined = combined.map((u) => ({
//         ...u,
//         companyName: companyMap[u.company] || "—",
//       }));

//       combined.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//       setUsers(combined);
//       setCompanies(
//         companyIds.map((id) => ({
//           id,
//           name: companyMap[id],
//         }))
//       );
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Failed to fetch users or companies. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Open modal with selected user data
//   const handleEditClick = (user) => {
//     setEditingUser(user);
//     setFormData({
//       fullName: user.fullName || "",
//       email: user.email || "",
//       phone: user.phone || "",
//       department: user.department || "",
//       company: user.company || "",
//       role: user.role || "",
//       accountActive: user.accountActive !== undefined ? user.accountActive : true,
//     });
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditingUser(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       department: "",
//       company: "",
//       role: "",
//       accountActive: true,
//     });
//   };

//   // ✅ Input Change Handler
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // ✅ Update API — detects Admin/Employee and updates
//   const handleSubmit = async () => {
//     if (!editingUser?._id) {
//       alert("Invalid user ID. Please try again.");
//       return;
//     }

//     try {
//       const isAdmin = editingUser.role === "Admin";

//       const endpoint = isAdmin
//         ? `${API_URL}/admin/updateAdmin/${editingUser._id}`
//         : `${API_URL}/employee/updateEmployee/${editingUser._id}`;

//       const response = await fetch(endpoint, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to update user");

//       alert(`${isAdmin ? "Admin" : "Employee"} updated successfully!`);
//       handleCloseModal();
//       fetchData();
//     } catch (error) {
//       console.error("Error updating user:", error);
//       alert(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // ✅ Delete Employee
//   const deleteEmployee = async (id, role) => {
//     if (role === "Admin") {
//       alert("Admins cannot delete other Admins!");
//       return;
//     }

//     const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
//     if (!confirmDelete) return;

//     try {
//       const response = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
//         method: "DELETE",
//       });
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to delete employee");

//       alert("Employee deleted successfully!");
//       fetchData();
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert(error.message);
//     }
//   };

//   // ✅ Helper badges
//   const getRoleBadge = (role) => {
//     const colors = {
//       Admin: "bg-[#ad46ff]",
//       Manager: "bg-[#2b7fff]",
//       "Sales Rep": "bg-[#00c951]",
//       User: "bg-[#6a7282]",
//     };
//     return (
//       <span
//         className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
//           colors[role] || "bg-gray-400"
//         }`}
//       >
//         {role}
//       </span>
//     );
//   };

//   const getStatusBadge = (status) => (
//     <span
//       className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
//         status === "Active" ? "bg-green-500" : "bg-red-500"
//       }`}
//     >
//       {status}
//     </span>
//   );

//   return (
//     <>
//       {/* ✅ TABLE */}
//       <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
//         <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

//         {loading ? (
//           <div className="text-center py-6 text-gray-600">Loading data...</div>
//         ) : error ? (
//           <div className="text-center py-6 text-red-500">{error}</div>
//         ) : users.length === 0 ? (
//           <div className="text-center py-6 text-gray-500">No records found.</div>
//         ) : (
//           <table className="w-full rounded-md overflow-hidden border-gray-200">
//             <thead className="border-b border-gray-200 bg-gray-50">
//               <tr className="text-left text-sm text-gray-700">
//                 <th className="p-3">User</th>
//                 <th className="p-3">Contact</th>
//                 <th className="p-3">Role</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Company</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Join Date</th>
//                 <th className="p-3">Last Login</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((u) => (
//                 <tr key={u._id} className="border-b hover:bg-gray-100 transition cursor-pointer">
//                   <td className="p-3 flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
//                       {u.fullName?.[0]?.toUpperCase() || "?"}
//                     </div>
//                     <span className="font-medium">{u.fullName || "Unnamed User"}</span>
//                   </td>
//                   <td className="p-3 text-sm text-gray-600">
//                     <div>{u.email || "—"}</div>
//                     <div>{u.phone || "—"}</div>
//                   </td>
//                   <td className="p-3">{getRoleBadge(u.role || "User")}</td>
//                   <td className="p-3">{u.department || "—"}</td>
//                   <td className="p-3">{u.companyName || "—"}</td>
//                   <td className="p-3">{getStatusBadge(u.accountActive ? "Active" : "Inactive")}</td>
//                   <td className="p-3 text-sm text-gray-600">
//                     {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
//                   </td>
//                   <td className="p-3 text-sm text-gray-600">
//                     {u.lastLogin ? new Date(u.lastLogin).toLocaleString() : "—"}
//                   </td>
//                   <td className="p-3 flex gap-2">
//                     <button
//                       className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
//                       onClick={() => handleEditClick(u)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
//                       onClick={() => deleteEmployee(u._id, u.role)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* ✅ EDIT MODAL */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex items-center justify-between p-6 border-b">
//               <h2 className="text-xl font-semibold text-gray-800">Edit User</h2>
//               <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
//                   <select
//                     name="department"
//                     value={formData.department}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   >
//                     <option value="">Select department</option>
//                     <option value="Sales">Sales</option>
//                     <option value="Marketing">Marketing</option>
//                     <option value="Engineering">Engineering</option>
//                     <option value="HR">HR</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Operations">Operations</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
//                   <select
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   >
//                     <option value="">Select company</option>
//                     {companies.map((company) => (
//                       <option key={company.id} value={company.id}>
//                         {company.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
//                   <select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                   >
//                     <option value="">Select Role</option>
//                     <option value="Admin">Admin</option>
//                     <option value="Manager">Manager</option>
//                     <option value="Sales Rep">Sales Rep</option>
//                     <option value="User">User</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center">
//                 <input
//                   type="checkbox"
//                   name="accountActive"
//                   checked={formData.accountActive}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 text-sm font-medium text-gray-700">Account Active</label>
//               </div>

//               <div className="flex justify-end gap-3 mt-8">
//                 <button
//                   onClick={handleCloseModal}
//                   className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
//                 >
//                   Update User
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserTable;

// import { useState, useEffect } from "react";
// import { X } from "lucide-react";

// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     department: "",
//     company: "",
//     role: "",
//     accountActive: true,
//   });

//   // 🔹 Fetch admins
//   const fetchAdmins = async () => {
//     const res = await fetch(`${API_URL}/getAdmin`);
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to fetch admins");
//     return data.admins || [];
//   };

//   // 🔹 Fetch employees
//   const fetchEmployees = async () => {
//     const res = await fetch(`${API_URL}/employee/allEmployee`);
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to fetch employees");
//     return data.employees || [];
//   };

//   // 🔹 Fetch all companies (one API call)
//   const fetchCompanies = async () => {
//     const res = await fetch(`${API_URL}/company/all`);
//     const data = await res.json();
//     if (!res.ok) throw new Error(data.message || "Failed to fetch companies");
//     return data.companies || [];
//   };

//   // 🔹 Fetch everything together
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const [admins, employees, allCompanies] = await Promise.all([
//         fetchAdmins(),
//         fetchEmployees(),
//         fetchCompanies(),
//       ]);

//       // 🏢 Company ID → Name map
//       const companyMap = {};
//       allCompanies.forEach((c) => {
//         companyMap[c._id] = c.companyName || "Unknown Company";
//       });

//       // Merge admins + employees
//       const combined = [...admins, ...employees].map((u) => ({
//         ...u,
//         companyName: companyMap[u.company] || "—",
//       }));

//       setUsers(combined);

//       // For dropdown
//       setCompanies(
//         allCompanies.map((c) => ({
//           id: c._id,
//           name: c.companyName,
//         }))
//       );
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setError("Failed to load data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Delete employee (Admin can't delete Admins)
//   const deleteEmployee = async (id, role) => {
//     if (role === "Admin") {
//       alert("Admins cannot delete other admins.");
//       return;
//     }

//     if (!window.confirm("Are you sure you want to delete this employee?")) return;

//     try {
//       const res = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to delete employee");

//       console.log("✅ Employee deleted successfully");
//       fetchData();
//     } catch (error) {
//       console.error("❌ Error deleting employee:", error);
//       alert(error.message);
//     }
//   };

//   // 🔹 Open Edit Modal
//   const handleEditClick = (user) => {
//     if (user.role === "Admin") {
//       alert("Admins cannot edit other admins.");
//       return;
//     }

//     setEditingUser(user);
//     setFormData({
//       fullName: user.fullName || "",
//       email: user.email || "",
//       phone: user.phone || "",
//       department: user.department || "",
//       company: user.company || "",
//       role: user.role || "",
//       accountActive: user.accountActive !== undefined ? user.accountActive : true,
//     });
//     setIsModalOpen(true);
//   };

//   // 🔹 Handle Input Change
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // 🔹 Close Modal
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditingUser(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       department: "",
//       company: "",
//       role: "",
//       accountActive: true,
//     });
//   };

//   // 🔹 Update Employee
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!editingUser?._id) {
//       alert("No user selected for update.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `${API_URL}/employee/editEmployee/${editingUser._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Server error:", errorText);
//         throw new Error("Failed to update employee");
//       }

//       console.log("✅ Employee updated successfully");
//       alert("Employee updated successfully!");
//       handleCloseModal();
//       fetchData();
//     } catch (error) {
//       console.error("❌ Error updating employee:", error);
//       alert(error.message || "Update failed. Try again.");
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // 🔹 UI helpers
//   const getRoleBadge = (role) => {
//     const colors = {
//       Admin: "bg-[#ad46ff]",
//       Manager: "bg-[#2b7fff]",
//       "Sales Rep": "bg-[#00c951]",
//       Employee: "bg-[#6a7282]",
//     };
//     return (
//       <span
//         className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
//           colors[role] || "bg-gray-400"
//         }`}
//       >
//         {role}
//       </span>
//     );
//   };

//   const getStatusBadge = (status) => (
//     <span
//       className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
//         status === "Active" ? "bg-green-500" : "bg-red-500"
//       }`}
//     >
//       {status}
//     </span>
//   );

//   // 🔹 Render
//   return (
//     <>
//       <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
//         <h2 className="text-lg font-semibold px-4 py-3 border-b">
//           Admin & Employee List
//         </h2>

//         {loading ? (
//           <div className="text-center py-6 text-gray-600">Loading data...</div>
//         ) : error ? (
//           <div className="text-center py-6 text-red-500">{error}</div>
//         ) : users.length === 0 ? (
//           <div className="text-center py-6 text-gray-500">No records found.</div>
//         ) : (
//           <table className="w-full rounded-md overflow-hidden border-gray-200">
//             <thead className="border-b border-gray-200 bg-gray-50">
//               <tr className="text-left text-sm text-gray-700">
//                 <th className="p-3">User</th>
//                 <th className="p-3">Contact</th>
//                 <th className="p-3">Role</th>
//                 <th className="p-3">Department</th>
//                 <th className="p-3">Company</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Join Date</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((u) => (
//                 <tr
//                   key={u._id}
//                   className="border-b hover:bg-gray-100 transition cursor-pointer"
//                 >
//                   <td className="p-3 flex items-center gap-2">
//                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
//                       {u.fullName?.[0]?.toUpperCase() || "?"}
//                     </div>
//                     <span className="font-medium">{u.fullName || "Unnamed"}</span>
//                   </td>
//                   <td className="p-3 text-sm text-gray-600">
//                     <div>{u.email || "—"}</div>
//                     <div>{u.phone || "—"}</div>
//                   </td>
//                   <td className="p-3">{getRoleBadge(u.role || "Employee")}</td>
//                   <td className="p-3">{u.department || "—"}</td>
//                   <td className="p-3">{u.companyName || "—"}</td>
//                   <td className="p-3">
//                     {getStatusBadge(u.accountActive ? "Active" : "Inactive")}
//                   </td>
//                   <td className="p-3 text-sm text-gray-600">
//                     {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
//                   </td>
//                   <td className="p-3 flex gap-2">
//                     <button
//                       onClick={() => handleEditClick(u)}
//                       className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => deleteEmployee(u._id, u.role)}
//                       className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* 🔹 Edit Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
//             <div className="flex items-center justify-between p-6 border-b">
//               <h2 className="text-xl font-semibold text-gray-800">Edit Employee</h2>
//               <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6">
//               <div className="grid grid-cols-2 gap-6">
//                 {["fullName", "email", "phone"].map((field) => (
//                   <div key={field}>
//                     <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
//                       {field}
//                     </label>
//                     <input
//                       type={field === "email" ? "email" : "text"}
//                       name={field}
//                       value={formData[field]}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                 ))}

//                 {/* Department */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Department
//                   </label>
//                   <select
//                     name="department"
//                     value={formData.department}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
//                   >
//                     <option value="">Select department</option>
//                     {["IT", "Sales", "Digital Marketing", "Legal", "HR", "Accounts", "Operations"].map(
//                       (dept) => (
//                         <option key={dept} value={dept}>
//                           {dept}
//                         </option>
//                       )
//                     )}
//                   </select>
//                 </div>

//                 {/* Company */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
//                   <select
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
//                   >
//                     <option value="">Select company</option>
//                     {companies.map((c) => (
//                       <option key={c.id} value={c.id}>
//                         {c.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Role */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
//                   <select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
//                   >
//                     <option value="">Select Role</option>
//                     <option value="Admin">Admin</option>
//                     <option value="Employee">Employee</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center">
//                 <input
//                   type="checkbox"
//                   name="accountActive"
//                   checked={formData.accountActive}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 text-sm font-medium text-gray-700">Account Active</label>
//               </div>

//               <div className="flex justify-end gap-3 mt-8">
//                 <button
//                   onClick={handleCloseModal}
//                   className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
//                 >
//                   Update Employee
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserTable;


import { useState, useEffect } from "react";
import { Eye, Edit2, Trash2, X } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    company: "",
    role: "",
    accountActive: true,
  });

  // 🔹 Fetch admins
  const fetchAdmins = async () => {
    const res = await fetch(`${API_URL}/getAdmin`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch admins");
    return data.admins || [];
  };

  // 🔹 Fetch employees
  const fetchEmployees = async () => {
    const res = await fetch(`${API_URL}/employee/allEmployee`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch employees");
    return data.employees || [];
  };

  // 🔹 Fetch all companies
  const fetchCompanies = async () => {
    const res = await fetch(`${API_URL}/company/all`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch companies");
    return data.companies || [];
  };

  // 🔹 Fetch all data together
  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const [admins, employees, allCompanies] = await Promise.all([
        fetchAdmins(),
        fetchEmployees(),
        fetchCompanies(),
      ]);

      const companyMap = {};
      allCompanies.forEach((c) => {
        companyMap[c._id] = c.companyName || "Unknown Company";
      });

      const combined = [...admins, ...employees].map((u) => ({
        ...u,
        companyName: companyMap[u.company] || "—",
      }));

      setUsers(combined);
      setCompanies(allCompanies.map((c) => ({ id: c._id, name: c.companyName })));
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete Employee
  const deleteEmployee = async (id, role) => {
    if (role === "Admin") {
      alert("Admins cannot delete other admins.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const res = await fetch(`${API_URL}/employee/deleteEmployee/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to delete employee");

      fetchData();
    } catch (error) {
      console.error("❌ Error deleting employee:", error);
      alert(error.message);
    }
  };

  // 🔹 Open Edit Modal
  const handleEditClick = (user) => {
    if (user.role === "Admin") {
      alert("Admins cannot edit other admins.");
      return;
    }

    setEditingUser(user);
    setFormData({
      fullName: user.fullName || "",
      email: user.email || "",
      phone: user.phone || "",
      department: user.department || "",
      company: user.company || "",
      role: user.role || "",
      accountActive: user.accountActive ?? true,
    });
    setIsModalOpen(true);
  };

  // 🔹 Open View Modal
  const handleViewClick = (user) => {
    setViewingUser(user);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setViewingUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      department: "",
      company: "",
      role: "",
      accountActive: true,
    });
  };

  // 🔹 Update Employee
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editingUser?._id) {
      alert("No user selected for update.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/employee/editEmployee/${editingUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update employee");

      alert("Employee updated successfully!");
      handleCloseModal();
      fetchData();
    } catch (error) {
      console.error("❌ Error updating employee:", error);
      alert(error.message || "Update failed. Try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getRoleBadge = (role) => {
    const colors = {
      Admin: "bg-[#ad46ff]",
      Manager: "bg-[#2b7fff]",
      "Sales Rep": "bg-[#00c951]",
      Employee: "bg-[#6a7282]",
    };
    return (
      <span className={`px-2 py-1 rounded-md text-white text-xs font-medium ${colors[role] || "bg-gray-400"}`}>
        {role}
      </span>
    );
  };

  const getStatusBadge = (status) => (
    <span className={`px-2 py-1 rounded-md text-white text-xs font-medium ${
      status === "Active" ? "bg-green-500" : "bg-red-500"
    }`}>
      {status}
    </span>
  );

  // 🔹 Render
  return (
    <>
      <div className="border border-gray-200 rounded-md bg-white whitespace-nowrap shadow-sm">
        <h2 className="text-lg font-semibold px-4 py-3 border-b">Admin & Employee List</h2>

        {loading ? (
          <div className="text-center py-6 text-gray-600">Loading data...</div>
        ) : error ? (
          <div className="text-center py-6 text-red-500">{error}</div>
        ) : users.length === 0 ? (
          <div className="text-center py-6 text-gray-500">No records found.</div>
        ) : (
          <table className="w-full rounded-md overflow-hidden border-gray-200">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr className="text-left text-sm text-gray-700">
                <th className="p-3">User</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Role</th>
                <th className="p-3">Department</th>
                <th className="p-3">Company</th>
                <th className="p-3">Status</th>
                <th className="p-3">Join Date</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="border-b hover:bg-gray-100 transition cursor-pointer">
                  <td className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                      {u.fullName?.[0]?.toUpperCase() || "?"}
                    </div>
                    <span className="font-medium">{u.fullName || "Unnamed"}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-600">
                    <div>{u.email || "—"}</div>
                    <div>{u.phone || "—"}</div>
                  </td>
                  <td className="p-3">{getRoleBadge(u.role || "Employee")}</td>
                  <td className="p-3">{u.department || "—"}</td>
                  <td className="p-3">{u.companyName || "—"}</td>
                  <td className="p-3">{getStatusBadge(u.accountActive ? "Active" : "Inactive")}</td>
                  <td className="p-3 text-sm text-gray-600">
                    {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "—"}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleViewClick(u)}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => handleEditClick(u)}
                      className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => deleteEmployee(u._id, u.role)}
                      className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* 🔹 View Modal */}
      {isViewModalOpen && viewingUser && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full border border-gray-200">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">User Details</h2>
              <button onClick={handleCloseViewModal} className="text-gray-500 hover:text-gray-700">
                <X size={22} />
              </button>
            </div>
            <div className="p-6 space-y-3 text-gray-700">
              <p><strong>Name:</strong> {viewingUser.fullName}</p>
              <p><strong>Email:</strong> {viewingUser.email}</p>
              <p><strong>Phone:</strong> {viewingUser.phone}</p>
              <p><strong>Department:</strong> {viewingUser.department}</p>
              <p><strong>Company:</strong> {viewingUser.companyName}</p>
              <p><strong>Role:</strong> {viewingUser.role}</p>
              <p><strong>Status:</strong> {viewingUser.accountActive ? "Active" : "Inactive"}</p>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full border border-gray-200">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Edit Employee</h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {["fullName", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="">Select department</option>
                    {["IT", "Sales", "Digital Marketing", "Legal", "HR", "Accounts", "Operations"].map(
                      (dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <select
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="">Select company</option>
                    {companies.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  name="accountActive"
                  checked={formData.accountActive}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">Account Active</label>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Update Employee
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTable;

