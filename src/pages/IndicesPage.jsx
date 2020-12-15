import React from "react";
import IndexItem from "../components/IndexItem";
import { useFetch } from "../hooks/useFetch";

export const IndicesPage = () => {
  const indicesList = useFetch(
    "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
  );

  return (
    <div className="container">
      <h4>Indices List</h4>

      <div className="row">
        <h6 className="col-md-5">Name</h6>
        <h6 className="col-md-5">Price</h6>
        <h6 className="col-md-2">Change 1 day</h6>
      </div>
      {!indicesList && <p>Loading...</p>}

      {indicesList &&
        Object.entries(indicesList).map(indexItem => {
          const key = indexItem[0];
          const value = indexItem[1];
          return <IndexItem key={key} index={value} />;
        })}
    </div>
  );
};
