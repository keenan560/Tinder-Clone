import React from "react";
import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header backButton="/" />
            <h1>I am chat page</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}
      {/* Buttons below Tinder Cards */}
      {/* Chats Screen */}
      {/* Individual Chat screen */}
    </div>
  );
}

export default App;
