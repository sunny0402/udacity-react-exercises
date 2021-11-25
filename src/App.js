import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import UserList from "./UserList";

class AddUserForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input className="first-name" placeholder="first-name" />
          <input className="last-name" placeholder="last-name" />
          <input className="user-name" placeholder="user-name" />
        </form>
      </div>
    );
  }
}

//export default AddUserForm;

const myUsers = [
  { firstName: "first 1", lastName: "last 1", username: "username 1" },
  { firstName: "first 2", lastName: "last 2", username: "username 2" },
  { firstName: "first 3", lastName: "last 3", username: "username 3" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Video Game Registry</h1>
          <AddUserForm />
          <UserList users={myUsers} />
        </header>
      </div>
    );
  }
}

export default App;
