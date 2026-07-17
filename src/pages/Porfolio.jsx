import React, { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Portfolio.css';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Todos', icon: 'apps' },
        { id: 'frontend', name: 'Front-end', icon: 'code' },
        { id: 'backend', name: 'Back-end', icon: 'storage' },
        { id: 'tools', name: 'Ferramentas', icon: 'build' },
        { id: 'games', name: 'Jogos', icon: 'sports_esports' }
    ];

    const projects = [
        // FRONT-END
        {
            id: 1,
            category: 'frontend',
            title: 'Fabiano Rodrigues - Nutricionista Funcional',
            description: 'Projeto de site para profissional com portfolio showcase e integração de APIs para conteúdo midiático, aplicando princípios de UI/UX e responsividade.',
            image: `${process.env.PUBLIC_URL}/assets/fabianonutri.png`,
            tags: ['Services', 'Front-end', 'React'],
            link: 'https://caioikegami.github.io/nutricionista-fabiano/',
            status: 'em-construcao'
        },
        {
            id: 2,
            category: ['frontend', 'games'],
            title: 'Mario Bros Serviços 🍄',
            description: 'Projeto de estudo para sites de serviços. Utilizado HTML, CSS e JavaScript para criar uma experiência interativa e visualmente atraente, inspirada no universo do Mario Bros. Com Emulador do SNES embutido para jogar',
            image: `${process.env.PUBLIC_URL}/assets/mariodesktop.png`,
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://caioikegami.github.io/SuperMario/',
            github: 'https://github.com/caioikegami/SuperMario'
        },
        {
            id: 3,
            category: 'frontend',
            title: 'Projeto Compatíveis - Márcio Conceição',
            description: 'Site com Pagina de apresentação do programa compatíveis, utilizado Tailwind para criar uma interface dinâmica e responsiva, com foco em design moderno e usabilidade.',
            image: `${process.env.PUBLIC_URL}/assets/projetocompativeis.png`,
            tags: ['Tailwind'],
            link: 'https://caioikegami.github.io/projeto-compativeis/compativeis.html',
            github: 'https://github.com/caioikegami/projeto-compativeis'
        },

        // BACK-END
        {
            id: 4,
            category: ['frontend', 'backend'],
            title: 'DevBurguer - Em construção',
            description: 'API robusta para gerenciamento Hamburgueria, vendas e clientes com autenticação.',
            image: `${process.env.PUBLIC_URL}/assets/devburguer.png`,
            tags: ['Node.js', 'PostgreSQL', 'React'],
            link: null,
            github: null,
            status: 'em-construcao'
        },

        // FERRAMENTAS
        {
            id: 5,
            category: 'tools',
            title: 'DevSorteio - Sorteador de Números',
            description: 'Ferramenta de Sorteio de números. Aonde você pode inserir dois valores para sortear números dentro do intervalo deles.',
            image: `${process.env.PUBLIC_URL}/assets/devsorteio.png`,
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://caioikegami.github.io/DevSorteioJS/',
            github: 'https://github.com/caioikegami/DevSorteioJS'
        },
        {
            id: 6,
            category: 'tools',
            title: 'Convert Money - Conversor de Moedas',
            description: 'Vai viajar? Compras internacionais? Converta Real em Dólar, Euro, Yen.',
            image: `${process.env.PUBLIC_URL}/assets/ikeconvertmoney.png`,
            tags: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://caioikegami.github.io/ConvertMoneyJS/',
            github: 'https://github.com/caioikegami/ConvertMoneyJS'
        },
        {
            id: 7,
            category: 'tools',
            title: 'Guitar Dojo 🎸 - Em Construção',
            description: 'Ferramenta para estudo de Guitarra ou outro instrumento, desenvolvida em Python com Metronomo, timer, Base de Backing Track e muito mais.',
            image: `${process.env.PUBLIC_URL}/assets/guitardojo.png`,
            tags: ['Python', 'React', 'Node'],
            link: null,
            github: null,
            status: 'em-construcao'
        },
        {
            id: 8,
            category: 'tools',
            title: 'DevTab From Video - Em Construção',
            description: 'Ferramenta aonde você gera Tab a partir de um vídeo utilizando I.A.',
            image: `${process.env.PUBLIC_URL}/assets/videotabconvert.png`,
            tags: ['React', 'TypeScript', 'API', 'I.A'],
            link: null,
            github: null,
            status: 'em-construcao'
        },

        // JOGOS
        {
            id: 9,
            category: 'games',
            title: 'Ikepô - Jokenpô',
            description: 'Recriação do clássico Jokenpô para você jogar online contra sua máquina.',
            image: `${process.env.PUBLIC_URL}/assets/ikepojokenpo.png`,
            tags: ['JavaScript', 'Canvas', 'Game Dev'],
            link: 'https://caioikegami.github.io/DESAFIOJOKENPO/',
            github: 'https://github.com/caioikegami/DESAFIOJOKENPO'
        },

    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => {
            if (Array.isArray(p.category)) {
                return p.category.includes(activeCategory);
            }
            return p.category === activeCategory;
        });

    return (
        <div className="portfolio-page">
            {/* Hero */}
            <section className="portfolio-hero">
                <ScrollAnimation animation="fade-in-up">
                    <span className="portfolio-label">Meu Trabalho</span>
                    <h1 className="portfolio-title">
                        Portfólio <span className="text-gradient-creative">Completo</span>
                    </h1>
                    <p className="portfolio-description">
                        Explore meus projetos divididos por categoria. Cada um representa desafios
                        superados e habilidades desenvolvidas ao longo da minha jornada.
                    </p>
                </ScrollAnimation>
            </section>

            {/* Filtros com contador correto */}
            <section className="portfolio-filters-section">
                <ScrollAnimation animation="fade-in-up" delay={200}>
                    <div className="portfolio-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span className="material-symbols-outlined">{cat.icon}</span>
                                {cat.name}
                                <span className="filter-count">
                                    {cat.id === 'all'
                                        ? projects.length
                                        : projects.filter(p => {
                                            if (Array.isArray(p.category)) {
                                                return p.category.includes(cat.id);
                                            }
                                            return p.category === cat.id;
                                        }).length
                                    }
                                </span>
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>
            </section>

            {/* Grid de Projetos */}
            <section className="portfolio-projects-section">
                <div className="projects-grid-portfolio">
                    {filteredProjects.map((project, index) => (
                        <ScrollAnimation
                            key={project.id}
                            animation="fade-in-up"
                            delay={index * 100}
                        >
                            <div className="project-card-portfolio">
                                <div className="project-image-wrapper-portfolio">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image-portfolio"
                                    />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link-btn"
                                                    title="Ver projeto"
                                                >
                                                    <span className="material-symbols-outlined">open_in_new</span>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link-btn"
                                                    title="Ver código"
                                                >
                                                    <span className="material-symbols-outlined">code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content-portfolio">
                                    <div className="project-badges-wrapper">
                                        {/* Mostrar TODAS as categorias */}
                                        {Array.isArray(project.category) ? (
                                            // Se for array, mapeia e mostra todos
                                            project.category.map((cat, idx) => (
                                                <div key={idx} className="project-category-badge">
                                                    {categories.find(c => c.id === cat)?.name}
                                                </div>
                                            ))
                                        ) : (
                                            // Se for string única, mostra só uma
                                            <div className="project-category-badge">
                                                {categories.find(c => c.id === project.category)?.name}
                                            </div>
                                        )}

                                        {/* Badges de status */}
                                        {project.status === 'em-construcao' && (
                                            <div className="project-status-badge em-construcao">
                                                <span className="material-symbols-outlined">construction</span>
                                                Em Construção
                                            </div>
                                        )}

                                        {project.status === 'concluido' && (
                                            <div className="project-status-badge concluido">
                                                <span className="material-symbols-outlined">check_circle</span>
                                                Concluído
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="project-title-portfolio">{project.title}</h3>
                                    <p className="project-description-portfolio">{project.description}</p>

                                    <div className="project-tags-portfolio">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="project-tag-portfolio">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
                {/* Mensagem se não tiver projetos */}
                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <span className="material-symbols-outlined">folder_off</span>
                        <p>Nenhum projeto nesta categoria ainda.</p>
                    </div>
                )}
            </section>

            {/* CTA */}
            <ScrollAnimation ScrollAnimation animation="scale-in" >
                <section className="portfolio-cta">
                    <h2 className="cta-title-portfolio">Gostou do que viu?</h2>
                    <p className="cta-description-portfolio">
                        Vamos conversar sobre como posso ajudar no seu próximo projeto!
                    </p>
                    <div className="cta-buttons-portfolio">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5512997621990&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Iniciar Conversa
                            <span className="material-symbols-outlined">chat</span>
                        </a>
                        <a href="mailto:cikegami@gmail.com" className="btn-secondary">
                            Enviar E-mail
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </section>
            </ScrollAnimation>
        </div>
    );
};

export default Portfolio;