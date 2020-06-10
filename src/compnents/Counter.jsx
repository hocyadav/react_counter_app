import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0
     }
     styles = {     //styles as a object
         fontSize: 50,
         fontWeight: "bold"
     }
    render() { 
        return ( 
        <div>
            <span style={this.styles}>{this.formatCount()}</span>
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