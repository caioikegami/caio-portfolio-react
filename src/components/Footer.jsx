import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <h5 className="footer-title">CAIO IKEGAMI</h5>

            <div className="footer-links">
                <a href="https://github.com/caioikegami" target="_blank" rel="noopener noreferrer" className="footer-link">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/caioikegamiferreira/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/eucaioikegami/" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Instagram
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5512997621990&text&type=phone_number&app_absent=0" target='_blank' rel="noopener noreferrer" className="footer-link footer-link-contact">
                    Contact
                </a>
            </div>

            <p className="footer-copyright">
                © {currentYear} Todos os direitos reservados. Produzido por Caio Ikegami
            </p>
        </footer>
    );
};

export default Footer;