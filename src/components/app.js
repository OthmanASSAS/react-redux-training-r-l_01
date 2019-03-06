import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../containers/Header";
import Home from "./Home";
import Ressources from "./Ressources";

require("../style.css");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ressources" component={Ressources} />
        </Switch>
      </div>
    );
  }
}

export default App;
