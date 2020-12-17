import React from "react";
import CryptoItem from "../components/CryptoItem";
import ListHeading from "../components/ListHeading";
import { useFetch } from "../hooks/useFetch";

export default function CryptoListPage() {
  const url =
    "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json";
  const cryptoList = useFetch(url);
  return (
    <div>
      <h5>Crypto List</h5>
      <ListHeading />
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
