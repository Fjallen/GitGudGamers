import React, {Component} from 'react';
import { Scatter } from 'react-chartjs-2';
import divide from './Line.png'

var ChartData = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'My Games',
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
      label: 'My Estimates',
      data: [],
      fill: false,
      backgroundColor: "rgba(218,83,79, .7)",
      borderColor: "rgba(218,83,79, .7)",
      pointRadius: 1,
      showLine: true
    }
  ]
};

export default class Chart extends Component {
  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    this.GetWelcome = this.GetWelcome.bind(this);
    this.getTimeToNextRank = this.getTimeToNextRank.bind(this);
  }
  init = (array) =>{
    let a = this.props.data.popt[0];
    let b = this.props.data.popt[1];
    let c = this.props.data.popt[2];
    this.props.data.LPs.reverse();
    for(let i = 0; i < array.length; i++){
       var val;
       if (i===0){
          val = a + c;
       }
       else{
         val = a * Math.log(b*i) + c;
       }
      ChartData.datasets[0].data.push({x:i,y:array[i]});
      ChartData.datasets[1].data.push({x:i,y:val});
    }
  };
  getTimeToNextRank(){
    var NextRank = this.getNextHundred(this.props.data.LPs[0])
    var upper = (NextRank - this.props.data.popt[2]) / this.props.data.popt[0];
    var solution = Math.round((Math.exp(upper))/ this.props.data.popt[1]);
    document.getElementById("NeverReach").innerHTML = "You will reach your next Rank in : " + solution + " Games";
  }
  getNextHundred(a){
    return Math.ceil(a/100)*100
  }
  componentDidMount(){
    this.init(this.props.data.LPs);
    setTimeout(()=>{ this.chartReference.chartInstance.update(); },1000);
    this.GetWelcome();
    this.getTimeToNextRank();
  }
GetWelcome(){
  var welcome= "WELCOME " + this.props.name
  document.getElementById("Welcome").innerHTML = welcome.toUpperCase()
}

  render() {

    return (
      <div>
        <br></br>
        <h1 id="Welcome"><strong></strong></h1>
        <hr></hr>
        <br></br>
        <h2>Performance</h2>
        <Scatter ref={(reference)=> this.chartReference = reference} data={ChartData} />
        <p id="NeverReach"> </p>
      </div>
    );
  }
}
