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
            setCurrentLetterIndex((prevIndex) =>
                (prevIndex + 1) % volvexerMeanings.length
            );
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [volvexerMeanings.length]);

    return (
        <section id="home" className="hero">
            <div className="hero-bubbles"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Complete Business Solutions</h1>

                    {/* Continuous Word Meaning Display */}
                    <div className="continuous-meaning-display">
                        <div className="meaning-container">
                            <span className="current-letter">{volvexerMeanings[currentLetterIndex].letter}</span>
                            <span className="current-meaning">{volvexerMeanings[currentLetterIndex].meaning}</span>
                        </div>
                    </div>

                    <p className="hero-subtitle">
                        <span className="volvexer-acronym" id="volvexer-acronym">
                            <span className="letter-service" data-service="Virtual Solutions">V</span>
                            <span className="letter-service" data-service="Online Services">O</span>
                            <span className="letter-service" data-service="Legal Compliance">L</span>
                            <span className="letter-service" data-service="Value Creation">V</span>
                            <span className="letter-service" data-service="Expert Solutions">E</span>
                            <span className="letter-service" data-service="Xpert Technology">X</span>
                            <span className="letter-service" data-service="Efficient Systems">E</span>
                            <span className="letter-service" data-service="Reliable Services">R</span>
                        </span>
                        : <span className="highlight-stripe" id="volvexer-definition">
                            <span className="tagline-word" data-value="Location/Platform">Where</span>
                            <span className="tagline-word" data-value="Money Management">Financial</span>
                            <span className="tagline-word" data-value="Transparency">Clarity</span>
                            <span className="tagline-word" data-value="Connection">Meets</span>
                            <span className="tagline-word" data-value="Artificial Intelligence">AI</span>
                            <span className="tagline-word" data-value="New Technology">Innovation</span>
                        </span>
                    </p>
                    <p className="hero-description">Transform Your Business With Our Comprehensive Suite of Professional Services! Expert solutions for every business need.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                            <i className="fas fa-rocket"></i>
                            Explore Services
                        </button>
                        <button className="btn btn-secondary" onClick={() => window.open('https://wa.me/923390625000', '_blank')}>
                            <i className="fab fa-whatsapp"></i>
                            Get Consultation
                        </button>
                        <button className="btn btn-outline" onClick={() => window.open('https://wa.me/923390625000?text=Business%20Services', '_blank')}>
                            <i className="fas fa-phone"></i>
                            Learn More
                        </button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10,000+</span>
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
        </section>
    );
}

export default HeroSection; 