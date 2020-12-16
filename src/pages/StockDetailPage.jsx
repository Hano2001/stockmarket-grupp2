import React from 'react';
import { Link } from 'react-router-dom';
import { makeTitleCase } from '../components/makeTitleCase';
import checkChange from '../hooks/checkChange';
import { useFetch } from '../hooks/useFetch';

export const StockDetailPage = (props) => {
  const market = props.match.params.market;
  const titleCaseName = makeTitleCase(market);
  const stock = props.match.params.stock;
  const stockItem = useFetch(`https://market-data-collector.firebaseio.com/market-collector/markets/${market}/${stock}.json`)

    return (
      <div>
        <Link to={`/markets`}>
            <h5>Markets</h5>
          </Link>
          <Link to={`/markets/${market}`}>
            <h5>/ {titleCaseName}</h5>
          </Link>
        <div className="row">
          {!stockItem ? (
            <p>Loading...</p>
          ) : (
            <>  <div className="col-12">
                <h2 >{stockItem.name}</h2>
                <h5 >Current trading at: €{stockItem.price}</h5>
                </div>
              <div className="col-sm-4 mb-2">
                Change 1D &nbsp;
                <span
                  className={checkChange(stockItem.today)}
                >
                  {stockItem.today}%
                </span>
              </div>
              <div className="col-sm-4 mb-2">
                Change 1W &nbsp;
                <span
                  className={checkChange(stockItem.w1)}
                >
                  {stockItem.w1}%
                </span>
              </div>
              <div className="col-sm-4 mb-2">
                Change 1M &nbsp;
                <span
                  className={checkChange(stockItem.mtd)}
                >
                  {stockItem.mtd}%
                </span>
              </div>
              <div className="col-sm-4 mb-2">
                Change 3Y &nbsp;
                <span
                  className={checkChange(stockItem.y3)}
                >
                  {stockItem.y3}%
                </span>
              </div>
              <div className="col-sm-4 mb-2">
                Change 5Y &nbsp;
                <span
                  className={checkChange(stockItem.y5)}
                >
                  {stockItem.y5}%
                </span>
              </div>
              <div className="col-sm-4 mb-2">
                Change YTD &nbsp;
                <span
                  className={checkChange(stockItem.ytd)}
                >
                  {stockItem.ytd}%
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    );
         
}
