import React from 'react';
import { MarketItem } from '../components/MarketItem';
import {useFetch} from '../hooks/useFetch'

export const MarketListPage = () => {

  const marketList = useFetch("https://market-data-collector.firebaseio.com/market-collector/markets.json")

  return (
    <>
      {!marketList && <p>Loading...</p>}
      <ul>
        {marketList && Object.keys(marketList).map(marketName => {
          return (
           <MarketItem key={marketName} marketName={marketName}/>
          )
        })}
      </ul>
    </>
  )
}
