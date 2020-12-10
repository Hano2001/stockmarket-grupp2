import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { IndicesPage } from "./pages/IndicesPage";

function App() {
  return (
    <div className="Container">
      Stockmarket
      <Link to="/crypto">Crypto</Link>
      <Link to="/currencies">Currencies</Link>
      <Link to="/indices">Indices</Link>
      <Link to="/markets">Markets</Link>
      <Switch>
        <Route path="/crypto">crypto</Route>
        <Route path="/currencies">currencies</Route>

        <Route path="/indices">
          <IndicesPage />
        </Route>

        <Route path="/markets">markets</Route>

        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
