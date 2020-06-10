import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        url: "https://picsum.photos/200"
     }
    render() { 
        return ( 
        <div>
            <img src={this.state.url}></img>
            <span>{this.state.count}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
}
export default Counter;