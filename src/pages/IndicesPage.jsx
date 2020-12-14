import React from "react";
import IndexItem from "../components/IndexItem";
import { useFetch } from "../hooks/useFetch";

export const IndicesPage = () => {
  const indicesList = useFetch(
    "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
  );

  return (
    <div className="container">
      <div className="row">
        {indicesList &&
          Object.entries(indicesList).map(indexItem => {
            const key = indexItem[0];
            const value = indexItem[1];
            return <IndexItem key={key} index={value} />;
          })}
      </div>
    </div>
  );
};
