import React from "react";
import { useDispatch } from "react-redux";
import { getPlanets } from "../../actions";
import BtnHOC from "../hocs/BtnHOC";

const BtnPlanets = (navigation: any) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(getPlanets());
    navigation.navigate("Planets");
  };
  return <BtnHOC title="Planets" onClick={handlerClick} />;
};
export default BtnPlanets;
