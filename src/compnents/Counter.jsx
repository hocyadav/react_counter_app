import React, { Component } from 'react';

class Counter extends Component {
    state = {       //state as object
        count : this.props.value
     };

     handleIncrement = (product) => {
         console.log(product);//able to access this, now we can update count variable
         this.setState({count : this.state.count + 1});
     };

    render() { 
        console.log("props", this.props);
        return ( 
        <div>
            {this.props.id}
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
        return count === 0 ? "Zero" : count;//ctrl + d : multi select 
    };
}
export default Counter;