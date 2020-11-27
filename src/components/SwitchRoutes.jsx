import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

import { CurrenciesDataContext } from '../contexts/CurrenciesDataContext';
import { CryptosDataContext } from '../contexts/CryptosDataContext';
import { IndexesDataContext } from '../contexts/IndexesDataContext';
import { MarketsDataContext } from '../contexts/MarketsDataContext';

import Currencies from '../pages/currencies/Currencies';

import Cryptos from '../pages/cryptos/Cryptos';
import CryptosDetailList from '../pages/cryptos/CryptosDetailList';
import CryptosDetailPage from '../pages/cryptos/CryptosDetailPage';

import Indexes from '../pages/indexes/Indexes';
import IndexesDetailList from '../pages/indexes/IndexesDetailList';
import IndexesDetailPage from '../pages/indexes/IndexesDetailPage';

import Markets from '../pages/markets/Markets';
import MarketDetailList from '../pages/markets/MarketsDetailList';
import MarketCompanyDetail from '../pages/markets/MarketsCompanyDetail';
import CurrenciesDetailList from '../pages/currencies/CurrenciesDetailList';
import CurrenciesDetailPage from '../pages/currencies/CurrenciesDetailPage';


export default function SwitchRoutes() {
    const [marketsData, setMarketsData] = useState(null);
    const [cryptosData, setCryptoData] = useState(null);
    const [indexesData, setIndexesData] = useState(null);
    const [currenciesData, setCurrenciesData] = useState(null);
  
  
    function fetchStockMarketData() {
      fetch('https://market-data-collector.firebaseio.com/market-collector.json')
        .then(res => res.json())
        .then(data => {
          setMarketsData(data.markets);
          setCryptoData(data.crypto);
          setIndexesData(data.indexes);
          setCurrenciesData(data.currencies);
        });
    }
  
    useEffect(() => {
      fetchStockMarketData();
    }, []);
    
    return (
        <div>
            <Switch>
                <MarketsDataContext.Provider value={{ marketsData }}>
                    <CryptosDataContext.Provider value={{ cryptosData }}>
                        <IndexesDataContext.Provider value={{ indexesData }}>
                            <CurrenciesDataContext.Provider value={{ currenciesData }}>

                                <Route exact path="/cryptos/:currency/:cryptosName" component={CryptosDetailPage} />
                                <Route exact path="/cryptos/:currency" component={CryptosDetailList} />
                                <Route exact path="/cryptos" component={Cryptos} />

                                <Route exact path="/currencies" component={Currencies} />
                                <Route exact path="/currencies/:currency" component={CurrenciesDetailList} />
                                <Route exact path="/currencies/:currency/:company" component={CurrenciesDetailPage} />

                                <Route exact path="/indexes" component={Indexes} />
                                <Route exact path="/indexes/:currency" component={IndexesDetailList} />
                                <Route exact path="/indexes/:currency/:index" component={IndexesDetailPage} />

                                <Route exact path="/markets/:marketName/:companyName" component={MarketCompanyDetail} />
                                <Route exact path="/markets/:marketName" component={MarketDetailList} />
                                <Route exact path="/markets" component={Markets} />

                                <Route exact path="/" component={Home} />
                            </CurrenciesDataContext.Provider>
                        </IndexesDataContext.Provider>
                    </CryptosDataContext.Provider>
                </MarketsDataContext.Provider>
            </Switch>
        </div>
    )
}
