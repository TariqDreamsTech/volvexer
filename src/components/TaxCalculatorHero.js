import React, { useState, useEffect } from 'react';

function TaxCalculatorHero() {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const volvexerMeanings = [
        { letter: 'V', meaning: 'Virtual Solutions' },
        { letter: 'O', meaning: 'Online Services' },
        { letter: 'L', meaning: 'Legal Compliance' },
        { letter: 'V', meaning: 'Value Creation' },
        { letter: 'E', meaning: 'Expert Solutions' },
        { letter: 'X', meaning: 'Xpert Technology' },
        { letter: 'E', meaning: 'Efficient Systems' },
        { letter: 'R', meaning: 'Reliable Services' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % volvexerMeanings.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [volvexerMeanings.length]);

    const scrollToServices = () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = (message = '') => {
        const text = message ? `Hi, I'm interested in ${message}` : 'Hi, I would like to know more about your services';
        window.open(`https://wa.me/923390625000?text=${encodeURIComponent(text)}`, '_blank');
    };

    const toggleSalaryType = (type) => {
        const monthlyBtn = document.getElementById('monthly-toggle');
        const yearlyBtn = document.getElementById('yearly-toggle');
        const salaryLabel = document.getElementById('salary-label');
        const salaryInput = document.getElementById('salary');

        if (type === 'monthly') {
            monthlyBtn.classList.add('active');
            yearlyBtn.classList.remove('active');
            salaryLabel.textContent = 'Monthly Salary (PKR)';
            salaryInput.placeholder = 'Enter your monthly salary';
        } else {
            yearlyBtn.classList.add('active');
            monthlyBtn.classList.remove('active');
            salaryLabel.textContent = 'Annual Salary (PKR)';
            salaryInput.placeholder = 'Enter your annual salary';
        }
    };

    const toggleView = (view) => {
        const graphElement = document.getElementById('rainbow-graph');
        const slabsElement = document.getElementById('tax-slabs');

        if (view === 'graph') {
            graphElement.style.display = 'block';
            slabsElement.style.display = 'none';
            graphElement.classList.add('show-graph');
        } else {
            graphElement.style.display = 'none';
            slabsElement.style.display = 'block';
            graphElement.classList.remove('show-graph');
        }
    };

    const calculateTax = () => {
        const salary = parseFloat(document.getElementById('salary').value) || 0;
        const year = document.getElementById('year').value;
        const isMonthly = document.getElementById('monthly-toggle').classList.contains('active');

        // Convert to yearly salary if monthly is selected
        const yearlySalary = isMonthly ? salary * 12 : salary;

        let tax = 0;
        let rate = 0;

        // Tax slabs for different years
        const taxSlabs = {
            '2025-2026': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.01, fixed: 0 },
                { min: 1200000, max: 2200000, rate: 0.11, fixed: 6000 },
                { min: 2200000, max: 3200000, rate: 0.23, fixed: 116000 },
                { min: 3200000, max: 4100000, rate: 0.30, fixed: 346000 },
                { min: 4100000, max: Infinity, rate: 0.35, fixed: 616000 }
            ],
            '2024-2025': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
                { min: 1200000, max: 2200000, rate: 0.15, fixed: 30000 },
                { min: 2200000, max: 3200000, rate: 0.25, fixed: 180000 },
                { min: 3200000, max: 4100000, rate: 0.30, fixed: 430000 },
                { min: 4100000, max: Infinity, rate: 0.35, fixed: 700000 }
            ],
            '2023-2024': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
                { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
                { min: 2400000, max: 3600000, rate: 0.225, fixed: 165000 },
                { min: 3600000, max: 6000000, rate: 0.275, fixed: 435000 },
                { min: 6000000, max: Infinity, rate: 0.35, fixed: 1095000 }
            ],
            '2022-2023': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.025, fixed: 0 },
                { min: 1200000, max: 2400000, rate: 0.125, fixed: 15000 },
                { min: 2400000, max: 3600000, rate: 0.20, fixed: 165000 },
                { min: 3600000, max: 6000000, rate: 0.25, fixed: 405000 },
                { min: 6000000, max: 12000000, rate: 0.325, fixed: 1005000 },
                { min: 12000000, max: Infinity, rate: 0.35, fixed: 2955000 }
            ],
            '2021-2022': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
                { min: 1200000, max: 1800000, rate: 0.10, fixed: 30000 },
                { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
                { min: 2500000, max: 3500000, rate: 0.175, fixed: 195000 },
                { min: 3500000, max: 5000000, rate: 0.20, fixed: 370000 },
                { min: 5000000, max: 8000000, rate: 0.225, fixed: 670000 },
                { min: 8000000, max: 12000000, rate: 0.25, fixed: 1345000 },
                { min: 12000000, max: 30000000, rate: 0.275, fixed: 2345000 },
                { min: 30000000, max: 50000000, rate: 0.30, fixed: 7295000 },
                { min: 50000000, max: 75000000, rate: 0.325, fixed: 13295000 },
                { min: 75000000, max: Infinity, rate: 0.35, fixed: 21420000 }
            ],
            '2020-2021': [
                { min: 0, max: 600000, rate: 0, fixed: 0 },
                { min: 600000, max: 1200000, rate: 0.05, fixed: 0 },
                { min: 1200000, max: 1800000, rate: 0.10, fixed: 30000 },
                { min: 1800000, max: 2500000, rate: 0.15, fixed: 90000 },
                { min: 2500000, max: 3500000, rate: 0.175, fixed: 195000 },
                { min: 3500000, max: 5000000, rate: 0.20, fixed: 370000 },
                { min: 5000000, max: 8000000, rate: 0.225, fixed: 670000 },
                { min: 8000000, max: 12000000, rate: 0.25, fixed: 1345000 },
                { min: 12000000, max: 30000000, rate: 0.275, fixed: 2345000 },
                { min: 30000000, max: 50000000, rate: 0.30, fixed: 7295000 },
                { min: 50000000, max: 75000000, rate: 0.325, fixed: 13295000 },
                { min: 75000000, max: Infinity, rate: 0.35, fixed: 21420000 }
            ]
        };

        const slabs = taxSlabs[year];

        // Find applicable slab
        for (let i = slabs.length - 1; i >= 0; i--) {
            if (yearlySalary > slabs[i].min) {
                const excess = yearlySalary - slabs[i].min;
                tax = slabs[i].fixed + (excess * slabs[i].rate);
                rate = slabs[i].rate * 100;
                break;
            }
        }

        // Add surcharge for income above 10 million (2025-2026)
        if (year === '2025-2026' && yearlySalary > 10000000) {
            const surcharge = tax * 0.09;
            tax += surcharge;
        }

        const netIncome = yearlySalary - tax;

        // Update results with animation
        const resultElement = document.getElementById('calculator-result');
        resultElement.style.display = 'block';
        resultElement.classList.add('show-result');

        // Calculate monthly values
        const monthlySalary = yearlySalary / 12;
        const monthlyTax = tax / 12;
        const monthlyNet = monthlySalary - monthlyTax;

        // Get tax slab description
        let slabDescription = '';
        for (let i = slabs.length - 1; i >= 0; i--) {
            if (yearlySalary > slabs[i].min) {
                if (slabs[i].rate === 0) {
                    slabDescription = `0% - Up to PKR ${slabs[i].max.toLocaleString()}`;
                } else {
                    slabDescription = `${(slabs[i].rate * 100).toFixed(1)}% - PKR ${slabs[i].min.toLocaleString()} to ${slabs[i].max === Infinity ? 'Above' : slabs[i].max.toLocaleString()}`;
                }
                break;
            }
        }

        // Animate the result values
        animateValue('monthly-salary', 0, monthlySalary, 1000);
        animateValue('monthly-tax', 0, monthlyTax, 1000);
        animateValue('monthly-net', 0, monthlyNet, 1000);
        animateValue('yearly-salary', 0, salary, 1000);
        animateValue('yearly-tax', 0, tax, 1000);
        animateValue('yearly-net', 0, netIncome, 1000);
        animateValue('result-rate', 0, rate, 1000);

        // Update tax slab description
        document.getElementById('result-slab').textContent = slabDescription;

        // Show rainbow graph with animation
        const graphElement = document.getElementById('rainbow-graph');
        graphElement.style.display = 'block';
        graphElement.classList.add('show-graph');

        // Hide tax slabs when graph is shown
        const slabsElement = document.querySelector('.tax-slabs-card');
        slabsElement.style.display = 'none';

        // Animate the curve path
        const curvePath = graphElement.querySelector('.curve-path');
        curvePath.style.strokeDasharray = curvePath.getTotalLength();
        curvePath.style.strokeDashoffset = curvePath.getTotalLength();

        setTimeout(() => {
            curvePath.style.transition = 'stroke-dashoffset 2s ease-in-out';
            curvePath.style.strokeDashoffset = 0;
        }, 500);

        // Animate progress bar and score
        const progressFill = document.getElementById('progress-fill');
        const scoreValue = document.getElementById('tax-score');
        let score = Math.max(0, Math.min(100, 100 - (tax / yearlySalary * 100)));
        if (!isFinite(score)) score = 0;
        progressFill.style.width = '0%';
        setTimeout(() => {
            progressFill.style.transition = 'width 1.5s cubic-bezier(0.4,0,0.2,1)';
            progressFill.style.width = score + '%';
        }, 800);
        // Animate score value
        let start = 0;
        const duration = 1200;
        const startTime = performance.now();
        function animateScore(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = start + (score - start) * progress;
            scoreValue.textContent = current.toFixed(0) + '%';
            if (progress < 1) {
                requestAnimationFrame(animateScore);
            }
        }
        requestAnimationFrame(animateScore);
    };

    const animateValue = (elementId, start, end, duration) => {
        const element = document.getElementById(elementId);
        const startTime = performance.now();
        const isPercentage = elementId === 'result-rate';
        const suffix = isPercentage ? '%' : ' PKR';

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = start + (end - start) * progress;

            if (isPercentage) {
                element.textContent = current.toFixed(1) + suffix;
            } else {
                // Format with 2 decimal places for currency
                element.textContent = 'PKR ' + current.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    return (
        <section id="home" className="hero tax-calculator-hero">
            <div className="hero-bubbles"></div>
            <div className="hero-container">
                <div className="hero-left-section">
                    {/* Tax Graph Section */}
                    <div className="hero-graph-section">
                        <div className="rainbow-graph-container" id="rainbow-graph">
                            <div className="graph-header">
                                <h4>Tax Progression Graph</h4>
                                <div className="graph-controls">
                                    <button
                                        className="toggle-view-btn"
                                        onClick={() => toggleView('slabs')}
                                        title="Show Tax Slabs"
                                    >
                                        <i className="fas fa-list"></i>
                                    </button>
                                    <div className="graph-animation">
                                        <div className="pulse-dot"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="graph-content">
                                <svg className="rainbow-curve" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: "#ff6b6b", stopOpacity: 1 }} />
                                            <stop offset="16.66%" style={{ stopColor: "#feca57", stopOpacity: 1 }} />
                                            <stop offset="33.33%" style={{ stopColor: "#48dbfb", stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: "#0abde3", stopOpacity: 1 }} />
                                            <stop offset="66.66%" style={{ stopColor: "#54a0ff", stopOpacity: 1 }} />
                                            <stop offset="83.33%" style={{ stopColor: "#5f27cd", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "#ff9ff3", stopOpacity: 1 }} />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <path
                                        className="curve-path"
                                        d="M 50 150 Q 100 50 200 100 T 350 50"
                                        fill="none"
                                        stroke="url(#rainbowGradient)"
                                        strokeWidth="4"
                                        filter="url(#glow)"
                                    />
                                    <circle className="moving-dot" cx="50" cy="150" r="6" fill="#ff6b6b">
                                        <animateMotion
                                            dur="3s"
                                            repeatCount="indefinite"
                                            path="M 0 0 Q 50 -100 150 -50 T 300 -100"
                                        />
                                    </circle>
                                </svg>
                                <div className="graph-labels">
                                    <div className="label-item">
                                        <span className="label-dot" style={{ background: "#ff6b6b" }}></span>
                                        <span>Low Tax</span>
                                    </div>
                                    <div className="label-item">
                                        <span className="label-dot" style={{ background: "#48dbfb" }}></span>
                                        <span>Medium Tax</span>
                                    </div>
                                    <div className="label-item">
                                        <span className="label-dot" style={{ background: "#5f27cd" }}></span>
                                        <span>High Tax</span>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="animated-progress-section">
                                <div className="progress-header">
                                    <h5>Tax Efficiency Score</h5>
                                    <span className="score-value" id="tax-score">0%</span>
                                </div>
                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div className="progress-fill" id="progress-fill"></div>
                                        <div className="progress-particles">
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                            <div className="particle"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Elements */}
                                <div className="floating-elements">
                                    <div className="floating-icon" style={{ animationDelay: '0s' }}>
                                        <i className="fas fa-coins"></i>
                                    </div>
                                    <div className="floating-icon" style={{ animationDelay: '0.5s' }}>
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                    <div className="floating-icon" style={{ animationDelay: '1s' }}>
                                        <i className="fas fa-piggy-bank"></i>
                                    </div>
                                    <div className="floating-icon" style={{ animationDelay: '1.5s' }}>
                                        <i className="fas fa-hand-holding-usd"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tax-slabs-card" id="tax-slabs">
                            <div className="slabs-header">
                                <h3>Current Tax Slabs (2025-2026)</h3>
                                <button
                                    className="toggle-view-btn"
                                    onClick={() => toggleView('graph')}
                                    title="Show Tax Graph"
                                >
                                    <i className="fas fa-chart-line"></i>
                                </button>
                            </div>
                            <div className="slabs-container">
                                <div className="slab-item">
                                    <div className="slab-range">Up to PKR 600,000</div>
                                    <div className="slab-rate">0%</div>
                                </div>
                                <div className="slab-item">
                                    <div className="slab-range">PKR 600,001 - 1,200,000</div>
                                    <div className="slab-rate">1%</div>
                                </div>
                                <div className="slab-item">
                                    <div className="slab-range">PKR 1,200,001 - 2,200,000</div>
                                    <div className="slab-rate">11%</div>
                                </div>
                                <div className="slab-item">
                                    <div className="slab-range">PKR 2,200,001 - 3,200,000</div>
                                    <div className="slab-rate">23%</div>
                                </div>
                                <div className="slab-item">
                                    <div className="slab-range">PKR 3,200,001 - 4,100,000</div>
                                    <div className="slab-rate">30%</div>
                                </div>
                                <div className="slab-item">
                                    <div className="slab-range">Above PKR 4,100,000</div>
                                    <div className="slab-rate">35%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tax Calculator Section - Right Side */}
                <div className="tax-calculator-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Income Tax Calculator</h2>
                            <p>Calculate your income tax liability for different financial years with our interactive calculator</p>
                        </div>

                        <div className="calculator-container">
                            <div className="calculator-card">
                                <div className="calculator-header">
                                    <h3>Tax Calculator 2025-2026</h3>
                                    <div className="calculator-animation">
                                        <div className="floating-numbers">
                                            <span className="number">0%</span>
                                            <span className="number">1%</span>
                                            <span className="number">11%</span>
                                            <span className="number">23%</span>
                                            <span className="number">30%</span>
                                            <span className="number">35%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="calculator-form">
                                    <div className="input-group">
                                        <label>Salary Type</label>
                                        <div className="salary-type-toggle">
                                            <button
                                                type="button"
                                                className="toggle-btn active"
                                                id="monthly-toggle"
                                                onClick={() => toggleSalaryType('monthly')}
                                            >
                                                <i className="fas fa-calendar-day"></i>
                                                Monthly
                                            </button>
                                            <button
                                                type="button"
                                                className="toggle-btn"
                                                id="yearly-toggle"
                                                onClick={() => toggleSalaryType('yearly')}
                                            >
                                                <i className="fas fa-calendar-alt"></i>
                                                Yearly
                                            </button>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="salary" id="salary-label">Monthly Salary (PKR)</label>
                                        <div className="input-wrapper">
                                            <i className="fas fa-money-bill-wave"></i>
                                            <input
                                                type="number"
                                                id="salary"
                                                placeholder="Enter your monthly salary"
                                                min="0"
                                                step="1000"
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="year">Tax Year</label>
                                        <div className="input-wrapper">
                                            <i className="fas fa-calendar-alt"></i>
                                            <select id="year">
                                                <option value="2025-2026">2025-2026</option>
                                                <option value="2024-2025">2024-2025</option>
                                                <option value="2023-2024">2023-2024</option>
                                                <option value="2022-2023">2022-2023</option>
                                                <option value="2021-2022">2021-2022</option>
                                                <option value="2020-2021">2020-2021</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="calculate-btn" onClick={() => calculateTax()}>
                                        <i className="fas fa-calculator"></i>
                                        Calculate Tax
                                    </button>
                                </div>

                                <div className="calculator-result" id="calculator-result">
                                    <div className="result-header">
                                        <h4>Tax Calculation Result</h4>
                                        <div className="result-animation">
                                            <div className="pulse-circle"></div>
                                        </div>
                                    </div>
                                    <div className="result-content">
                                        <div className="calculation-kv-tables">
                                            <div className="kv-section">
                                                <h5>Monthly Breakdown</h5>
                                                <div className="kv-list">
                                                    <div className="kv-row">
                                                        <span className="kv-key">Monthly Salary</span>
                                                        <span className="kv-value" id="monthly-salary">PKR 0</span>
                                                    </div>
                                                    <div className="kv-row">
                                                        <span className="kv-key">Monthly Tax</span>
                                                        <span className="kv-value" id="monthly-tax">PKR 0</span>
                                                    </div>
                                                    <div className="kv-row">
                                                        <span className="kv-key">Salary After Tax</span>
                                                        <span className="kv-value" id="monthly-net">PKR 0</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="kv-section">
                                                <h5>Yearly Breakdown</h5>
                                                <div className="kv-list">
                                                    <div className="kv-row">
                                                        <span className="kv-key">Yearly Salary</span>
                                                        <span className="kv-value" id="yearly-salary">PKR 0</span>
                                                    </div>
                                                    <div className="kv-row">
                                                        <span className="kv-key">Yearly Tax</span>
                                                        <span className="kv-value" id="yearly-tax">PKR 0</span>
                                                    </div>
                                                    <div className="kv-row">
                                                        <span className="kv-key">Salary After Tax</span>
                                                        <span className="kv-value" id="yearly-net">PKR 0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="additional-info">
                                            <div className="info-item">
                                                <span className="label">Tax Rate:</span>
                                                <span className="value" id="result-rate">0%</span>
                                            </div>
                                            <div className="info-item">
                                                <span className="label">Tax Slab:</span>
                                                <span className="value" id="result-slab">0% - Up to PKR 600,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaxCalculatorHero; 