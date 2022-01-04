import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyChatWindow from "./MyChatWindow";

const chat_users = [{ username: "User 1" }, { username: "User 2" }];

class App extends Component {
  state = {
    app_message_state: [],
  };

  newMessage = (a_username, a_message) => {
    const a_new_message = {
      ["username"]: a_username,
      ["text"]: a_message,
    };

    this.setState((old_state) => ({
      app_message_state: old_state.app_message_state.concat([a_new_message]),
    }));
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {chat_users.map((user) => (
            <MyChatWindow
              key={user.username}
              newMessage={this.newMessage}
              the_user={user}
              message_list={messages}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
