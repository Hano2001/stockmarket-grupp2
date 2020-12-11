import React, { useEffect, useState } from "react";
import CurrencieItem from "../components/CurrencieItem";


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
          Object.entries(currenciesList).map(currencieItem => {
            const key = currencieItem[0];
            const value = currencieItem[1];
            return <CurrencieItem key={key} currencie={value} />;
          })}
      </div>
    </div>
  );
};

