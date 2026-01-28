// ============================================
// NEXUS CNC - COMPONENTE: ServiceCard
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import './serviceCard.scss';

/**
 * Componente ServiceCard para exibir serviços
 * @param {Object} props
 * @param {string} props.icon - Ícone do serviço
 * @param {string} props.title - Título do serviço
 * @param {string} props.description - Descrição breve
 * @param {string} props.link - Link para detalhe (opcional)
 * @param {number} props.index - Índice para animação staggered
 * @param {boolean} props.isVisible - Se está visível (para animação)
 * @param {string} props.className - Classes adicionais
 */
const ServiceCard = ({
  icon,
  title,
  description,
  link,
  index = 0,
  isVisible = true,
  className = ''
}) => {
  const classNames = [
    'service-card',
    isVisible && 'service-card--visible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    transitionDelay: `${index * 100}ms`
  };

  const CardContent = () => (
    <>
      <span className="service-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      {link && (
        <span className="service-card__arrow" aria-hidden="true">→</span>
      )}
    </>
  );

  if (link) {
    return (
      <Link to={link} className={classNames} style={style}>
        <CardContent />
      </Link>
    );
  }

  return (
    <div className={classNames} style={style}>
      <CardContent />
    </div>
  );
};

export default ServiceCard;
