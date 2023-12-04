import React from "react";
import { useState, useEffect } from "react";

const Nav = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode
      ? "hsl(207, 26%, 17%)"
      : "hsl(0, 0%, 98%";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Dark mode is now:", isDarkMode);
  };

  return (
    <nav
      className={`shadow-xl fixed top-0 left-0 right-0 h-32 lg:h-20 flex items-center justify-between z-50 ${
        isDarkMode ? "bg-custom-color text-white" : "bg-white"
      }`}
    >
      <h1 className="text-xl lg:text-2xl font-bold lg:ml-20 ml-8">
        Where in the world?
      </h1>
      <button
        className="lg:mr-20 text-base lg:text-xl font-medium mr-8"
        onClick={handleDarkModeToggle}
      >
        Dark Mode
      </button>
    </nav>
  );
};

export default Nav;
