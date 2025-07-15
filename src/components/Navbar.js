import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/static/assets/final icon 1.png" alt="Volvexer Logo" className="logo-img" />
                    <span className="logo-text">Volvexer</span>
                </div>
                <div className="nav-menu" id="nav-menu">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
                <div className="nav-buttons">
                    <button className="btn btn-login" onClick={() => window.open('https://wa.me/923390625000', '_blank')}>Get Help</button>
                    <button className="btn btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
                    <button className="mobile-menu-toggle" id="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 