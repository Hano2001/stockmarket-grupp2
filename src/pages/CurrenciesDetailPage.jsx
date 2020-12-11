import React, {useEffect, useState} from 'react'

export default function CurrenciesDetailPage(props) {
    
    const [currencieItem, setCurrencieItem] = useState(null)
    console.log(props)
    useEffect(() => {
        const ticker  = props.match.params.ticker
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${ticker}.json`
    
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrencieItem(data))
    
    }, [])
    return (
        <div className="container">
            <div className="row">
            {!currencieItem ? <p>Loading</p> : <h2> {currencieItem.name}</h2> }
            
                
                
            </div>
        </div>
    )
}
