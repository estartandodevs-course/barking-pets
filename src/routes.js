import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Comment } from "./components";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Comment} />
      </Switch>
    </BrowserRouter>
  );
}
