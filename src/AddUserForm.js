import React, { Component } from "react";
import PropTypes from "prop-types";

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

export default AddUserForm;
