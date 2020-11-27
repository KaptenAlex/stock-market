import React, { useContext } from 'react';
import { CurrenciesDataContext } from '../../contexts/CurrenciesDataContext';

export default function CurrenciesDetailPage(props) {
    const { currenciesData } = useContext(CurrenciesDataContext);
    const currencyName = props.match.params.currency;
    const companyName = props.match.params.company;

    return (
        <div>
            <h2>Currencies detail page</h2>
            <div>
                <ul>
                    {currenciesData && Object.entries(currenciesData[currencyName][companyName]).map((currencyCompanyItem, index) => {
                        return (
                            <li key={index}>{currencyCompanyItem[0]} - {currencyCompanyItem[1]}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
