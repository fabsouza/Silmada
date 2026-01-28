// ============================================
// NEXUS CNC - COMPONENTE: Highlights
// ============================================

import React from 'react';
import SectionTitle from '../../../../components/ui/sectionTitle/SectionTitle';
import ProjectCard from '../../../../components/ui/projectCard/ProjectCard';
import TechCard from '../../../../components/ui/techCard/TechCard';
import Button from '../../../../components/ui/button/Button';
import { useStaggeredAnimation } from '../../../../hooks';
import { portfolioData } from '../../../../data/portfolioData';
import { techData } from '../../../../data/companyData';
import './highlights.scss';

/**
 * Componente Highlights - Projetos e tecnologias em destaque
 */
const Highlights = () => {
  // Filtrar apenas projetos featured
  const featuredProjects = portfolioData.filter(p => p.featured).slice(0, 4);

  const { 
    containerRef: projectsRef, 
    isVisible: projectsVisible 
  } = useStaggeredAnimation(featuredProjects.length, {
    threshold: 0.1,
    staggerDelay: 150
  });

  const { 
    containerRef: techRef, 
    isVisible: techVisible 
  } = useStaggeredAnimation(techData.length, {
    threshold: 0.2,
    staggerDelay: 50
  });

  return (
    <div className="highlights">
      {/* Projects Section */}
      <section className="highlights__projects">
        <div className="highlights__container">
          <SectionTitle
            number="02"
            title="*Projetos*"
            subtitle="Alguns dos nossos trabalhos mais recentes."
          />

          <div className="projects-grid" ref={projectsRef}>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={projectsVisible}
              />
            ))}
          </div>

          <div className="highlights__cta">
            <Button variant="outline" size="lg" href="/portfolio">
              Ver Todo o Portfólio
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="highlights__tech">
        <div className="highlights__container">
          <SectionTitle
            number="03"
            title="*Tecnologia*"
            subtitle="Stack tecnológico de referência para soluções industriais."
            align="center"
          />

          <div className="tech-grid" ref={techRef}>
            {techData.map((tech, index) => (
              <TechCard
                key={tech.id}
                name={tech.name}
                description={tech.description}
                website={tech.website}
                index={index}
                isVisible={techVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="highlights__cta-section">
        <div className="highlights__container">
          <div className="highlights__cta-content">
            <h2 className="highlights__cta-title">
              Pronto para começar o seu <em>projeto</em>?
            </h2>
            <p className="highlights__cta-text">
              Contacte-nos para discutir as suas necessidades e receber uma proposta personalizada.
            </p>
            <Button variant="primary" size="lg" href="/contactos">
              Falar Connosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlights;
