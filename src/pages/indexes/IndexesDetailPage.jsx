import React, { useContext } from 'react';
import { IndexesDataContext } from '../../contexts/IndexesDataContext';

export default function IndexesDetailPage(props) {
    const { indexesData } = useContext(IndexesDataContext);
    const currencyName = props.match.params.currency;
    const indexesName = props.match.params.index;

    return (
        <div>
            <h2>Indexes detail page</h2>
            <div>
                <ul>
                    {indexesData && Object.entries(indexesData[currencyName][indexesName]).map((indexItem, index) => {
                        return (
                            <li key={index}>{indexItem[0]} - {indexItem[1]}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
