import React, { useState, useEffect, useRef } from 'react';
import ContactModal from './ContactModal';
import ScrollAnimation from './ScrollAnimation';
import './Hero.css';

const Hero = () => {
    const [years, setYears] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        let current = 0;
                        const target = 7;
                        const increment = target / 50;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                setYears(target);
                                clearInterval(timer);
                            } else {
                                setYears(Math.floor(current));
                            }
                        }, 30);
                        setHasAnimated(true);
                    }

                    if (!entry.isIntersecting) {
                        setHasAnimated(false);
                        setYears(0);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <>
            <section className="hero-section">
                <div className="hero-grid">
                    <div className="hero-content">
                        <ScrollAnimation animation="fade-in-right">
                            <div className="status-badge">
                                <span className="pulse-dot"></span>
                                <span className="status-text">Disponível para Projetos</span>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-in-right" delay={100}>
                            <h2 className="hero-title">
                                Soluções Digitais para <br />
                                <span className="text-gradient-creative">seu negócio ou carreira</span>
                            </h2>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-in-right" delay={200}>
                            <p className="hero-description">
                                Desenvolvedor Full-stack especializado em interfaces de alta performance e
                                ecossistemas digitais. Transformo código em experiência.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-in-up" delay={300}>
                            <div className="hero-buttons">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="btn-primary"
                                >
                                    Iniciar Projeto
                                    <span className="material-symbols-outlined">terminal</span>
                                </button>
                                <a href="#portfolio" className="btn-secondary">
                                    Ver Portfolio
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                        </ScrollAnimation>

                        {/* Stats Section */}
                        <div className="hero-stats" ref={statsRef}>
                            <ScrollAnimation animation="fade-in-up" delay={400}>
                                <div className="stat-item stat-counter">
                                    <div className="stat-icon-wrapper">
                                        <span className="material-symbols-outlined stat-icon">workspace_premium</span>
                                    </div>
                                    <div className="stat-content">
                                        <div className="stat-number">+{years}</div>
                                        <div className="stat-label">Anos de Experiência<br />em Tecnologia</div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-in-up" delay={500}>
                                <div className="stat-item stat-badge">
                                    <div className="stat-icon-wrapper">
                                        <span className="material-symbols-outlined stat-icon">emoji_events</span>
                                    </div>
                                    <div className="stat-content">
                                        <div className="stat-number">1 / 8</div>
                                        <div className="stat-label">Projeto escolhido<br />entre 8 propostas</div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-in-up" delay={600}>
                                <div className="stat-item stat-badge">
                                    <div className="stat-icon-wrapper">
                                        <span className="material-symbols-outlined stat-icon">support_agent</span>
                                    </div>
                                    <div className="stat-content">
                                        <div className="stat-number">✓</div>
                                        <div className="stat-label">Know-how em<br />Suporte Técnico</div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <ScrollAnimation animation="scale-in" delay={200}>
                        <div className="hero-image-wrapper">
                            <div className="hero-image-container">
                                <img
                                    className="hero-image"
                                    src="/assets/Caio1.jpeg"
                                    alt="Caio Ikegami"
                                />
                                <div className="hero-image-overlay"></div>
                            </div>

                            {/* Abstract UI Element */}
                            <div className="hero-badge">
                                <div className="badge-content">
                                    <span className="material-symbols-outlined">data_object</span>
                                    <div className="badge-text">
                                        <span className="badge-label">status:</span> "optimized"<br />
                                        <span className="badge-label-fps">fps:</span> 120
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Hero;