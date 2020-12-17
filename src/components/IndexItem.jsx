import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../utilities/checkChange";

export default function IndexItem({ index }) {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/indexes/${index.ticker}`}>
        <h6>{index.name}</h6>
      </Link>
      <h6 className="col-4">{index.price}</h6>
      <h6 className={`col-1 ${checkChange(index.today)}`}>{index.today}%</h6>
    </li>
  );
}
