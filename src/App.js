import React, { Component } from "react";
import Game from "./Game";
import Score from "./Score";
import logo from "./logo.svg";
import "./App.css";

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
    correctAnswer: 0,
    numQuestions: 0,
  };

  handleAnswer = (a_correct_answer) => {
    if (a_correct_answer) {
      //handle correct answer
      this.setState((theCurrentState) => ({
        correctAnswer: theCurrentState.correctAnswer + 1,
      }));
    }
    this.setState((theCurrentState) => ({
      numQuestions: theCurrentState.numQuestions + 1,
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game handleAnswer={this.handleAnswer} />
        <Score
          numCorrect={this.state.correctAnswer}
          numQuestions={this.state.numQuestions}
        />
      </div>
    );
  }
}

export default App;
