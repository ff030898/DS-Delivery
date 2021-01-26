import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logotipo.svg';
import './style.css';

function Header() {
    return (
        <header className="main-header">
            <nav>
                <Link to="/">
                    <Logo />
                </ Link>
            </nav>
        </header>
    );
}

export default Header;
