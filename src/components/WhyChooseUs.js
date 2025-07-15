import React from 'react';

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Volvexer?</h2>
                    <p>We deliver excellence across all our services</p>
                </div>
                <div className="features-grid">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <h3>Trusted & Secure</h3>
                        <p>Your data and business information are protected with enterprise-grade security measures.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3>24/7 Support</h3>
                        <p>Round-the-clock support to ensure your business never stops, no matter the time or day.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Expert Team</h3>
                        <p>Certified professionals with years of experience in their respective fields.</p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Quick turnaround times without compromising on quality or accuracy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs; 