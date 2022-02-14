import logo from './logo.svg';
import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import SongList from './components/SongList';
import ThemeToggle from './components/ThemeToggle';
import SongContextProvider from './context/SongContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ThemeToggle />
        <SongContextProvider>
        <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
