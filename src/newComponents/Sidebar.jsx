import React from "react";
import { NavLink } from "react-router-dom";

// Example icons using react-icons or your custom images
import { FiGrid, FiUsers, FiUserPlus, FiClock, FiBriefcase, FiSettings } from "react-icons/fi";

const Sidebar = () => {
    const sidebarItems = [
        { id: 1, label: "Dashboard", icon: <FiGrid size={20} />, url: "/dashboard" },
        { id: 2, label: "Lead Management", icon: <FiUsers size={20} />, url: "/lead-management" },
        { id: 3, label: "User Management", icon: <FiUserPlus size={20} />, url: "/user-management" },
        { id: 4, label: "Attendance", icon: <FiClock size={20} />, url: "/attendance" },
        { id: 5, label: "Companies", icon: <FiBriefcase size={20} />, url: "/companies" },
        { id: 6, label: "Settings", icon: <FiSettings size={20} />, url: "/settings" },
    ];

    return (
        <div className="w-[18vw] bg-white h-screen shadow-md flex flex-col">
            {/* Logo */}
            <div className="h-16 flex items-center justify-center bg-[#000000] text-white text-2xl font-bold">
                CRM Pro
            </div>

            {/* Navigation Items */}
            <nav className="mt-8 flex-1">
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.id} className="mb-2">
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 px-4 py-3 text-white bg-[#000000] rounded-md transition duration-200"
                                        : "flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition duration-200"
                                }
                            >
                                {item.icon}
                                <span className="text-md">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
