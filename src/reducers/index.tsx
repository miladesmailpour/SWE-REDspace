import React from "react";
import { ReducerPeople } from "./ReducerPeople";
import { combineReducers } from "redux";
import { ReducerPlanets } from "./ReducerPlanets";
import { ReducerMovies } from "./ReducerMovies";

const AllReducers = combineReducers({
  ReducerPeople,
  ReducerPlanets,
  ReducerMovies,
});

export default AllReducers;
