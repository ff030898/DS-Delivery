import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logotipo.svg';
import './style.css';

function Header() {
    return (
        <header className="main-header">
            <nav>
                <a href="/">
                    <Logo />
                </a>
            </nav>
        </header>
    );
}

export default Header;
