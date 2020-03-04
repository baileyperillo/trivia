import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question.jsx"
import sampleData from "../sample_data.json"
import Answer from './Answer'
import { buildFirebase } from '../clients/firebase.js';


console.log(sampleData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "question": {
        "choices": [
            "48",
            "13",
            "52",
            "50"
        ],
        "correct_choice_index": 3,
        "question_text": "How many states are in the United States?",
        "user_id": "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
    }

    }
  }
  render() {

    // var database = buildFirebase();
    // var databaseRef = database.ref("/questions");
    // databaseRef.once("value").then(function (data) {
      // const questions = data.val();
// 
      // console.log(questions);
      // const sample = new QuestionBuilder(sampleData);
      return (
        <div className="app">
          Hi {this.state.question.question_text}
         <button> {this.state.question.choices}</button>
      
          <Question   />
          <Answer     />
          
          {/* <Question>
          </Question> */}
        </div>
      );
    }
  }


export default App