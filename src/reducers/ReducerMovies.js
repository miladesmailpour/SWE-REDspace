import axios from "axios";
import * as url from "../urlPath";

export const ReducerMovies = (state = [], action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return [...state, { response: action.payload.response }];
    default:
      return [...state];
  }
};
