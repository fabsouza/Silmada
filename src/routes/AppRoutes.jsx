// ============================================
// NEXUS CNC - ROTAS DA APLICAÇÃO
// ============================================

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load das páginas para melhor performance
const Home = lazy(() => import('../pages/home/Home'));
const Services = lazy(() => import('../pages/services/Services'));
const Portfolio = lazy(() => import('../pages/portfolio/Portfolio'));
const Contacts = lazy(() => import('../pages/contacts/Contacts'));

// Loading component
const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__spinner"></div>
  </div>
);

/**
 * Componente de Rotas da Aplicação
 */
const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactos" element={<Contacts />} />
        {/* 404 - Redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
