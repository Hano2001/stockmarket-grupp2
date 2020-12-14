import React from 'react';
import {useFetch} from '../hooks/useFetch'

export const StockDetailPage = (props) => {
  const market = props.match.params.market;
  const stock = props.match.params.stock;
  const stockItem = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`)
  
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
