import React from 'react';

function SkillsSection() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2>Technical Skills & Expertise</h2>
                    <p>Comprehensive skill set in AI, ML, and modern technologies</p>
                </div>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3><i className="fas fa-brain"></i> Machine Learning & AI</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">TensorFlow</span>
                            <span className="skill-tag">PyTorch</span>
                            <span className="skill-tag">Scikit-learn</span>
                            <span className="skill-tag">Keras</span>
                            <span className="skill-tag">OpenAI GPT</span>
                            <span className="skill-tag">BERT</span>
                            <span className="skill-tag">Transformers</span>
                            <span className="skill-tag">Computer Vision</span>
                            <span className="skill-tag">NLP</span>
                            <span className="skill-tag">Deep Learning</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-code"></i> Programming Languages</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">TypeScript</span>
                            <span className="skill-tag">Java</span>
                            <span className="skill-tag">C++</span>
                            <span className="skill-tag">R</span>
                            <span className="skill-tag">SQL</span>
                            <span className="skill-tag">PHP</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-cloud"></i> Cloud & DevOps</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Google Cloud</span>
                            <span className="skill-tag">Azure</span>
                            <span className="skill-tag">Docker</span>
                            <span className="skill-tag">Kubernetes</span>
                            <span className="skill-tag">CI/CD</span>
                            <span className="skill-tag">Git</span>
                            <span className="skill-tag">Jenkins</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-database"></i> Data & Analytics</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Pandas</span>
                            <span className="skill-tag">NumPy</span>
                            <span className="skill-tag">Matplotlib</span>
                            <span className="skill-tag">Seaborn</span>
                            <span className="skill-tag">Plotly</span>
                            <span className="skill-tag">MongoDB</span>
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">Redis</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-mobile-alt"></i> Web & Mobile</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Express.js</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">Flask</span>
                            <span className="skill-tag">React Native</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">GraphQL</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-cogs"></i> Tools & Frameworks</h3>
                        <div className="skill-tags">
                            <span className="skill-tag">Jupyter</span>
                            <span className="skill-tag">VS Code</span>
                            <span className="skill-tag">PyCharm</span>
                            <span className="skill-tag">Postman</span>
                            <span className="skill-tag">Figma</span>
                            <span className="skill-tag">Tableau</span>
                            <span className="skill-tag">Power BI</span>
                            <span className="skill-tag">Apache Spark</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><i className="fas fa-robot"></i> Automation & Workflows</h3>
                        <div className="skill-tags">
                            <span className="skill-tag highlight-skill">n8n</span>
                            <span className="skill-tag">Zapier</span>
                            <span className="skill-tag">Make.com</span>
                            <span className="skill-tag">Airflow</span>
                            <span className="skill-tag">Prefect</span>
                            <span className="skill-tag">RPA</span>
                            <span className="skill-tag">Selenium</span>
                            <span className="skill-tag">Playwright</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection; 