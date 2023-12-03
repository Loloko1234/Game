import React from "react";
import ButtonBack from "../../Components/buttonBack";
import SubFlag from "../../Components/subFlag";

export const Sub = ({ clickedLink, isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-custom-color2 text-white" : "bg-custom-color3"
      }`}
    >
      <ButtonBack isDarkMode={isDarkMode} />
      <SubFlag clickedLink={clickedLink} isDarkMode={isDarkMode} />
    </div>
  );
};
