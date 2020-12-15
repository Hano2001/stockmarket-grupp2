import React from 'react';
import { Link } from 'react-router-dom';
import { StockItem } from '../components/StockItem';
import { useFetch } from '../hooks/useFetch';

export const StockListPage = (props) => {
  const market = props.match.params.market;
  const stockList = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}.json`)

  return (
    <div className="container">
      {!stockList && <p>Loading...</p>}
      <Link to={`/markets`}>
        <h5>Markets</h5>
      </Link>
      <h5>/ {market}</h5>
      <ul className="list-unstyled row shadow-sm p-3 mb-5 bg-white rounded">
        {stockList && Object.entries(stockList).map(stock => {
          const [key, value] = stock;
          return (
            <StockItem
              key={key}
              market={market}
              stock={value.ticker}
            >
              <div className="col-md-4 ml-3">
                <div className="row">
                  <h6>Price: {value.price} USD</h6>
                </div>
                <div className="row">
                  <h6>% Change: {value.today}%</h6>
                </div>
              </div>
            </StockItem>
          )
        })}
      </ul>
    </div>
  )
}
