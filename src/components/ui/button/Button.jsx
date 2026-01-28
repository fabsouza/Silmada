// ============================================
// NEXUS CNC - COMPONENTE: Button
// ============================================

import React from 'react';
import './button.scss';

/**
 * Componente Button reutilizável
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'ghost' | 'outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Se ocupa toda a largura
 * @param {boolean} props.disabled - Estado desabilitado
 * @param {boolean} props.loading - Estado de carregamento
 * @param {string} props.type - Tipo do button HTML
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {string} props.className - Classes adicionais
 * @param {Function} props.onClick - Handler de click
 * @param {string} props.href - Se definido, renderiza como link
 * @param {string} props.target - Target do link
 * @param {string} props.ariaLabel - Label de acessibilidade
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  children,
  className = '',
  onClick,
  href,
  target,
  ariaLabel,
  ...props
}) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    disabled && 'btn--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.4 31.4" />
          </svg>
        </span>
      )}
      <span className={`btn__content ${loading ? 'btn__content--hidden' : ''}`}>
        {children}
      </span>
    </>
  );

  // Renderizar como link se href for fornecido
  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classNames}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
