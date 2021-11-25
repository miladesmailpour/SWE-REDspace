import axios from "axios";
import * as url from "../urlPath";

export const ReducerPlanets = (state = [], action) => {
  switch (action.type) {
    case "GET_PLANETS":
      return [...state, { response: action.payload.response }];
    default:
      return [...state];
  }
};
