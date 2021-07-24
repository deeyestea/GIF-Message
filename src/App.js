import React from 'react';
import './App.css';
import Messages from './components/Messages';
import SearchGif from './components/SearchGif';

function App() {
  return (
    <div className="App">
      <Messages />
      {/* <GifMessage /> */}
      <SearchGif />
    </div>
  );
}

export default App;
