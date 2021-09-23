import { Switch, Route } from "react-router-dom";

import About from "./About";
import House from "./House";
import Business from "./Business";
import Price from "./Price";
import Home from "./Home";

function App() {
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>

      <Route path="/house">
        <House />
      </Route>

      <Route path="/business">
        <Business />
      </Route>

      <Route path="/price">
        <Price />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
