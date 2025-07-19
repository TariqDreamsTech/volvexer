import React from 'react';

function AINetwork() {

    const aiWords = {
        upper: [
            { word: 'Data Collection', icon: 'fas fa-database', color: '#3b82f6' },
            { word: 'Data Preprocessing', icon: 'fas fa-cogs', color: '#8b5cf6' },
            { word: 'Feature Engineering', icon: 'fas fa-puzzle-piece', color: '#06b6d4' },
            { word: 'Model Development', icon: 'fas fa-brain', color: '#10b981' },
            { word: 'Algorithm Selection', icon: 'fas fa-code', color: '#f59e0b' }
        ],
        lower: [
            { word: 'Training & Validation', icon: 'fas fa-chart-line', color: '#ef4444' },
            { word: 'Model Deployment', icon: 'fas fa-rocket', color: '#8b5cf6' },
            { word: 'Performance Monitoring', icon: 'fas fa-eye', color: '#06b6d4' },
            { word: 'Continuous Learning', icon: 'fas fa-sync', color: '#10b981' },
            { word: 'AI Consulting', icon: 'fas fa-lightbulb', color: '#f59e0b' }
        ]
    };



    return (
        <section className="ai-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete AI Engineering Ecosystem</h2>
                    <p>Interconnected AI services that work together to deliver intelligent solutions</p>
                </div>

                <div className="network-container">

                    {/* Upper Row - 5 AI Words */}
                    <div className="upper-words">
                        {aiWords.upper.map((word, index) => (
                            <div
                                key={index}
                                className="network-word upper-word"
                                style={{
                                    left: `${20 + (index * 15)}%`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                <div className="word-content" style={{ borderColor: word.color }}>
                                    <i className={word.icon} style={{ color: word.color }}></i>
                                    <span>{word.word}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lower Row - 5 AI Words */}
                    <div className="lower-words">
                        {aiWords.lower.map((word, index) => (
                            <div
                                key={index}
                                className="network-word lower-word"
                                style={{
                                    left: `${20 + (index * 15)}%`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                            >
                                <div className="word-content" style={{ borderColor: word.color }}>
                                    <i className={word.icon} style={{ color: word.color }}></i>
                                    <span>{word.word}</span>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
}

export default AINetwork; 