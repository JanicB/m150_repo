import { Link } from 'react-router-dom'
import React from 'react';
import { CartButton as Cart } from '../CartButton/CartButton';

import './style.scss';

export const Header = () => (
    <div className="header--container">
        <div className="header">
            <Link to="/" className="header--logo">
                StarWars
            </Link>
        </div>
        <Cart />
    </div>
)