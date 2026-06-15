import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { whatsappLink } from '../data/site';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setIsOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <Link to="/" className="navbar__brand" onClick={close} aria-label="Volvexer home">
                    <img
                        src="/static/assets/final icon 1.png"
                        alt="Volvexer logo"
                        className="navbar__logo"
                        width="36"
                        height="36"
                    />
                    <span className="navbar__name">VOLVEXER</span>
                </Link>

                <nav className={`navbar__menu ${isOpen ? 'is-open' : ''}`} aria-label="Primary">
                    <NavLink to="/" end className="navbar__link" onClick={close}>Home</NavLink>
                    <NavLink to="/taxation" className="navbar__link" onClick={close}>Taxation</NavLink>
                    <NavLink to="/accounting" className="navbar__link" onClick={close}>Accounting</NavLink>
                    <a href="/#team" className="navbar__link" onClick={close}>Team</a>
                    <a href="/#contact" className="navbar__link" onClick={close}>Contact</a>
                    <a
                        href={whatsappLink('Hi Volvexer, I would like a free consultation.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary navbar__cta"
                        onClick={close}
                    >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i> Free Consultation
                    </a>
                </nav>

                <button
                    className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;
