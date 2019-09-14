import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ranks from './Rank.jsx';

function App() {
  return (
    <div className="App" height="100%" >
      <head>
        <style>

        </style>
        <title>
          Get Good
        </title>
      </head>
      <h1>
        Get Good
        </h1>
      <p>
        Which Game? <br></br>
        <select name="game">
          <option value="tft">Team Fighting Tactics</option>
          <option value="lol">League of Legends</option>
        </select>
      </p>
      <p>
        <form onsubmit="">
          In Game Name <br></br>
          <input type='text' id="ign"></input> <br></br>
          <input type="submit" value="Submit"></input>
          
        </form>
      </p>
      <img scr="./Gamer.png" alt="Gamer" width="500" height="500" ></img>
      <Ranks
        property="d"
      />
    </div>
  );
}

export default App;
