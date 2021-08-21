import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, AboutUs, SearchResults, HotelDescription, Login } from "./pages";

import { allBusiness } from "./services/api";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre_nos">
          <AboutUs />
        </Route>
        <Route path="/resultado_busca">
          <SearchResults />
        </Route>
        <Route path="/description_hotel/:id">
          <HotelDescription data={allBusiness} />
        </Route>
        <Route path="/entrar">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
