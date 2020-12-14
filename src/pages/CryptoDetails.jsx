import React, {useState, useEffect} from 'react'

export default function CryptoDetails(props) {
    const id = props.match.params.ticker
    const[cryptoItem, setCryptoItem] = useState(null)
    

    useEffect(()=> {
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setCryptoItem(data))
    },[id])
    
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
