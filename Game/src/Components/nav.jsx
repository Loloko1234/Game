import React from "react";
import handleDarkModeToggle from "./handleDarkMode";
const Nav = () => {
  return (
    <nav className="bg-white shadow-xl fixed top-0 left-0 right-0 h-[8rem] lg:h-20 flex items-center justify-between z-50">
      <h1 className="text-2xl font-bold lg:ml-20 ml-8">Where in the world?</h1>
      <button
        className="lg:mr-20 font-medium mr-8"
        onClick={handleDarkModeToggle}
      >
        Dark Mode
      </button>
    </nav>
  );
};

export default Nav;
