import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CryptosDataContext } from '../../contexts/CryptosDataContext';

export default function Cryptos() {
    const { cryptosData } = useContext(CryptosDataContext);

    return (
        <div>
            <h2>Crypto page</h2>
            <ul>         
            {cryptosData && Object.entries(cryptosData).map( (cryptoItems, index) => {
                return (
                <li key={index}>
                    <Link to={`cryptos/${cryptoItems[0]}`}>
                        {cryptoItems[0]}
                    </Link>
                </li>
                )
            })}
            </ul>
        </div>
    )
}
