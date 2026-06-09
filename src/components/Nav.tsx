import { Link } from 'react-router-dom';
import React, { JSX } from 'react';

const Nav = (): JSX.Element => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;