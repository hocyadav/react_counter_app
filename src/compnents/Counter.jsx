import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0,
        tagList : ["tag1","tag2","tag3"]
     };

    render() { 
        return ( 
        <div>
            <span className={this.newMethod()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            <ul>
        {this.state.tagList.map(tag => <li>{tag}</li>)}
            </ul>
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