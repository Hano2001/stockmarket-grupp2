import React, { useEffect, useState } from "react";
import IndexItem from "../components/IndexItem";

export const IndicesPage = () => {
  const [indicesList, setIndicesList] = useState(null);

  useEffect(() => {
    const url =
      "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json";

    fetch(url)
      .then(res => res.json())
      .then(data => setIndicesList(data));
  }, []);

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
