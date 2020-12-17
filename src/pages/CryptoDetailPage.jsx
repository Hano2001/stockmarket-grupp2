import React from "react";
import { Link } from "react-router-dom";
import checkChange from "../hooks/checkChange";
import { useFetch } from "../hooks/useFetch";
import changeCurrency from "../hooks/changeCurrency";

export default function CryptoDetailPage(props) {
  const id = props.match.params.ticker;
  const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;
  const cryptoInfo = useFetch(url);

  return (
    <div className="container">
      <Link to={`/crypto`}>
        <h5>Back to Crypto List</h5>
      </Link>
      <div className="row">
        {!cryptoInfo ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="col-md-12">
              <h2>{cryptoInfo.name}</h2>
              <h5>
                Current Trading At: {cryptoInfo.price}{" "}
                {changeCurrency(cryptoInfo.market)}
              </h5>
            </div>
            <div className="col-md-3">
              Change 1D: &nbsp;
              <span className={`${checkChange(cryptoInfo.today)}`}>
                {" "}
                {cryptoInfo.today}%
              </span>
            </div>
            <div className="col-md-3">Source: {cryptoInfo.source}</div>
            <div className="col-md-6">Link: {cryptoInfo.link}</div>
          </>
        )}
      </div>
    </div>
  );
}
