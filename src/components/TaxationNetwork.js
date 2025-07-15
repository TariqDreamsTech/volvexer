import React, { useEffect, useRef } from 'react';

function TaxationNetwork() {
    const canvasRef = useRef(null);

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

            taxationWords.upper.forEach((upperWord, upperIndex) => {
                taxationWords.lower.forEach((lowerWord, lowerIndex) => {
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
    }, [taxationWords.upper, taxationWords.lower]);

    return (
        <section className="taxation-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete Taxation Ecosystem</h2>
                    <p>Interconnected taxation services that work together to ensure compliance and optimization</p>
                </div>

                <div className="network-container">
                    <canvas ref={canvasRef} className="network-canvas"></canvas>

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
                                <div className="word-stars">
                                    <div className="star" style={{ animationDelay: `${index * 0.1}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.3}s` }}></div>
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

export default TaxationNetwork; 