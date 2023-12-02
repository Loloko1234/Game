import React from "react";
import ButtonBack from "../../Components/buttonBack";
import SubFlag from "../../Components/subFlag";

export const Sub = ({ clickedLink }) => {
  return (
    <>
      <ButtonBack />
      <SubFlag clickedLink={clickedLink} />
    </>
  );
};
