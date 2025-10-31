import React, { useState, useEffect } from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import companiesData from "../data/companies.json";

const Home = () => {
  const [filters, setFilters] = useState({
    search: "",
    status: "All",
    location: "All",
    industry: "All",
  });

  const [sort, setSort] = useState("Name A-Z");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const companiesPerPage = 6;

  
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCompanies(companiesData);
      } catch (err) {
        setError("Failed to load company data.");
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = companies
    .filter((c) => {
      const matchesSearch = c.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesStatus =
        filters.status === "All" ? true : c.status === filters.status;
      const matchesLocation =
        !filters.location || filters.location === "All"
          ? true
          : c.location === filters.location;
      const matchesIndustry =
        !filters.industry || filters.industry === "All"
          ? true
          : c.industry === filters.industry;
      return (
        matchesSearch && matchesStatus && matchesLocation && matchesIndustry
      );
    })
    .sort((a, b) => {
      if (sort === "Name A-Z") return a.name.localeCompare(b.name);
      if (sort === "Name Z-A") return b.name.localeCompare(a.name);
      return 0;
    });

  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);
  const startIndex = (currentPage - 1) * companiesPerPage;
  const currentCompanies = filteredCompanies.slice(
    startIndex,
    startIndex + companiesPerPage
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const resetAll = () => {
    setFilters({
      search: "",
      status: "All",
      location: "All",
      industry: "All",
    });
    setSort("Name A-Z");
    setCurrentPage(1);
  };

  if (loading || error) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white p-6">
        <Loading error={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Company Directory</h1>

      <Filters
        companies={companies}
        filters={filters}
        setFilters={handleFilterChange}
        sort={sort}
        setSort={setSort}
        resetAll={resetAll}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentCompanies.length > 0 ? (
          currentCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className="bg-[#1e293b] p-5 rounded-lg shadow-lg border border-gray-700 hover:border-blue-600 hover:cursor-pointer transition"
            >
              <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
              <p className="text-gray-400 text-sm mb-1">
                <strong>Industry:</strong> {company.industry}
              </p>
              <p className="text-gray-400 text-sm mb-1">
                <strong>Location:</strong> {company.location}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center mt-8">
            No companies found.
          </p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          if (page >= 1 && page <= totalPages) setCurrentPage(page);
        }}
      />

     
      {selectedCompany && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg w-96 relative border border-gray-700">
            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-2">
              {selectedCompany.name}
            </h2>
            <p className="text-gray-400 mb-2">
              <strong>Industry:</strong> {selectedCompany.industry}
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Location:</strong> {selectedCompany.location}
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Founded:</strong> {selectedCompany.founded}
            </p>
            <p className="text-gray-400 mb-2">
              <strong>Employees:</strong> {selectedCompany.employees}
            </p>
            <p className="text-gray-300 mb-3 text-sm">
              {selectedCompany.description}
            </p>
            <a
              href={selectedCompany.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              Visit Website →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
