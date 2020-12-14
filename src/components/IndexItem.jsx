import React from "react";
import { Link } from "react-router-dom";

export default function IndexItem({ index }) {
  return (
    <div className="container">
      <div className="row shadow-sm p-3 mb-5 bg-white rounded">
        <h1>{index.name}</h1>
        <p>({index.ticker})</p>
        <div className="col-md-4 ml-3">
          <div className="row">
            <h4>Current price: &nbsp;</h4>
            <h4> €{index.price}</h4>
          </div>
          <div className="row">
            <h4>Change 1D: &nbsp;</h4>
            <h4 className={index.today > 0 ? "text-primary" : "text-danger"}>
              {index.today}%
            </h4>
          </div>
        </div>

        <div className="col-md-12">
          <Link
            className="btn btn-primary btn-block"
            to={`/indexes/${index.ticker}`}
          >
            Go to index
          </Link>
        </div>
      </div>
    </div>
  );
}
