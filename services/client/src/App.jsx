import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ranks from './Rank.jsx';

function App() {
  return (
    <div className="App">
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
  <form action="">
    In Game Name <br></br>
    <input type='text' name="ign"></input>
  </form>
</p>
<Ranks
  property="d"
/>
    </div>
      );
    }
    
    export default App;
