import React, { Component } from 'react';
// import components
import Answer from "./Answer.jsx"

class Question extends Component {
  
  render() {
    return (
      <div>
       {this.props.questionData.question.question_text}
      
       <Answer answerData={this.props.questionData.question.choices[0]} selected= {true}>
               
       </Answer> 

       <Answer answerData={this.props.questionData.question.choices[1]}>

       </Answer> 

       <Answer answerData={this.props.questionData.question.choices[2]}>

       </Answer> 

       <Answer answerData={this.props.questionData.question.choices[3]}>
        </Answer> 
        
      </div>
    ); 
  }
}

export default Question;