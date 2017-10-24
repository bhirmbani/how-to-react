// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import type { Match } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingPage";
import ItemPage from "./components/ItemPage/itemPage";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import ItemDetails from "./components/ItemDetails/itemDetails";
import itemIdModule from "./helpers/itemId";

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/item" component={ItemPage} />
        <Route
          path="/item/:id"
          component={props => (
            <ItemDetails item={itemIdModule(props)} {...props} />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
