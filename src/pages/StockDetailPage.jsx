import React, { useEffect, useState } from 'react';

export const StockDetailPage = (props) => {
  const [stockItem, setStockItem] = useState(null);
  const market = props.match.params.market;
  const stock = props.match.params.stock;

  useEffect(() => {
    const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`;
    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      setStockItem(data);
    }
    fetchData(url)
  }, [market, stock]);

  return (
    <div>
      {!stockItem && <p>Loading...</p>}
      {stockItem &&
        <>
          <h5>{market}</h5>
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
