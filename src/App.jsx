import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/Landing/landing";
import ItemPage from "./components/Item/item";
import PageNotFound from "./components/PageNotFound/pageNotFound";

const Test = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/item" component={ItemPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Test;
