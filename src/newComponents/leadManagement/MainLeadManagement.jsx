import { cardData } from "./data.jsx";
import MyCard from "../UserManagement/MyCards.jsx";
import SearchLead from "./SearchLead.jsx";
import SearchStatus from "./SearchStatus.jsx";
import AddLead from "./AddLead.jsx";
import LeadTable from "./LeadTable.jsx";

const MainLeadManagement = () => {
    return (
        <div className="p-8 max-h-[85vh] overflow-y-auto bg-[#f8f9fa]">
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

            <div className="flex w-full justify-between my-4">
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
