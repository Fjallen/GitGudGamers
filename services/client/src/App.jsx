import React from 'react';
import './App.css';
import Ranks from './Rank.jsx';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const gameOptions = [
  {
    key: 'Team Fighting Tactics',
    text: 'Team Fighting Tactics',
    value: 'Team Fighting Tactics'
  },
  {
    key: 'League of Legends',
    text: 'League of Legends',
    value: 'League of Legends',
  },
]

class App extends React.Component {
  state = {rankings: []};
  /*constructor(){
    super();
    this.state ={
      rankings=[]
    }
  };*/
  getRankings(){
    //Make Call Here Later
    axios.get()
    return 0;
  }
  render(){
    return (
      <div className="App">
        <h1>Get Better</h1>
        <Dropdown
          placeholder='Select a game'
          selection
          options={gameOptions}
        />
      <Form className="Form">
        <Form.Field>
          <label>In Game Name</label>
          <input placeholder='IGN'/>
        </Form.Field>
        <Button type='submit' color={'green'} circular={true}>Submit</Button>
      </Form>
      <Ranks/>
      </div>
    )
  }
}

export default App;
