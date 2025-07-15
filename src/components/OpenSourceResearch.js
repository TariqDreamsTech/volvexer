import React from 'react';

function OpenSourceResearch() {
    return (
        <section className="open-source-research">
            <div className="container">
                <div className="section-header">
                    <h2>Open Source & Research Work</h2>
                    <p>Contributions to the developer community and academic research</p>
                </div>
                <div className="research-grid">
                    <div className="research-card">
                        <div className="research-icon">
                            <i className="fab fa-python"></i>
                        </div>
                        <div className="research-content">
                            <h3>ISGC - GPA Calculator Package</h3>
                            <p className="research-description">A comprehensive SGPA and CGPA calculator for Islamia University
                                Bahawalpur students. Published on PyPI with MIT License.</p>
                            <div className="research-details">
                                <span className="research-tag">PyPI Package</span>
                                <span className="research-tag">MIT License</span>
                                <span className="research-tag">Education</span>
                            </div>
                            <div className="research-stats">
                                <div className="research-stat">
                                    <span className="stat-number">1.0.2</span>
                                    <span className="stat-label">Latest Version</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">MIT</span>
                                    <span className="stat-label">License</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">Python</span>
                                    <span className="stat-label">Language</span>
                                </div>
                            </div>
                            <a href="https://pypi.org/project/isgc/" target="_blank" rel="noopener noreferrer" className="research-link">
                                <i className="fas fa-external-link-alt"></i>
                                View on PyPI
                            </a>
                        </div>
                    </div>
                    <div className="research-card">
                        <div className="research-icon">
                            <i className="fas fa-brain"></i>
                        </div>
                        <div className="research-content">
                            <h3>Emotion Analysis Package</h3>
                            <p className="research-description">Advanced emotion analysis and sentiment detection package
                                published on PyPI for natural language processing applications.</p>
                            <div className="research-details">
                                <span className="research-tag">NLP</span>
                                <span className="research-tag">Sentiment Analysis</span>
                                <span className="research-tag">PyPI</span>
                            </div>
                            <div className="research-stats">
                                <div className="research-stat">
                                    <span className="stat-number">Latest</span>
                                    <span className="stat-label">Version</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">Open</span>
                                    <span className="stat-label">Source</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">Python</span>
                                    <span className="stat-label">Language</span>
                                </div>
                            </div>
                            <a href="https://pypi.org/project/emotion-analysis/" target="_blank" rel="noopener noreferrer" className="research-link">
                                <i className="fas fa-external-link-alt"></i>
                                View on PyPI
                            </a>
                        </div>
                    </div>
                    <div className="research-card">
                        <div className="research-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="research-content">
                            <h3>Academic Research Publication</h3>
                            <p className="research-description">Published research on "A Python Package For Summarizing
                                University Student Examination Performance" in ResearchGate.</p>
                            <div className="research-details">
                                <span className="research-tag">ResearchGate</span>
                                <span className="research-tag">Academic</span>
                                <span className="research-tag">Education</span>
                            </div>
                            <div className="research-stats">
                                <div className="research-stat">
                                    <span className="stat-number">2024</span>
                                    <span className="stat-label">Published</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">Research</span>
                                    <span className="stat-label">Paper</span>
                                </div>
                                <div className="research-stat">
                                    <span className="stat-number">Academic</span>
                                    <span className="stat-label">Journal</span>
                                </div>
                            </div>
                            <a href="https://www.researchgate.net/publication/382074586_A_Python_Package_For_Summarizing_University_Student_Examination_Performance"
                                target="_blank" rel="noopener noreferrer" className="research-link">
                                <i className="fas fa-external-link-alt"></i>
                                View Research
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OpenSourceResearch; 