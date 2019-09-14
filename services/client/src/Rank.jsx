import React from 'react';

class Ranks extends React.Component{
  state = {isPredicted: null};
  /*constructor(props){
      super(props);
      this.state ={
          isPredicted = null
      }
  }*/
  render(){
      return (
          <div>
              <h2>
                  Name
              </h2>
              {this.state.isPredicted &&
              <div>
                  Youll reach rank in x games
              </div>}
              <h2>
                  What rank do you want to reach?
              </h2>
              //Do graph here
          </div>
      )
  }
}

export default Ranks;
