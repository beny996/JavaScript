import React from "react";

const MovieListWithoutContext = () => {
  return (
    <div>
      {moviescopy.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
};

export default MovieListWithoutContext;
