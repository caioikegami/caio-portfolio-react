import React from 'react';
import './TechStack.css';

const TechStack = () => {
    const frontendTechs = [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ];

    const backendTechs = [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ];

    const toolsTechs = [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Insomnia', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg' },
        { name: 'Beekeeper', icon: `${process.env.PUBLIC_URL}/assets/beekeeper.png` },
    ];

    return (
        <section id="stack" className="techstack-section">
            <h3 className="techstack-title">
                <span className="material-symbols-outlined">grid_view</span>
                Stack Tecnológico
            </h3>

            <div className="techstack-grid">
                {/* Front-end Card */}
                <div className="tech-card tech-card-category">
                    <div className="tech-card-header">
                        <span className="material-symbols-outlined tech-icon" style={{ fontVariationSettings: '"FILL" 1' }}>
                            code
                        </span>
                        <h4 className="tech-card-title">Front-end</h4>
                    </div>
                    <p className="tech-card-description">
                        Interfaces modernas e responsivas com foco em performance e UX
                    </p>
                    <div className="tech-icons-grid">
                        {frontendTechs.map((tech, index) => (
                            <div key={index} className="tech-icon-item" title={tech.name}>
                                <img src={tech.icon} alt={tech.name} className="tech-logo" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back-end Card */}
                <div className="tech-card tech-card-category">
                    <div className="tech-card-header">
                        <span className="material-symbols-outlined tech-icon" style={{ fontVariationSettings: '"FILL" 1' }}>
                            storage
                        </span>
                        <h4 className="tech-card-title">Back-end</h4>
                    </div>
                    <p className="tech-card-description">
                        APIs robustas e escaláveis com arquitetura limpa
                    </p>
                    <div className="tech-icons-grid">
                        {backendTechs.map((tech, index) => (
                            <div key={index} className="tech-icon-item" title={tech.name}>
                                <img src={tech.icon} alt={tech.name} className="tech-logo" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & DevOps Card */}
                <div className="tech-card tech-card-category">
                    <div className="tech-card-header">
                        <span className="material-symbols-outlined tech-icon" style={{ fontVariationSettings: '"FILL" 1' }}>
                            build
                        </span>
                        <h4 className="tech-card-title">Ferramentas & DevOps</h4>
                    </div>
                    <p className="tech-card-description">
                        Ferramentas para desenvolvimento, testes e deployment
                    </p>
                    <div className="tech-icons-grid">
                        {toolsTechs.map((tech, index) => (
                            <div key={index} className="tech-icon-item" title={tech.name}>
                                <img src={tech.icon} alt={tech.name} className="tech-logo" />
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* High-Performance Card */}
                <div className="tech-card tech-card-performance">
                    <div className="performance-content">
                        <h4 className="tech-card-title">Foco em Performance</h4>
                        <p className="tech-card-description">
                            Entregas ágeis com foco em resolver problemas reais.
                            Código limpo, performance excepcional e experiência que converte.
                        </p>
                    </div>
                    <div className="performance-icons">
                        <div className="performance-icon-box">
                            <span className="material-symbols-outlined performance-icon-bolt">bolt</span>
                        </div>
                        <div className="performance-icon-box">
                            <span className="material-symbols-outlined performance-icon-security">security</span>
                        </div>
                        <div className="performance-icon-box">
                            <span className="material-symbols-outlined performance-icon-graph">auto_graph</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;