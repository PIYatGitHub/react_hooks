import { Switch, Route } from "react-router-dom";
import GlobalFeed from "../src/pages/globalFeed";
import Article from "./pages/article";
import React from "react";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
