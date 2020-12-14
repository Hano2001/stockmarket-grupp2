import React from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const StockDetailPage = (props) => {
  const market = props.match.params.market;
  const stock = props.match.params.stock;
  const stockItem = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`)

  return (
    <div>
      {!stockItem && <p>Loading...</p>}
      {stockItem &&
        <>
          <Link to={`/markets`}>
            <h5>Markets</h5>
          </Link>
          <Link to={`/markets/${market}`}>
            <h5>/ {market}</h5>
          </Link>
          <h1>{stockItem.name}</h1>
          <ul>
            <li>Price: {stockItem.price} USD</li>
            <li>% Change: {stockItem.today}%</li>
            <li>1 Week: {stockItem.w1}%</li>
            <li>Month-to-Date: {stockItem.mtd}%</li>
            <li>Year-to-Date: {stockItem.ytd}%</li>
            <li>3 Years: {stockItem.y3}%</li>
            <li>5 Years: {stockItem.y5}%</li>
          </ul>
        </>
      }
    </div>
  )
}
