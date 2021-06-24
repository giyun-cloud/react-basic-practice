import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import Tv from "routes/Tv";

const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={Tv} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
