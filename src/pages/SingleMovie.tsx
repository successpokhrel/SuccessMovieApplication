import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { LuHeart, LuList } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { imageUrl } from "../../secrets/urls"
import useStore from "../../stores/MovieStore";
import usePersonalStore from "../../stores/PersonalStore"

const SingleMovie = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInList, setIsInList] = useState(false);

  const params = useParams<{ movieId: string }>();
  const {movie, cast, getSingleMovieDetails, getCastDetails} = useStore()
  const {favorites, watchlist, addToFavorites, addToWatchlist, removeFromFavorites, removeFromWatchlist} = usePersonalStore()

  useEffect(() => {
    if (movie !== null) {
      setIsFavorite(favorites.some((favMovie) => favMovie.id === movie.id));
      setIsInList(watchlist.some((listMovie) => listMovie.id === movie.id));
    }
  }, [movie, favorites, watchlist]);

  useEffect(() => {
    if(params.movieId)
      getSingleMovieDetails(params.movieId);
  }, [params.movieId, getSingleMovieDetails]);

  useEffect(() => {
    if(params.movieId)
      getCastDetails(params.movieId);
  }, [params.movieId, getCastDetails]);


  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row mb-8">
        <img
          src={`${imageUrl}${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>
          <p className="text-gray-600 text-lg mt-2">{movie.release_date}</p>
          <div className="flex space-x-2 mt-4">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-1 text-sm bg-gray-200 text-gray-700 rounded-full"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="flex items-center mt-4">
            <span className="text-xl font-semibold text-yellow-500">
              {movie.vote_average.toFixed(1)}
            </span>
            <span className="ml-2 text-sm text-gray-500">Rating</span>
          </div>
          <div className="mt-5 flex flex-row gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <Button variant="outline" onClick={
                    isFavorite? ()=>removeFromFavorites(movie.id) : ()=>addToFavorites(movie)
                  }>
                    <LuHeart fill={isFavorite ? "red": "none"} color={isFavorite ? "red": ""}/>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isFavorite?<p>Remove from favorites</p>:<p>Add to Favorites</p>}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={
                    isInList? ()=>removeFromWatchlist(movie.id) : ()=>addToWatchlist(movie)
                  }>
                    <LuList fill={isInList ? "green" : "none"} color={isInList ? "green" : ""} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isInList?<p>Remove from watchlist</p>:<p>Add to Watchlist</p>}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-600">{movie.overview}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cast</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cast.slice(0, 8).map((actor) => (
            <div key={actor.id} className="text-center">
              <img
                src={
                  actor.profile_path
                    ? `${imageUrl}${actor.profile_path}`
                    : "/default-avatar.png"
                }
                alt={actor.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <p className="mt-2 text-sm text-gray-700">{actor.name}</p>
              <p className="text-xs text-gray-500">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
