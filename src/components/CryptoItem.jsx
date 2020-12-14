import React from 'react'
import {Link} from 'react-router-dom'
export default function CryptoItem({item}) {
    
    return (
        <div className="container">
        <div className=" row shadow-sm p-3 mb-5 bg-white rounded">
        <h1>{item.name}</h1>
        <p>({item.ticker})</p>
        <div className="col-md-4 ml-3">
          <div className="row">
            <h4>Current price: &nbsp;</h4>
            <h4> €{item.price}</h4>
          </div>
          <div className="row">
            <h4>Change 1D: &nbsp;</h4>
            <h4>{item.today}%</h4>
          </div>
        </div>
        <Link  className="btn btn-block btn-danger" to={`/crypto/${item.ticker}`}>Detaljer</Link>
        </div>
        </div>
    )
      
}
