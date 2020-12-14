import React from "react";
import { useFetch } from "../hooks/useFetch";

export const IndexDetailsPage = props => {
  const ticker = props.match.params.ticker;

  const indexInfo = useFetch(
    `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${ticker}.json`
  );

  return (
    <div className="container">
      <div className="row">
        {!indexInfo ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="col-md-12">
              <h2>{indexInfo.name}</h2>
              <h5>Current trading at: €{indexInfo.price}</h5>
            </div>
            <div className="col-md-2">Change 1D {indexInfo.today}%</div>
            <div className="col-md-2">Change 1W {indexInfo.w1}%</div>
            <div className="col-md-2">Change 3Y {indexInfo.y3}%</div>
            <div className="col-md-2">Change 5Y {indexInfo.y5}%</div>
            <div className="col-md-2">Change YTD {indexInfo.ytd}%</div>
          </>
        )}
      </div>
    </div>
  );
};
