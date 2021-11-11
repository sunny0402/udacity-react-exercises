import React, { Component } from "react";

class theGame extends Component {
  //constructor runs first
  constructor(props) {
    super(props);
    const valsArray = this.newMathQuestion();
    this.state = {
      val1: valsArray[0],
      val2: valsArray[1],
      val3: valsArray[2],
      a_random_answer: valsArray[3],
    };
  }
  // class methods
  newMathQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer =
      Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = (newValsArray) => {
    this.setState((currentState) => ({
      val1: newValsArray[0],
      val2: newValsArray[1],
      val3: newValsArray[2],
      a_random_answer: newValsArray[3],
    }));
  };

  handleAnswer = (event) => {
    console.log("event.target.name" + event.target);
    const newValsArr = this.newMathQuestion();
    this.updateState(newValsArr);
    const evalTheAnswer = this.evaluateAnswer(event.target.name);
    this.props.handleAnswer(evalTheAnswer);
  };

  evaluateAnswer(an_answer) {
    const { val1, val2, val3, a_random_answer } = this.state;
    const correctAnswer = val1 + val2 + val3;
    return (
      (correctAnswer === a_random_answer && an_answer === "true") ||
      (correctAnswer !== a_random_answer && an_answer === "false")
    );
  }
  // render automatically called whenever state or props change
  render() {
    const { val1, val2, val3, a_random_answer } = this.state;
    return (
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${val1} + ${val2} + ${val3} = ${a_random_answer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">
          True
        </button>
        <button onClick={this.handleAnswer} name="false">
          False
        </button>
      </div>
    );
  }
}

export default theGame;
