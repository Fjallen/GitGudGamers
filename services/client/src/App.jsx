import React from 'react';
import './App.css';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Doughnut } from 'react-chartjs-2';
import LineDemo from './Line.js';
import arrow from './Arrow.gif';

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
      this.setState({isSubmitted:true})
    });
  };

  handleName(event){
    this.setState({name: event.target.value});
  };

  render(){
    return (

      <div className="App">
        <div className="App-header">
          <p><strong>Gamealytics</strong></p>
        </div>
        <div >
          <br></br>
          <h2><label>Type of Game</label></h2>
          <Dropdown
            placeholder='Select a game'
            selection
            options={gameOptions}
          />
          <Form className="Form">
            <Form.Field>
              <h2><label>In Game Name</label></h2>
              <input onChange={this.handleName} value={this.state.name} placeholder="IGN"/>
            </Form.Field>
            <Button type='submit' color={'green'} circular={true} onClick={this.onFormSubmit}>Submit</Button>
          </Form>
          {/*Render line only untill user clicks submit button */}
          {(this.state.isSubmitted===true)&&
          <div>
            <div className="arrow">
              <a href="#chart-wrapper"><img src={arrow}/></a>
            </div>
            <div id="chart-wrapper">
            <LineDemo
              data={this.state.data}
              name={this.state.name}
            />
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}
export default App;
