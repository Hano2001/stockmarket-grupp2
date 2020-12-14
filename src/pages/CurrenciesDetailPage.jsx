import React, {useEffect, useState} from 'react'

export default function CurrenciesDetailPage(props) {
    
    const [currencyItem, setCurrencyItem] = useState(null)
    
    const ticker  = props.match.params.ticker
    useEffect(() => {
        
        const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${ticker}.json`
    
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrencyItem(data))
    
    }, [ticker])
    return (
        <div className="container">
            {!currencyItem ? <p>Loading</p> : 
            <>
            <div className="col-md-12">
                <h2> {currencyItem.name}</h2>
            </div>
            <div className = "col-md-4">
                <h4>Price SEK: {currencyItem.price}</h4>
            </div>
            <div className ="row">
            <div className = "col-md-2">
                <p>Today: {currencyItem.today}%</p>
            </div>
            <div className = "col-md-2">
                <p>1week: {currencyItem.w1}%</p>
            </div>
            </div>
            <div className ="row">
            <div className = "col-md-2"> 
                <p>1mtd: {currencyItem.mtd}%</p>
            </div>
            <div className = "col-md-2"> 
                <p>3y: {currencyItem.y3}%</p>
            </div>
            </div>
            <div className ="row">
            <div className = "col-md-2"> 
                <p>5y: {currencyItem.y5}%</p>
            </div>
            <div className = "col-md-2"> 
                <p>ytd: {currencyItem.ytd}%</p>
            </div>
            </div>

            </>
             }  
            
        </div>
    )
}
