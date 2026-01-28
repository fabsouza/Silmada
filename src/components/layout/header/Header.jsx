// ============================================
// NEXUS CNC - COMPONENTE: Header
// ============================================

import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useIsMobile } from '../../../hooks';
import Logo from '../logo/Logo';
import './header.scss';

/**
 * Componente Header - Navegação principal
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Fechar menu mobile quando muda de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Links de navegação
  const navLinks = [
    { to: '/', label: 'Home', exact: true },
    { to: '/servicos', label: 'Serviços' },
    { to: '/portfolio', label: 'Portfólio' },
    { to: '/contactos', label: 'Contacto' }
  ];

  const headerClasses = [
    'header',
    isScrolled && 'header--scrolled',
    isMobileMenuOpen && 'header--menu-open'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="NEXUS CNC - Ir para página inicial">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Navegação principal">
          <ul className="header__nav-list">
            {navLinks.map(({ to, label, exact }) => (
              <li key={to} className="header__nav-item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                  end={exact}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button (Desktop) */}
        <Link to="/contactos" className="header__cta">
          Orçamento
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`header__menu-toggle ${isMobileMenuOpen ? 'header__menu-toggle--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="header__menu-toggle-line"></span>
          <span className="header__menu-toggle-line"></span>
          <span className="header__menu-toggle-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="header__mobile-nav" aria-label="Navegação mobile">
          <ul className="header__mobile-nav-list">
            {navLinks.map(({ to, label, exact }, index) => (
              <li
                key={to}
                className="header__mobile-nav-item"
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `header__mobile-nav-link ${isActive ? 'header__mobile-nav-link--active' : ''}`
                  }
                  end={exact}
                  onClick={closeMobileMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__mobile-footer">
          <Link
            to="/contactos"
            className="header__mobile-cta"
            onClick={closeMobileMenu}
          >
            Pedir Orçamento
          </Link>
          <p className="header__mobile-contact">
            <a href="mailto:info@nexuscnc.pt">info@nexuscnc.pt</a>
            <a href="tel:+351212345678">+351 21 234 5678</a>
          </p>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="header__overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
