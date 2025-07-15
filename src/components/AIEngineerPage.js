import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AutomationHighlight from './AutomationHighlight';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import OpenSourceResearch from './OpenSourceResearch';
import ProfessionalExperience from './ProfessionalExperience';
import ContactSection from './ContactSection';
import AINetwork from './AINetwork';

function AIEngineerPage() {
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
    }, [volvexerMeanings.length]);

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
        const text = message ? `Hi, I'm interested in ${message}` : 'Hi, I would like to know more about your AI engineering services';
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
                        <span className="logo-text">Volvexer AI</span>
                    </div>

                    <div className="nav-menu" id="nav-menu">
                        <Link to="/" className="nav-link">Home</Link>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>

                    <div className="nav-buttons">
                        <button className="btn btn-login" onClick={() => openWhatsApp()}>
                            Get Quote
                        </button>
                        <button className="btn btn-primary" onClick={scrollToServices}>
                            Start Project
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
                        <h1 className="hero-title">AI Engineering & Development Solutions</h1>
                        <p className="hero-subtitle">Powered by <span className="highlight-stripe">Cutting-Edge AI</span></p>
                        <p className="hero-description">Transform Your Business With Custom AI Solutions!</p>

                        {/* Continuous VOLVEXER Meaning Display */}
                        <div className="volvexer-meaning-display">
                            <div className="meaning-container">
                                <span className="current-letter">{volvexerMeanings[currentLetterIndex].letter}</span>
                                <span className="current-meaning">{volvexerMeanings[currentLetterIndex].meaning}</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <button className="btn btn-primary" onClick={scrollToServices}>
                                <i className="fas fa-robot"></i>
                                Start Project
                            </button>
                            <button className="btn btn-secondary" onClick={() => openWhatsApp()}>
                                <i className="fab fa-whatsapp"></i>
                                Free Consultation
                            </button>
                            <button className="btn btn-outline" onClick={() => openWhatsApp('AI Services')}>
                                <i className="fas fa-phone"></i>
                                Learn More
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">100+</span>
                                <span className="stat-label">AI Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">95%</span>
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

            {/* AI Engineering Services */}
            <section id="services" className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>AI Engineering Services</h2>
                        <p>Comprehensive AI solutions to automate and optimize your business processes</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <h3>Machine Learning</h3>
                            <p>Custom ML models for prediction, classification, and pattern recognition</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h3>Natural Language Processing</h3>
                            <p>Chatbots, sentiment analysis, and text processing solutions</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Computer Vision</h3>
                            <p>Image recognition, object detection, and visual AI applications</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h3>Data Analytics</h3>
                            <p>Advanced analytics and business intelligence solutions</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <h3>Process Automation</h3>
                            <p>Advanced workflow automation using n8n, RPA, and AI technologies for seamless business process optimization</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <h3>AI Integration</h3>
                            <p>Seamless integration of AI into existing systems and applications</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Network Section */}
            <AINetwork />

            {/* Automation Highlight */}
            <AutomationHighlight />

            {/* Skills Section */}
            <SkillsSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Open Source & Research */}
            <OpenSourceResearch />

            {/* Professional Experience */}
            <ProfessionalExperience />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h4>Volvexer AI</h4>
                            <p>Cutting-edge AI engineering and development services for modern businesses.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Machine Learning</a></li>
                                <li><a href="#services">NLP</a></li>
                                <li><a href="#services">Computer Vision</a></li>
                                <li><a href="#services">Automation</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="tel:+923390625000">+923390625000</a></li>
                                <li><a href="mailto:info@volvexer.site">info@volvexer.site</a></li>
                                <li><button className="footer-link-btn" onClick={() => openWhatsApp()}>WhatsApp</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Volvexer AI. All rights reserved.</p>
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

export default AIEngineerPage; 