import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
