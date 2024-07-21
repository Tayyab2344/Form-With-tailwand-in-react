import React from "react";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 flex items-center justify-between py-4 px-10 bg-white shadow-md">
      <div className="flex-shrink-0">
        <p className="text-2xl font-bold">Logo</p>
      </div>

      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Contact
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Products
        </a>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 sm:px2">
          Login
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
