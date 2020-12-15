import React from "react";
import CurrencyItem from "../components/CurrencyItem";
import { useFetch } from "../hooks/useFetch";

export default function CurrencyListPage() {
  const url =
    "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json";
  const currenciesList = useFetch(url);

  return (
    <div className="container">
      <h5>Currency List</h5>
      <div className="row">
        <h6 className="col-sm-5">Name</h6>
        <h6 className="col-sm-5">Price</h6>
        <h6 className="col-sm-2">Change 1 day</h6>
      </div>
      <ul className="list-unstyled">
        {!currenciesList && <p>Loading</p>}
        {currenciesList &&
          Object.entries(currenciesList).map(currencyItem => {
            const key = currencyItem[0];
            const value = currencyItem[1];
            return <CurrencyItem key={key} currency={value} />;
          })}
      </ul>
    </div>
  );
}
