import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemList from "./ItemList";
import CreateItem from "./CreateItem";
import DeleteItems from "./DeleteItem";

class App extends React.Component {
  state = {
    items: [],
  };

  handleAddItem = (item) => {
    return this.setState((prevState) => {
      return { items: [...prevState.items, item] };
    });
  };

  handleDeleteLastItem = (event) => {
    return this.setState((prevState) => {
      return { items: this.state.items.slice(0, -1) };
    });
  };

  noItemFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>

        <CreateItem onAddItem={this.handleAddItem} />

        <ItemList item_list={this.state.items} />

        <DeleteItems
          onDeleteItem={this.handleDeleteLastItem}
          onBtnDisabled={this.noItemFound}
        />
      </div>
    );
  }
}

export default App;
