import { create } from "zustand";
import {
  getAllMovies,
  getCastDetails,
  getLatestMovie,
  getSingleMovieDetails,
} from "../services/MovieServices";
import { LatestMovieType, SingleMovieType } from "../types/MovieTypes";

type MovieStore = {
  latestMovie: LatestMovieType | null;
  movies: LatestMovieType[];
  movie: SingleMovieType | null;
  cast: any[];
  getLatestMovie: () => Promise<void>;
  getAllMovies: () => Promise<void>;
  getSingleMovieDetails: (movieId: string) => Promise<void>;
  getCastDetails: (movieId: string) => Promise<void>;
};

const useStore = create<MovieStore>((set) => ({
  latestMovie: null,
  movies: [],
  movie: null,
  cast: [],
  getLatestMovie: async () => {
    console.log("getLatestMovie>>>");
    try {
      const latestMovie = await getLatestMovie();
      set({ latestMovie });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  getAllMovies: async () => {
    try {
      const movies = await getAllMovies();
      set({ movies });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  getSingleMovieDetails: async (movieId: string) => {
    try {
      const movie = await getSingleMovieDetails(movieId);
      set({ movie });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
  getCastDetails: async (movieId: string) => {
    try {
      const cast = await getCastDetails(movieId);
      set({ cast });
    } catch (err) {
      console.log("Error: ", err);
    }
  },
}));

export default useStore;
