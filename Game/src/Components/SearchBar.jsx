import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ handleSearchTermChange, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-custom-color2 text-white" : "bg-custom-color3"
      } search relative flex items-center text-2xl w-full`}
    >
      <div className="absolute left-14 lg:left-24 top-[12.75rem] flex pointer-events-none">
        <IoMdSearch className="w-10 h-10" />
      </div>
      <input
        className={`shadow-lg lg:w-2/4 xl:w-2/6 mr-8 lg:mr-20 lg:ml-20 ml-8 flex h-20 w-full lg:px-22 px-24 rounded-lg mt-[11.5rem] focus:outline-none ${
          isDarkMode ? " bg-custom-color text-white" : "bg-white"
        }`}
        type="text"
        placeholder="Search..."
        onChange={handleSearchTermChange}
      />
    </div>
  );
};
export default SearchBar;
