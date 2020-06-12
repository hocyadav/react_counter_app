import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0,
        tagList : []
     };


    //  constructor() {
    //      super();
    //      //console.log(this);
    //      //this.handleIncrement.bind(this);//bind will return new instance of handleIncrement
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }

     handleIncrement = () => {
         console.log("Increment ",this);//able to access this, now we can update count variable
         this.state.count++;
         this.setState({count : this.state.count + 1});
     }
    render() { 
        return ( 
        <div>

            <span className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
}
export default Counter;