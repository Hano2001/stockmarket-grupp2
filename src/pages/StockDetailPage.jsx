import React from 'react';
import { Link } from 'react-router-dom';
import checkChange from '../hooks/checkChange';
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
          <ul className="list-unstyled">
            <li>Price: {stockItem.price} USD</li>
            <li>% Change: &nbsp; <span className={`${checkChange(stockItem.today)}`}>{stockItem.today}%</span> </li>
            <li>1 Week: &nbsp; <span className={`${checkChange(stockItem.w1)}`}>{stockItem.w1}%</span> </li>
            <li>Month-to-Date: &nbsp; <span className={`${checkChange(stockItem.mtd)}`}> {stockItem.mtd}%</span></li>
            <li>Year-to-Date: &nbsp; <span className={`${checkChange(stockItem.ytd)}`}>{stockItem.ytd}%</span></li>
            <li>3 Years: &nbsp; <span className={`${checkChange(stockItem.y3)}`}> {stockItem.y3}%</span></li>
            <li>5 Years: &nbsp; <span className={`${checkChange(stockItem.y5)}`}> {stockItem.y5}%</span></li>
          </ul>
        </>
      }
    </div>
  )
}
