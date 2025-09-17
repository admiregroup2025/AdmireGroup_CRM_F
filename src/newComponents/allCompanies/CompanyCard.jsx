import React from "react";

const CompanyCard = ({
  name,
  industry,
  status,
  contact,
  phone,
  website,
  employees,
  deals,
  value
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-80 hover:shadow-lg">
      {/* Top Row: Avatar Initial + Name, Status */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                  {name[0]}
                </div>
          


          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-400">{industry}</div>
          </div>


        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold
          ${status === "Active" ? "bg-[#00c951] text-white" : "bg-[#f0b100] text-gray-900"}`}>
          {status}
        </span>
      </div>
      {/* Contact Info */}
      <div className="my-4 text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>          
          {contact}</div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
          {phone}</div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> {website}</div>
        <div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg> {employees} employees</div>
      </div>
      <hr className="my-3" />
      {/* Deals and Value */}
      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold text-lg text-gray-700">{deals}</div>
          <div className="text-xs text-gray-400">Deals</div>
        </div>
        <div className="text-center">
          <div className="font-semibold text-lg text-green-600">{value}</div>
          <div className="text-xs text-gray-400">Value</div>
        </div>
      </div>

      {/* Actions */}
        <div className="flex justify-end">
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                </button>
                <button className="text-red-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
        </div>
    </div>
  );
};

export default CompanyCard;