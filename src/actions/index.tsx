import axios from "axios";
import * as url from "../urlPath";

export const getPeople = () => {
  return async (dispatch: any, getstate: any) => {
    const allPoeple = async (page: number = 1): Promise<[]> => {
      const query = `${url.peopleUrl}/?page=${page}&format=json`;
      const res = await axios.get(query);
      const data = res.data;

      if (data.next !== null) {
        return data.results.concat(await allPoeple(page + 1));
      } else {
        return data.results;
      }
    };
    const response = await allPoeple();

    dispatch({
      type: "GET_PEOPLE",
      payload: { response: response },
    });
  };
};

export const getPlanets = () => {
  return async (dispatch: any, getstate: any) => {
    const allPlanets = async (page: number = 1): Promise<[]> => {
      const query = `${url.planetsUrl}/?page=${page}&format=json`;
      const res = await axios.get(query);
      const data = res.data;

      if (data.next !== null) {
        return data.results.concat(await allPlanets(page + 1));
      } else {
        return data.results;
      }
    };
    const response = await allPlanets();

    dispatch({
      type: "GET_PLANETS",
      payload: { response: response },
    });
  };
};

export const getMovies = () => {
  return async (dispatch: any, getstate: any) => {
    const allMovies = async (page: number = 1): Promise<[]> => {
      const query = `${url.moviesUrl}/?page=${page}&format=json`;
      const res = await axios.get(query);
      const data = res.data;

      if (data.next !== null) {
        return data.results.concat(await allMovies(page + 1));
      } else {
        return data.results;
      }
    };
    const response = await allMovies();

    dispatch({
      type: "GET_MOVIES",
      payload: { response: response },
    });
  };
};
