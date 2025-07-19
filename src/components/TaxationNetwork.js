import React from 'react';

function TaxationNetwork() {

    const taxationWords = {
        upper: [
            { word: 'Income Calculation', icon: 'fas fa-calculator', color: '#3b82f6' },
            { word: 'Deduction Analysis', icon: 'fas fa-minus-circle', color: '#8b5cf6' },
            { word: 'Tax Planning', icon: 'fas fa-lightbulb', color: '#06b6d4' },
            { word: 'Compliance Check', icon: 'fas fa-check-circle', color: '#10b981' },
            { word: 'Document Collection', icon: 'fas fa-folder-open', color: '#f59e0b' }
        ],
        lower: [
            { word: 'FBR Integration', icon: 'fas fa-link', color: '#ef4444' },
            { word: 'Tax Filing', icon: 'fas fa-file-alt', color: '#8b5cf6' },
            { word: 'Return Processing', icon: 'fas fa-sync', color: '#06b6d4' },
            { word: 'Audit Support', icon: 'fas fa-shield-alt', color: '#10b981' },
            { word: 'Refund Management', icon: 'fas fa-money-bill-wave', color: '#f59e0b' }
        ]
    };



    return (
        <section className="taxation-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete Taxation Ecosystem</h2>
                    <p>Interconnected taxation services that work together to ensure compliance and optimization</p>
                </div>

                <div className="network-container">

                    {/* Upper Row - 5 Taxation Words */}
                    <div className="upper-words">
                        {taxationWords.upper.map((word, index) => (
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

                    {/* Lower Row - 5 Taxation Words */}
                    <div className="lower-words">
                        {taxationWords.lower.map((word, index) => (
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

export default TaxationNetwork; 