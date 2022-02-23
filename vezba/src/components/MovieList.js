import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const MovieList = () => {
  //   const value = useContext(MovieContext);
  //   console.log(value.movies);
  //   console.log(value);

  const { movies } = useContext(MovieContext);
  return (
    <div>
      Movie List
      <br />
      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </div>
  );
};

export default MovieList;
