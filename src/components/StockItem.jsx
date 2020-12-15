import React from 'react';
import { Link } from 'react-router-dom';

export const StockItem = ({ market, stock, children }) => {
  return (
    <li
      className="border p-2 col-md-12">
      <Link to={`/markets/${market}/${stock}`}>
        {stock}
      </Link>
      {children}
    </li>
  )
}
