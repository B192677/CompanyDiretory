import React from "react";
import { MapPin, Building2 } from "lucide-react";

const statusColors = {
  Active: "bg-green-700",
  Prospect: "bg-amber-700",
};

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-[#1e293b] rounded-lg p-4 flex items-center justify-between hover:bg-[#273549] transition">
       <div className="flex items-center gap-4">
        {/* <img
          src={company.logo}
          alt={company.name}
          className="w-12 h-12 rounded-md object-cover bg-gray-700"
        /> */}
        <div> 
          <h2 className="text-lg font-semibold">{company.name}</h2>
          <div className="text-sm text-gray-400 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Building2 size={14} /> {company.industry}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {company.location}
            </span>
          </div>
        </div>
      </div>

      <span
        className={`px-3 py-1 rounded-md text-sm font-medium ${statusColors[company.status]} text-white`}
      >
        {company.status}
      </span>
    </div>
  );
};

export default CompanyCard;
