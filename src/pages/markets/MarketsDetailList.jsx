import React, { useContext } from 'react'
import { MarketsDataContext } from '../../contexts/MarketsDataContext';
import ListItemLink from '../../components/ListItemLink';

export default function MarketDetailList(props) {
    const { marketsData } = useContext(MarketsDataContext);
    const marketName = props.match.params.marketName;

    return (
        <div>
            <h2>Market detail list</h2>
            <h3>{marketsData && marketName}</h3>
            <ul>
                {marketsData && Object.entries(marketsData[marketName]).map((companyItem, index) => {
                    return (
                        <>
                            <ListItemLink
                                index={index}
                                linkAddress={`/markets/${marketName}/${companyItem[0]}`}
                                linkName={companyItem[0]}
                            />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}
