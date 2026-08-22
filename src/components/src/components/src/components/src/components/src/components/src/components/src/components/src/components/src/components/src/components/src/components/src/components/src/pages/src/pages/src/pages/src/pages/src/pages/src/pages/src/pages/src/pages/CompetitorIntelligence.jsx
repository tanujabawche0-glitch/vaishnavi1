import React from 'react';
import CompetitorCard from '../components/CompetitorCard';
import { DEMO_COMPETITORS } from '../data/demoData';

export default function CompetitorIntelligence() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Competitor Intelligence</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Profiling tier-1 rivals across research, patents, talent, and news signals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DEMO_COMPETITORS.map((comp) => (
          <CompetitorCard key={comp.id} competitor={comp} />
        ))}
      </div>
    </div>
  );
}
