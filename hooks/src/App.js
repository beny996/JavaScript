import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Counter1 from './components/Counter1';
import { useState } from 'react';
import Select from './components/Select';
import SongList from './components/SongList';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Counter /> */}
        {/* {show ? <Counter1 /> : null}
        <button onClick={() => setShow(!show)}>Toggle show</button> */}
        {/* <Select /> */}
        <SongList />
    </div>
  );
}

export default App;
