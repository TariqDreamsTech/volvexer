import React, { useState, useEffect } from 'react';

function HeroSection() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

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

    const scrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = (message = '') => {
        const text = message ? `Hi, I'm interested in ${message}` : 'Hi, I would like to know more about your services';
        window.open(`https://wa.me/923390625000?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bubbles"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Complete Business Solutions</h1>
                    <p className="hero-subtitle">Powered by <span className="highlight-stripe">Expert Services</span></p>
                    <p className="hero-description">Transform Your Business With Professional Solutions!</p>

                    {/* Continuous VOLVEXER Meaning Display */}
                    <div className="volvexer-meaning-display">
                        <div className="meaning-container">
                            <span className="current-letter">{volvexerMeanings[currentLetterIndex].letter}</span>
                            <span className="current-meaning">{volvexerMeanings[currentLetterIndex].meaning}</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToServices}>
                            <i className="fas fa-rocket"></i>
                            Explore Services
                        </button>
                        <button className="btn btn-secondary" onClick={() => openWhatsApp()}>
                            <i className="fab fa-whatsapp"></i>
                            Free Consultation
                        </button>
                        <button className="btn btn-outline" onClick={() => openWhatsApp('Business Services')}>
                            <i className="fas fa-phone"></i>
                            Learn More
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Success Rate</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Support</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection; 