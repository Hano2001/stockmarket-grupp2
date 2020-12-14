import React, { useState, useEffect } from "react";

export const IndexDetailsPage = props => {
  const [indexInfo, setIndexInfo] = useState(null);
  const ticker = props.match.params.ticker;

  useEffect(() => {
    const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${ticker}.json`;

    fetch(url)
      .then(res => res.json())
      .then(data => setIndexInfo(data));
  }, [ticker]);

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
            <div className="col-md-2">
              Change 1D &nbsp;
              <span
                className={indexInfo.today > 0 ? "text-primary" : "text-danger"}
              >
                {indexInfo.today}
              </span>
            </div>
            <div className="col-md-2">
              Change 1W &nbsp;
              <span
                className={indexInfo.w1 > 0 ? "text-primary" : "text-danger"}
              >
                {indexInfo.w1}
              </span>
            </div>
            <div className="col-md-2">
              Change 3Y &nbsp;
              <span
                className={indexInfo.y3 > 0 ? "text-primary" : "text-danger"}
              >
                {indexInfo.y3}
              </span>
            </div>
            <div className="col-md-2">
              Change 5Y &nbsp;
              <span
                className={indexInfo.y5 > 0 ? "text-primary" : "text-danger"}
              >
                {indexInfo.y5}
              </span>
            </div>
            <div className="col-md-2">
              Change YTD &nbsp;
              <span
                className={indexInfo.ytd > 0 ? "text-primary" : "text-danger"}
              >
                {indexInfo.ytd}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
