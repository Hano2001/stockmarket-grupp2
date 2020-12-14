import React from 'react'
import { useFetch } from '../hooks/useFetch'

export default function CryptoDetails(props) {
    const id = props.match.params.ticker
    const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;
    const cryptoItem = useFetch(url)
  
    
    return ( <div>
         {! cryptoItem  && 
            <p>Loading...</p>
         }

         {cryptoItem && ( <div className="col-md-12">
             <h2>NAME: {cryptoItem.name}</h2>
             <h5>PRICE: {cryptoItem.price}</h5>
             <div className="col-md-2">Change 1D {cryptoItem.today}%</div>
             </div>
         )}
        </div>


        
    )
}
