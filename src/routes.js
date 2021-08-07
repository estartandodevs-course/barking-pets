import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, SearchResults } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search-result" component={SearchResults} />
      </Switch>
    </BrowserRouter>
  );
}
