// ============================================
// NEXUS CNC - PÁGINA: Services
// ============================================

import React from 'react';
import SectionTitle from '../../components/ui/sectionTitle/SectionTitle';
import ServiceCard from '../../components/ui/serviceCard/ServiceCard';
import Button from '../../components/ui/button/Button';
import { useStaggeredAnimation, useScrollAnimation } from '../../hooks';
import { servicesData } from '../../data/servicesData';
import './services.scss';

/**
 * Página Services - Listagem de todos os serviços
 */
const Services = () => {
  const { containerRef, isVisible } = useStaggeredAnimation(
    servicesData.length,
    { threshold: 0.1, staggerDelay: 100 }
  );

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="services-page__container">
          <span className="services-page__eyebrow">Serviços</span>
          <h1 className="services-page__title">
            Soluções <em>completas</em><br />
            para a sua indústria
          </h1>
          <p className="services-page__intro">
            Da conceção ao comissionamento, oferecemos um portfólio completo de serviços 
            de engenharia CNC. Cada solução é desenvolvida à medida das suas necessidades específicas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__list">
        <div className="services-page__container">
          <div className="services-grid" ref={containerRef}>
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="services-page__details">
        <div className="services-page__container">
          <SectionTitle
            number="02"
            title="Como *trabalhamos*"
            subtitle="O nosso processo é transparente e colaborativo."
          />

          <div className="services-page__process">
            <ProcessStep
              number="01"
              title="Análise"
              description="Reunimos consigo para compreender os requisitos técnicos, restrições e objectivos do projeto."
            />
            <ProcessStep
              number="02"
              title="Proposta"
              description="Desenvolvemos uma proposta detalhada com especificações técnicas, cronograma e orçamento."
            />
            <ProcessStep
              number="03"
              title="Execução"
              description="Construímos e testamos a solução nas nossas instalações antes da entrega."
            />
            <ProcessStep
              number="04"
              title="Instalação"
              description="Instalamos e comissionamos o equipamento no local, com formação da equipa."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-page__cta">
        <div className="services-page__container">
          <div className="services-page__cta-content">
            <h2 className="services-page__cta-title">
              Precisa de uma solução <em>específica</em>?
            </h2>
            <p className="services-page__cta-text">
              Cada projeto é único. Contacte-nos para discutir os seus requisitos 
              e encontrar a melhor solução.
            </p>
            <Button variant="primary" size="lg" href="/contactos">
              Contactar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Process Step Component ---
const ProcessStep = ({ number, title, description }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      className={`process-step ${isVisible ? 'process-step--visible' : ''}`}
      ref={ref}
    >
      <span className="process-step__number">{number}</span>
      <div className="process-step__content">
        <h3 className="process-step__title">{title}</h3>
        <p className="process-step__description">{description}</p>
      </div>
    </div>
  );
};

export default Services;
