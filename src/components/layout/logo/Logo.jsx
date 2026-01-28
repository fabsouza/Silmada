// ============================================
// NEXUS CNC - COMPONENTE: Logo
// ============================================

import React from 'react';
import './logo.scss';

/**
 * Componente Logo
 * @param {Object} props
 * @param {string} props.variant - 'default' | 'light' | 'dark'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.showText - Mostrar texto do logo
 * @param {string} props.className - Classes adicionais
 */
const Logo = ({
  variant = 'default',
  size = 'md',
  showText = true,
  className = ''
}) => {
  const classNames = [
    'logo',
    `logo--${variant}`,
    `logo--${size}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      {showText && (
        <span className="logo__text">
          NEXUS<span className="logo__accent">CNC</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
