import usePersonalStore from "../../stores/PersonalStore";
import { SingleMovieType } from "../../types/MovieTypes";
import CustomCard from "@/components/CustomComponents/CustomCard";
import { imageUrl } from "../../secrets/urls";
import {  Navigate } from "react-router";

const Favorites = () => {
  const { isLogged, favorites } = usePersonalStore();

  if(!isLogged){
    return(
        <Navigate replace to="/login"/>
    )
  }

  if (!favorites || favorites.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-900">
        <h1 className="text-3xl font-semibold">You have no favorite movies yet.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Favorite Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie: SingleMovieType) => (
          <CustomCard
                      image={
                        movie
                          ? movie.backdrop_path
                            ? `${imageUrl}${movie.backdrop_path}`
                            : ""
                          : ""
                      }
                      title={movie ? movie.title : "Title is Loading"}
                      releaseDate={
                        movie ? movie.release_date : "Overview of the movie is loading"
                      }
                      movieId={movie.id.toString()}
            />  
        ))}
      </div>
    </div>
  );
};

export default Favorites;
