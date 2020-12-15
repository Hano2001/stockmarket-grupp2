import React from "react";
import { Link } from "react-router-dom";

export const MarketItem = ({ marketName }) => {
  return (
    <li className="shadow-sm mb-5 bg-white rounded" key={marketName}>
      <Link to={`/markets/${marketName}`}>
        <h4>{marketName}</h4>
      </Link>
    </li>
  );
};
