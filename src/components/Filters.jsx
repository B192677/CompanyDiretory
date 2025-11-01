import React, { useState, useMemo } from "react";
import { Search, Filter, ArrowUpDown, X } from "lucide-react";

const Filters = ({ companies, filters, setFilters, sort, setSort, resetAll }) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  
  const locations = useMemo(() => {
    const unique = Array.from(new Set(companies.map((c) => c.location)));
    return ["All", ...unique];
  }, [companies]);

  const industries = useMemo(() => {
    const unique = Array.from(new Set(companies.map((c) => c.industry)));
    return ["All", ...unique];
  }, [companies]);

  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
        <div className="relative flex-1 w-245">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by Company Name...."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="bg-[#0f172a] w-full pl-10 p-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400"
          />
        </div>

       
        <div className="flex gap-3 relative">
        
          <button
            onClick={() => setShowFilterMenu(!showFilterMenu)}
            className="flex items-center gap-2 bg-[#0f172a] px-3 py-2 rounded-md border border-gray-100 hover:border-blue-600 transition text-black"
          >
            <Filter size={16} /> Filters
          </button>

          {showFilterMenu && (
            <div className="absolute top-12 right-0 bg-[#0f172a] border border-gray-100 rounded-lg shadow-lg p-4 w-64 z-10">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-white">
                  Filter Options
                </h3>
                <button
                  onClick={() => setShowFilterMenu(false)}
                  className="text-gray-400 hover:text-black"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Location Filter */}
              <label className="text-xs text-gray-400">Location</label>
              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                className="w-full bg-[#1e293b] border border-gray-700 rounded-md p-2 mt-1 mb-3 text-sm focus:ring-2 focus:ring-blue-500"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>

             
              <label className="text-xs text-gray-400">Industry</label>
              <select
                value={filters.industry}
                onChange={(e) =>
                  setFilters({ ...filters, industry: e.target.value })
                }
                className="w-full bg-[#1e293b] border border-gray-100 rounded-md p-2 mt-1 text-sm focus:ring-2 focus:ring-blue-500"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>
          )}

         
          <button
            onClick={() =>
              setSort(sort === "Name A-Z" ? "Name Z-A" : "Name A-Z")
            }
            className="flex items-center gap-2 bg-[#0f172a] px-3 py-2 rounded-md hover:border-blue-600 transition text-black"
          >
            <ArrowUpDown size={16} /> Sort: {sort}
          </button>

          
          <button
            onClick={resetAll}
            className="flex items-center gap-2 bg-[#0f172a] px-3 py-2 rounded-md border border-gray-700 hover:border-blue-600 transition text-black"
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
