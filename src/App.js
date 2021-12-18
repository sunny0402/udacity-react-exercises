import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

class App extends Component {
  state = {
    myUsers: [],
  };

  createNewUser = (new_user) => {
    new_user.numGamesPlayed = 0;
    this.setState((oldState) => ({
      myUsers: [...oldState.myUsers, new_user],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Users Registry</h1>
          <AddUserForm
            users={this.state.myUsers}
            onAddUser={this.createNewUser}
          />
          <UserList users={this.state.myUsers} />
        </header>
      </div>
    );
  }
}

export default App;
