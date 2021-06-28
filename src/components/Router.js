import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import TV from "routes/TV";
import Header from "components/Header";

const AppRouter = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
