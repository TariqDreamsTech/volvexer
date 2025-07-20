import React from 'react';

function TaxCalculatorSection() {
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
                    <button class="graph-back-btn" onclick="window.toggleToCalculator()" style="position: absolute; top: 20px; left: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px 20px; border-radius: 25px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; z-index: 10; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
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

    // Add global function for back button
    React.useEffect(() => {
        window.toggleToCalculator = () => {
            setCurrentView('calculator');
            window.location.reload();
        };
    }, []);

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

    const calculateTax = (salary, taxYear) => {
        let annualSalary = salary;

        // Convert monthly to annual if needed
        const monthlyToggleElement = document.getElementById('monthly-toggle');
        if (monthlyToggleElement && monthlyToggleElement.classList.contains('active')) {
            annualSalary = salary * 12;
        }

        let taxAmount = 0;
        let taxRate = 0;

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
            ]
        };

        // Get the appropriate tax slab for the selected year
        const slabs = taxSlabs[taxYear] || taxSlabs['2025-2026'];

        // Calculate tax based on slabs
        for (let i = slabs.length - 1; i >= 0; i--) {
            const slab = slabs[i];
            if (annualSalary > slab.min) {
                const taxableAmount = Math.min(annualSalary - slab.min, slab.max - slab.min);
                taxAmount = slab.fixed + (taxableAmount * slab.rate);

                // Calculate effective tax rate
                taxRate = (taxAmount / annualSalary) * 100;
                break;
            }
        }

        // Apply surcharge for income over 10 million (2025-2026)
        if (taxYear === '2025-2026' && annualSalary > 10000000) {
            const surcharge = taxAmount * 0.09;
            taxAmount += surcharge;
            taxRate = (taxAmount / annualSalary) * 100;
        }

        return {
            annualSalary: annualSalary,
            taxAmount: Math.round(taxAmount),
            netIncome: annualSalary - taxAmount,
            taxRate: taxRate.toFixed(2),
            monthlySalary: Math.round(annualSalary / 12),
            monthlyTax: Math.round(taxAmount / 12),
            monthlyNet: Math.round((annualSalary - taxAmount) / 12)
        };
    };

    const calculateTaxAndShowGraph = () => {
        const salaryElement = document.getElementById('salary');
        const yearElement = document.getElementById('year');

        if (!salaryElement || !yearElement) {
            return;
        }

        const salary = parseFloat(salaryElement.value) || 0;
        if (salary <= 0) {
            return;
        }

        const taxYear = yearElement.value;
        const result = calculateTax(salary, taxYear);

        // Get the calculator section and create professional graph
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
                <!-- Professional Back Button -->
                <button class="graph-back-btn" onclick="window.toggleToCalculator()" style="position: absolute; top: 25px; left: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 30px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); z-index: 10; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1);">
                    <i class="fas fa-arrow-left" style="font-size: 0.9rem; transition: transform 0.3s ease;"></i>
                    Back to Calculator
                </button>

                <!-- Professional Header -->
                <div style="position: absolute; top: 25px; right: 25px; text-align: right; z-index: 5;">
                    <div style="background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); padding: 15px 20px; border-radius: 15px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1);">
                        <div style="font-size: 0.9rem; color: #888; margin-bottom: 5px;">Tax Year: ${taxYear}</div>
                        <div style="font-size: 1.8rem; font-weight: bold; background: linear-gradient(45deg, #4CAF50, #45a049); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${result.taxRate}%</div>
                    </div>
                </div>

                <!-- Main Graph Container -->
                <div style="text-align: center; z-index: 2; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80px 40px 120px 40px;">
                    
                    <!-- Professional Title Section -->
                    <div style="margin-bottom: 40px;">
                        <div style="font-size: 72px; margin-bottom: 25px; animation: professionalPulse 3s ease-in-out infinite; filter: drop-shadow(0 10px 20px rgba(76, 175, 80, 0.3));">📊</div>
                        <div style="font-weight: 800; color: #2c3e50; font-size: 2.2rem; margin-bottom: 15px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); letter-spacing: -0.5px;">Tax Calculation Results</div>
                        <div style="font-size: 1.1rem; color: #7f8c8d; margin-bottom: 8px; font-weight: 500;">Professional Tax Analysis for ${taxYear}</div>
                        <div style="font-size: 0.9rem; color: #95a5a6; font-style: italic;">Based on official Pakistani tax slabs</div>
                    </div>
                    
                    <!-- Enhanced Professional Graph -->
                    <div style="position: relative; width: 100%; max-width: 600px; height: 300px; background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); border-radius: 20px; padding: 30px; backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                        
                        <!-- Grid Lines -->
                        <svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; opacity: 0.3;">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ddd" stroke-width="1"/>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)"/>
                        </svg>

                        <!-- Main Chart -->
                        <svg width="100%" height="100%" style="position: relative; z-index: 2;">
                            <defs>
                                <linearGradient id="professionalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style="stop-color:#3498db;stop-opacity:1" />
                                    <stop offset="25%" style="stop-color:#2ecc71;stop-opacity:1" />
                                    <stop offset="50%" style="stop-color:#f39c12;stop-opacity:1" />
                                    <stop offset="75%" style="stop-color:#e74c3c;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#9b59b6;stop-opacity:1" />
                                </linearGradient>
                                <filter id="glowProfessional">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                <filter id="shadow">
                                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000" flood-opacity="0.3"/>
                                </filter>
                            </defs>
                            
                            <!-- Professional Curve -->
                            <path d="M 50 250 Q 150 50 250 120 Q 350 200 450 80 Q 550 180 650 60" 
                                  stroke="url(#professionalGradient)" 
                                  stroke-width="8" 
                                  fill="none"
                                  style="filter: url(#glowProfessional) url(#shadow); animation: professionalDraw 4s ease-in-out infinite;"
                                  stroke-linecap="round"/>
                            
                            <!-- Professional Data Points -->
                            <circle cx="50" cy="250" r="8" fill="#3498db" style="animation: professionalBounce 2s ease-in-out infinite; filter: drop-shadow(0 4px 8px rgba(52, 152, 219, 0.4));"/>
                            <circle cx="150" cy="50" r="8" fill="#2ecc71" style="animation: professionalBounce 2s ease-in-out infinite 0.3s; filter: drop-shadow(0 4px 8px rgba(46, 204, 113, 0.4));"/>
                            <circle cx="250" cy="120" r="8" fill="#f39c12" style="animation: professionalBounce 2s ease-in-out infinite 0.6s; filter: drop-shadow(0 4px 8px rgba(243, 156, 18, 0.4));"/>
                            <circle cx="350" cy="200" r="8" fill="#e74c3c" style="animation: professionalBounce 2s ease-in-out infinite 0.9s; filter: drop-shadow(0 4px 8px rgba(231, 76, 60, 0.4));"/>
                            <circle cx="450" cy="80" r="8" fill="#9b59b6" style="animation: professionalBounce 2s ease-in-out infinite 1.2s; filter: drop-shadow(0 4px 8px rgba(155, 89, 182, 0.4));"/>
                            <circle cx="550" cy="180" r="8" fill="#34495e" style="animation: professionalBounce 2s ease-in-out infinite 1.5s; filter: drop-shadow(0 4px 8px rgba(52, 73, 94, 0.4));"/>
                            <circle cx="650" cy="60" r="8" fill="#1abc9c" style="animation: professionalBounce 2s ease-in-out infinite 1.8s; filter: drop-shadow(0 4px 8px rgba(26, 188, 156, 0.4));"/>

                            <!-- Professional Labels -->
                            <text x="50" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">0%</text>
                            <text x="150" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">15%</text>
                            <text x="250" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">25%</text>
                            <text x="350" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">35%</text>
                            <text x="450" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">45%</text>
                            <text x="550" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">55%</text>
                            <text x="650" y="270" text-anchor="middle" style="font-size: 12px; fill: #7f8c8d; font-weight: 500;">65%</text>
                        </svg>
                    </div>

                    <!-- Professional Metrics -->
                    <div style="display: flex; justify-content: space-around; width: 100%; max-width: 600px; margin-top: 30px;">
                        <div style="text-align: center; background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(52, 152, 219, 0.05)); padding: 15px; border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(52, 152, 219, 0.2);">
                            <div style="font-size: 1.8rem; font-weight: bold; color: #3498db; margin-bottom: 5px;">₨${(result.annualSalary / 1000000).toFixed(1)}M</div>
                            <div style="font-size: 0.9rem; color: #7f8c8d; margin-bottom: 3px;">Annual Income</div>
                            <div style="font-size: 0.8rem; color: #95a5a6; font-style: italic;">₨${(result.monthlySalary / 1000).toFixed(0)}K/month</div>
                        </div>
                        <div style="text-align: center; background: linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(231, 76, 60, 0.05)); padding: 15px; border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(231, 76, 60, 0.2);">
                            <div style="font-size: 1.8rem; font-weight: bold; color: #e74c3c; margin-bottom: 5px;">₨${(result.taxAmount / 1000).toFixed(0)}K</div>
                            <div style="font-size: 0.9rem; color: #7f8c8d; margin-bottom: 3px;">Tax Liability</div>
                            <div style="font-size: 0.8rem; color: #95a5a6; font-style: italic;">₨${(result.monthlyTax / 1000).toFixed(0)}K/month</div>
                        </div>
                        <div style="text-align: center; background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(46, 204, 113, 0.05)); padding: 15px; border-radius: 12px; backdrop-filter: blur(10px); border: 1px solid rgba(46, 204, 113, 0.2);">
                            <div style="font-size: 1.8rem; font-weight: bold; color: #2ecc71; margin-bottom: 5px;">₨${(result.netIncome / 1000000).toFixed(1)}M</div>
                            <div style="font-size: 0.9rem; color: #7f8c8d; margin-bottom: 3px;">Net Income</div>
                            <div style="font-size: 0.8rem; color: #95a5a6; font-style: italic;">₨${(result.monthlyNet / 1000).toFixed(0)}K/month</div>
                        </div>
                    </div>
                </div>
                
                <!-- Professional Floating Elements -->
                <div style="position: absolute; top: 80px; left: 40px; font-size: 28px; animation: professionalFloat 4s ease-in-out infinite; filter: drop-shadow(0 4px 8px rgba(52, 152, 219, 0.3));">📈</div>
                <div style="position: absolute; top: 100px; right: 50px; font-size: 28px; animation: professionalFloat 4s ease-in-out infinite 0.7s; filter: drop-shadow(0 4px 8px rgba(46, 204, 113, 0.3));">💹</div>
                <div style="position: absolute; bottom: 120px; left: 60px; font-size: 28px; animation: professionalFloat 4s ease-in-out infinite 1.4s; filter: drop-shadow(0 4px 8px rgba(243, 156, 18, 0.3));">📊</div>
                <div style="position: absolute; bottom: 100px; right: 40px; font-size: 28px; animation: professionalFloat 4s ease-in-out infinite 2.1s; filter: drop-shadow(0 4px 8px rgba(155, 89, 182, 0.3));">🎯</div>
                
                <!-- Professional Particles -->
                <div style="position: absolute; top: 50%; left: 15%; font-size: 16px; color: #3498db; animation: professionalParticle 6s ease-in-out infinite 0.2s; opacity: 0.7;">●</div>
                <div style="position: absolute; top: 30%; right: 20%; font-size: 16px; color: #2ecc71; animation: professionalParticle 6s ease-in-out infinite 1.1s; opacity: 0.7;">●</div>
                <div style="position: absolute; bottom: 40%; left: 25%; font-size: 16px; color: #f39c12; animation: professionalParticle 6s ease-in-out infinite 2.0s; opacity: 0.7;">●</div>
                <div style="position: absolute; bottom: 30%; right: 15%; font-size: 16px; color: #e74c3c; animation: professionalParticle 6s ease-in-out infinite 2.9s; opacity: 0.7;">●</div>
                
                <!-- Professional Progress Section -->
                <div style="position: absolute; bottom: 40px; left: 40px; right: 40px;">
                    <div style="background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05)); padding: 25px; border-radius: 20px; backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <div>
                                <h5 style="color: #2c3e50; margin: 0; font-size: 1.2rem; font-weight: 700; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">Tax Efficiency Analysis</h5>
                                <p style="color: #7f8c8d; margin: 5px 0 0 0; font-size: 0.9rem;">Effective tax rate: ${result.taxRate}%</p>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 2rem; font-weight: bold; background: linear-gradient(45deg, #2ecc71, #27ae60); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">${(100 - parseFloat(result.taxRate)).toFixed(1)}%</div>
                                <div style="font-size: 0.8rem; color: #95a5a6; margin-top: 2px;">Net Retention</div>
                            </div>
                        </div>
                        <div style="background: rgba(255, 255, 255, 0.2); border-radius: 15px; height: 12px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                            <div style="background: linear-gradient(90deg, #3498db, #2ecc71, #f39c12, #e74c3c, #9b59b6); width: ${100 - parseFloat(result.taxRate)}%; height: 100%; border-radius: 15px; animation: professionalProgress 3s ease-in-out infinite; box-shadow: 0 2px 8px rgba(46, 204, 113, 0.4);"></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 15px; font-size: 0.85rem; color: #7f8c8d;">
                            <span>Tax Paid</span>
                            <span>Net Income</span>
                            <span>100%</span>
                        </div>
                    </div>
                </div>

                <style>
                    @keyframes professionalPulse {
                        0%, 100% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.05); opacity: 0.9; }
                    }
                    @keyframes professionalDraw {
                        0% { stroke-dasharray: 0 1000; stroke-dashoffset: 1000; }
                        100% { stroke-dasharray: 1000 0; stroke-dashoffset: 0; }
                    }
                    @keyframes professionalBounce {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                    @keyframes professionalFloat {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-15px) rotate(5deg); }
                    }
                    @keyframes professionalParticle {
                        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
                        50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
                    }
                    @keyframes professionalProgress {
                        0% { width: 0%; }
                        100% { width: ${100 - parseFloat(result.taxRate)}%; }
                    }
                </style>
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
        <section id="calculator" className="tax-calculator-section">
            <div className="container">
                <div className="section-header">
                    <h2>Income Tax Calculator</h2>
                    <p>Calculate your income tax liability for different financial years with our interactive calculator</p>
                </div>

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

                            <button className="calculate-btn" onClick={() => calculateTaxAndShowGraph()}>
                                <i className="fas fa-calculator"></i>
                                Calculate Tax
                            </button>

                            <button className="toggle-view-btn" onClick={() => toggleView()}>
                                <i className={currentView === 'calculator' ? 'fas fa-chart-line' : 'fas fa-calculator'}></i>
                                {currentView === 'calculator' ? 'Show Graph' : 'Show Calculator'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TaxCalculatorSection; 