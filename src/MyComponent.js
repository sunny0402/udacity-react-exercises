import React, { Component } from "react";
//import { PropTypes } from "prop-types";

class MyComponent extends Component {
  // static propTypes = {
  //   user_entered_text: PropTypes.string.isRequired,
  // };
  state = {
    search: "",
  };
  updateSearch = (search) => {
    this.setState(() => ({
      search: search.trim(),
    }));
  };

  render() {
    const showText = this.state.search === "" ? "" : this.state.search;
    return (
      <div className="dynamic-text-container">
        {/* {JSON.stringify(this.state)} */}
        <input
          className="input-box"
          type="text"
          placeholder="Say Something..."
          onChange={(event) => this.updateSearch(event.target.value)}
        />
        <p>{this.state.search}</p>
      </div>
    );
  }
}

export default MyComponent;
