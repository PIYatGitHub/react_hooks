import { Switch, Route } from "react-router-dom";
import GlobalFeed from "../src/pages/globalFeed";
import TagFeed from "../src/pages/tagFeed";
import YourFeed from "../src/pages/yourFeed";
import Article from "./pages/article";
import React from "react";
import Authentication from "./pages/authentication";

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/login" component={Authentication} />
      <Route path="/register" component={Authentication} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
