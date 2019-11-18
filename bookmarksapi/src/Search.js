import React, { Component } from "react";

const { API_KEY } = process.env;
const API_URL = "https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  getInfo = () => {
    fetch
      .get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=4`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        });
      });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 20 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default Search;
