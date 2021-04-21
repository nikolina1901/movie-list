import React from "react";
import { Link } from "react-router-dom";

function Movie({ title, year, director, id }) {
  return (
    <div>
      <Link to={`/movies/${id}`}>View details</Link>
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{director}</p>
    </div>
  );
}
export default Movie;
