import React from "react";
import { cardData } from "./data.js";
import Card from "./Card";
import { SearchUser } from "./SearchUser.jsx";
import { SearchRole } from "./SearchRoles.jsx";
import AddUser from "./AddUser.jsx";
import UserTable from "./UserTable.jsx";

const MainUserManagement = () => {
    return (
        <div className="bg-[#f8f9fa] p-8 max-h-[82vh] overflow-y-auto">
            {/* Header Section */}
            <div className="mb-6">
                <h1 className="mb-2 text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600">Manage users, roles, and permissions across your organization</p>
            </div>

            {/* Stats Cards */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {cardData.map((card, index) => (
                    <Card
                        key={`card-${index}`}
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        description={card.description}
                    />
                ))}
            </div>

            {/* Controls Section */}
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <SearchUser />
                    <SearchRole />
                </div>
                <AddUser />
            </div>

            {/* Users Table */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <UserTable />
            </div>
        </div>
    );
};

export default MainUserManagement;
