// src/components/Loading.jsx
import React from "react";

const Loading = ({ error }) => {
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-red-400 py-20">
        <h2 className="text-xl font-semibold mb-2">Something went wrong!</h2>
        <p className="text-gray-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-20 text-gray-400">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 mr-3"></div>
      <span>Loading companies...</span>
    </div>
  );
};

export default Loading;
