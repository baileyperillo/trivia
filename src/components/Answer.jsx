import React, { Component } from 'react';
// import components


class Answer extends Component {
  
  render() {
      if (this.props.selected) {
        return (
            <div>
          <button className = "green">
            {this.props.answerData}
            
          </button>
            </div>
          );
      }else {
    return (
      <div>
    <button>
      {this.props.answerData}
      
    </button>
      </div>
    );
    } 
  }
}

export default Answer;