import React from "react";
import Movie from "./Movie";
import moviesData from "./Data";
import axios from "axios";
function MovieList() {
  const [
    areOnlyRecentMoviesDisplayed,
    setAreOnlyRecentMoviesDisplayed,
  ] = React.useState(false);
  function recentMoviesHandler() {
    setAreOnlyRecentMoviesDisplayed(!areOnlyRecentMoviesDisplayed);
  }
  const [movies, setMovies] = React.useState(moviesData);
  React.useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then(function (response) {
        // handle success
        setMovies(response.data.movies);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const filteredMovies = movies
    .filter((movie) => {
      return !areOnlyRecentMoviesDisplayed || movie.year > 2000;
    })
    .map((movie) => {
      return <Movie {...movie} />;
    });
  return (
    <div>
      <button onClick={recentMoviesHandler}>Click Me</button>
      {filteredMovies}
    </div>
  );
}
export default MovieList;
