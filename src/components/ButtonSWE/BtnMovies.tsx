import React from "react";
import BtnHOC from "../hocs/BtnHOC";

const BtnMovies = (navigation: any) => {
  const handlerClick = () => {
    navigation.navigate("Movies");
  };
  return <BtnHOC title="Movies" onClick={handlerClick} />;
};
export default BtnMovies;
