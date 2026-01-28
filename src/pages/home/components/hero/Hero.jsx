// ============================================
// NEXUS CNC - COMPONENTE: Hero
// ============================================

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/ui/button/Button';
import './hero.scss';

/**
 * Componente Hero - Secção principal da landing page
 */
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${isLoaded ? 'hero--loaded' : ''}`}>
      <div className="hero__container">
        <div className="hero__content">
          {/* Eyebrow */}
          <span className="hero__eyebrow">
            Engenharia CNC Industrial
          </span>

          {/* Main Title */}
          <h1 className="hero__title">
            Precisão<br />
            <em>Industrial</em>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            Desenvolvemos soluções CNC personalizadas para a indústria portuguesa. 
            Da conceção à implementação, transformamos ideias em realidade 
            com precisão micrométrica.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions">
            <Button
              variant="primary"
              size="lg"
              href="/contactos"
            >
              Pedir Orçamento
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/portfolio"
            >
              Ver Projetos
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <span>SCROLL</span>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero__background">
        <div className="hero__grid-lines" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Hero;
