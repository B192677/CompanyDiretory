import React from "react";
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react";


const CompanyTable = ({ companies }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 text-left">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Location</th>
          <th className="border p-2">Industry</th>
          <th className="border p-2">Employees</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id} className="hover:bg-gray-100">
            <td className="border p-2">{company.name}</td>
            <td className="border p-2">{company.location}</td>
            <td className="border p-2">{company.industry}</td>
            <td className="border p-2">{company.employees}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyTable;
