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
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}
export default Counter;