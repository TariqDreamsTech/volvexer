import React from 'react';

function AutomationHighlight() {
    return (
        <section className="automation-highlight">
            <div className="container">
                <div className="automation-content">
                    <div className="automation-text">
                        <h2>Advanced Workflow Automation with n8n</h2>
                        <p>Transform your business processes with our expert n8n automation solutions. We specialize in
                            creating intelligent workflows that connect your applications, automate repetitive tasks, and
                            streamline operations.</p>
                        <div className="automation-features">
                            <div className="automation-feature">
                                <i className="fas fa-plug"></i>
                                <span>API Integration</span>
                            </div>
                            <div className="automation-feature">
                                <i className="fas fa-code"></i>
                                <span>Custom Nodes</span>
                            </div>
                            <div className="automation-feature">
                                <i className="fas fa-shield-alt"></i>
                                <span>Secure Workflows</span>
                            </div>
                            <div className="automation-feature">
                                <i className="fas fa-chart-line"></i>
                                <span>Real-time Monitoring</span>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={() => window.open('https://wa.me/923390625000?text=n8n%20Automation', '_blank')}>
                            <i className="fas fa-robot"></i>
                            Get Automation Quote
                        </button>
                    </div>
                    <div className="automation-visual">
                        <div className="workflow-diagram">
                            <div className="workflow-node">
                                <i className="fas fa-database"></i>
                                <span>Data Source</span>
                            </div>
                            <div className="workflow-arrow">→</div>
                            <div className="workflow-node">
                                <i className="fas fa-cogs"></i>
                                <span>n8n Process</span>
                            </div>
                            <div className="workflow-arrow">→</div>
                            <div className="workflow-node">
                                <i className="fas fa-chart-bar"></i>
                                <span>Output</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AutomationHighlight; 