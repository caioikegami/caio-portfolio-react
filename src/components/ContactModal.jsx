import React from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const email = 'cikegami@gmail.com';
    const phone = '5512997621990';
    const phoneFormatted = '(12) 99762-1990';

    const handleWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`, '_blank');
    };

    const handleEmail = () => {
        window.location.href = `mailto:${email}`;
    };

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/caioikegamiferreira/', '_blank');
    };

    const handleGitHub = () => {
        window.open('https://github.com/caioikegami', '_blank');
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <h2 className="modal-title">Contatos</h2>
                <p className="modal-subtitle">Entre em contato comigo através de:</p>

                <div className="contact-cards">
                    {/* Email Card */}
                    <div className="contact-card">
                        <div className="contact-icon-wrapper">
                            <span className="material-symbols-outlined">mail</span>
                        </div>
                        <h3 className="contact-card-title">Prefere E-mail?</h3>
                        <p className="contact-card-subtitle">Entre em contato</p>
                        <div className="contact-info">{email}</div>
                        <button className="contact-btn contact-btn-email" onClick={handleEmail}>
                            Enviar E-mail
                        </button>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="contact-card contact-card-whatsapp">
                        <div className="contact-icon-wrapper">
                            <span className="material-symbols-outlined">chat</span>
                        </div>
                        <h3 className="contact-card-title">Vamos Conversar</h3>
                        <p className="contact-card-subtitle">(Converse via WhatsApp)</p>
                        <div className="contact-info contact-info-phone">
                            <span className="material-symbols-outlined">call</span>
                            {phoneFormatted}
                        </div>
                        <button className="contact-btn contact-btn-whatsapp" onClick={handleWhatsApp}>
                            Conversar no WhatsApp
                        </button>
                    </div>

                    {/* Social Card */}
                    <div className="contact-card">
                        <div className="contact-icon-wrapper">
                            <span className="material-symbols-outlined">group</span>
                        </div>
                        <h3 className="contact-card-title">Redes Sociais</h3>
                        <p className="contact-card-subtitle">(Conecte comigo online)</p>
                        <div className="social-buttons">
                            <button className="social-btn social-btn-linkedin" onClick={handleLinkedIn}>
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                Ver LinkedIn
                            </button>
                            <button className="social-btn social-btn-github" onClick={handleGitHub}>
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Ver GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;