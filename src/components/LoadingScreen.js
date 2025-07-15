import React, { useState, useEffect } from 'react';

function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide loading screen after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-logo-container">
                    <img
                        src="/static/assets/final icon 1.png"
                        alt="Volvexer Logo"
                        className="loading-logo-large"
                    />
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

export default LoadingScreen; 