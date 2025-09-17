import { Mail, Phone, Globe, Users, Eye, Edit, Trash2 } from "lucide-react";

const CompanyCard = ({
  name,
  industry,
  status,
  contact,
  phone,
  website,
  employees,
  deals,
  value,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-80 hover:shadow-lg">
      {/* Top Row: Avatar Initial + Name, Status */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold"
            aria-hidden="true"
          >
            {name[0]}
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-400">{industry}</p>
          </div>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Active"
              ? "bg-[#00c951] text-white"
              : "bg-[#f0b100] text-gray-900"
          }`}
          aria-label={`Status: ${status}`}
        >
          {status}
        </span>
      </div>

      {/* Contact Info */}
      <div className="my-4 text-gray-600 text-sm space-y-1">
        <div className="flex items-center gap-1">
          <Mail size={15} aria-hidden="true" />{" "}
          <span aria-label={`Email: ${contact}`}>{contact}</span>
        </div>
        <div className="flex items-center gap-1">
          <Phone size={15} aria-hidden="true" />{" "}
          <span aria-label={`Phone: ${phone}`}>{phone}</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe size={15} aria-hidden="true" />{" "}
          <span aria-label={`Website: ${website}`}>{website}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={15} aria-hidden="true" />{" "}
          <span aria-label={`${employees} employees`}>
            {employees} employees
          </span>
        </div>
      </div>

      <hr className="my-3" />

      {/* Deals and Value */}
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-lg text-gray-700">{deals}</p>
          <p className="text-xs text-gray-400">Deals</p>
        </div>
        <div className="text-center">
          <p
            className="font-semibold text-lg text-green-600"
            aria-label={`Value ${value}`}
          >
            {value}
          </p>
          <p className="text-xs text-gray-400">Value</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-3">
        <button
          className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="View company profile"
        >
          <Eye size={15} />
        </button>
        <button
          className="text-gray-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="Edit company profile"
        >
          <Edit size={15} />
        </button>
        <button
          className="text-red-500 hover:bg-gray-200 p-2 rounded-sm"
          aria-label="Delete company profile"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default CompanyCard;
