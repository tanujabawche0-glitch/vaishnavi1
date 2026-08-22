import React from 'react';
import ThreatMatrix from '../components/ThreatMatrix';

export default function ThreatsOpportunities() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Threats & Opportunities Matrix</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Interactive impact vs. urgency evaluation matrix for executive decision making.
        </p>
      </div>

      <ThreatMatrix />
    </div>
  );
}
