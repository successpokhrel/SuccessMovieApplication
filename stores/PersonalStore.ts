import { create } from "zustand";
import { SingleMovieType } from '../types/MovieTypes';
import { devtools, persist } from "zustand/middleware";

interface PersonalStore {
    favorites: SingleMovieType[];
    watchlist: SingleMovieType[];
    addToFavorites: (favoriteMovie: SingleMovieType) => void;
    addToWatchlist: (favoriteMovie: SingleMovieType) => void;
    removeFromFavorites: (movieId: number) => void;
    removeFromWatchlist: (movieId: number) => void;
}

const usePersonalStore = create<PersonalStore>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        watchlist: [],
        addToFavorites: (favoriteMovie: SingleMovieType) => {
          set((store) => {
            const isAlreadyFavorite = store.favorites.some(
              (movie) => movie.id === favoriteMovie.id
            );
            if (!isAlreadyFavorite) {
              return {
                favorites: [...store.favorites, favoriteMovie],
              };
            }
            return store;
          });
        },
        addToWatchlist: (watchListMovie: SingleMovieType) => {
          set((store) => {
            const isAlreadyAdded = store.watchlist.some(
              (movie) => movie.id === watchListMovie.id
            );
            if (!isAlreadyAdded) {
              return {
                watchlist: [...store.watchlist, watchListMovie],
              };
            }
            return store;
          });
        },
        removeFromFavorites: (movieId: number) => {
          set((store) => ({
            favorites: store.favorites.filter((movie) => movie.id !== movieId),
          }));
        },
        removeFromWatchlist: (movieId: number) => {
          set((store) => ({
            watchlist: store.watchlist.filter((movie) => movie.id !== movieId),
          }));
        },
      }),
      {
        name: 'SuccessStore',
      }
    )
  )
);

export default usePersonalStore;
