import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookkeepingNetwork from './BookkeepingNetwork';

function AccountingPage() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const scrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = (message = '') => {
        const text = message ? `Hi, I'm interested in ${message}` : 'Hi, I would like to know more about your accounting services';
        window.open(`https://wa.me/923390625000?text=${encodeURIComponent(text)}`, '_blank');
    };

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="loading-logo-container">
                        <img src="/static/assets/final icon 1.png" alt="Volvexer Logo" className="loading-logo-large" />
                    </div>
                    <div className="loading-name-container">
                        <h1 className="loading-name">VOLVEXER</h1>
                    </div>
                    <div className="loading-spinner"></div>
                    <p className="loading-text">Loading Complete Business Solutions...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="star-animation-background"></div>
            <div className="notification-container" id="notification-container"></div>

            {/* Navigation */}
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <img src="/static/assets/final icon 1.png" alt="Volvexer Logo" className="logo-img" />
                        <span className="logo-text">Volvexer Accounting</span>
                    </div>

                    <div className="nav-menu" id="nav-menu">
                        <Link to="/" className="nav-link">Home</Link>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#pricing" className="nav-link">Pricing</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>

                    <div className="nav-buttons">
                        <button className="btn btn-login" onClick={() => openWhatsApp()}>
                            Get Quote
                        </button>
                        <button className="btn btn-primary" onClick={scrollToServices}>
                            Start Now
                        </button>
                        <button className="mobile-menu-toggle" id="mobile-menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-bubbles"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">Professional Accounting & Bookkeeping Services</h1>
                        <p className="hero-subtitle">Built for <span className="highlight-stripe">Modern Businesses</span></p>
                        <p className="hero-description">Transform Your Financial Management With Our Expert Team!</p>

                        {/* Continuous VOLVEXER Meaning Display */}
                        <div className="volvexer-meaning-display">
                            <div className="meaning-container">
                                <span className="current-letter">{volvexerMeanings[currentLetterIndex].letter}</span>
                                <span className="current-meaning">{volvexerMeanings[currentLetterIndex].meaning}</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={scrollToServices}>
                                <i className="fas fa-calculator"></i>
                                Get Started
                            </button>
                            <button className="btn btn-secondary" onClick={() => openWhatsApp()}>
                                <i className="fab fa-whatsapp"></i>
                                Free Consultation
                            </button>
                            <button className="btn btn-outline" onClick={() => openWhatsApp('Accounting Services')}>
                                <i className="fas fa-phone"></i>
                                Learn More
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Businesses Served</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">99.9%</span>
                                <span className="stat-label">Accuracy Rate</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Accounting Services</h2>
                        <p>Comprehensive financial management solutions for businesses of all sizes</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h3>Bookkeeping</h3>
                            <p>Daily transaction recording, bank reconciliation, and financial statement preparation</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Financial Analysis</h3>
                            <p>Comprehensive financial reporting, cash flow analysis, and business insights</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-receipt"></i>
                            </div>
                            <h3>Accounts Payable/Receivable</h3>
                            <p>Manage vendor payments, customer invoicing, and payment tracking</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-calculator"></i>
                            </div>
                            <h3>Payroll Processing</h3>
                            <p>Employee salary calculations, tax deductions, and payroll reporting</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Compliance & Audit</h3>
                            <p>Ensure regulatory compliance and prepare for financial audits</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cloud"></i>
                            </div>
                            <h3>Cloud Accounting</h3>
                            <p>Modern cloud-based accounting solutions for real-time access</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bookkeeping Network Section */}
            <BookkeepingNetwork />

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2>Ready to Transform Your Accounting?</h2>
                            <p>Get in touch with our expert team and discover how we can streamline your financial management.</p>
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <i className="fas fa-phone"></i>
                                    <h4>Call Us</h4>
                                    <p>+923390625000</p>
                                </div>
                                <div className="contact-method">
                                    <i className="fas fa-envelope"></i>
                                    <h4>Email Us</h4>
                                    <p>info@volvexer.site</p>
                                </div>
                                <div className="contact-method">
                                    <i className="fab fa-whatsapp"></i>
                                    <h4>WhatsApp</h4>
                                    <p>Get instant support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>Volvexer Accounting</h4>
                            <p>Professional accounting and bookkeeping services for modern businesses.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Bookkeeping</a></li>
                                <li><a href="#services">Financial Analysis</a></li>
                                <li><a href="#services">Payroll</a></li>
                                <li><a href="#services">Compliance</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:+923390625000">+923390625000</a></li>
                                <li><a href="mailto:info@volvexer.site">info@volvexer.site</a></li>
                                <li><a href="#" onClick={() => openWhatsApp()}>WhatsApp</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Volvexer Accounting. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Float */}
            <div className="whatsapp-float" onClick={() => openWhatsApp()}>
                <i className="fab fa-whatsapp"></i>
            </div>
        </>
    );
}

export default AccountingPage; 