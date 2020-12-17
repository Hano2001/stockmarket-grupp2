import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../utilities/checkChange";
import changeCurrency from "../utilities/changeCurrency";

export const StockItem = ({ market, stock }) => {
  const currency = changeCurrency(market);

  return (
    <li className="row shadow-sm mb-5 bg-white rounded">
      <Link className="col-5" to={`/markets/${market}/${stock.ticker}`}>
        <h6>{stock.name}</h6>
      </Link>
      <h6 className="col-4">
        {stock.price}
        {currency}
      </h6>
      <h6 className={`col-1 ${checkChange(stock.today)}`}>{stock.today}%</h6>
    </li>
  );
};
