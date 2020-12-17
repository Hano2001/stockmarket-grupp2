import React from "react";
import { Link } from "react-router-dom";
import Details from "../components/Details";
import { useFetch } from "../utilities/useFetch";

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
          <Details props={indexInfo} />
        )}
      </div>
    </div>
  );
};
