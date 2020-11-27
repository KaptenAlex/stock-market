import React, { useContext } from 'react'
import { CurrenciesDataContext } from '../../contexts/CurrenciesDataContext';
import { Link } from 'react-router-dom';

export default function Currencies() {
    const { currenciesData } = useContext(CurrenciesDataContext);

    return (
        <div>
            <h2>Currencies page</h2>
            <div>
                <ul>
                    {currenciesData && Object.entries(currenciesData).map((currencyItem, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/currencies/${currencyItem[0]}`}>
                                    {currencyItem[0]}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
