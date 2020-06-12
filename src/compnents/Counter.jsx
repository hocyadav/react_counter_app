import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0
     }

     constructor() {
         super();
         //console.log(this);
         //this.handleIncrement.bind(this);//bind will return new instance of handleIncrement
         this.handleIncrement = this.handleIncrement.bind(this);
     }

     handleIncrement(){
         console.log("Increment ",this);//this is undefined
     }

    render() { 
        let classes = this.newMethod();
        
        return ( 
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    newMethod() {
        let classes = "badge m-2 "; //common classes
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state; //object destructuring
        const jsxExpression = <h1>Zero</h1>;//we can pass JSX expression 
        return count === 0 ? jsxExpression : count;//ctrl + d : multi select 
    }
}
export default Counter;