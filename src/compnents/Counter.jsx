import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : 0,
        tagList : ["tag1","tag2","tag3"]
     };

     renderTags() {
         if(this.state.tagList.length === 0) return <p>There are no tags</p>;
         return <ul>{this.state.tagList.map(tag => <li key={tag} >{tag}</li>)}</ul>;
     }
    render() { 
        return ( 
        <div>
            {this.renderTags()}
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