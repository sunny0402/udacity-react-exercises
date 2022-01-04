import React from "react";
import PropTypes from "prop-types";

const MyMessageHistory = (props) => {
  const { the_messages, the_user } = props;

  return (
    <ul className="message-list">
      {the_messages.map((a_message, index) => {
        <li
          key={index}
          className={
            a_message.username === the_user.username
              ? "message sender"
              : "message recipient"
          }
        >
          <p>
            {`
                    ${a_message.username}: 
                    ${a_message.text}`}
          </p>
        </li>;
      })}
    </ul>
  );
};

MyMessageHistory.propTypes = {
  message_list: PropTypes.array.isRequired,
  a_user: PropTypes.object.isRequired,
};
export default MyMessageHistory;
