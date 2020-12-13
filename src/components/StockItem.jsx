import React from 'react';
import { Link } from 'react-router-dom';

export const StockItem = ({ market, stock }) => {
  return (
    <li>
      <Link to={`/markets/${market}/${stock.ticker}`}>
        {stock.name}
      </Link>
    </li>
  )
}
