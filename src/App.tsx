import { useEffect, useState } from "react";
import "./App.css";
import CustomHeader from "./components/CustomComponents/CustomHeader";
import {LatestMovieType} from "../types/MovieTypes";
import CustomCard from "./components/CustomComponents/CustomCard";
import { imageUrl } from "../secrets/urls";
import {getLatestMovie, getAllMovies} from "../services/MovieServices"

function App() {

  const [latestMovie, setLatestMovie] = useState<LatestMovieType>();
  const [movies, setMovies] = useState<LatestMovieType[]>([]);

  useEffect(() => {
    const HandleMoviesApiCall = async ()=>{
      try{
        const latest = await getLatestMovie();
        const allMovies = await getAllMovies();
        setLatestMovie(latest);
        setMovies(allMovies);
      } catch(err) {
        console.log("Failed to fetch movies")
      }
    }

    HandleMoviesApiCall();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <CustomHeader
        title={latestMovie ? latestMovie.title : "Title is Loading"}
        description={
          latestMovie
            ? latestMovie.overview
            : "Overview of the movie is loading"
        }
        backgroundImage={
          latestMovie
            ? latestMovie.backdrop_path
              ? `${imageUrl}${latestMovie.backdrop_path}`
              : ""
            : ""
        }
      />
      <h1>Latest Movies</h1>
      <div className="grid grid-cols-6 gap-4">
        
        {movies.map((movie: LatestMovieType) => (
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
}

export default App;
