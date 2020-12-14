import React from 'react';
import { StockItem } from '../components/StockItem';
import {useFetch} from '../hooks/useFetch'

export const StockListPage = (props) => {
  const market = props.match.params.market;
  const stockList = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}.json`)

  return (
    <>
      {!stockList && <p>Loading...</p>}
      <ul>
        <h5>{market}</h5>
        {stockList && Object.entries(stockList).map(stock => {
          const [key, value] = stock;
          return (<>
            <StockItem
              key={key}
              market={market}
              stock={value.ticker}
            >
              <p>Price: {value.price} USD</p>
              <p>% Change: {value.today}%</p>
            </StockItem>
          </>
          )
        })}
      </ul>
    </>
  )
}
