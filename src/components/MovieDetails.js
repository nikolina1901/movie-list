import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import moviesData from "./Data";
import Movie from "./Movie";
import MovieList from "./MovieList";

function MovieDetails(props) {
  const id = props.match.params.id;
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
  const filterMoviesId = movies
    .filter((movie) => {
      return movie.id == id;
    })
    .map((movie) => {
      return <Movie key={movie.id} {...movie} />;
    });
  return (
    <div>
      <h2>{filterMoviesId}</h2>

      <Link to="/movielist">Go back to the list</Link>
    </div>
  );
}
export default MovieDetails;
