// ============================================
// NEXUS CNC - PÁGINA: Home
// ============================================

import React from 'react';
import Hero from './components/hero/Hero';
import Stats from './components/stats/Stats';
import About from './components/about/About';
import Highlights from './components/highlights/Highlights';
import './home.scss';

/**
 * Página Home - Landing page principal
 */
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Stats />
      <About />
      <Highlights />
    </div>
  );
};

export default Home;
