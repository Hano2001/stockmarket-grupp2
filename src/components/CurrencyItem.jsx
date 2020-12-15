import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyItem({ currency }) {
  return (

    <div className="row shadow-sm mb-5 bg-white rounded">
      <Link 
        className="col-md-5"
        to={`/currencies/${currency.ticker}`}
      >
        <h4>{currency.name}</h4>
      </Link>
        <h4 className="col-md-5">{currency.price} SEK</h4>
        <h4 className="col-md-2">{currency.today}%</h4>
    </div>
  );
}