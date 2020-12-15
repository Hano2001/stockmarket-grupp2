import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";

import { useFetch } from "../hooks/useFetch";

export default function CurrencyDetailPage(props) {
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
            <h5>Price SEK: {currencyItem.price}</h5>
          </div>
          <div className="row">
            <div className="col-md-2">
              Change 1D: &nbsp;
              <span className={checkChange(currencyItem.today)}>
                {currencyItem.today}%
              </span>
            </div>
            <div className="col-md-2">
              Change 1W : &nbsp;
              <span className={checkChange(currencyItem.w1)}>
                {currencyItem.w1}%
              </span>
            </div>
            <div className="col-md-2">
              Change 1M: &nbsp;
              <span className={checkChange(currencyItem.mtd)}>
                {currencyItem.mtd}%
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              Change 3y: &nbsp;
              <span className={checkChange(currencyItem.y3)}>
                {currencyItem.y3}%
              </span>
            </div>

            <div className="col-md-2">
              Change 5y: &nbsp;
              <span className={checkChange(currencyItem.y5)}>
                {currencyItem.y5}%
              </span>
            </div>

            <div className="col-md-2">
              Change Ytd: &nbsp;
              <span className={checkChange(currencyItem.ytd)}>
                {currencyItem.ytd}%
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
