import React from 'react';

function ProfessionalExperience() {
    return (
        <section className="professional-experience">
            <div className="container">
                <div className="section-header">
                    <h2>Professional Experience</h2>
                    <p>Current and recent professional roles in AI and automation</p>
                </div>
                <div className="experience-timeline">
                    <div className="experience-item current">
                        <div className="experience-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Data Engineer</h3>
                                <span className="company">QPharma</span>
                            </div>
                            <p className="experience-description">Built scalable ETL pipelines using AWS Glue, S3 for raw/staged
                                data, Lambda Functions for automation, and JupyterHub for notebook-based analysis.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>Data Engineering Analytics Architecture</h4>
                                    <ul>
                                        <li>Applied pandas for large-scale data cleaning, transformation, feature
                                            engineering, and merging datasets from Excel, APIs, and social media platforms
                                        </li>
                                        <li>Utilized Excalidraw to architect and visualize complex data pipelines; resolved
                                            multi-step pipeline errors with detailed debugging</li>
                                        <li>Collaborated on clinical trial and publication datasets using Jira and Excel for
                                            workflow tracking and calculations</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">AWS Glue</span>
                                <span className="skill-tag">S3</span>
                                <span className="skill-tag">Lambda Functions</span>
                                <span className="skill-tag">JupyterHub</span>
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">ETL Pipelines</span>
                                <span className="skill-tag">Data Engineering</span>
                                <span className="skill-tag">Jira</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>AI Engineer</h3>
                                <span className="company">2456.ai</span>
                            </div>
                            <p className="experience-description">Designed and developed the backend using Django (Monolith) for
                                admin/control panel and FastAPI (Microservices) for high-throughput API layers.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>AI Workflow Automation Platform (Microservices-Based Architecture)</h4>
                                    <ul>
                                        <li>Architected a dual-database system using PostgreSQL for transactional data and
                                            Pinecone Vector DB for semantic search and AI-powered tool suggestions</li>
                                        <li>Engineered the AI-enhanced query flow: user prompts → refined using AI → tool
                                            retrieval → dynamic workflow generation</li>
                                        <li>Implemented workflow persistence, referral systems, and integrated Stripe API
                                            for secure payments</li>
                                        <li>Maintained clean codebase using Ruff for linting/formatting and pre-commit hooks
                                            for automated QA</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">FastAPI</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">Pinecone Vector DB</span>
                                <span className="skill-tag">Stripe API</span>
                                <span className="skill-tag">Ruff</span>
                                <span className="skill-tag">Microservices</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>DevOps Engineer</h3>
                                <span className="company">NVIT</span>
                            </div>
                            <p className="experience-description">Developed a multi-role backend system from scratch (Customers,
                                Engineers, Admins) with full JWT-based Authentication, SSO, and Role-Based Access Control
                                (RBAC).</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>Secure Multi-Tenant SaaS System</h4>
                                    <ul>
                                        <li>Created dynamic ticketing system with Jira-style duplication, role-specific
                                            access, and time/runtime/transactional tracking</li>
                                        <li>Integrated OpenAI GPT API for time estimation and recommendations, with strict
                                            exception handling and validation layers</li>
                                        <li>Added multi-cloud connectors for AWS, Azure, IBM, Oracle, and GCP via REST APIs.
                                            Enabled subscription-gated access and image storage on Azure Blob Storage</li>
                                        <li>Developed backend endpoints to support comments, recommendations, and historical
                                            analytics with real-time checkout flows</li>
                                        <li>Live: <a href="https://jerichoai.io" target="_blank" rel="noopener noreferrer">https://jerichoai.io</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">JWT Authentication</span>
                                <span className="skill-tag">SSO</span>
                                <span className="skill-tag">RBAC</span>
                                <span className="skill-tag">Multi-Cloud</span>
                                <span className="skill-tag">Azure Blob Storage</span>
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">GCP</span>
                                <span className="skill-tag">IBM Cloud</span>
                                <span className="skill-tag">Oracle Cloud</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-gavel"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>AI Engineer</h3>
                                <span className="company">Seanz Law Firm</span>
                            </div>
                            <p className="experience-description">Built a multilingual (English/Spanish) AI-powered interview
                                assistant for immigration law.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>Interview Intelligence System</h4>
                                    <ul>
                                        <li>Integrated OpenAI GPT-4 for NLP-based dynamic conversation generation and Twilio
                                            API for WhatsApp/SMS communication</li>
                                        <li>Designed the backend using modular services that store and sync data across
                                            Google Sheets, MongoDB, and PostgreSQL</li>
                                        <li>Enabled real-time dashboard reporting using Google Looker Studio, with
                                            structured KPIs and intake summaries</li>
                                        <li>Maintained code quality through strict enforcement of formatting using Ruff and
                                            testable modular architecture</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">OpenAI GPT-4</span>
                                <span className="skill-tag">NLP</span>
                                <span className="skill-tag">Twilio API</span>
                                <span className="skill-tag">Google Sheets</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">PostgreSQL</span>
                                <span className="skill-tag">Google Looker Studio</span>
                                <span className="skill-tag">Ruff</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>N8N Engineer</h3>
                                <span className="company">DeltaMotors</span>
                            </div>
                            <p className="experience-description">Specialized in workflow automation and process optimization
                                using n8n for automotive industry solutions.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>Automotive Workflow Automation</h4>
                                    <ul>
                                        <li>Designed and implemented automated workflows for inventory management, customer
                                            data processing, and sales pipeline automation</li>
                                        <li>Integrated n8n with CRM systems, ERP platforms, and automotive databases for
                                            seamless data flow</li>
                                        <li>Created custom nodes and webhooks for automotive-specific business processes and
                                            reporting</li>
                                        <li>Optimized workflow performance and implemented error handling for critical
                                            automotive operations</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">n8n</span>
                                <span className="skill-tag">Workflow Automation</span>
                                <span className="skill-tag">API Integration</span>
                                <span className="skill-tag">CRM Systems</span>
                                <span className="skill-tag">ERP Integration</span>
                                <span className="skill-tag">Custom Nodes</span>
                                <span className="skill-tag">Webhooks</span>
                                <span className="skill-tag">Process Optimization</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-robot"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>N8N Expert</h3>
                                <span className="company">hddisenos</span>
                                <span className="location">Venezuela · Remote</span>
                            </div>
                            <p className="experience-description">Specializing in n8n workflow automation, API integration,
                                dynamic web scraping, and process optimization for business automation solutions.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">n8n</span>
                                <span className="skill-tag">API Integration</span>
                                <span className="skill-tag">Dynamic Web Scraping</span>
                                <span className="skill-tag">FastAPI</span>
                                <span className="skill-tag">Hetzner</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Vectorized Database Software Engineer</h3>
                                <span className="company">INSTAMAILAI</span>
                                <span className="location">United States · Remote</span>
                            </div>
                            <p className="experience-description">Focused on designing and optimizing vector search pipelines
                                for fast and accurate retrieval, implementing embeddings for structured and unstructured
                                data.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>Vector Search Pipeline Development</h4>
                                    <ul>
                                        <li>Design and optimize vector search pipelines for fast and accurate retrieval</li>
                                        <li>Implement and fine-tune embeddings for structured and unstructured data</li>
                                        <li>Work with FAISS, Weaviate, Pinecone, ChromaDB, or similar technologies</li>
                                        <li>Develop and integrate AI models for intelligent data processing</li>
                                        <li>Work with MongoDB for structured and semi-structured data management</li>
                                        <li>Utilize C# for backend development and system integrations</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">Vector Databases</span>
                                <span className="skill-tag">FAISS</span>
                                <span className="skill-tag">Weaviate</span>
                                <span className="skill-tag">Pinecone</span>
                                <span className="skill-tag">ChromaDB</span>
                                <span className="skill-tag">LangChain</span>
                                <span className="skill-tag">Hugging Face</span>
                                <span className="skill-tag">OpenAI APIs</span>
                                <span className="skill-tag">C#</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">LLMs</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fab fa-python"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Python Developer</h3>
                                <span className="company">PyPI</span>
                                <span className="location">Self-employed</span>
                            </div>
                            <p className="experience-description">Developed and published Python modules for educational
                                purposes, including SGPA and CGPA calculation tools for university students.</p>
                            <div className="experience-projects">
                                <div className="project-item">
                                    <h4>ISGC Module - SGPA/CGPA Calculator</h4>
                                    <ul>
                                        <li>Created a Python module for calculating SGPA and CGPA for students of Islamia
                                            University Bahawalpur[BS]</li>
                                        <li>Implemented data visualization to show SGPA reports and CGPA calculations</li>
                                        <li>Published on PyPI: <a href="https://pypi.org/project/isgc/"
                                            target="_blank" rel="noopener noreferrer">https://pypi.org/project/isgc/</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="experience-skills">
                                <span className="skill-tag">OOP</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Seaborn</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Matplotlib</span>
                                <span className="skill-tag">Data Analysis</span>
                                <span className="skill-tag">Function Modules</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Django Developer</h3>
                                <span className="company">Fiverr</span>
                                <span className="location">Bahawalpur, Punjab, Pakistan · Remote</span>
                            </div>
                            <p className="experience-description">Freelance Django development projects focusing on web
                                applications, data analysis, and exploratory data analysis solutions.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">HTML5</span>
                                <span className="skill-tag">Bootstrap 5</span>
                                <span className="skill-tag">Exploratory Data Analysis</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-chart-bar"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Data Analyst</h3>
                                <span className="company">Fiverr</span>
                                <span className="location">Punjab, Pakistan</span>
                            </div>
                            <p className="experience-description">Data analysis services including data visualization,
                                statistical analysis, and exploratory data analysis using Python tools.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">Plotly</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">Seaborn</span>
                                <span className="skill-tag">Matplotlib</span>
                                <span className="skill-tag">NumPy</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Self-Learning Projects</h3>
                                <span className="company">AhsanTariq0724</span>
                                <span className="location">Bahawalpur District, Punjab, Pakistan</span>
                            </div>
                            <p className="experience-description">Independent learning and project development focusing on
                                Django, data science, machine learning, and various programming technologies.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">MATLAB</span>
                                <span className="skill-tag">OOP</span>
                                <span className="skill-tag">Data Science</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">SciPy</span>
                                <span className="skill-tag">Machine Learning</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Python Developer</h3>
                                <span className="company">Hostera</span>
                                <span className="location">Bahawalpur, Punjab, Pakistan</span>
                            </div>
                            <p className="experience-description">Python development role focusing on data science, web
                                development, and machine learning applications.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">Data Science</span>
                                <span className="skill-tag">Data Analysis</span>
                                <span className="skill-tag">Django REST Framework</span>
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">Software Documentation</span>
                                <span className="skill-tag">LaTeX</span>
                                <span className="skill-tag">Data Visualization</span>
                                <span className="skill-tag">Machine Learning Algorithms</span>
                                <span className="skill-tag">Selenium</span>
                                <span className="skill-tag">Front-End Development</span>
                                <span className="skill-tag">Back-End Web Development</span>
                                <span className="skill-tag">PyPI</span>
                                <span className="skill-tag">Web Scraping</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="experience-content">
                            <div className="experience-header">
                                <h3>Django Developer</h3>
                                <span className="company">Enigmatix Pvt Ltd</span>
                                <span className="location">Bahawalpur, Punjab, Pakistan</span>
                            </div>
                            <p className="experience-description">Internship role focusing on Django development, web
                                applications, and object-oriented programming.</p>
                            <div className="experience-skills">
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">Django</span>
                                <span className="skill-tag">HTML5</span>
                                <span className="skill-tag">OOP</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">Bootstrap 5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProfessionalExperience; 