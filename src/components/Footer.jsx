import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e293b] text-white py-6 mt-16 border-t border-gray-700">
      <div className="max-w-[1400px] mx-auto text-center px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Company Directory. All rights reserved.
        </p>
        <p className="text-xs mt-2">
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;
