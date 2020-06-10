import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0
     }

    render() { 
        return ( 
        <div>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    formatCount(){
        const {count} = this.state; //object destructuring
        const jsxExpression = <h1>Zero</h1>;//we can pass JSX expression 
        return count === 0 ? jsxExpression : count;//ctrl + d : multi select 
    }
}
export default Counter;