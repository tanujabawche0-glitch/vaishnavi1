import React from 'react';
import InsightCard from '../components/InsightCard';
import { DEMO_INSIGHTS } from '../data/demoData';

export default function AiInsights() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">AI Synthesized Strategic Insights</h2>
        <p className="text-xs text-gray-400 font-mono mt-1">
          High-confidence strategic recommendations synthesized by multi-agent analysis.
        </p>
      </div>

      <div className="space-y-6">
        {DEMO_INSIGHTS.map((ins) => (
          <InsightCard key={ins.id} insight={ins} />
        ))}
      </div>
    </div>
  );
}
