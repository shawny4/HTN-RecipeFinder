import './styles/Header.css'

import React from 'react';
import logo from './images/test.png';  // Path to your logo image

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <button className="button">Click Me</button>
        </header>
    );
}

export default Header;