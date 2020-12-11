import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import CurrenciesDetailPage from './pages/CurrenciesDetailPage';
import CurrenciesPage from './pages/CurrenciesPage'

function App() {
  return (
    <div className="Container">Stockmarket

    <Link to="/crypto">Crypto</Link>
    <Link to="/currencies">Currencies</Link>
    <Link to="/indices">Indices</Link>
    <Link to="/markets">Markets</Link>

    <Switch>
    <Route path="/currencies/:ticker" component={CurrenciesDetailPage} />
      <Route path="/crypto">
        crypto
      </Route>
      <Route path="/currencies">
      <CurrenciesPage />
      </Route>
      

      <Route path="/indices">
    indices
      </Route>

      <Route path="/markets">
markets
      </Route>


      <Route path="/">
        
      </Route>
    </Switch>
    </div>
  )
}

export default App;
