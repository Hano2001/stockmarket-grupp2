import React, {useState, useEffect} from 'react'

export default function CryptoDetails(props) {
    const id = props.match.params.ticker
    const[cryptoItem, setCryptoItem] = useState(null)
    

    useEffect(()=> {
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setCryptoItem(data))
    },[])
    {console.log(cryptoItem)}
    return ( <div>
         {! cryptoItem  && 
            <p>Loading...</p>
         }

         {cryptoItem && ( <div>
             <p>NAME: {cryptoItem.name}</p>
             <p>PRICE: {cryptoItem.price}</p>
             <p>TODAY: {cryptoItem.today}</p>
             </div>
         )}
        </div>
        
    )
}
