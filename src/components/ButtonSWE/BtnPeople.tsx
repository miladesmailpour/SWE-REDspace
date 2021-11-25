import React from "react";
import { useSelector } from "react-redux";
import BtnHOC from "../hocs/BtnHOC";

const BtnPeople = (navigation: any) => {
  const data = useSelector((state: any) => state.ReducerPeople);
  const handlerClick = () => {
    navigation.navigate("People");
  };
  const btnInPause = () => {
    console.log("Loading the list of People from SWAPI");
  };
  if (data.length > 0)
    return <BtnHOC title="People" onClick={handlerClick} status={true} />;
  else
    return (
      <BtnHOC
        title="People list loading..."
        onClick={btnInPause}
        status={false}
      />
    );
};
export default BtnPeople;
