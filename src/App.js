import React from "react";
import { Switch, Route } from "react-router-dom";
import { IndexListPage } from "./pages/IndexListPage";
import { IndexDetailPage } from "./pages/IndexDetailPage";
import { MarketListPage } from "./pages/MarketListPage";
import { StockListPage } from "./pages/StockListPage";
import { StockDetailPage } from "./pages/StockDetailPage";
import CryptoDetailPage from "./pages/CryptoDetailPage";
import CryptoListPage from "./pages/CryptoListPage";
import CurrencyDetailPage from "./pages/CurrencyDetailPage";
import CurrencyListPage from "./pages/CurrencyListPage";
import Navbar from "./components/Navbar";
import {FrontPage} from "./pages/FrontPage"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/indexes/:ticker" component={IndexDetailPage} />

        <Route path="/indexes/">
          <IndexListPage />
        </Route>

        <Route path="/currencies/:ticker" component={CurrencyDetailPage} />

        <Route path="/currencies">
          <CurrencyListPage />
        </Route>

        <Route path="/crypto/:ticker" component={CryptoDetailPage}></Route>
        <Route path="/crypto">
          <CryptoListPage />
        </Route>
        <Route path="/markets/:market/:stock" component={StockDetailPage} />
        <Route path="/markets/:market" component={StockListPage} />
        <Route path="/markets">
          <MarketListPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
