import React, {useState, useEffect} from 'react'

export default function CryptoDetails(props) {
    const id = props.match.params.ticker
    const[cryptoItem, setCryptoItem] = useState(null)

    useEffect(()=> {
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/${id}.json`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setCryptoItem(data))
    },[])
    return (
        <div>
            <h1>{cryptoItem.name}</h1>
        </div>
    )
}
