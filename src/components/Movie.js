import React from "react";

function Movie({ title, year, director }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{year}</p>
      <p>{director}</p>
    </div>
  );
}
export default Movie;
