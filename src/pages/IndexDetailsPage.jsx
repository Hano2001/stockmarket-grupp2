import React, { useState, useEffect } from "react";

export const IndexDetailsPage = props => {
  const [indexInfo, setIndexInfo] = useState(null);

  useEffect(() => {
    const ticker = props.match.params.ticker;
    const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${ticker}.json`;

    fetch(url)
      .then(res => res.json())
      .then(data => setIndexInfo(data));
  }, []);

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