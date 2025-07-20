import React from 'react';

function TaxCalculatorHero() {
    return (
        <section id="home" className="hero tax-calculator-hero">
            <div className="hero-bubbles"></div>
            <div className="hero-container">
                <div className="hero-left-section">
                    {/* Hero Content Section */}
                    <div className="hero-content-section" id="hero-content">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                <span className="gradient-text">Volvexer</span>
                                <br />
                                Complete Business Solutions
                            </h1>
                            <p className="hero-description">
                                Transform your business with our comprehensive suite of professional services.
                                From strategic planning to digital transformation, we provide expert solutions
                                that drive growth and ensure compliance.
                            </p>
                            <div className="hero-buttons">
                                <button className="btn btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                                    <i className="fas fa-rocket"></i>
                                    Get Started
                                </button>
                                <button className="btn btn-secondary" onClick={() => window.open('https://wa.me/923390625000', '_blank')}>
                                    <i className="fab fa-whatsapp"></i>
                                    Contact Us
                                </button>
                                <button className="btn btn-outline" onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}>
                                    <i className="fas fa-calculator"></i>
                                    Tax Calculator
                                </button>
                            </div>
                            <div className="hero-stats">
                                <div className="stat-item">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">99%</span>
                                    <span className="stat-label">Success Rate</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Features Section */}
                    <div className="hero-features">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="feature-content">
                                <div className="feature-title">Strategic Planning</div>
                                <div className="feature-subtitle">Data-driven insights</div>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <div className="feature-content">
                                <div className="feature-title">Compliance</div>
                                <div className="feature-subtitle">Regulatory adherence</div>
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <div className="feature-content">
                                <div className="feature-title">Automation</div>
                                <div className="feature-subtitle">Process optimization</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaxCalculatorHero; 