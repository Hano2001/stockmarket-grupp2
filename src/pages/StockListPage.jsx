import React, { useEffect, useState } from 'react';
import { StockItem } from '../components/StockItem';

export const StockListPage = (props) => {
  const [stockList, setStockList] = useState(null);
  const market = props.match.params.market;

  useEffect(() => {
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${market}.json`;
    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      setStockList(data)
    }
    fetchData(url)
  }, [market]);

  return (
    <>
      {!stockList && <p>Loading...</p>}
      <ul>
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
