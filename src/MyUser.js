import React from "react";
import PropTypes from "prop-types";

// stateless functional component
const MyUser = (props) => {
  return (
    <li className="a_user">
      <p>{props.user.username}</p>
      <p>
        Number of games played:
        {props.games_played_panel
          ? props.user.games_played_panel
          : "Hide Number of Games Played"}
      </p>
    </li>
  );
};

MyUser.propTypes = {
  games_played_panel: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default MyUser;
