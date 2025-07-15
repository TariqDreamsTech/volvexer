import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import AIEngineerPage from './components/AIEngineerPage';
import AccountingPage from './components/AccountingPage';
import TaxationPage from './components/TaxationPage';
import AccountingNetwork from './components/AccountingNetwork';
import BookkeepingNetwork from './components/BookkeepingNetwork';
import TaxationNetwork from './components/TaxationNetwork';
import AINetwork from './components/AINetwork';
import Chatbot from './components/Chatbot';
import './styles.css';

// Stars generation function
const generateStars = () => {
    const starsContainer = document.querySelector('.star-animation-background');
    if (!starsContainer) return;

    // Clear existing stars
    starsContainer.innerHTML = '';

    // Create stars container
    const stars = document.createElement('div');
    stars.className = 'stars';

    // Generate random stars
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        stars.appendChild(star);
    }

    // Add twinkling background
    const twinkling = document.createElement('div');
    twinkling.className = 'twinkling';

    // Add clouds
    const clouds = document.createElement('div');
    clouds.className = 'clouds';

    starsContainer.appendChild(stars);
    starsContainer.appendChild(twinkling);
    starsContainer.appendChild(clouds);
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isLoading) {
            generateStars();
        }
    }, [isLoading]);

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
        <Router>
            <div className="App">
                <div className="star-animation-background"></div>
                <div className="notification-container" id="notification-container"></div>

                <Routes>
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <HeroSection />
                            <AccountingNetwork />
                            <BookkeepingNetwork />
                            <TaxationNetwork />
                            <AINetwork />
                            <ServicesOverview />
                            <WhyChooseUs />
                            <ContactSection />
                            <Chatbot />
                            <div className="whatsapp-float" onClick={() => window.open('https://wa.me/923390625000', '_blank')}>
                                <i className="fab fa-whatsapp"></i>
                            </div>
                        </>
                    } />
                    <Route path="/ai-engineer" element={<AIEngineerPage />} />
                    <Route path="/accounting" element={<AccountingPage />} />
                    <Route path="/taxation" element={<TaxationPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 