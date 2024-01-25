import React from 'react';
import './App.css';
import { PlayerToping } from './Components/PlayerToping/PlayerToping';
import { SongList } from './Components/SongList/SongList';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <>
    <Provider store={store}>
       <PlayerToping />
      <SongList />
    </Provider>
     
    </>
  );
}

export default App;
