import React from "react";
import PropTypes from "prop-types";
import AnItem from "./AnItem";

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.item_list.map((item, index) => (
            <AnItem key={index} an_item={item} />
          ))}
        </ol>
      </div>
    );
  }
}

ItemList.propTypes = {
  item_list: PropTypes.array.isRequired,
};

export default ItemList;
