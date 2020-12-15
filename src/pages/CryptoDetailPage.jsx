import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function CryptoDetailPage(props) {
  const id = props.match.params.ticker;
  const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;
  const cryptoItem = useFetch(url);

  return (
    <div className="container">
      <Link to={`/crypto`}>
        <h5>Back to Crypto List</h5>
      </Link>
      <div className="row">
        {!cryptoItem ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="col-md-12">
              <h2>NAME: {cryptoItem.name}</h2>
              <h5>Current Trading At: {cryptoItem.price}</h5>
            </div>
            <div className="col-md-3">Change 1D: {cryptoItem.today}%</div>
            <div className="col-md-3">Source: {cryptoItem.source}</div>
            <div className="col-md-6">Link: {cryptoItem.link}</div>
          </>
        )}
      </div>
    </div>
  );
}
