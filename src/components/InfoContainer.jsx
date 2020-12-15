import React from "react";
import { useFetch } from "../hooks/useFetch";

export const InfoContainer = ({ url, category }) => {
  const data = useFetch(url);
  
  const sortedData = data
    ? Object.values(data).sort((a, b) => b.today - a.today)
    : [];

  return (
    <div className="p-3 shadow-sm mb-5 bg-white rounded">
      <h1>{category}</h1>
      <div className="row">
        <div className="col-6">
          <h4>Top gainers today</h4>
          {sortedData.slice(0, 3).map((obj) => {
            return (
              <p>
                {obj.name}&nbsp;
                <span className="text-primary">{obj.today}</span>
              </p>
            );
          })}
        </div>
        <div className="col-6">
          <h4>Top losers today</h4>
          {sortedData
            .slice(-3)
            .reverse()
            .map((obj) => {
              return (
                <p>
                  {obj.name}&nbsp; 
                  <span className="text-danger">{obj.today}</span>
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};
