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
        <div
          className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium text-gray-700"
          aria-hidden="true"
        >
          {name.charAt(0)}
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">{industry}</p>
          <p className="text-sm text-gray-400">{contact}</p>
        </div>
      </div>

      {/* Middle stats + status */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold">{deals}</p>
          <p className="text-xs text-gray-500">Deals</p>
        </div>
        <div className="text-right">
          <p
            className="font-semibold text-green-600"
            aria-label={`Deal value ${value}`}
          >
            ${value.toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">Value</p>
        </div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === "Active"
              ? "bg-[#00c951] text-white"
              : "bg-[#f0b100] text-white"
          }`}
          aria-label={`Status: ${status}`}
        >
          {status}
        </span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 text-gray-500">
        <button
          className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="View business profile"
        >
          <Eye size={15} />
        </button>

        <button
          className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="Edit business profile"
        >
          <Edit size={15} />
        </button>

        <button
          className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="Delete business profile"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default BusinessProfileCard;
