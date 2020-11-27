import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IndexesDataContext } from '../../contexts/IndexesDataContext';

export default function Indexes() {
    const { indexesData } = useContext(IndexesDataContext);

    return (
        <div>
            <h2>Indexes page</h2>
            <div>
                <ul>
                    {indexesData && Object.entries(indexesData).map((indexItem, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/indexes/${indexItem[0]}`}>
                                    {indexItem[0]}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
