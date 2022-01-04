import React, { Component } from "react";
import PropTypes from "prop-types";
import MyChatWindow from "./MyChatWindow";

class MyAddMessage extends Component {
  state = {
    message_state: "",
  };

  handleInputChange = (event) => {
    const { new_value } = event.target;

    this.setState(() => ({
      message_state: new_value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newMessage(this.state.message_state);
  };

  isDisabled = () => {
    const { message } = this.state;
    return message === "";
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={message}
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

MyAddMessage.PropTypes = {
  newMessage: PropTypes.func.isRequired,
};

export default MyAddMessage;
