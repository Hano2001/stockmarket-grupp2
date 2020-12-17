import React from "react";
import CurrencyItem from "../components/CurrencyItem";
import ListHeading from "../components/ListHeading";
import { useFetch } from "../hooks/useFetch";

export default function CurrencyListPage() {
  const url =
    "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json";
  const currenciesList = useFetch(url);

  return (
    <div>
      <h5>Currency List</h5>
      <ListHeading />
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
