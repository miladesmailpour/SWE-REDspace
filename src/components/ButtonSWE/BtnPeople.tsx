import React from "react";
import { useDispatch } from "react-redux";
import { getPeople } from "../../actions";
import BtnHOC from "../hocs/BtnHOC";

const BtnPeople = (navigation: any) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(getPeople());
    navigation.navigate("People");
  };
  return <BtnHOC title="People" onClick={handlerClick} />;
};
export default BtnPeople;
