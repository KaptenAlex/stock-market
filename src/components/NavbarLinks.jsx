import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarLinks() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/cryptos">Cryptos</Link>
                </li>

                <li>
                    <Link to="/currencies">Currencies</Link>
                </li>

                <li>
                    <Link to="/indexes">Indexes</Link>
                </li>

                <li>
                    <Link to="/markets">Markets</Link>
                </li>
            </ul>
        </div>
    )
}
