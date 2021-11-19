import React from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../actions";
import BtnHOC from "../hocs/BtnHOC";
import { Button, StyleSheet, View } from "react-native";

const BtnMovies = (navigation: any) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(getMovies());
    navigation.navigate("Movies");
  };
  return <BtnHOC title="Movies" onClick={handlerClick} />;
};
export default BtnMovies;
