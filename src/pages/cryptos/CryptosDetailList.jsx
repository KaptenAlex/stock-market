import React, { useContext } from 'react';
import ListItemLink from '../../components/ListItemLink';
import { CryptosDataContext } from '../../contexts/CryptosDataContext';

export default function CryptosDetailList(props) {
    const { cryptosData } = useContext(CryptosDataContext);
    const currencyName = props.match.params.currency;

    return (
        <div>
            <h2>Cryptos detail list page</h2>
            <ul>
                {cryptosData && Object.entries(cryptosData[currencyName]).map((currencyItems, index) => {
                    return (
                        <>
                            <ListItemLink
                                index={index}
                                linkAddress={`/cryptos/${currencyName}/${currencyItems[0]}`}
                                linkName={currencyItems[0]}
                            />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}
