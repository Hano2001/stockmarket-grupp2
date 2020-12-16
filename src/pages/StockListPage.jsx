import React from "react";
import { Link } from "react-router-dom";
import { makeTitleCase } from "../components/makeTitleCase";
import { StockItem } from "../components/StockItem";
import { useFetch } from "../hooks/useFetch";

export const StockListPage = props => {
  const market = props.match.params.market;
  const titleCaseName = makeTitleCase(market)
  const stockList = useFetch(
    `https://market-data-collector.firebaseio.com/market-collector/markets/${market}.json`
  );

  return (
    <div className="container">
      <Link to={`/markets`}>
        <h5>Back to Market List</h5>
      </Link>
      <h5>/ {titleCaseName}</h5>
      <div className="row">
        <h6 className="col-md-5">Name</h6>
        <h6 className="col-md-5">Price</h6>
        <h6 className="col-md-2">Change 1 day</h6>
      </div>
      <ul className="list-unstyled">
        {!stockList && <p>Loading...</p>}
        {stockList &&
          Object.entries(stockList).map(stock => {
            const [key, value] = stock;
            return <StockItem key={key} market={market} stock={value} />;
          })}
      </ul>
    </div>
  );
};
