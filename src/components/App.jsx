import React, { Component } from 'react';
import '../css/App.css';
// import components
import Question from "./Question.jsx"
import sampleData from "../sample_data.json"


class App extends Component {

  render() {
   
    return (
      <div className="app">
        <Question questionData = {sampleData}>
        

       
      </Question>
      
        
      </div>
    );
  }
}

export default App;