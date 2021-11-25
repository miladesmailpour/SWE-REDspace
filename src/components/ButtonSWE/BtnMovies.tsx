import React from "react";
import { useSelector } from "react-redux";
import BtnHOC from "../hocs/BtnHOC";

const BtnMovies = (navigation: any) => {
  const data = useSelector((state: any) => state.ReducerMovies);

  const handlerClick = () => {
    navigation.navigate("Movies");
  };
  const btnInPause = () => {
    console.log("Loading the list of Movies from SWAPI");
  };
  if (data.length > 0)
    return <BtnHOC title="Movies" onClick={handlerClick} status={true} />;
  else
    return (
      <BtnHOC
        title="Movies list loading..."
        onClick={btnInPause}
        status={false}
      />
    );
};
export default BtnMovies;
