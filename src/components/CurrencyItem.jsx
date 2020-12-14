import React from "react";
import { Link } from "react-router-dom";

export default function CurrencyItem({ currency }) {
  return (
    <div className="container">
      <div className="row shadow-sm p-3 mb-5 bg-white rounded">
        <h1> Namn: {currency.name}</h1>
        <p>({currency.ticker})</p>
        <div className="col-md-4 ml-3">
          <div className="row">
            <h6>Current price: €{currency.price}</h6>
          </div>
          <div className="row">
            <h6>Change 1D: {currency.today}%</h6>
          </div>
        </div>

        <div className="col-md-12">
          <Link
            className="btn btn-primary btn-block"
            to={`/currencies/${currency.ticker}`}
          >
            Go to Currencie
          </Link>
        </div>
      </div>
    </div>
  );
}