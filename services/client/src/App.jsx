import React from 'react';
import './App.css';
import Ranks from './Rank.jsx';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';
import LineDemo from './Line.js';

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
  constructor(){
    super();
    this.state ={
      data: [],
      name: "",
      isSubmitted:false
    }
    this.handleName = this.handleName.bind(this);
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    axios.get(`http://localhost:5000/${this.state.name}`)
    .then((response)=>{
      this.setState({data: response.data});
      console.log(response.data);
    });
  };

  handleName(event){
    this.setState({name: event.target.value});
  };

  render(){
    if (this.state.isSubmitted){
      //The chart and shit here
    }
    return (
      /*<div className="App">
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
      </div>*/
      
      <div className="App">
          <div className="App-header">
          <p><strong>Git Gud Noob</strong></p>
        </div>
<div className="App-body">
        <h2>Type of Game</h2>
        <Dropdown
          placeholder='Select a game'
          selection
          options={gameOptions}
        />
        <Form className="Form">
          <Form.Field>
            <label>In Game Name</label>
            <input onChange={this.handleName} value={this.state.name} placeholder="IGN"/>
          </Form.Field>
          <Button type='submit' color={'green'} circular={true} onClick={this.onFormSubmit}>Submit</Button>
        </Form>
        {this.state.isSubmitted &&}
      </div>
      </div>
    )
  }
}
export default App;
