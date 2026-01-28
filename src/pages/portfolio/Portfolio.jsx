// ============================================
// NEXUS CNC - PÁGINA: Portfolio
// ============================================

import React, { useState, useMemo } from 'react';
import ProjectCard from '../../components/ui/projectCard/ProjectCard';
import Button from '../../components/ui/button/Button';
import { useStaggeredAnimation } from '../../hooks';
import { portfolioData, portfolioCategories } from '../../data/portfolioData';
import './portfolio.scss';

/**
 * Página Portfolio - Listagem de projetos
 */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filtrar projetos por categoria
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return portfolioData;
    }
    return portfolioData.filter(p => p.categorySlug === activeCategory);
  }, [activeCategory]);

  const { containerRef, isVisible } = useStaggeredAnimation(
    filteredProjects.length,
    { threshold: 0.1, staggerDelay: 100 }
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-page__hero">
        <div className="portfolio-page__container">
          <span className="portfolio-page__eyebrow">Portfólio</span>
          <h1 className="portfolio-page__title">
            Projetos que <em>definem</em><br />
            a nossa excelência
          </h1>
          <p className="portfolio-page__intro">
            Cada máquina que construímos é única. Explore o nosso portfólio 
            e descubra como transformamos desafios em soluções de precisão.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="portfolio-page__filter">
        <div className="portfolio-page__container">
          <div className="portfolio-page__categories">
            {portfolioCategories.map((category) => (
              <button
                key={category.slug}
                className={`portfolio-page__category ${
                  activeCategory === category.slug ? 'portfolio-page__category--active' : ''
                }`}
                onClick={() => setActiveCategory(category.slug)}
                aria-pressed={activeCategory === category.slug}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-page__projects">
        <div className="portfolio-page__container">
          <div className="projects-grid" ref={containerRef}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
                onClick={handleProjectClick}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="portfolio-page__empty">
              Não foram encontrados projetos nesta categoria.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-page__cta">
        <div className="portfolio-page__container">
          <div className="portfolio-page__cta-content">
            <h2 className="portfolio-page__cta-title">
              O seu projeto pode ser o <em>próximo</em>
            </h2>
            <p className="portfolio-page__cta-text">
              Tem um desafio técnico que precisa de uma solução CNC personalizada? 
              Fale connosco.
            </p>
            <Button variant="primary" size="lg" href="/contactos">
              Iniciar Projeto
            </Button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
};

// --- Project Modal Component ---
const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="project-modal" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="project-modal__content">
        <button 
          className="project-modal__close" 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="project-modal__header">
          <span className="project-modal__category">{project.category}</span>
          <h2 className="project-modal__title" id="modal-title">{project.title}</h2>
          <div className="project-modal__meta">
            <span>{project.client}</span>
            <span>{project.location}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="project-modal__body">
          <p className="project-modal__description">{project.fullDescription}</p>

          {project.specs && (
            <div className="project-modal__specs">
              <h3>Especificações</h3>
              <dl>
                {Object.entries(project.specs).map(([key, value]) => (
                  <div key={key} className="project-modal__spec-item">
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {project.features && (
            <div className="project-modal__features">
              <h3>Características</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="project-modal__tech">
              <h3>Tecnologias</h3>
              <div className="project-modal__tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-modal__tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
