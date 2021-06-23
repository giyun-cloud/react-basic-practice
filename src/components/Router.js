import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import Tv from "routes/Tv";

const AppRouter = () => (
  <>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" exact component={Search} />
    </Router>
  </>
);

export default AppRouter;
