import React from "react";
import BtnHOC from "../hocs/BtnHOC";

const BtnPeople = (navigation: any) => {
  const handlerClick = () => {
    navigation.navigate("People");
  };
  return <BtnHOC title="People" onClick={handlerClick} />;
};
export default BtnPeople;
