import React, { useEffect, useState } from "react";
import CurrencieItem from "../components/CurrencieItem";

export const CurrenciesPage = () => {
  const [currenciesList, setCurrenciesList] = useState(null);

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/currencies.json";

    fetch(url)
      .then(res => res.json())
      .then(data => setCurrenciesList(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {indicesList &&
          Object.entries(currenciesList).map(CurrencieItem => {
            const key = CurrencieItem[0];
            const value = CurrencieItem[1];
            return <CurrencieItem key={key} index={value} />;
          })}
      </div>
    </div>
  );
};
