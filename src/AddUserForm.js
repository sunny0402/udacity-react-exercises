import React, { Component } from "react";
import PropTypes from "prop-types";

class AddUserForm extends React.Component {
  state = {
    user: { first_name: "", last_name: "", user_name: "" },
    userExists: false,
  };

  contactExists = (a_username) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === a_username) {
        return true;
      }
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userExists = this.contactExists(this.state.user.user_name);
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }
    this.setState(() => ({
      userExists,
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((currState) => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === "" || lastName === "" || username === "";
  };

  render() {
    const { firstName, lastName, username } = this.state.user;
    return (
      <div>
        <h2>New User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name..."
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="lasttName"
              placeholder="Enter last name..."
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username..."
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add</button>
        </form>
      </div>
    );
  }
}

AddUserForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUserForm;
