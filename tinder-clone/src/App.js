import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am chat page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
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
