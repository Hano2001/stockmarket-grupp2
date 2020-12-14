import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { IndicesPage } from "./pages/IndicesPage";
import { IndexDetailsPage } from "./pages/IndexDetailsPage";
<<<<<<< HEAD
import { MarketsPage } from "./pages/MarketsPage";
import {MarketPage} from "./pages/MarketPage"
=======
import { MarketListPage } from "./pages/MarketListPage";
import { StockListPage } from "./pages/StockListPage";
import { StockDetailPage } from "./pages/StockDetailPage";
>>>>>>> markets

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

<<<<<<< HEAD
        <Route path="/markets/:market" component={MarketPage} />
        <Route path="/markets">
            <MarketsPage />
            </Route>    
=======
        <Route path="/markets/:market/:stock" component={StockDetailPage} />
        <Route path="/markets/:market" component={StockListPage} />
        <Route path="/markets">
          <MarketListPage />
        </Route>

>>>>>>> markets
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
