import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyItem({ currency }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-sm-5" to={`/currencies/${currency.ticker}`}>
        <h4>{currency.name}</h4>
      </Link>
      <h4 className="col-sm-5">{currency.price} SEK</h4>
      <h4 className="col-sm-2">{currency.today}%</h4>
    </li>
  );
}
