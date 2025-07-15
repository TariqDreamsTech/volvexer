import React, { useEffect, useRef } from 'react';

function AccountingNetwork() {
    const canvasRef = useRef(null);

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

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Animation variables
        let animationId;
        let time = 0;

        // Draw connection lines
        const drawConnections = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw animated connection lines between upper and lower words
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
            ctx.lineWidth = 2;

            accountingWords.upper.forEach((upperWord, upperIndex) => {
                accountingWords.lower.forEach((lowerWord, lowerIndex) => {
                    // Create wave effect
                    const waveOffset = Math.sin(time * 0.01 + upperIndex + lowerIndex) * 20;

                    ctx.beginPath();
                    ctx.moveTo(
                        (canvas.width / 4) + (upperIndex * canvas.width / 4),
                        canvas.height * 0.2
                    );

                    // Create curved path
                    const cp1x = (canvas.width / 4) + (upperIndex * canvas.width / 4) + waveOffset;
                    const cp1y = canvas.height * 0.5;
                    const cp2x = (canvas.width / 4) + (lowerIndex * canvas.width / 4) + waveOffset;
                    const cp2y = canvas.height * 0.5;

                    ctx.bezierCurveTo(
                        cp1x, cp1y,
                        cp2x, cp2y,
                        (canvas.width / 4) + (lowerIndex * canvas.width / 4),
                        canvas.height * 0.8
                    );

                    ctx.stroke();
                });
            });

            time++;
        };

        // Animation loop
        const animate = () => {
            drawConnections();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [accountingWords.upper, accountingWords.lower]);

    return (
        <section className="accounting-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete Accounting Ecosystem</h2>
                    <p>Interconnected services that work together to optimize your financial management</p>
                </div>

                <div className="network-container">
                    <canvas ref={canvasRef} className="network-canvas"></canvas>

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
                            >
                                <div className="word-content" style={{ borderColor: word.color }}>
                                    <i className={word.icon} style={{ color: word.color }}></i>
                                    <span>{word.word}</span>
                                </div>
                                <div className="word-stars">
                                    <div className="star" style={{ animationDelay: `${index * 0.1}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.3}s` }}></div>
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
                            >
                                <div className="word-content" style={{ borderColor: word.color }}>
                                    <i className={word.icon} style={{ color: word.color }}></i>
                                    <span>{word.word}</span>
                                </div>
                                <div className="word-stars">
                                    <div className="star" style={{ animationDelay: `${index * 0.1}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.3}s` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Stars Background */}
                    <div className="floating-stars">
                        {[...Array(20)].map((_, index) => (
                            <div
                                key={index}
                                className="floating-star"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountingNetwork; 