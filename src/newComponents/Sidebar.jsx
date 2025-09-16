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
        <div className="flex h-screen w-[18vw] flex-col bg-white shadow-lg">
            {/* Logo */}
            <div className="flex h-[12vh] items-center gap-3 border-b-2 px-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-black text-[25px] font-semibold text-white">C</div>
                <div className="text-[25px] font-semibold text-slate-600">CRM Pro</div>
            </div>

            {/* Navigation Items */}
            <nav className="mt-8 flex-1">
                <ul>
                    {sidebarItems.map((item) => (
                        <li
                            key={item.id}
                            className="mb-2 px-3"
                        >
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center gap-3 rounded-lg bg-[#000000] px-4 py-3 text-white transition duration-200"
                                        : "flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition duration-200 hover:bg-gray-100"
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
