import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
// import Filter from "./Filter";

class App extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1> Google Book Search API </h1>
        </header>
        <main>
          <Search></Search>
          {/* <Filter></Filter> */}
        </main>
      </div>
    );
  }
}

export default App;
