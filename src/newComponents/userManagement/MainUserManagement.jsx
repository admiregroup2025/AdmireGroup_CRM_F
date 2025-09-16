import React from "react";
import { cardData } from "./data.jsx";
import Card from "./Card";
import SearchUser from "./SearchUser.jsx";
import SearchRole from "./SearchRoles.jsx";
import AddUser from "./AddUser.jsx";
import UserTable from "./UserTable.jsx";

const MainUserManagement = () => {
    return (
        <div className="p-8 bg-[#f8f9fa]">
            <div className="flex gap-4">
                {cardData.map((card, ind) => {
                    return (
                        <Card
                            title={card.title}
                            value={card.value}
                            icon={card.icon}
                            description={card.description}
                        />
                    );
                })}
            </div>

            <div className="flex w-full justify-between my-4">
                <div className="flex gap-3">
                    <SearchUser />
                    <SearchRole />
                </div>
                <AddUser />
            </div>

            <UserTable />
        </div>
    );
};

export default MainUserManagement;
