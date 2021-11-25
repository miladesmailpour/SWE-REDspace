import axios from "axios";
import * as url from "../urlPath";

export const ReducerPeople = (state = [], action) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return [...state, { response: action.payload.response }];
    default:
      return [...state];
  }
};
