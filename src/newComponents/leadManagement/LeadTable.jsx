import { leadData } from "./leads";

const LeadTable = () => {
  const getStatusBadge = (status) => {
    const colors = {
      Hot: "bg-[#fb2c36]",
      Warm: "bg-[#ff6900]",
      Cold: "bg-[#2b7fff]",
    };
    return (
      <span className={`px-2 py-1 rounded-md text-white text-xs font-medium ${colors[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="border border-gray-200 rounded-md bg-[#ffffff] whitespace-nowrap">
      <table className="w-full rounded-md overflow-hidden shadow-md border-gray-200">
        <thead className="border-b border-gray-200">
          <tr className="text-left">
            <th className="p-3">Lead</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Company</th>
            <th className="p-3">Status</th>
            <th className="p-3">Value</th>
            <th className="p-3">Last Contact</th>
            <th className="p-3">Source</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leadData.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-100 cursor-pointer">
              
              {/* lead */}
              <td className="p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                  {lead.name[0]}
                </div>
                <span className="font-medium">{lead.name}</span>
              </td>
           
              {/* Contact */}
              <td className="p-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  {lead.email}
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                  {lead.phone}
                </div>
              </td>

              <td className="p-3">{lead.company}</td>
              <td className="p-3">{getStatusBadge(lead.leadStatus)}</td>
              <td className="p-3">{lead.value}</td>
              <td className="p-3">{lead.lastContact}</td>
              <td className="p-3">{lead.source}</td>


                {/* Actions */}
              <td className="p-3 flex gap-2">
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
                <button className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                </button>
                <button className="text-red-500 hover:bg-gray-200 p-2 rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
