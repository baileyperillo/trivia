import React, { Component } from 'react';
// import components
import Answer from "./Answer.jsx"

class Question extends Component {
  
  render() {
    return (
      <div>
        Question Component!
        {this.props.questionData}
      </div>
    ); 
  }
}

export default Question;