import React, { Component } from "react";
import PropTypes from "prop-types";

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((a_user, index) => (
          <li key={index}>
            {a_user.firstName} | {a_user.lastName} | {a_user.username}
          </li>
        ))}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
