import React from "react";
import { useSelector } from "react-redux";
import BtnHOC from "../hocs/BtnHOC";

const BtnPlanets = (navigation: any) => {
  const data = useSelector((state: any) => state.ReducerPlanets);
  const handlerClick = () => {
    navigation.navigate("Planets");
  };
  const btnInPause = () => {
    console.log("Loading the list of Planets from SWAPI");
  };
  if (data.length > 0)
    return <BtnHOC title="Planets" onClick={handlerClick} status={true} />;
  else
    return (
      <BtnHOC
        title="Planets list loading..."
        onClick={btnInPause}
        status={false}
      />
    );
};
export default BtnPlanets;
