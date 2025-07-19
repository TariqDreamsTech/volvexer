import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [, setCurrentLetterIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const volvexerMeanings = [
        { letter: 'V', meaning: 'Virtual Solutions' },
        { letter: 'O', meaning: 'Online Services' },
        { letter: 'L', meaning: 'Legal Compliance' },
        { letter: 'V', meaning: 'Value Creation' },
        { letter: 'E', meaning: 'Expert Solutions' },
        { letter: 'X', meaning: 'Xpert Technology' },
        { letter: 'E', meaning: 'Efficient Systems' },
        { letter: 'R', meaning: 'Reliable Services' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % volvexerMeanings.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [volvexerMeanings.length]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent body scroll when menu is open
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/static/assets/final icon 1.png" alt="Volvexer Logo" className="logo-img" />
                    <span className="logo-text">VOLVEXER</span>
                </div>
                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
                    <Link to="/accounting" className="nav-link" onClick={closeMobileMenu}>Accounting</Link>
                    <Link to="/taxation" className="nav-link" onClick={closeMobileMenu}>Taxation</Link>
                    <Link to="/ai-engineer" className="nav-link" onClick={closeMobileMenu}>AI Engineer</Link>
                </div>

                <div className="nav-buttons">
                    <button className="btn btn-login" onClick={() => window.open('https://wa.me/923390625000', '_blank')}>Get Help</button>
                    <button className="btn btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Explore Services</button>
                    <button 
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                        id="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
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