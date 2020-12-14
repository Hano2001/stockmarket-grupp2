import React from "react";
import CurrencyItem from "../components/CurrencyItem";
import { useFetch } from '../hooks/useFetch';


export default function CurrenciesPage() {
  
    const url = "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json";
    const currenciesList =useFetch(url)

  return (
    <div className="container">
      {!currenciesList && <p>Loading</p>}
         <div className="row">
        {currenciesList &&
          Object.entries(currenciesList).map(currencyItem => {
            const key = currencyItem[0];
            const value = currencyItem[1];
            return <CurrencyItem key={key} currency={value} />;
          })}
      </div>
    </div>
  );
};

