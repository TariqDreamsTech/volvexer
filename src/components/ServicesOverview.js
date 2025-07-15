import React from 'react';

function ServicesOverview() {
    return (
        <section id="services" className="services-overview">
            <div className="container">
                <div className="section-header">
                    <h2>Our Professional Services</h2>
                    <p>Comprehensive solutions to grow and optimize your business</p>
                </div>
                <div className="services-overview-grid">
                    <div className="service-overview-card" onClick={() => window.location.href = '/taxation'}>
                        <div className="service-overview-icon">
                            <i className="fas fa-file-alt"></i>
                        </div>
                        <div className="service-overview-content">
                            <h3>Tax Filing Services</h3>
                            <p>Professional tax filing built native to FBR. File your taxes in just 6 minutes with our qualified consultants.</p>
                            <div className="service-overview-features">
                                <span className="feature-tag">FBR Integration</span>
                                <span className="feature-tag">6-Minute Filing</span>
                                <span className="feature-tag">Expert Support</span>
                            </div>
                            <button className="btn btn-primary">Explore Tax Services</button>
                        </div>
                    </div>
                    <div className="service-overview-card" onClick={() => window.location.href = '/accounting'}>
                        <div className="service-overview-icon">
                            <i className="fas fa-book"></i>
                        </div>
                        <div className="service-overview-content">
                            <h3>Accounting & Bookkeeping</h3>
                            <p>Comprehensive financial management solutions for businesses of all sizes. From basic bookkeeping to CFO services.</p>
                            <div className="service-overview-features">
                                <span className="feature-tag">Full Bookkeeping</span>
                                <span className="feature-tag">Financial Analysis</span>
                                <span className="feature-tag">Payroll Processing</span>
                            </div>
                            <button className="btn btn-primary">Explore Accounting</button>
                        </div>
                    </div>
                    <div className="service-overview-card" onClick={() => window.location.href = '/ai-engineer'}>
                        <div className="service-overview-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <div className="service-overview-content">
                            <h3>AI Engineering</h3>
                            <p>Cutting-edge AI solutions to automate and optimize your business processes. From ML models to process automation.</p>
                            <div className="service-overview-features">
                                <span className="feature-tag">Machine Learning</span>
                                <span className="feature-tag">NLP Solutions</span>
                                <span className="feature-tag">Process Automation</span>
                            </div>
                            <button className="btn btn-primary">Explore AI Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesOverview; 