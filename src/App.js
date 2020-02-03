import React from "react";
import Header from "./components/Header";
import ShowDealers from "./pages/ShowDealers";
import ShowVehicles from "./pages/ShowVehicles";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ShowDealers} />

        <Route exact path="/dealers" component={ShowDealers} />
        <Route exact path="/dealers/:id/vehicles" component={ShowVehicles} />
      </Switch>
    </div>
  );
}

export default App;
