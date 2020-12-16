import React from "react";
import IndexItem from "../components/IndexItem";
import { useFetch } from "../hooks/useFetch";

export const IndexListPage = () => {
  const indicesList = useFetch(
    "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
  );

  return (
    <div>
      <h4>Index List</h4>
      <div className="row">
        <h6 className="col-5">Name</h6>
        <h6 className="col-4">Price</h6>
        <h6 className="col-1">Change 1 day</h6>
      </div>
      <ul className="list-unstyled">
        {!indicesList && <p>Loading...</p>}
        {indicesList &&
          Object.entries(indicesList).map(indexItem => {
            const key = indexItem[0];
            const value = indexItem[1];
            return <IndexItem key={key} index={value} />;
          })}
      </ul>
    </div>
  );
};
