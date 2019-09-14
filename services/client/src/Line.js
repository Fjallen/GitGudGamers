import React, {Component} from 'react';
import { Scatter } from 'react-chartjs-2';

export default class LineDemo extends Component {
  constructor(props){
    super(props);
    this.state ={
      data:{
        labels: ['Scatter'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            backgroundColor: '#f0f8fc',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
              { x: 65, y: 75 },
            ]
          }
        ]
      }
    }
    this.init = this.init.bind(this)
  }
  init = (array) =>{
    var i;
    for(let i = 0; i < array.length; i++){
    }
  };

  componentDidMount(){
    this.init(this.props.data.LPs);
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Scatter ref="chart" data={this.state.data} />
      </div>
    );
  }
}
