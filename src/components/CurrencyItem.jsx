import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../utilities/checkChange";

export default function CurrencyItem({ currency }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/currencies/${currency.ticker}`}>
        <h4>{currency.name}</h4>
      </Link>
      <h4 className="col-4">{currency.price} SEK</h4>
      <h4 className={`col-1 ${checkChange(currency.today)}`}>{currency.today}%</h4>
    </li>
  );
}
