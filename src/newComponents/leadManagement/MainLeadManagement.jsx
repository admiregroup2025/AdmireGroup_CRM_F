import React from "react";

import { cardData } from "./data.js";
import MyCard from "../UserManagement/MyCards.jsx";
import  SearchLead  from "./SearchLead.jsx";
import  SearchStatus  from "./SearchStatus.jsx";
import AddLead from "./AddLead.jsx";
import LeadTable from "./LeadTable.jsx";

const MainLeadManagement = () => {
  
    return (
       <div className='text-6xl text-center font-bold'>
      LEAD MANAGEMENT
    </div>
    );
    return (
        <div className="max-h-[85vh] overflow-y-auto bg-[#f8f9fa] p-8">
            <div className="flex gap-4">
                {cardData.map((card, ind) => {
                    return (
                        <MyCard
                            title={card.title}
                            value={card.value}
                            icon={card.icon}
                            description={card.description}
                        />
                    );
                })}
            </div>

            <div className="my-4 flex w-full justify-between">
                <div className="flex gap-3">
                    <SearchLead />
                    <SearchStatus />
                </div>
                <AddLead />
            </div>

            <LeadTable />
        </div>
    );
};

export default MainLeadManagement;
