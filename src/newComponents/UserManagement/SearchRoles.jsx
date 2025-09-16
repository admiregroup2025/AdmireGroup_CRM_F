// // import { useState } from "react";

// // const SearchRole = () => {
// //   const [role, setRole] = useState("All Roles");

// //   // Click handler (fires when user selects a role)
// //   const handleRoleChange = (e) => {
// //     const selectedRole = e.target.value;
// //     setRole(selectedRole);
// //     console.log("Selected Role:", selectedRole); // ✅ do what you need here
// //   };

// //   return (
// //     <div className="bg-gray-200 w-fit px-1 py-2 flex gap-2 rounded-md">
// //       <div className="text-gray-500">
// //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"/></svg>
// //       </div>


// //         <select
// //         value={role}
// //         onChange={handleRoleChange}
// //     className="appearance-none bg-gray-200 text-black focus:outline-none focus:ring-0 rounded-md"
// //   >

// //         <option className="hover:bg-gray-600">All Roles</option>
// //         <option className="hover:bg-gray-600">Admin</option>
// //         <option className="hover:bg-gray-600">Manager</option>
// //         <option className="hover:bg-gray-600">Sales Rep</option>
// //         <option className="hover:bg-gray-600">User</option>
// //       </select>

// //       <div className="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div>
// //     </div>
// //   );
// // };

// // export default SearchRole;
// import { useState } from "react";

// const SearchRole = () => {
//   const [role, setRole] = useState("All Roles");

//   const handleRoleChange = (e) => {
//     const selectedRole = e.target.value;
//     setRole(selectedRole);
//     console.log("Selected Role:", selectedRole);
//   };

//   return (
//     <div className="flex items-center gap-2 w-64 bg-gray-200 border border-gray-300 rounded-md px-2 py-2 relative">
//       {/* Left Icon */}
//       <div className="text-gray-500">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-funnel"
//         >
//           <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
//         </svg>
//       </div>

//       {/* Dropdown */}
//       <select
//         value={role}
//         onChange={handleRoleChange}
//         className="appearance-none w-full bg-gray-200 text-black focus:outline-none focus:ring-0 pr-6"
//       >
//         <option className="px-1 py-2 hover:bg-gray-100">All Roles</option>
//         <option className="px-1 py-2 hover:bg-gray-100">Admin</option>
//         <option className="px-1 py-2 hover:bg-gray-100">Manager</option>
//         <option className="px-1 py-2 hover:bg-gray-100">Sales Rep</option>
//         <option className="px-1 py-2 hover:bg-gray-100">User</option>
//       </select>

//       {/* Custom Arrow */}
//       <div className="pointer-events-none absolute right-2 text-black">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="lucide lucide-chevron-down"
//         >
//           <path d="m6 9 6 6 6-6" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default SearchRole;
import { useState } from "react";

const roles = ["All Roles", "Admin", "Manager", "Sales Rep", "User"];

const SearchRole = () => {
  const [role, setRole] = useState("All Roles");
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
    setOpen(false);
    console.log("Selected Role:", selectedRole);
  };

  return (
    <div className="relative w-64">
      {/* Parent */}
      <div
        className="flex items-center justify-between bg-gray-200 border border-gray-300 rounded-md px-2 py-2 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2 text-black">
          {/* Funnel Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel text-gray-500"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <span>{role}</span>
        </div>

        {/* Chevron Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
          {roles.map((r) => (
            <div
              key={r}
              onClick={() => handleSelect(r)}
              className='px-2 py-2 cursor-pointer hover:bg-gray-100'
            >
              {r}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchRole;
