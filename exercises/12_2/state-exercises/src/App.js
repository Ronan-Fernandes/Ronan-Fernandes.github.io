import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pokedex pokemons={pokemons}/>
      </header>
    </div>
  );
}

export default App;
