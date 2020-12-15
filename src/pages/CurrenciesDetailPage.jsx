import React from "react";
import { Link } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

export default function CurrenciesDetailPage(props) {
  const ticker = props.match.params.ticker;
  const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${ticker}.json`;
  const currencyItem = useFetch(url);

  return (
    <div className="container">
      <Link to={`/currencies`}>
        <h5>Back to Currency List</h5>
      </Link>
      {!currencyItem ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="col-md-12">
            <h2> {currencyItem.name}</h2>
          </div>
          <div className="col-md-4">
            <h4>Price SEK: {currencyItem.price}</h4>
          </div>
          <div className="row">
            <div className="col-md-2">
              <p>Today: {currencyItem.today}%</p>
            </div>
            <div className="col-md-2">
              <p>1week: {currencyItem.w1}%</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <p>1mtd: {currencyItem.mtd}%</p>
            </div>
            <div className="col-md-2">
              <p>3y: {currencyItem.y3}%</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <p>5y: {currencyItem.y5}%</p>
            </div>
            <div className="col-md-2">
              <p>ytd: {currencyItem.ytd}%</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
