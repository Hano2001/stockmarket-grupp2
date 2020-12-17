import React from "react";
import { Link } from "react-router-dom";
import { makeTitleCase } from "../utilities/makeTitleCase";

export const MarketItem = ({ marketName }) => {
  const titleCaseName = makeTitleCase(marketName);
  return (
    <li className="shadow-sm mb-5 bg-white rounded" key={marketName}>
      <Link to={`/markets/${marketName}`}>
        <h6>{titleCaseName}</h6>
      </Link>
    </li>
  );
};
