import React from "react";
import logo from "../assets/company-logoo.png"; 

const Header = () => {
  return (
    <header className="bg-[#1e293b] text-white py-4 px-6 shadow-md flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Company Directory Logo"
          className="w-16 h-16 object-cover rounded-md bg-white"
        />
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text italic">
            Company Directory
          </h1>
      </div>

      <nav>
        <ul className="flex gap-6 text-sm text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
