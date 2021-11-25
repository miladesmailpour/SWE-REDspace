import React from "react";
import BtnHOC from "../hocs/BtnHOC";

const BtnPlanets = (navigation: any) => {
  const handlerClick = () => {
    navigation.navigate("Planets");
  };
  return <BtnHOC title="Planets" onClick={handlerClick} />;
};
export default BtnPlanets;
