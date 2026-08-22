import React from 'react';
import AlertCard from '../components/AlertCard';
import { DEMO_ALERTS } from '../data/demoData';

export default function LiveAlerts() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Live Intelligence Alerts</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Automated event triggers and priority alerts demanding response.
        </p>
      </div>

      <div className="space-y-4">
        {DEMO_ALERTS.map((alt) => (
          <AlertCard key={alt.id} alert={alt} />
        ))}
      </div>
    </div>
  );
}
