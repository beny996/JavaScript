import React, { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const Prices = () => {
  const { movies } = useContext(MovieContext);

  return <div>Prices:</div>;
};

export default Prices;
