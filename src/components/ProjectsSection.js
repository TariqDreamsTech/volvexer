import React, { useState, useEffect } from 'react';

function ProjectsSection() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const projects = [
        {
            name: "AI-Powered Tax Filing System",
            description: "Intelligent tax filing system with FBR integration, automated document processing, and real-time validation using machine learning algorithms.",
            image: "fas fa-file-alt",
            tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
            demo: "https://volvexer.com",
            stars: 45,
            forks: 12,
            language: "Python"
        },
        {
            name: "Smart Document Analyzer",
            description: "AI-powered document analysis system that extracts, processes, and categorizes information from various document types using OCR and NLP.",
            image: "fas fa-file-text",
            tech: ["Python", "OpenCV", "Tesseract", "BERT", "FastAPI"],
            demo: null,
            stars: 32,
            forks: 8,
            language: "Python"
        },
        {
            name: "Predictive Analytics Dashboard",
            description: "Real-time business analytics dashboard with predictive modeling, data visualization, and automated reporting capabilities.",
            image: "fas fa-chart-line",
            tech: ["Python", "Pandas", "Plotly", "Django", "PostgreSQL"],
            demo: null,
            stars: 28,
            forks: 15,
            language: "Python"
        },
        {
            name: "Intelligent Chatbot Platform",
            description: "Multi-language chatbot platform with natural language processing, sentiment analysis, and integration capabilities.",
            image: "fas fa-comments",
            tech: ["Python", "NLTK", "React", "Socket.io", "Redis"],
            demo: null,
            stars: 67,
            forks: 23,
            language: "Python"
        },
        {
            name: "Computer Vision API",
            description: "RESTful API for computer vision tasks including object detection, image classification, and facial recognition.",
            image: "fas fa-eye",
            tech: ["Python", "OpenCV", "TensorFlow", "Flask", "Docker"],
            demo: null,
            stars: 41,
            forks: 18,
            language: "Python"
        },
        {
            name: "Machine Learning Pipeline",
            description: "Automated ML pipeline for data preprocessing, model training, evaluation, and deployment with monitoring.",
            image: "fas fa-cogs",
            tech: ["Python", "Scikit-learn", "MLflow", "Kubernetes", "AWS"],
            demo: null,
            stars: 89,
            forks: 34,
            language: "Python"
        },
        {
            name: "Data Science Toolkit",
            description: "Comprehensive toolkit for data analysis, visualization, and statistical modeling with interactive notebooks.",
            image: "fas fa-microscope",
            tech: ["Python", "Jupyter", "NumPy", "Matplotlib", "Seaborn"],
            demo: null,
            stars: 156,
            forks: 45,
            language: "Python"
        },
        {
            name: "AI Model Deployment",
            description: "Production-ready AI model deployment system with versioning, A/B testing, and performance monitoring.",
            image: "fas fa-rocket",
            tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Prometheus"],
            demo: null,
            stars: 73,
            forks: 29,
            language: "Python"
        },
        {
            name: "Natural Language Processing Suite",
            description: "Advanced NLP toolkit with text preprocessing, sentiment analysis, and language modeling capabilities.",
            image: "fas fa-language",
            tech: ["Python", "Transformers", "SpaCy", "NLTK", "BERT"],
            demo: null,
            stars: 112,
            forks: 38,
            language: "Python"
        },
        {
            name: "Real-time Data Processing",
            description: "Streaming data processing system with real-time analytics, event processing, and alert mechanisms.",
            image: "fas fa-stream",
            tech: ["Python", "Apache Kafka", "Spark", "Redis", "Elasticsearch"],
            demo: null,
            stars: 58,
            forks: 21,
            language: "Python"
        },
        {
            name: "AI-Powered Recommendation Engine",
            description: "Intelligent recommendation system using collaborative filtering and content-based approaches.",
            image: "fas fa-lightbulb",
            tech: ["Python", "Surprise", "Pandas", "Flask", "MongoDB"],
            demo: null,
            stars: 94,
            forks: 31,
            language: "Python"
        },
        {
            name: "Automated Testing Framework",
            description: "AI-driven testing framework for automated test case generation and execution with intelligent bug detection.",
            image: "fas fa-bug",
            tech: ["Python", "Selenium", "Pytest", "TensorFlow", "Docker"],
            demo: null,
            stars: 67,
            forks: 25,
            language: "Python"
        },
        {
            name: "n8n Workflow Automation Platform",
            description: "Advanced workflow automation platform using n8n for business process automation, data integration, and API orchestration with custom nodes and webhooks.",
            image: "fas fa-network-wired",
            tech: ["n8n", "Node.js", "JavaScript", "REST APIs", "Webhooks", "Docker"],
            demo: "https://n8n.volvexer.com",
            stars: 89,
            forks: 32,
            language: "JavaScript"
        }
    ];

    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const changePage = (page) => {
        setCurrentPage(page);
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2>AI & Development Projects</h2>
                    <p>Showcasing real projects and technical expertise</p>
                </div>
                <div className="projects-grid">
                    {currentProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <i className={project.image}></i>
                            </div>
                            <div className="project-content">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-stats">
                                    <div className="project-stat">
                                        <i className="fas fa-star"></i>
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="project-stat">
                                        <i className="fas fa-code-branch"></i>
                                        <span>{project.forks}</span>
                                    </div>
                                    <div className="project-stat">
                                        <i className="fas fa-circle"></i>
                                        <span>{project.language}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination-container">
                    <div className="pagination">
                        <button
                            className="pagination-btn"
                            disabled={currentPage === 1}
                            onClick={() => changePage(currentPage - 1)}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                                onClick={() => changePage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="pagination-btn"
                            disabled={currentPage === totalPages}
                            onClick={() => changePage(currentPage + 1)}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection; 