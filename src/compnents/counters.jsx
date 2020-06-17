import React, { Component } from 'react'
import Counter from "./counter";

class Counters extends Component {
    state = { 
        counters: [
            { id : 1, value:4 },
            { id : 2, value:0 },
            { id : 3, value:0 },
            { id : 4, value:0 }
        ]
     }
    render() { 
        return ( 
        <div>
           { this.state.counters.map(count => 
           <Counter key={count.id} value={count.value} selected={true} /> 
           )}
        </div> 
        );
    }
}
 
export default Counters;