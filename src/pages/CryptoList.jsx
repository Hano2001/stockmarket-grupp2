import React, {useEffect, useState} from 'react'
import CryptoItem from '../components/CryptoItem';

export default function CryptoList() {
    const [cryptoList, setCryptoList] = useState(null);
    
    useEffect(()=>{
        const url = "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"

        fetch(url)
        .then(res => res.json())
        .then(data => setCryptoList(data))
    },[])
    return (
        <div className="container">
            <h5>Crypto List</h5>
            {!cryptoList && <p>Loading...</p>}

            <div className="row">
            {cryptoList && Object.entries(cryptoList).map(item =>{
                const key = item[0]
                const value = item[1]
                return <CryptoItem key={key} item={value}/>
            })}
            </div>
        </div>
    )
}
