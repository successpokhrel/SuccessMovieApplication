import { BaseUrl } from "../secrets/urls";
import { api_key } from "../secrets/keys"
import { LatestMovieType } from "../types/MovieTypes";

export const getLatestMovie = async (): Promise<LatestMovieType> => {
    const result = await fetch(`${BaseUrl}/latest?api_key=${api_key}`).then(
      (res) => res.json()
    );

    return result;
  };
  
export const getAllMovies = async (): Promise<LatestMovieType[]> => {
    const result = await fetch(
      `${BaseUrl}/now_playing?language=en-US&page=1&api_key=${api_key}`
    ).then((res) => res.json());

    return result.results;
  };