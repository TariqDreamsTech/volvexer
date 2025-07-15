import React, { useEffect, useRef } from 'react';

function AINetwork() {
    const canvasRef = useRef(null);

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

            aiWords.upper.forEach((upperWord, upperIndex) => {
                aiWords.lower.forEach((lowerWord, lowerIndex) => {
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
    }, [aiWords.upper, aiWords.lower]);

    return (
        <section className="ai-network-section">
            <div className="container">
                <div className="section-header">
                    <h2>Complete AI Engineering Ecosystem</h2>
                    <p>Interconnected AI services that work together to deliver intelligent solutions</p>
                </div>

                <div className="network-container">
                    <canvas ref={canvasRef} className="network-canvas"></canvas>

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
                                <div className="word-stars">
                                    <div className="star" style={{ animationDelay: `${index * 0.1}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.2}s` }}></div>
                                    <div className="star" style={{ animationDelay: `${index * 0.3}s` }}></div>
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

export default AINetwork; 