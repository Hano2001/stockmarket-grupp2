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
        <h1>{stockItem.name}</h1>
        /* add more details here */
      }
    </div>
  )
}
