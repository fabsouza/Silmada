// ============================================
// NEXUS CNC - APP PRINCIPAL
// ============================================

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import AppRoutes from './routes/AppRoutes';
import './styles/global.scss';

/**
 * Componente App - Root da aplicação
 */
const App = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      {/* Skip Link para Acessibilidade */}
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo principal
      </a>

      {/* Grid Background */}
      <div className="grid-background" aria-hidden="true"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
