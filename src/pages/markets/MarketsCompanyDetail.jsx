import React, { useContext } from 'react'
import { MarketsDataContext } from '../../contexts/MarketsDataContext';

export default function MarketCompanyDetail(props) {
    const { marketsData } = useContext(MarketsDataContext);
    const marketName = props.match.params.marketName;
    const companyName = props.match.params.companyName;

    return (
        <div>
            <h2>Market company detail page</h2>
            <ul>
                {marketsData && Object.entries(marketsData[marketName][companyName]).map( (companyInfo, index) => {
                    return (
                        <li key={index}>
                            <p>{companyInfo[0]}: {companyInfo[1]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
