import { useEffect, useState } from "react";
import "./App.css";
import CustomHeader from "./components/CustomComponents/CustomHeader";
import  {api_key}  from "../secrets/keys";
import {LatestMovieType} from "../types/MovieTypes";
import CustomCard from "./components/CustomComponents/CustomCard";
import { BaseUrl, imageUrl } from "../secrets/urls";

function App() {

  const [latestMovie, setLatestMovie] = useState<LatestMovieType>();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getLatestMovie();
    getAllMovies();
  }, []);

  const getLatestMovie = async () => {
    const result = await fetch(`${BaseUrl}/latest?api_key=${api_key}`).then(
      (res) => res.json()
    );
    setLatestMovie(result);
    console.log("latest",result);
  };
  
  const getAllMovies = async () => {
    const result = await fetch(
      `${BaseUrl}/now_playing?language=en-US&page=1&api_key=${api_key}`
    ).then((res) => res.json());
    setMovies(result.results);
    console.log("List of movies: ", movies);
  };
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
              ? `${imageUrl}${latestMovie.backdrop_path}?api_key=${api_key}`
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
                  ? `${imageUrl}${movie.backdrop_path}?api_key=${api_key}`
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
