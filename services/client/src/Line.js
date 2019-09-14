import React, {Component} from 'react';
import { Scatter } from 'react-chartjs-2';

var ChartData = {
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
      data: []
    }
  ]
};


export default class LineDemo extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    this.props.config = line
  }
  init = (array) =>{
    for(let i = 0; i < array.length; i++){
      ChartData.datasets[0].data.push({x:i,y:array[i]})
    }
  };

  componentDidMount(){
    this.init(this.props.data.LPs);
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Scatter ref="chart" data={ChartData} />
      </div>
    );
  }
}
