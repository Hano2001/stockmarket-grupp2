import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../utilities/checkChange";

export default function CurrencyItem({ currency }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/currencies/${currency.ticker}`}>
        <h6>{currency.name}</h6>
      </Link>
      <h6 className="col-4">{currency.price} SEK</h6>
      <h6 className={`col-1 ${checkChange(currency.today)}`}>
        {currency.today}%
      </h6>
    </li>
  );
}
