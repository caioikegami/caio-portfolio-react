import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Fabiano Rodrigues - Nutricionista Funcional',
            description: 'Projeto de site para profissional com portfolio showcase e integração de APIs para conteúdo midiático, aplicando princípios de UI/UX e responsividade.',
            image: `${process.env.PUBLIC_URL}/assets/fabianonutri.png`,
            tags: ['Services', 'Front-end', 'React'],
            tagColors: ['primary', 'primary', 'primary'],
            link: 'https://caioikegami.github.io/nutricionista-fabiano/'
        },
        {
            id: 2,
            title: 'Mario Bros Serviços 🍄',
            description: 'Projeto de estudo para sites de serviços. Utilizado HTML, CSS e JavaScript para criar uma experiência interativa e visualmente atraente, inspirada no universo do Mario Bros. Com Emulador do SNES embutido para jogar',
            image: `${process.env.PUBLIC_URL}/assets/mariodesktop.png`,
            tags: ['Services', 'Front-end', 'Game'],
            tagColors: ['primary', 'primary', 'primary'],
            link: 'https://caioikegami.github.io/SuperMario/'
        },
        {
            id: 3,
            title: 'Site Márcio Conceição - Programa Compatíveis',
            description: 'Site com Pagina de apresentação do programa compatíveis, utilizado Tailwind para criar uma interface dinâmica e responsiva, com foco em design moderno e usabilidade.',
            image: `${process.env.PUBLIC_URL}/assets/projetocompativeis.png`,
            tags: ['Services', 'Front-end', 'Tailwind'],
            tagColors: ['primary', 'primary', 'primary'],
            link: 'https://caioikegami.github.io/projeto-compativeis/compativeis.html'
        },
        {
            id: 4,
            title: 'DevSorteio',
            description: 'Ferramenta de Sorteio de números. Aonde você pode inserir dois valores para sortear números dentro do intervalo deles.',
            image: `${process.env.PUBLIC_URL}/assets/devsorteio.png`,
            tags: ['Tool', 'Front-end'],
            tagColors: ['primary', 'primary'],
            link: 'https://caioikegami.github.io/DevSorteioJS/'
        },
        {
            id: 5,
            title: 'Convert-Money',
            description: 'Ferramenta para conversão de moedas, aplicando aprendizado em HTML, CSS e Javascript',
            image: `${process.env.PUBLIC_URL}/assets/ikeconvertmoney.png`,
            tags: ['Tool', 'Front-end'],
            tagColors: ['primary', 'primary'],
            link: 'https://caioikegami.github.io/ConvertMoneyJS/'
        },
        {
            id: 6,
            title: 'Jokenpô Game',
            description: 'Jogo de Jokenpô para praticar HTML, CSS e JavaScript',
            image: `${process.env.PUBLIC_URL}/assets/ikepojokenpo.png`,
            tags: ['Game', 'Front-end'],
            tagColors: ['primary', 'primary'],
            link: 'https://caioikegami.github.io/DESAFIOJOKENPO/'
        }
    ];

    return (
        <section id="portfolio" className="projects-section">
            <div className="projects-header">
                <div>
                    <h3 className="projects-title">Projetos em Destaque</h3>
                    <p className="projects-subtitle">Trabalhos recentes que unem técnica e estética.</p>
                </div>
                <Link to="/portfolio" className="projects-link">
                    Ver Todos
                    <span className="material-symbols-outlined">north_east</span>
                </Link>
            </div>

            <div className="projects-carousel-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        }
                    }}
                    className="projects-swiper"
                >
                    {projects.map((project) => (
                        <SwiperSlide key={project.id}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card-link"
                            >
                                <div className="project-card">
                                    <div className="project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                        <div className="project-tags">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className={`project-tag project-tag-${project.tagColors[index]}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Ícone de link ao hover */}
                                        <div className="project-link-indicator">
                                            <span className="material-symbols-outlined">open_in_new</span>
                                        </div>
                                    </div>
                                    <div className="project-content">
                                        <h4 className="project-title">{project.title}</h4>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
};

export default Projects;