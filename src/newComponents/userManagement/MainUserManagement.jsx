import React from "react";
import { cardData } from "./data.jsx";
import Card from "./Card";
import SearchUser from "./SearchUser.jsx";
import SearchRole from "./SearchRoles.jsx";
import AddUser from "./AddUser.jsx";

const MainUserManagement = () => {
    return (
        <div>
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

            <div className="flex w-full justify-between">
                <div className="flex gap-3">
                    <SearchUser />
                    <SearchRole />
                </div>
                <AddUser />
            </div>
        </div>
    );
};

export default MainUserManagement;
