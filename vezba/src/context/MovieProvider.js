import React, { createContext, useState } from "react";

//Na ovaj nacin smo napravili context
export const MovieContext = createContext();

const initialState = [
  {
    name: "Harry",
    price: "700",
    id: 0,
  },
  {
    name: "LOTR",
    price: "900",
    id: 1,
  },
  {
    name: "Batman",
    price: "500",
    id: 2,
  },
];

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialState);
  return (
    //Ovo (<MovieContext.Provider>) smo dobili iz instance MovieContext  na cetvrtoj liniji kada smo kreirali Context
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
