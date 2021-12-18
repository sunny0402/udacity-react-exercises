import React, { Component } from "react";
import PropTypes from "prop-types";
import MyUser from "./MyUser";

class UserList extends Component {
  state = {
    games_played_panel: true,
  };

  toggleGamesPlayedPanel = () =>
    this.setState((previousState) => ({
      games_played_panel: !previousState.games_played_panel,
    }));

  render() {
    const { games_played_panel } = this.state;
    const { users } = this.props;
    return (
      <div>
        {users.map((a_user, index) => (
          <ol key={index}>
            <MyUser
              key={a_user.username}
              user={a_user}
              games_played_panel={this.toggleGamesPlayedPanel}
            />
            <button onClick={this.toggleGamesPlayedPanel}>Toggle</button>
          </ol>
        ))}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
