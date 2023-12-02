import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
export const buttonBack = () => {
  return (
    <button className="mt-[10.5rem] lg:mr-20 lg:ml-20 mr-8 ml-8 w-[9rem] lg:w-[10rem] shadow-xl flex justify-center items-center h-10 bg-white rounded-md">
      <IoIosArrowRoundBack className="text-3xl" />
      <span className="ml-1 mr-3">Back</span>
    </button>
  );
};
export default buttonBack;
