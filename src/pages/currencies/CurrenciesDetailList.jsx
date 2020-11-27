import React, { useContext } from 'react'
import { CurrenciesDataContext } from '../../contexts/CurrenciesDataContext';
import ListItemLink from '../../components/ListItemLink';

export default function CurrenciesDetailList(props) {
    const currencyName = props.match.params.currency;
    const { currenciesData } = useContext(CurrenciesDataContext);

    return (
        <div>
            <h2>Currency detail list page</h2>
            <div>
                <ul>
                    {currenciesData && Object.entries(currenciesData[currencyName]).map((currencyItem, index) => {
                        return (
                            <>
                                <ListItemLink
                                    index={index}
                                    linkAddress={`/currencies/${currencyName}/${currencyItem[0]}`}
                                    linkName={currencyItem[0]}
                                />
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
