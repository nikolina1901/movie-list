import React from "react";
import Movie from "./Movie";
import moviesData from "./Data";
import axios from "axios";
function MovieList() {
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
  return (
    <div>
      {movies.map((movie) => {
        return <Movie {...movie} />;
      })}
    </div>
  );
}
export default MovieList;
