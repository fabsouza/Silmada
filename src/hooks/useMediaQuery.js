// ============================================
// NEXUS CNC - HOOK: useMediaQuery
// ============================================
// Hook para detectar media queries e breakpoints

import { useState, useEffect, useCallback } from 'react';

// Breakpoints consistentes com o SCSS
const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

/**
 * Hook para detectar uma media query específica
 * @param {string} query - Media query string (ex: '(min-width: 768px)')
 * @returns {boolean} - Se a query corresponde
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Verificar se estamos no browser
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    
    // Set inicial
    setMatches(mediaQuery.matches);

    // Handler para mudanças
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // Usar addEventListener para compatibilidade
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback para browsers antigos
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

/**
 * Hook para verificar se está em mobile
 * @returns {boolean}
 */
export const useIsMobile = () => {
  return !useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
};

/**
 * Hook para verificar se está em tablet
 * @returns {boolean}
 */
export const useIsTablet = () => {
  const isMinMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`);
  const isMaxLg = !useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
  return isMinMd && isMaxLg;
};

/**
 * Hook para verificar se está em desktop
 * @returns {boolean}
 */
export const useIsDesktop = () => {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);
};

/**
 * Hook para obter o breakpoint atual
 * @returns {string} - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('xs');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width >= BREAKPOINTS['2xl']) {
        setBreakpoint('2xl');
      } else if (width >= BREAKPOINTS.xl) {
        setBreakpoint('xl');
      } else if (width >= BREAKPOINTS.lg) {
        setBreakpoint('lg');
      } else if (width >= BREAKPOINTS.md) {
        setBreakpoint('md');
      } else if (width >= BREAKPOINTS.sm) {
        setBreakpoint('sm');
      } else if (width >= BREAKPOINTS.xs) {
        setBreakpoint('xs');
      } else {
        setBreakpoint('xs');
      }
    };

    // Set inicial
    updateBreakpoint();

    // Listener para resize
    window.addEventListener('resize', updateBreakpoint);

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return breakpoint;
};

/**
 * Hook para obter as dimensões da janela
 * @returns {Object} - { width, height }
 */
export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

/**
 * Hook para verificar preferência de movimento reduzido
 * @returns {boolean}
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

/**
 * Hook para verificar preferência de tema escuro
 * @returns {boolean}
 */
export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

export default useMediaQuery;
