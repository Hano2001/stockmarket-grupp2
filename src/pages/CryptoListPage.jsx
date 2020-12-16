import React from "react";
import CryptoItem from "../components/CryptoItem";
import { useFetch } from "../hooks/useFetch";

export default function CryptoListPage() {
  const url =
    "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json";
  const cryptoList = useFetch(url);
  return (
    <div>
      <h5>Crypto List</h5>
      <div className="row">
        <h6 className="col-5">Name</h6>
        <h6 className="col-4">Price</h6>
        <h6 className="col-1">Change 1 day</h6>
      </div>
      <ul className="list-unstyled">
        {!cryptoList && <p>Loading...</p>}
        {cryptoList &&
          Object.entries(cryptoList).map(item => {
            const key = item[0];
            const value = item[1];
            return <CryptoItem key={key} item={value} />;
          })}
      </ul>
    </div>
  );
}
