import React, { useEffect, useState } from "react";
import CurrencyItem from "../components/CurrencyItem";


export default function CurrenciesPage() {
  const [currenciesList, setCurrenciesList] = useState(null);

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json";

        fetch(url)
      .then(res => res.json())
      .then(data => setCurrenciesList(data));
      
  }, []);

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

