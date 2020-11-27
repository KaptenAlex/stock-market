import React from 'react'
import { Link } from 'react-router-dom';

export default function ListItemLink(props) {
    return (
        <li key={props.index}>
            <Link to={props.linkAddress}>
                {props.linkName}
            </Link>
        </li>
    )
}
