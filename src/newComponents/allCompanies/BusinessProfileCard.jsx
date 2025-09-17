import { Eye, Edit, Trash2 } from "lucide-react"; // npm i lucide-react

const BusinessProfileCard = ({
  name,
  industry,
  contact,
  deals,
  value,
  status,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border rounded-lg shadow-sm hover:shadow-md transition bg-white">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Logo / Initial */}
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium text-gray-700">
          {name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{industry}</p>
          <p className="text-sm text-gray-400">{contact}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Middle stats */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold">{deals}</p>
          <p className="text-xs text-gray-500">Deals</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-green-600">${value.toLocaleString()}</p>
          <p className="text-xs text-gray-500">Value</p>
        </div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === "Active"
              ? "bg-[#00c951] text-white"
              : "bg-[#f0b100] text-white"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 text-gray-500">
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

    </div>
  );
};

export default BusinessProfileCard;
