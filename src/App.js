import React, { Component } from "react";
import "./App.css";

const myUsers = [
  { firstName: "first 1", lastName: "last 1", username: "username 1" },
  { firstName: "first 2", lastName: "last 2", username: "username 2" },
  { firstName: "first 3", lastName: "last 3", username: "username 3" },
];

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

class UserList extends React.Component {
  render() {
    const user_list = this.props.myUsers.forEach((a_user) => {
      <li>
        {a_user.firstName} | {a_user.lastName} | {a_user.username}
      </li>;
    });
    return <div>{this.user_list}</div>;
  }
}

//export default UserList;

//export default AddUserForm;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Video Game Registry</h1>
          <AddUserForm users={myUsers} />
          <UserList />
        </header>
      </div>
    );
  }
}

export default App;
