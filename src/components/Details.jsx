import React from "react";
import checkChange from "../utilities/checkChange";
import changeCurrency from "../utilities/changeCurrency";

export default function Details({ props }) {
  const currency = changeCurrency(props.market);

  return (
    <>
      <div className="col-md-12">
        <h2> {props.name}</h2>
        <h5>
          Current trading at: {props.price} {currency}
        </h5>
      </div>

      <div className="col-sm-4 mb-2">
        Change 1D: &nbsp;
        <span className={checkChange(props.today)}>{props.today}%</span>
      </div>
      <div className="col-sm-4 mb-2">
        Change 1W : &nbsp;
        <span className={checkChange(props.w1)}>{props.w1}%</span>
      </div>
      <div className="col-sm-4 mb-2">
        Change 1M: &nbsp;
        <span className={checkChange(props.mtd)}>{props.mtd}%</span>
      </div>

      <div className="col-sm-4 mb-2">
        Change 3y: &nbsp;
        <span className={checkChange(props.y3)}>{props.y3}%</span>
      </div>

      <div className="col-sm-4 mb-2">
        Change 5y: &nbsp;
        <span className={checkChange(props.y5)}>{props.y5}%</span>
      </div>

      <div className="col-sm-4 mb-2">
        Change Ytd: &nbsp;
        <span className={checkChange(props.ytd)}>{props.ytd}%</span>
      </div>
    </>
  );
}
