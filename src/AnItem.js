import React from "react";
import PropTypes from "prop-types";

function AnItem(props) {
  return <li>{props.an_item}</li>;
}

AnItem.propTypes = {
  an_item: PropTypes.string.isRequired,
};

export default AnItem;
