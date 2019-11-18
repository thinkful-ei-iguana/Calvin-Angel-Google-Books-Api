import React, { Component } from "react";
import "./App.css";
import addBookmark from "./addBookmark/addBookmark";
import BookmarkApp from "./bookmarkApp/bookmarkApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      showAddForm: false
    };
  }

  render() {
    const page = this.state.showAddForm ? (
      <addBookmark />
    ) : (
      <BookmarkApp bookmarks={this.state.bookmarks} />
    );

    return <div className="App">{page}</div>;
  }
}

export default App;
