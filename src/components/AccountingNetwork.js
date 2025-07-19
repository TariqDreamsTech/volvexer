import React from 'react';

function AccountingNetwork() {

    const accountingWords = {
        upper: [
            { word: 'Bookkeeping', icon: 'fas fa-book', color: '#3b82f6' },
            { word: 'Financial Analysis', icon: 'fas fa-chart-line', color: '#8b5cf6' },
            { word: 'Payroll Processing', icon: 'fas fa-users', color: '#06b6d4' },
            { word: 'Tax Compliance', icon: 'fas fa-file-alt', color: '#10b981' },
            { word: 'Audit Support', icon: 'fas fa-shield-alt', color: '#f59e0b' }
        ],
        lower: [
            { word: 'Cash Flow', icon: 'fas fa-money-bill-wave', color: '#ef4444' },
            { word: 'Budget Planning', icon: 'fas fa-calculator', color: '#8b5cf6' },
            { word: 'Financial Reporting', icon: 'fas fa-chart-bar', color: '#06b6d4' },
            { word: 'Cost Management', icon: 'fas fa-coins', color: '#10b981' },
            { word: 'Risk Assessment', icon: 'fas fa-exclamation-triangle', color: '#f59e0b' }
        ]
    };



    return (
        <section className="accounting-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete Accounting Ecosystem</h2>
                    <p>Interconnected services that work together to optimize your financial management</p>
                </div>

                <div className="network-container">

                    {/* Upper Row - 5 Accounting Words */}
                    <div className="upper-words">
                        {accountingWords.upper.map((word, index) => (
                            <div
                                key={index}
                                className="network-word upper-word"
                                style={{
                                    left: `${20 + (index * 15)}%`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                onTouchStart={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onTouchEnd={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                onClick={() => {
                                    // Add click interaction for desktop
                                    console.log(`Clicked on: ${word.word}`);
                                }}
                            >
                                <div className="word-content" style={{ borderColor: word.color }}>
                                    <i className={word.icon} style={{ color: word.color }}></i>
                                    <span>{word.word}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Lower Row - 5 Accounting Words */}
                    <div className="lower-words">
                        {accountingWords.lower.map((word, index) => (
                            <div
                                key={index}
                                className="network-word lower-word"
                                style={{
                                    left: `${20 + (index * 15)}%`,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                onTouchStart={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onTouchEnd={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                                onClick={() => {
                                    // Add click interaction for desktop
                                    console.log(`Clicked on: ${word.word}`);
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

export default AccountingNetwork; 