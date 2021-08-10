import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, AboutUs, SearchResults } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/resultado-busca">
          <SearchResults />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
