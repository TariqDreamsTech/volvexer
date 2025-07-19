import React from 'react';

function BookkeepingNetwork() {

    const bookkeepingWords = {
        upper: [
            { word: 'Transaction Recording', icon: 'fas fa-receipt', color: '#3b82f6' },
            { word: 'Bank Reconciliation', icon: 'fas fa-university', color: '#8b5cf6' },
            { word: 'Invoice Processing', icon: 'fas fa-file-invoice', color: '#06b6d4' },
            { word: 'General Ledger', icon: 'fas fa-book', color: '#10b981' },
            { word: 'Chart of Accounts', icon: 'fas fa-list-ol', color: '#f59e0b' }
        ],
        lower: [
            { word: 'Journal Entries', icon: 'fas fa-edit', color: '#ef4444' },
            { word: 'Financial Statements', icon: 'fas fa-chart-bar', color: '#8b5cf6' },
            { word: 'Trial Balance', icon: 'fas fa-balance-scale', color: '#06b6d4' },
            { word: 'Closing Entries', icon: 'fas fa-lock', color: '#10b981' },
            { word: 'Compliance Reporting', icon: 'fas fa-shield-alt', color: '#f59e0b' }
        ]
    };



    return (
        <section className="bookkeeping-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete Bookkeeping Ecosystem</h2>
                    <p>Interconnected bookkeeping services that work together to maintain accurate financial records</p>
                </div>

                <div className="network-container">

                    {/* Upper Row - 5 Bookkeeping Words */}
                    <div className="upper-words">
                        {bookkeepingWords.upper.map((word, index) => (
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

                    {/* Lower Row - 5 Bookkeeping Words */}
                    <div className="lower-words">
                        {bookkeepingWords.lower.map((word, index) => (
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

export default BookkeepingNetwork; 