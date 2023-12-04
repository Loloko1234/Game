import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
export const buttonBack = ({ isDarkMode }) => {
  return (
    <button
      className={`lg:mt-[10.5rem] mt-[13rem] lg:mr-20 lg:ml-20 mr-8 ml-20 w-[14.5rem] lg:h-14 lg:w-[10rem] shadow-xl flex justify-center items-center h-20 lg:text-xl text-3xl rounded-md ${
        isDarkMode ? "bg-custom-color text-white" : "bg-white"
      }`}
      onClick={() => window.history.back()}
    >
      <IoIosArrowRoundBack className="lg:text-3xl text-5xl" />
      <span className="ml-1 mr-3">Back</span>
    </button>
  );
};
export default buttonBack;
