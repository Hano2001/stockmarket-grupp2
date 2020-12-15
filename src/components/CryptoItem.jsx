import React from "react";
import { Link } from "react-router-dom";
export default function CryptoItem({ item }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-md-5" to={`/crypto/${item.ticker}`}>
        <h4>{item.name}</h4>
      </Link>
      <h4 className="col-md-5"> €{item.price}</h4>
      <h4 className="col-md-2">{item.today}%</h4>
    </li>
  );
}
