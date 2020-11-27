import React, { useContext } from 'react'
import { MarketsDataContext } from '../../contexts/MarketsDataContext';
import { Link } from 'react-router-dom';

export default function Markets() {
    const { marketsData } = useContext(MarketsDataContext);

    return (
        <div>
            <h2>Markets page</h2>
            <ul>
                {marketsData && Object.entries(marketsData).map((marketItem, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/markets/${marketItem[0]}`}>
                                {marketItem[0]}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
