import React from "react";
import not_found from "../../images/not_found.jpg";

const Movie = ({ movie }) => {
  const NO_IMAGE_FOUND = not_found;

  const poster = movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster;
  return (
    <div>
      <h2>{movie.Title}</h2>
      <img width="200" src={poster} alt="" />
    </div>
  );
};

export default Movie;
