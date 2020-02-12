import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question.jsx"
import sampleData from "../sample_data.json"

class QuestionBuilder {
  constructor(question_text, choices, correct_choice_index){
      this.question_text = question
      this.choices = choices
      this.correct_choice_index = correct_choice_index
  }
}

class App extends Component {

  render() {
    import {buildFirebase} from '../clients/firebase.js';

    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
    const questions = data.val();

    console.log(questions);

    const sample = new QuestionBuilder(sampleData)
    return (
      <div className="app">
        <Question questionData = {sample}>       
        </Question>     
      </div>
    );
  }
}

export default App;