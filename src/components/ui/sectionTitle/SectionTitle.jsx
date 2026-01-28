// ============================================
// NEXUS CNC - COMPONENTE: SectionTitle
// ============================================

import React from 'react';
import { useScrollAnimation } from '../../../hooks';
import './sectionTitle.scss';

/**
 * Componente SectionTitle para títulos de secção
 * @param {Object} props
 * @param {string} props.number - Número da secção (ex: "01")
 * @param {string} props.title - Título da secção
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {string} props.align - 'left' | 'center' | 'right'
 * @param {boolean} props.light - Versão clara para fundos escuros
 * @param {boolean} props.animated - Se deve animar ao entrar em vista
 * @param {string} props.className - Classes adicionais
 */
const SectionTitle = ({
  number,
  title,
  subtitle,
  align = 'left',
  light = true,
  animated = true,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true
  });

  const classNames = [
    'section-title',
    `section-title--${align}`,
    light && 'section-title--light',
    animated && 'section-title--animated',
    animated && isVisible && 'section-title--visible',
    className
  ]
    .filter(Boolean)
    .join(' ');

  // Separar itálicos no título (texto entre *)
  const renderTitle = (text) => {
    if (!text) return null;
    
    const parts = text.split(/\*(.*?)\*/);
    return parts.map((part, index) => {
      // Partes ímpares são itálicas
      if (index % 2 === 1) {
        return <em key={index}>{part}</em>;
      }
      return part;
    });
  };

  return (
    <div className={classNames} ref={animated ? ref : null}>
      <div className="section-title__header">
        {number && (
          <span className="section-title__number">{number}</span>
        )}
        <h2 className="section-title__text">
          {renderTitle(title)}
        </h2>
      </div>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
