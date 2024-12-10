import { BaseUrl } from "../secrets/urls";
import { api_key } from "../secrets/keys"
import { LatestMovieType, SingleMovieType } from "../types/MovieTypes";

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

  export const getSingleMovieDetails = async (movieId: string): Promise<SingleMovieType> => {
    const result = await fetch(`${BaseUrl}/${movieId}?api_key=${api_key}`).then((res) => res.json());

    return result;
  }

  export const getCastDetails = async (movieId: string): Promise<any[]> =>{
    const result = await fetch(`${BaseUrl}/${movieId}/credits?api_key=${api_key}`).then((res) => res.json());
    return result.cast;
  }

