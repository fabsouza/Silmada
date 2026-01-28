// ============================================
// NEXUS CNC - HOOK: useScrollAnimation
// ============================================
// Hook para detectar quando elementos entram no viewport
// e aplicar animações de entrada.

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook para animações baseadas em scroll
 * @param {Object} options - Opções do IntersectionObserver
 * @param {number} options.threshold - Percentagem visível para trigger (0-1)
 * @param {string} options.rootMargin - Margem do root element
 * @param {boolean} options.triggerOnce - Se true, anima apenas uma vez
 * @returns {Object} - { ref, isVisible, hasAnimated }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasAnimated(true);
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;

    // Verificar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible, hasAnimated };
};

/**
 * Hook para animar múltiplos elementos com delay staggered
 * @param {number} itemCount - Número de itens a animar
 * @param {Object} options - Opções de animação
 * @returns {Object} - { containerRef, isVisible, getItemDelay }
 */
export const useStaggeredAnimation = (itemCount, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    baseDelay = 0,
    staggerDelay = 100
  } = options;

  const { ref: containerRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const getItemDelay = useCallback(
    (index) => {
      return baseDelay + index * staggerDelay;
    },
    [baseDelay, staggerDelay]
  );

  const getItemStyle = useCallback(
    (index) => {
      if (!isVisible) {
        return {
          opacity: 0,
          transform: 'translateY(30px)'
        };
      }

      return {
        opacity: 1,
        transform: 'translateY(0)',
        transition: `opacity 0.5s ease-out ${getItemDelay(index)}ms, transform 0.5s ease-out ${getItemDelay(index)}ms`
      };
    },
    [isVisible, getItemDelay]
  );

  return { containerRef, isVisible, getItemDelay, getItemStyle };
};

export default useScrollAnimation;
