import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";
export default function CryptoItem({ item }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/crypto/${item.ticker}`}>
        <h4>{item.name}</h4>
      </Link>
      <h4 className="col-4"> €{item.price}</h4>
      <h4 className={`col-1 ${checkChange(item.today)}`}>{item.today}%</h4>
    </li>
  );
}
