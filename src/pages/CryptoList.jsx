import React from 'react'
import CryptoItem from '../components/CryptoItem';
import { useFetch } from '../hooks/useFetch';

export default function CryptoList() {
    const url = "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
    const cryptoList = useFetch(url)
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
