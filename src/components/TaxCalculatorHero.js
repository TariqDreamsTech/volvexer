import React from 'react';

function TaxCalculatorHero() {
    const [currentView, setCurrentView] = React.useState('calculator'); // 'calculator' or 'graph'

    const toggleView = () => {
        if (currentView === 'calculator') {
            // Show graph
            const calculatorSection = document.querySelector('.tax-calculator-section');
            if (calculatorSection) {
                // Create the graph element dynamically
                const homeGraphElement = document.createElement('div');
                homeGraphElement.id = 'home-graph';
                homeGraphElement.className = 'home-graph-section';
                homeGraphElement.style.cssText = `
                    display: block;
                    visibility: visible;
                    opacity: 1;
                    width: 100%;
                    height: 100%;
                    min-height: 600px;
                    position: relative;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(99, 102, 241, 0.2);
                    border-radius: 20px;
                    padding: 30px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 8px 32px rgba(59, 130, 246, 0.08);
                `;

                // Create the graph content directly
                homeGraphElement.innerHTML = `
                    <!-- Back Button -->
                    <button class="graph-back-btn" onclick="window.location.reload()" style="position: absolute; top: 20px; left: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px 20px; border-radius: 25px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; z-index: 10; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                        <i class="fas fa-arrow-left" style="font-size: 0.8rem;"></i>
                        Back to Calculator
                    </button>

                    <div style="text-align: center; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <!-- Animated Rainbow Emoji -->
                        <div style="font-size: 64px; margin-bottom: 20px; animation: homeGraphPulse 2s ease-in-out infinite, homeGraphRotate 4s linear infinite;">🌈</div>
                        
                        <!-- Animated Title -->
                        <div style="font-weight: bold; color: #4CAF50; font-size: 1.8rem; margin-bottom: 12px; animation: homeGraphGlow 3s ease-in-out infinite;">Tax Rainbow Graph</div>
                        
                        <!-- Animated Subtitle -->
                        <div style="font-size: 16px; color: #666; margin-bottom: 30px; animation: homeGraphFade 4s ease-in-out infinite;">Interactive Tax Progression Visualization</div>
                        
                        <!-- Enhanced Rainbow Curve SVG -->
                        <svg width="300" height="150" style="margin-top: 20px;">
                            <defs>
                                <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
                                    <stop offset="16.66%" style="stop-color:#ff8000;stop-opacity:1" />
                                    <stop offset="33.33%" style="stop-color:#ffff00;stop-opacity:1" />
                                    <stop offset="50%" style="stop-color:#00ff00;stop-opacity:1" />
                                    <stop offset="66.66%" style="stop-color:#0080ff;stop-opacity:1" />
                                    <stop offset="83.33%" style="stop-color:#8000ff;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#ff0080;stop-opacity:1" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <path d="M 15 120 Q 75 30 150 60 Q 225 90 285 45" 
                                  stroke="url(#rainbowGradient)" 
                                  stroke-width="6" 
                                  fill="none"
                                  style="filter: url(#glow); animation: homeGraphDraw 3s ease-in-out infinite;"/>
                            
                            <!-- Animated dots along the curve -->
                            <circle cx="15" cy="120" r="4" fill="#ff0000" style="animation: homeGraphBounce 2s ease-in-out infinite;"/>
                            <circle cx="75" cy="30" r="4" fill="#ff8000" style="animation: homeGraphBounce 2s ease-in-out infinite 0.4s;"/>
                            <circle cx="150" cy="60" r="4" fill="#ffff00" style="animation: homeGraphBounce 2s ease-in-out infinite 0.8s;"/>
                            <circle cx="225" cy="90" r="4" fill="#00ff00" style="animation: homeGraphBounce 2s ease-in-out infinite 1.2s;"/>
                            <circle cx="285" cy="45" r="4" fill="#8000ff" style="animation: homeGraphBounce 2s ease-in-out infinite 1.6s;"/>
                        </svg>
                    </div>
                    
                    <!-- Enhanced Rainbow corner elements -->
                    <div style="position: absolute; top: 60px; left: 20px; font-size: 32px; color: #ff0000; animation: homeGraphFloat 3s ease-in-out infinite, homeGraphSpin 6s linear infinite;">🔴</div>
                    <div style="position: absolute; top: 60px; right: 20px; font-size: 32px; color: #00ff00; animation: homeGraphFloat 3s ease-in-out infinite 0.5s, homeGraphSpin 6s linear infinite reverse;">🟢</div>
                    <div style="position: absolute; bottom: 80px; left: 20px; font-size: 32px; color: #0000ff; animation: homeGraphFloat 3s ease-in-out infinite 1s, homeGraphSpin 6s linear infinite;">🔵</div>
                    <div style="position: absolute; bottom: 80px; right: 20px; font-size: 32px; color: #ffff00; animation: homeGraphFloat 3s ease-in-out infinite 1.5s, homeGraphSpin 6s linear infinite reverse;">🟡</div>
                    
                    <!-- Floating particles -->
                    <div style="position: absolute; top: 50%; left: 10%; font-size: 20px; color: #ff6b6b; animation: homeGraphFloat 4s ease-in-out infinite 0.2s;">✨</div>
                    <div style="position: absolute; top: 30%; right: 15%; font-size: 20px; color: #4ecdc4; animation: homeGraphFloat 4s ease-in-out infinite 0.7s;">⭐</div>
                    <div style="position: absolute; bottom: 40%; left: 20%; font-size: 20px; color: #45b7d1; animation: homeGraphFloat 4s ease-in-out infinite 1.3s;">💫</div>
                    <div style="position: absolute; bottom: 30%; right: 10%; font-size: 20px; color: #96ceb4; animation: homeGraphFloat 4s ease-in-out infinite 1.8s;">🌟</div>
                    
                    <!-- Enhanced Progress Section -->
                    <div style="position: absolute; bottom: 30px; left: 30px; right: 30px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <h5 style="color: #fff; margin: 0; font-size: 1.1rem; animation: homeGraphGlow 2s ease-in-out infinite;">Rainbow Tax Efficiency</h5>
                            <span style="background: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 1.4rem; font-weight: bold; animation: homeGraphPulse 2s ease-in-out infinite;">85%</span>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.1); border-radius: 10px; height: 8px; overflow: hidden;">
                            <div style="background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080); width: 85%; height: 100%; border-radius: 10px; animation: homeGraphProgress 3s ease-in-out infinite;"></div>
                        </div>
                        <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                            <div style="color: #ff0000; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite;">🔴</div>
                            <div style="color: #ff8000; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite 0.2s;">🟠</div>
                            <div style="color: #ffff00; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite 0.4s;">🟡</div>
                            <div style="color: #00ff00; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite 0.6s;">🟢</div>
                            <div style="color: #0080ff; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite 0.8s;">🔵</div>
                            <div style="color: #8000ff; font-size: 24px; animation: homeGraphBounce 2s ease-in-out infinite 1s;">🟣</div>
                        </div>
                    </div>
                `;

                // Replace the calculator section with the graph
                calculatorSection.innerHTML = '';
                calculatorSection.appendChild(homeGraphElement);
                setCurrentView('graph');
            }
        } else {
            // Show calculator
            window.location.reload(); // Simple way to restore calculator view
        }
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



    const calculateTax = () => {
        const salaryElement = document.getElementById('salary');
        const yearElement = document.getElementById('year');
        const monthlyToggleElement = document.getElementById('monthly-toggle');

        if (!salaryElement || !yearElement || !monthlyToggleElement) {
            return;
        }

        const salary = parseFloat(salaryElement.value) || 0;
        if (salary <= 0) {
            return;
        }

        // Get the calculator section and create rainbow graph
        const calculatorSection = document.querySelector('.tax-calculator-section');
        if (calculatorSection) {
            // Create the graph element dynamically
            const homeGraphElement = document.createElement('div');
            homeGraphElement.id = 'home-graph';
            homeGraphElement.className = 'home-graph-section';
            homeGraphElement.style.cssText = `
                display: block;
                visibility: visible;
                opacity: 1;
                width: 100%;
                height: 100%;
                min-height: 600px;
                position: relative;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(99, 102, 241, 0.2);
                border-radius: 20px;
                padding: 30px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(59, 130, 246, 0.08);
            `;

            // Create the graph content directly
            homeGraphElement.innerHTML = `
                <div style="text-align: center; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div style="font-size: 64px; margin-bottom: 20px; animation: homeGraphPulse 2s ease-in-out infinite;">🌈</div>
                    <div style="font-weight: bold; color: #4CAF50; font-size: 1.8rem; margin-bottom: 12px;">Tax Rainbow Graph</div>
                    <div style="font-size: 16px; color: #666; margin-bottom: 30px;">Interactive Tax Progression Visualization</div>
                    
                    <!-- Rainbow Curve SVG -->
                    <svg width="300" height="150" style="margin-top: 20px;">
                        <defs>
                            <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#ff0000;stop-opacity:1" />
                                <stop offset="16.66%" style="stop-color:#ff8000;stop-opacity:1" />
                                <stop offset="33.33%" style="stop-color:#ffff00;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#00ff00;stop-opacity:1" />
                                <stop offset="66.66%" style="stop-color:#0080ff;stop-opacity:1" />
                                <stop offset="83.33%" style="stop-color:#8000ff;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#ff0080;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <path d="M 15 120 Q 75 30 150 60 Q 225 90 285 45" 
                              stroke="url(#rainbowGradient)" 
                              stroke-width="6" 
                              fill="none"/>
                        
                        <!-- Animated dots along the curve -->
                        <circle cx="15" cy="120" r="4" fill="#ff0000"/>
                        <circle cx="75" cy="30" r="4" fill="#ff8000"/>
                        <circle cx="150" cy="60" r="4" fill="#ffff00"/>
                        <circle cx="225" cy="90" r="4" fill="#00ff00"/>
                        <circle cx="285" cy="45" r="4" fill="#8000ff"/>
                    </svg>
                </div>
                
                <!-- Rainbow corner elements -->
                <div style="position: absolute; top: 20px; left: 20px; font-size: 32px; color: #ff0000; animation: homeGraphFloat 3s ease-in-out infinite;">🔴</div>
                <div style="position: absolute; top: 20px; right: 20px; font-size: 32px; color: #00ff00; animation: homeGraphFloat 3s ease-in-out infinite; animation-delay: 0.5s;">🟢</div>
                <div style="position: absolute; bottom: 20px; left: 20px; font-size: 32px; color: #0000ff; animation: homeGraphFloat 3s ease-in-out infinite; animation-delay: 1s;">🔵</div>
                <div style="position: absolute; bottom: 20px; right: 20px; font-size: 32px; color: #ffff00; animation: homeGraphFloat 3s ease-in-out infinite; animation-delay: 1.5s;">🟡</div>
                
                <!-- Progress Section -->
                <div style="position: absolute; bottom: 30px; left: 30px; right: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h5 style="color: #fff; margin: 0; font-size: 1.1rem;">Rainbow Tax Efficiency</h5>
                        <span style="background: linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 1.4rem; font-weight: bold;">85%</span>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.1); border-radius: 10px; height: 8px; overflow: hidden;">
                        <div style="background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080); width: 85%; height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                        <div style="color: #ff0000; font-size: 24px;">🔴</div>
                        <div style="color: #ff8000; font-size: 24px;">🟠</div>
                        <div style="color: #ffff00; font-size: 24px;">🟡</div>
                        <div style="color: #00ff00; font-size: 24px;">🟢</div>
                        <div style="color: #0080ff; font-size: 24px;">🔵</div>
                        <div style="color: #8000ff; font-size: 24px;">🟣</div>
                    </div>
                </div>
            `;

            // Replace the calculator section with the graph
            calculatorSection.innerHTML = '';
            calculatorSection.appendChild(homeGraphElement);
        }

        // Hide calculator results section
        const resultSection = document.querySelector('.calculator-result');
        if (resultSection) {
            resultSection.style.display = 'none';
        }
    };



    return (
        <section id="home" className="hero tax-calculator-hero">
            <div className="hero-bubbles"></div>
            <div className="hero-container">
                <div className="hero-left-section">
                    {/* Hero Content Section */}
                    <div className="hero-content-section" id="hero-content">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                <span className="gradient-text">Volvexer</span>
                                <br />
                                Complete Business Solutions
                            </h1>
                            <p className="hero-description">
                                Transform your business with our comprehensive suite of professional services.
                                From strategic planning to digital transformation, we provide expert solutions
                                that drive growth and ensure compliance.
                            </p>
                            <div className="hero-features">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div className="feature-content">
                                        <span className="feature-title">Strategic Planning</span>
                                        <span className="feature-subtitle">Business Growth</span>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-sync"></i>
                                    </div>
                                    <div className="feature-content">
                                        <span className="feature-title">Digital Transformation</span>
                                        <span className="feature-subtitle">Modern Solutions</span>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-check-double"></i>
                                    </div>
                                    <div className="feature-content">
                                        <span className="feature-title">Quality Assurance</span>
                                        <span className="feature-subtitle">Excellence</span>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <i className="fas fa-robot"></i>
                                    </div>
                                    <div className="feature-content">
                                        <span className="feature-title">AI Engineering</span>
                                        <span className="feature-subtitle">Innovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tax Calculator Section - Outside Container */}
            <div className="tax-calculator-section">
                <div className="calculator-container">
                    <div className="calculator-card">
                        <div className="calculator-header">
                            <h3>Tax Calculator</h3>
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

                            <button className="toggle-view-btn" onClick={() => toggleView()}>
                                <i className={currentView === 'calculator' ? 'fas fa-chart-line' : 'fas fa-calculator'}></i>
                                {currentView === 'calculator' ? 'Show Graph' : 'Show Calculator'}
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
        </section>
    );
}

export default TaxCalculatorHero; 