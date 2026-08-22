import React from 'react';
import PatentCard from '../components/PatentCard';
import { DEMO_PATENTS } from '../data/demoData';
import { ShieldAlert } from 'lucide-react';

export default function PatentWatch() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Patent Watch & IP Landscape</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          Tracking patent applications, claims scope, and assignee filings across global markets.
        </p>
      </div>

      <div className="space-y-4">
        {DEMO_PATENTS.map((patent) => (
          <PatentCard key={patent.id} patent={patent} />
        ))}
      </div>
    </div>
  );
}
