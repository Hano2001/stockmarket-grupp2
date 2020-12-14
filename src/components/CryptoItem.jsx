import React from 'react'
import {Link} from 'react-router-dom'
export default function CryptoItem({item}) {
    
    return (
        <div className="mb-4 col-md-4 shadow p-3">
        <p>NAME: {item.name}</p>
        <p>LINK: {item.link}</p>
        <p>TODAY: {item.today}</p>
        <Link  className="btn btn-block btn-danger" to={`/crypto/${item.ticker}`}>Detaljer</Link>
        </div>
    )
      
}
