import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                                Caio Ikegami
                            </div>
                            <div data-text="carregando" className="hacker-tooltip-header">
                                <span>Dev. FullStack</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* NAV DEVE ESTAR AQUI DENTRO ↓ */}
                <nav className="nav-desktop">
                    <Link to="/" className="nav-link active">Home</Link>
                    <a href="#portfolio" className="nav-link">Portfólio</a>
                    <Link to="/sobremim" className="nav-link">Sobre mim</Link>
                </nav>

                {/* HEADER-RIGHT DEVE ESTAR AQUI DENTRO ↓ */}
                <div className="header-right">
                    <img src={`${process.env.PUBLIC_URL}/favicon-32x32.png'`} alt="favicon-Caio" />
                </div>
            </div>

            {/* Mobile Menu - FORA do header-content */}
            {isMenuOpen && (
                <nav className="nav-mobile">
                    <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
                    <Link to="/sobremim" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre mim</Link>
                    <a href="#contato" className="nav-link" onClick={() => setIsMenuOpen(false)}>Permissão</a>
                </nav>
            )}
        </header>
    );
};

export default Header;