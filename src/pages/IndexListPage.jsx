import React from "react";
import IndexItem from "../components/IndexItem";
import ListHeading from "../components/ListHeading";
import { useFetch } from "../utilities/useFetch";

export const IndexListPage = () => {
  const indicesList = useFetch(
    "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
  );

  return (
    <div>
      <h4>Index List</h4>
      <ListHeading />
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
