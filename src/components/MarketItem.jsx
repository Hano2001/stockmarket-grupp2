import React from 'react';
import { Link } from 'react-router-dom';

export const MarketItem = ({marketName}) => {
  return (
    <li key={marketName}>
      <Link to={`/markets/${marketName}`}>
        {marketName}
      </Link>
    </li>
  )
}
