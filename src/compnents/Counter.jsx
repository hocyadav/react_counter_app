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
}
export default Counter;