// ============================================
// NEXUS CNC - COMPONENTE: Stats
// ============================================

import React from 'react';
import StatCard from '../../../../components/ui/statCard/StatCard';
import { useScrollAnimation } from '../../../../hooks';
import { statsData } from '../../../../data/companyData';
import './stats.scss';

/**
 * Componente Stats - Barra de estatísticas
 */
const Stats = () => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="stats" ref={ref} aria-label="Estatísticas da empresa">
      <div className="stats__container">
        {statsData.map((stat, index) => (
          <StatCard
            key={stat.id}
            number={stat.number}
            label={stat.label}
            suffix={stat.suffix}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
