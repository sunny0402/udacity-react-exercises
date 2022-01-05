import React, { Component } from "react";
import PropTypes from "prop-types";

class MyAddMessage extends Component {
  state = {
    message_state: "",
  };

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState(() => ({
      message_state: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newMessage(this.state.message_state);
  };

  isDisabled = () => {
    const { message_state } = this.state;
    return message_state === "";
  };

  render() {
    const { message_state } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message_state}
            onChange={this.handleInputChange}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

MyAddMessage.propTypes = {
  newMessage: PropTypes.func.isRequired,
};

export default MyAddMessage;
