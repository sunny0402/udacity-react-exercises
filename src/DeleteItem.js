import React from "react";
import PropTypes from "prop-types";

class DeleteItems extends React.Component {
  state = {
    items: [],
  };
  deleteLastItem = (event) => {
    this.props.onDeleteItem();
  };

  inputIsEmpty = () => {
    return this.state.value === "";
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteLastItem} disabled={this.inputIsEmpty()}>
          Delete Last Item
        </button>
      </div>
    );
  }
}

DeleteItems.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  onBtnDisabled: PropTypes.func.isRequired,
};

export default DeleteItems;
