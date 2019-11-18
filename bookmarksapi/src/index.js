import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

//should have a search form, allow filters for 'type of book, free, etc
//display the result in a list, optionally click a book to display full description, etc
//must use google api to perform this search
//header should be h1, have a large black bar surrounding it
//just below header should be a grey box nav bar with 'search' with a submit button next to it
//full description should be expandable, it should contain title, author, price, description of book
