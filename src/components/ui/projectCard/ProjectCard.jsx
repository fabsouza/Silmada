// ============================================
// NEXUS CNC - COMPONENTE: ProjectCard
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import './projectCard.scss';

/**
 * Componente ProjectCard para exibir projetos do portfólio
 * @param {Object} props
 * @param {Object} props.project - Dados do projeto
 * @param {number} props.index - Índice para animação
 * @param {boolean} props.isVisible - Se está visível (para animação)
 * @param {string} props.className - Classes adicionais
 * @param {Function} props.onClick - Handler de click (para modal)
 */
const ProjectCard = ({
  project,
  index = 0,
  isVisible = true,
  className = '',
  onClick
}) => {
  const {
    id,
    title,
    category,
    shortDescription,
    specs,
    thumbnail,
    technologies
  } = project;

  const classNames = [
    'project-card',
    isVisible && 'project-card--visible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    transitionDelay: `${index * 150}ms`
  };

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(project);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) {
        onClick(project);
      }
    }
  };

  return (
    <article
      className={classNames}
      style={style}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={`Ver detalhes do projeto: ${title}`}
    >
      <div className="project-card__image">
        {thumbnail ? (
          <img src={thumbnail} alt={title} loading="lazy" />
        ) : (
          <div className="project-card__placeholder">
            <span>CNC</span>
          </div>
        )}
        <div className="project-card__overlay">
          <span className="project-card__view">Ver Projeto</span>
        </div>
      </div>
      
      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{shortDescription}</p>
        
        {specs && (
          <div className="project-card__specs">
            {Object.entries(specs).slice(0, 3).map(([key, value]) => (
              <span key={key} className="project-card__spec">
                {value}
              </span>
            ))}
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="project-card__tags">
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="project-card__tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
