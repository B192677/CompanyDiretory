import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-blue-600 text-black  hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 rounded-md border border-gray-600 ${
            currentPage === num
              ? "bg-blue-700 text-black"
              : "bg-[#1e293b] text-gray-900 hover:bg- hover:text-gray-400"
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-blue-600 text-black hover:bg-blue-700 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
