import React from "react";
import { Link } from "react-router-dom";
import { StockItem } from "../components/StockItem";
import { useFetch } from "../hooks/useFetch";

export const StockListPage = props => {
  const market = props.match.params.market;
  const stockList = useFetch(
    `https://market-data-collector.firebaseio.com/market-collector/markets/${market}.json`
  );

  return (
    <div>
      <Link to={`/markets`}>
        <h5>Back to Market List</h5>
      </Link>
      <h5>/ {market}</h5>
      <div className="row">
        <h6 className="col-5">Name</h6>
        <h6 className="col-4">Price</h6>
        <h6 className="col-1">Change 1 day</h6>
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
