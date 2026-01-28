// ============================================
// NEXUS CNC - COMPONENTE: Footer
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import { contactInfo, companyData } from '../../../data/companyData';
import './footer.scss';

/**
 * Componente Footer - Rodapé do site
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { to: '/', label: 'Sobre Nós' },
      { to: '/servicos', label: 'Serviços' },
      { to: '/portfolio', label: 'Portfólio' },
      { to: '/contactos', label: 'Contacto' }
    ],
    servicos: [
      { to: '/servicos#cnc-personalizado', label: 'CNC Personalizado' },
      { to: '/servicos#retrofitting', label: 'Retrofitting' },
      { to: '/servicos#automacao-atc', label: 'Automação ATC' },
      { to: '/servicos#cadcam', label: 'Integração CAD/CAM' }
    ],
    legal: [
      { to: '/privacidade', label: 'Política de Privacidade' },
      { to: '/termos', label: 'Termos de Serviço' }
    ]
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__main">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <Logo size="md" />
            </Link>
            <p className="footer__tagline">
              {companyData.tagline}
            </p>
            <p className="footer__description">
              Desenvolvemos soluções CNC personalizadas para a indústria portuguesa desde {companyData.founded}.
            </p>
          </div>

          {/* Links Columns */}
          <div className="footer__links">
            {/* Empresa */}
            <div className="footer__column">
              <h4 className="footer__column-title">Empresa</h4>
              <ul className="footer__list">
                {footerLinks.empresa.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className="footer__column">
              <h4 className="footer__column-title">Serviços</h4>
              <ul className="footer__list">
                {footerLinks.servicos.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div className="footer__column">
              <h4 className="footer__column-title">Contacto</h4>
              <ul className="footer__list footer__contact-list">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="footer__link">
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="footer__link">
                    {contactInfo.phoneFormatted}
                  </a>
                </li>
                <li className="footer__address">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.postal} {contactInfo.address.city}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {companyData.name} — {companyData.tagline}
          </p>
          <p className="footer__location">
            {contactInfo.address.city}, {contactInfo.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
