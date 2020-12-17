import React from "react";
import { InfoContainer } from "../components/InfoContainer";

export const FrontPage = () => {
  return (
    <>
      <InfoContainer
        url="https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
        category="Crypto"
      />
      <InfoContainer
        url="https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
        category="Currency"
      />
      <InfoContainer
        url="https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
        category="Index"
      />
      <InfoContainer
        url="https://market-data-collector.firebaseio.com/market-collector/markets/stockholmsborsen.json"
        category="Stockholmsbörsen"
      />
    </>
  );
};
