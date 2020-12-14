import React, {useEffect, useState} from 'react'

export default function CurrenciesDetailPage(props) {
    
    const [currencyItem, setCurrencyItem] = useState(null)
    console.log(props)
    useEffect(() => {
        const ticker  = props.match.params.ticker
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${ticker}.json`
    
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrencyItem(data))
    
    }, [])
    return (
        <div className="container">
            <div className="row">
            {!currencyItem ? <p>Loading</p> : <h2> {currencyItem.name}</h2> }
            
                
                
            </div>
        </div>
    )
}
