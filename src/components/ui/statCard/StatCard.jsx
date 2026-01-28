// ============================================
// NEXUS CNC - COMPONENTE: StatCard
// ============================================

import React from 'react';
import './statCard.scss';

/**
 * Componente StatCard para exibir estatísticas
 * @param {Object} props
 * @param {string} props.number - Número/valor da estatística
 * @param {string} props.label - Label descritiva
 * @param {string} props.suffix - Sufixo opcional (ex: '%', '+')
 * @param {number} props.index - Índice para animação
 * @param {boolean} props.isVisible - Se está visível (para animação)
 * @param {string} props.className - Classes adicionais
 */
const StatCard = ({
  number,
  label,
  suffix = '',
  index = 0,
  isVisible = true,
  className = ''
}) => {
  const classNames = [
    'stat-card',
    isVisible && 'stat-card--visible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    transitionDelay: `${index * 100}ms`
  };

  return (
    <div className={classNames} style={style}>
      <span className="stat-card__number">
        {number}
        {suffix && <span className="stat-card__suffix">{suffix}</span>}
      </span>
      <span className="stat-card__label">{label}</span>
    </div>
  );
};

export default StatCard;
