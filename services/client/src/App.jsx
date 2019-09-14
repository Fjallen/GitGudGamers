import React from 'react';
import './App.css';
import Ranks from './Rank.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      rankins=[]
    }
  };
  getRankings(){
    //Make Call Here Later
    axios.get()
    return 0;
  }
  render(){
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
          <Ranks/>
      </div>
    )}
}

export default App;
