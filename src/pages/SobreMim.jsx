import React from 'react';
import './SobreMim.css';

const SobreMim = () => {
    const timeline = [
        {
            year: '2006',
            title: 'Início na Tecnologia',
            description: 'Faz curso de Montagem e Manutenção de Computadores, começa a trabalhar com Manutenção.'
        },
        {
            year: '2012',
            title: 'Profissionalização',
            description: 'Começa a trabalhar como Representante Comercial de Software ERP para farmácias e Drogarias.'
        },
        {
            year: '2025',
            title: 'Expansão de Skills',
            description: 'Comecei a estudar Python e enxerga a possibilidade de resolver problemas cotidianos com tecnologia.'
        },
        {
            year: '2026',
            title: 'Formação em Desenvolvedor FullStack no DevClub',
            description: 'Atualmente estudando e trabalhando com projetos que unem tecnologia, design e arte, criando soluções inovadoras.'
        }
    ];

    return (
        <div className="sobre-mim-page">
            {/* Hero Section */}
            <section className="sobre-hero">
                <div className="sobre-hero-content">
                    <span className="sobre-label">Sobre Mim</span>
                    <h1 className="sobre-title">
                        Quem é<br />
                        <span className="text-gradient-creative">Caio Ikegami?</span>
                    </h1>
                    <h2 className="sobre-description">
                        Desenvolvedor Web Freelancer | Full Stack em formação pela DevClub
                    </h2>
                </div>
                <div className="sobre-hero-image">
                    <div className="sobre-image-wrapper">
                        <img src={`${process.env.PUBLIC_URL}/assets/Caio1.png'`} 
                        alt="Caio Ikegami" className="sobre-profile-img" />
                        <div className="sobre-image-overlay"></div>
                    </div>
                </div>
            </section>

            {/* Biografia */}
            <section className="biografia-section">
                <div className="biografia-container">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">person</span>
                        Minha Jornada
                    </h2>
                    <div className="biografia-content">
                        <p>
                            Minha jornada com a tecnologia começou aos 15 anos, desmontando computadores e desvendando o hardware.
                            De lá para cá, acumulei mais de 7 anos de experiência na linha de frente de um Software para farmácias e
                            drogarias, atuando desde a venda e implantação até o suporte técnico avançado e manutenção de bancos de dados.
                            Essa vivência me deu uma visão clara do que realmente importa: criar soluções que resolvem problemas
                            reais de negócios e de usuários.
                        </p>
                        <p>
                            Além da tecnologia, a música sempre foi meu alicerce. Como guitarrista, desenvolvi a disciplina rigorosa,
                            o raciocínio rápido e a criatividade que hoje aplico diretamente na escrita de códigos limpos e eficientes.
                            Minha bagagem ainda inclui anos no mercado de marketing digital, produção audiovisual e e-commerce,
                            o que me permite entender um projeto muito além das linhas de código.
                        </p>
                        <p>
                            Em 2025, transformei minha paixão por resolver problemas em código ao mergulhar no desenvolvimento de software.
                            Estudando Python e hoje atuo como Desenvolvedor Web Freelancer. Atualmente, estou expandindo ainda mais meu ecossistema
                            de soluções através da formação Full Stack na DevClub.
                        </p>
                        <div className="bio-highlight">
                            <span className="material-symbols-outlined">star</span>
                            <p>
                                <strong>Como posso te ajudar:</strong> No desenvolvimento de aplicações web robustas, interfaces inteligentes
                                e soluções que unem design, performance e foco total na experiência do usuário.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="timeline-section">
                <div className="timeline-container">
                    <h2 className="section-title">
                        <span className="material-symbols-outlined">timeline</span>
                        Linha do Tempo
                    </h2>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2 className="cta-title">Vamos criar algo incrível juntos?</h2>
                    <p className="cta-description">
                        Estou sempre aberto a novos projetos e colaborações.
                        Entre em contato e vamos conversar!
                    </p>
                    <div className="cta-buttons">
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
                </div>
            </section>
        </div>
    );
};

export default SobreMim;