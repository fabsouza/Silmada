// ============================================
// NEXUS CNC - COMPONENTE: TechCard
// ============================================

import React from 'react';
import './techCard.scss';

/**
 * Componente TechCard para exibir tecnologias
 * @param {Object} props
 * @param {string} props.name - Nome da tecnologia
 * @param {string} props.description - Descrição breve
 * @param {string} props.website - URL do website (opcional)
 * @param {number} props.index - Índice para animação
 * @param {boolean} props.isVisible - Se está visível (para animação)
 * @param {string} props.className - Classes adicionais
 */
const TechCard = ({
  name,
  description,
  website,
  index = 0,
  isVisible = true,
  className = ''
}) => {
  const classNames = [
    'tech-card',
    isVisible && 'tech-card--visible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    transitionDelay: `${index * 50}ms`
  };

  const CardWrapper = website ? 'a' : 'div';
  const wrapperProps = website ? {
    href: website,
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <CardWrapper
      className={classNames}
      style={style}
      {...wrapperProps}
    >
      <span className="tech-card__name">{name}</span>
      <span className="tech-card__description">{description}</span>
    </CardWrapper>
  );
};

export default TechCard;
