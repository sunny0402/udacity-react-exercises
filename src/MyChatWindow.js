import React, { Component } from "react";
import MyAddMessage from "./MyAddMessage";
import MyMessageHistory from "./MyMessageHistory";
import PropTypes from "prop-types";

class MyChatWindow extends Component {
  newMessage = (a_message) => {
    this.props.newMessage(this.props.the_user.username, a_message);
  };
  render() {
    const { the_messages, the_user } = this.props;
    return (
      <div className="chat-window">
        <h2>The Chat Window</h2>
        <div className="name sender">{the_user.username}</div>
        <MyMessageHistory the_user={the_user} the_messages={the_messages} />
        <MyAddMessage newMessage={this.newMessage} />
      </div>
    );
  }
}

MyChatWindow.propTypes = {
  newMessage: PropTypes.func.isRequired,
  the_messages: PropTypes.array.isRequired,
  the_user: PropTypes.object.isRequired,
};

export default MyChatWindow;
