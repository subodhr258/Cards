import React, { Component } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import data from "./robots.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: data.robots,
      searchfields: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfields: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfields.toLowerCase());
    });
    return (
      <div class="container">
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
