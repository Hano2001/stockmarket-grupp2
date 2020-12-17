import React from "react";
import { Link } from "react-router-dom";
import Details from "../components/Details";
import { useFetch } from "../hooks/useFetch";

export default function CurrencyDetailPage(props) {
  const ticker = props.match.params.ticker;
  const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${ticker}.json`;
  const currencyInfo = useFetch(url);

  return (
    <div>
      <Link to={`/currencies`}>
        <h5>Back to Currency List</h5>
      </Link>
      <div className ="row">
      {!currencyInfo ? (
        <p>Loading...</p>
      ) : (
        <Details props={currencyInfo} />
      )}
      </div>
    </div>
  );
}
