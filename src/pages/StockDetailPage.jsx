import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../components/Details';
import { makeTitleCase } from '../components/makeTitleCase';
import { useFetch } from '../hooks/useFetch';

export const StockDetailPage = (props) => {
  const market = props.match.params.market;
  const titleCaseName = makeTitleCase(market);
  const stock = props.match.params.stock;
  const stockInfo = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`)

    return (
      <div>
        <Link to={`/markets`}>
            <h5>Markets</h5>
          </Link>
          <Link to={`/markets/${market}`}>
            <h5>/ {titleCaseName}</h5>
          </Link>
        <div className="row">
          {!stockInfo ? (
            <p>Loading...</p>
          ) : (
            <Details props={stockInfo} />
          )}
        </div>
      </div>
    );
         
}
