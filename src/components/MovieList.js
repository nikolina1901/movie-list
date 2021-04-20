import React from "react";
import Movie from "./Movie";
import moviesData from "./Data";
function MovieList() {
  const [movies, setMovies] = React.useState(moviesData);
  return (
    <div>
      {movies.map((movie) => {
        return <Movie {...movie} />;
      })}
    </div>
  );
}
export default MovieList;
