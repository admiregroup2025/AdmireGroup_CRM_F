import { cardData, companiesData } from "./data.js";
import MyCard from "../UserManagement/MyCards.jsx";
import  SearchCompanies  from "./SearchCompanies.jsx";
import  SearchCompanyByStatus  from "./SearchCompanyByStatus.jsx";
import AddCompany from "./AddCompany.jsx";
import CompanyCard from "./CompanyCard.jsx";
import { useState } from "react";
import BusinessProfileCard from "./BusinessProfileCard.jsx";
// import LeadTable from "./LeadTable.jsx";

const MainAllCompanies = () => {

    const [ view, setView ] = useState("Grid");
  
    return (
        <div className="max-h-[85vh] overflow-y-auto bg-[#f8f9fa] p-8">
          
            <div className="flex flex-col sm:flex-row gap-4">
                {cardData.map((card, ind) => {
                    return (
                        <MyCard
                        key={ind}
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
                    <SearchCompanies />
                    <SearchCompanyByStatus />
                </div>

                 <div className="flex gap-1">
      <button
        onClick={() => setView("Grid")}
        className={`w-fit px-3 py-2 rounded-md ${
          view === "Grid" ? "bg-black text-white" : "border border-gray-200"
        }`}
      >
        Grid
      </button>

      <button
        onClick={() => setView("List")}
        className={`w-fit px-3 py-2 rounded-md ${
          view === "List" ? "bg-black text-white" : "border border-gray-200"
        }`}
      >
        List
      </button>

      <AddCompany />
    </div>
                
            </div>

{/* all companies card */}
<div
  className={`border border-gray-200 rounded-md bg-[#ffffff] p-4 ${
  view === "Grid"
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    : "flex flex-col gap-4"
}`}

>
  {companiesData.map((company, index) =>
    view === "Grid" ? (
      <CompanyCard key={index} {...company} />
    ) : (
      <BusinessProfileCard key={index} {...company} />
    )
  )}
</div>


        </div>
    );
};

export default MainAllCompanies;
