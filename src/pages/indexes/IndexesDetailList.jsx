import React, { useContext } from 'react';
import ListItemLink from '../../components/ListItemLink';
import { IndexesDataContext } from '../../contexts/IndexesDataContext';

export default function IndexesDetailList(props) {
    const { indexesData } = useContext(IndexesDataContext);
    const currencyName = props.match.params.currency;
    return (
        <div>
            <h2>Indexes detail list page</h2>
            <div>
                <ul>
                    {indexesData && Object.entries(indexesData[currencyName]).map((indexesCurrencyItem, index) => {
                        return (
                            <>
                                <ListItemLink
                                    index={index}
                                    linkAddress={`/indexes/${currencyName}/${indexesCurrencyItem[0]}`}
                                    linkName={indexesCurrencyItem[0]}
                                />
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
