import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handlePortfolioClick = (e) => {
        e.preventDefault();

        // Se estiver na home
        if (location.pathname === '/') {
            // Scroll suave até a seção
            const portfolioSection = document.getElementById('portfolio');
            if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Se estiver em outra página, redireciona
            navigate('/portfolio');
        }

        // Fechar menu mobile
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <span
                        className="material-symbols-outlined menu-icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        menu
                    </span>

                    {/* Logo com animação hacker */}
                    <Link to="/" className="logo-link">
                        <div className="hacker-container-header">
                            <div className="hacker-btn-header">
                                Caio Ferreira
                            </div>
                            <div data-text="carregando" className="hacker-tooltip-header">
                                <span>Dev. FullStack</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <nav className="nav-desktop">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </Link>

                    <a
                        href="#portfolio"
                        onClick={handlePortfolioClick}
                        className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
                    >
                        Portfólio
                    </a>

                    <Link
                        to="/sobremim"
                        className={`nav-link ${location.pathname === '/sobremim' ? 'active' : ''}`}
                    >
                        Sobre mim
                    </Link>
                </nav>

                <div className="header-right">
                    <img src={`${process.env.PUBLIC_URL}/favicon-32x32.png`} alt="favicon-Caio" />
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="nav-mobile">
                    <Link
                        to="/"
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <a
                        href="#portfolio"
                        className="nav-link"
                        onClick={handlePortfolioClick}
                    >
                        Portfólio
                    </a>

                    <Link
                        to="/sobremim"
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sobre mim
                    </Link>

                    <a
                        href="#contato"
                        className="nav-link"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Permissão
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;