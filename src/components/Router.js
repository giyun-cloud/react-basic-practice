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
import Detail from "routes/Detail";
import Collection from "routes/Collection";

const AppRouter = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        <Route path="/collection/:id" component={Collection} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);

export default AppRouter;
