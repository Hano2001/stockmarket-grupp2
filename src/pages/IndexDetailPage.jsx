import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";
import { useFetch } from "../hooks/useFetch";

export const IndexDetailPage = props => {
  const ticker = props.match.params.ticker;
  
  const indexInfo = useFetch(
    `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${ticker}.json`
  );
  
  return (
    <div>
      <Link to={`/indexes`}>
        <h5>Back to Index List</h5>
      </Link>
      <div className="row">
        {!indexInfo ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="col-12">
              <h2>{indexInfo.name}</h2>
              <h5>Current trading at: €{indexInfo.price}</h5>
            </div>
            <div className="col-sm-4 mb-2">
              Change 1D &nbsp;
              <span
                className={checkChange(indexInfo.today)}
              >
                {indexInfo.today}%
              </span>
            </div>
            <div className="col-sm-4 mb-2">
              Change 1W &nbsp;
              <span
                className={checkChange(indexInfo.w1)}
              >
                {indexInfo.w1}%
              </span>
            </div>
            <div className="col-sm-4 mb-2">
              Change 1M &nbsp;
              <span
                className={checkChange(indexInfo.mtd)}
              >
                {indexInfo.mtd}%
              </span>
            </div>
            <div className="col-sm-4 mb-2">
              Change 3Y &nbsp;
              <span
                className={checkChange(indexInfo.y3)}
              >
                {indexInfo.y3}%
              </span>
            </div>
            <div className="col-sm-4 mb-2">
              Change 5Y &nbsp;
              <span
                className={checkChange(indexInfo.y5)}
              >
                {indexInfo.y5}%
              </span>
            </div>
            <div className="col-sm-4 mb-2">
              Change YTD &nbsp;
              <span
                className={checkChange(indexInfo.ytd)}
              >
                {indexInfo.ytd}%
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
