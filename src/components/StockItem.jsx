import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";

export const StockItem = ({ market, stock }) => {
  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-md-5" to={`/markets/${market}/${stock.ticker}`}>
        <h4>{stock.name}</h4>
      </Link>
      <h4 className="col-md-5">{stock.price} USD</h4>
      <h4 className={`col-md-2 ${checkChange(stock.today)}`}>{stock.today}%</h4>
    </li>
  );
};
