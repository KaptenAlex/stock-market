import React, { useContext } from 'react'
import { CryptosDataContext } from '../../contexts/CryptosDataContext';

export default function CryptosDetailPage(props) {
    const { cryptosData } = useContext(CryptosDataContext);
    const currencyName = props.match.params.currency;
    const cryptosName = props.match.params.cryptosName;

    return (
        <div>
            <h2>Crypto detail page</h2>
            <ul>
                {cryptosData && Object.entries(cryptosData[currencyName][cryptosName]).map( (cryptoInfo, index) => {
                    return (
                        <li key={index}>
                            <p>{cryptoInfo[0]}: {cryptoInfo[1]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
