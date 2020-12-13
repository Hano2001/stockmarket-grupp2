import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { IndicesPage } from "./pages/IndicesPage";
import { IndexDetailsPage } from "./pages/IndexDetailsPage";
import { MarketListPage } from "./pages/MarketListPage";
import { StockListPage } from "./pages/StockListPage";

function App() {
  return (
    <div className="container">
      Stockmarket
      <Link to="/crypto">Crypto</Link>
      <Link to="/currencies">Currencies</Link>
      <Link to="/indexes">Indices</Link>
      <Link to="/markets">Markets</Link>
      <Switch>
        <Route path="/indexes/:ticker" component={IndexDetailsPage} />
        <Route path="/crypto">crypto</Route>
        <Route path="/currencies">currencies</Route>
        <Route path="/indexes/">
          <IndicesPage />
        </Route>

        <Route path="/markets/:market" component={StockListPage}/>
        <Route path="/markets">
          <MarketListPage />
        </Route>

        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
