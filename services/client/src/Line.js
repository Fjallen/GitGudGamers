import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

var data = {
  labels: [],
  datasets: [
    {
      label: 'My Gameplay',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
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
    var i;
    for(let i = 0; i < array.length; i++){
      data.labels.push(i);
      data.datasets[0].data.push(array[i]);
    }
  };

  componentDidMount(){
    this.init(this.props.data.LPs);
    console.log(data.datasets[0].data)
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }
}
