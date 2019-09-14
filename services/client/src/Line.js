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
    },
    {
      type: 'line',
      label: 'Fitted',
      data: [],
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 0
    }
  ]
};

export default class LineDemo extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    //this.props.config = line
  }
  init = (array) =>{
    let a = this.props.data.pcot[0];
    let b = this.props.data.pcot[1];
    let c = this.props.data.pcot[2];
    this.props.data.LPs.reverse();
    for(let i = 0; i < array.length; i++){
      // var val;
      // if (i==0){
      // }
      // var val = a * Math.log(b*i) + c
      ChartData.datasets[0].data.push({x:i,y:array[i]});
      ChartData.datasets[1].data.push({x:i,y:val});
    }
  };
  componentDidMount(){
    this.init(this.props.data.LPs);
    setTimeout(()=>{ this.chartReference.chartInstance.update(); },1000);
  }

  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Scatter ref={(reference)=> this.chartReference = reference} data={ChartData} />
      </div>
    );
  }
}
