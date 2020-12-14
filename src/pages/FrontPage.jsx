import React from 'react'
import CryptoInfo from '../components/frontpage/CryptoInfo'
import CurrencyInfo from '../components/frontpage/CurrencyInfo'
import IndexInfo from '../components/frontpage/IndexInfo'
import StockholmInfo from '../components/frontpage/StockholmInfo'

//Hämta data från alla endpoints. Crypto, Currency, Index, Stockholmsbörsen, gör detta i varje enskild komponent?
//En bootstrap komponent som man fyller med data? bootstrap-kort kanske? Skapa en array som sorteras. mappa 5 första i ena och 5 sistsa i andra
//för varje lägg in en komponent som visar topp 5 vinnare och topp 5 förlorare för varje kategori.


export const FrontPage = () => {
    return (
        <div>
            <CryptoInfo />
            <CurrencyInfo />
            <IndexInfo />
            <StockholmInfo />
        </div>
    )
}
