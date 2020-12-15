import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";

export default function IndexItem({ index }) {
  const changeToday = checkChange(index.today);
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-md-5" to={`/indexes/${index.ticker}`}>
        <h4>{index.name}</h4>
      </Link>
      <h4 className="col-md-5">€{index.price}</h4>
      <h4 className={`col-md-2 ${changeToday}`}>{index.today}%</h4>
    </li>
  );
}
