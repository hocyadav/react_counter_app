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
     handleIncrement = (product) => {
         console.log(product);//able to access this, now we can update count variable
         this.state.count++;
         this.setState({count : this.state.count + 1});
     };

    render() { 
        return ( 
        <div>
            <span className={this.newMethod()}>{this.formatCount()}</span>
            <button onClick={ () => {this.handleIncrement({id:1})} } className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    newMethod() {
        let classes = "badge m-2 "; //common classes
        classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
        return classes;
    };

    formatCount(){
        const {count} = this.state; //object destructuring
        const jsxExpression = <h1>Zero</h1>;//we can pass JSX expression 
        return count === 0 ? jsxExpression : count;//ctrl + d : multi select 
    };
}
export default Counter;