import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/landingPage";
import ItemPage from "./components/ItemPage/itemPage";
import PageNotFound from "./components/PageNotFound/pageNotFound";

const App = () => (
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

export default App;
