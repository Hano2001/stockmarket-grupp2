import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MarketListPage = () => {
  const [marketList, setMarketList] = useState(null);

  useEffect(() => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/markets.json";
    async function fetchData(url) {
      const res = await fetch(url);
      const data = await res.json();
      setMarketList(data)
    }
    fetchData(url)
  }, []);

  return (
    <>
      {!marketList && <p>Loading...</p>}
      <ul>
        {marketList && Object.keys(marketList).map(market => {
          return (
            <li key={market}>
              <Link to={`/markets/${market}`}>
                {market}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}