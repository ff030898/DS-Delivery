import React from 'react';
import Instagram from '../../assets/Instagram.svg';
import Linkedin from '../../assets/Linkedin.svg';
import Youtube from '../../assets/Youtube.svg';
import './style.css';


function Footer() {
    return (
        <footer className="main-footer">
            
            <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</p>

            <nav className="footer-icons">
                <a href="/">
                    <img src={Youtube} alt="Youtube" />
                </a>
                <a href="/">
                    <img src={Linkedin} alt="Linkedin" />
                </a>
                <a href="/">
                    <img src={Instagram} alt="Instagram" />
                </a>
            </nav>
            
        </footer>
    );
}

export default Footer;
