import React from 'react';
import TrendCard from '../components/TrendCard';
import { DEMO_TRENDS } from '../data/demoData';

export default function TrendIntelligence() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Emerging Trend Intelligence</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          AI-detected technology trajectories and signal acceleration vectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEMO_TRENDS.map((tr) => (
          <TrendCard key={tr.id} trend={tr} />
        ))}
      </div>
    </div>
  );
}
