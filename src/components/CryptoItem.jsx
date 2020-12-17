import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../utilities/checkChange";
import changeCurrency from "../utilities/changeCurrency";

export default function CryptoItem({ item }) {
  const currency = changeCurrency(item.market);

  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/crypto/${item.ticker}`}>
        <h6>{item.name}</h6>
      </Link>
      <h6 className="col-4">
        {" "}
        {item.price} {currency}
      </h6>
      <h6 className={`col-1 ${checkChange(item.today)}`}>{item.today}%</h6>
    </li>
  );
}
