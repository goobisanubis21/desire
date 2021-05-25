import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shipping from "./pages/Shipping";
import Exchanges from "./pages/Exchanges";
import Privacy from "./pages/Privacy";
import StorePolicy from "./pages/StorePolicy"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path = "/contact" component={Contact} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/exchanges" component={Exchanges} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/storepolicy" component={StorePolicy} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
