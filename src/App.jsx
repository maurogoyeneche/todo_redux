import "./App.css";
import ShoppingList from "./components/ShoppingList";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/pages/Home.jsx";

function App() {
  return (
    <Router>
      {/* <nav>
        {" "}
        <ul>
          <li>
            <Link to="home" />{" "}
          </li>
          <li>
            <Link to="List" />{" "}
          </li>
        </ul>
      </nav> */}

      <div className="App">
        <div className="container">
          <ShoppingList />
        </div>
      </div>
    </Router>
  );
}

export default App;
