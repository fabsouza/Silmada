// ============================================
// NEXUS CNC - COMPONENTE: About
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../../components/ui/sectionTitle/SectionTitle';
import ServiceCard from '../../../../components/ui/serviceCard/ServiceCard';
import Button from '../../../../components/ui/button/Button';
import { useScrollAnimation, useStaggeredAnimation } from '../../../../hooks';
import { servicesData } from '../../../../data/servicesData';
import './about.scss';

/**
 * Componente About - Secção de serviços na home
 */
const About = () => {
  const { containerRef, isVisible, getItemStyle } = useStaggeredAnimation(
    servicesData.length,
    { threshold: 0.1, staggerDelay: 100 }
  );

  // Mostrar apenas os primeiros 6 serviços
  const displayedServices = servicesData.slice(0, 6);

  return (
    <section className="about" id="servicos">
      <div className="about__container">
        <SectionTitle
          number="01"
          title="*Serviços*"
          subtitle="Soluções completas de engenharia CNC, da conceção à implementação."
        />

        <div className="about__services" ref={containerRef}>
          <div className="services-grid">
            {displayedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                link={`/servicos#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        <div className="about__cta">
          <Button variant="outline" size="lg" href="/servicos">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
