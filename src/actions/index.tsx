import axios from "axios";
import * as url from "../urlPath";

// export const getPeople = async (
//   dispatch: any,
//   page: number = 1
// ): Promise<[] | undefined> => {
//   const query = `${url.peopleUrl}/?page=${page}`;
//   const response = await axios.get(query);
//   const data = response.data;

//   if (data[0].next > page) {
//     return data.concat(await getPeople(page + 1));
//   } else {
//     return async (dispatch:any) => {
//       dispatch({
//       type: "GET_PEOPLE",
//       payload: response.data.results,
//     });
//     }
//   }
// };

export const getPeople = () => {
  return async (dispatch: any, getstate: any) => {
    const response = await axios.get(url.peopleUrl);

    dispatch({
      type: "GET_PEOPLE",
      payload: response.data.results,
    });
  };
};

export const getPlanets = () => {
  return async (dispatch: any, getstate: any) => {
    const response = await axios.get(url.planetsUrl);

    dispatch({
      type: "GET_PLANETS",
      payload: response.data.results,
    });
  };
};

export const getMovies = () => {
  return async (dispatch: any, getstate: any) => {
    const response = await axios.get(url.moviesUrl);

    dispatch({
      type: "GET_MOVIES",
      payload: response.data.results,
    });
  };
};
