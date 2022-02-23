import logo from "./logo.svg";
import "./App.css";
import MovieProvider from "./context/MovieProvider";
import MovieList from "./components/MovieList";
import MovieListWithoutContext from "./components/MovieListWithoutContext";
import Prices from "./components/Prices";

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

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
        <Prices />
      </MovieProvider>
      <br />
      <br />
      <br />
      <MovieListWithoutContext moviescopy={state} />
    </div>
  );
}

export default App;
