import React, { useState } from 'react';
import { AlertOctagon, TrendingUp, ShieldAlert, Zap } from 'lucide-react';

export default function ThreatMatrix({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const matrixGrid = [
    { label: 'Critical Threat', color: 'bg-rose-500/20 border-rose-500/40 text-rose-400', level: 'High Impact / High Urgency' },
    { label: 'High Risk', color: 'bg-amber-500/20 border-amber-500/40 text-amber-400', level: 'High Impact / Low Urgency' },
    { label: 'Strategic Opportunity', color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400', level: 'Low Impact / High Urgency' },
    { label: 'Monitor', color: 'bg-blue-500/20 border-blue-500/40 text-blue-400', level: 'Low Impact / Low Urgency' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matrixGrid.map((quad, idx) => (
          <div key={idx} className={`glass-panel p-5 border ${quad.color} min-h-[160px]`}>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm tracking-wide uppercase font-mono">{quad.label}</h4>
              <span className="text-[10px] font-mono text-gray-400">{quad.level}</span>
            </div>
            
            <div className="space-y-2">
              <div 
                onClick={() => setSelectedItem({
                  title: `${quad.label} Assessment Alpha`,
                  impact: "Severe operational market delay potential.",
                  urgency: "Immediate within next 30 days.",
                  evidence: "Aggregated patent claim analysis and news vectors.",
                  action: "Re-evaluate product architecture specifications."
                })}
                className="bg-dark-900/80 p-2.5 rounded border border-gray-800 hover:border-gray-600 cursor-pointer transition-colors text-xs"
              >
                <span className="font-semibold text-gray-200 block">Vector {idx + 1}: Market Shift Event</span>
                <span className="text-[10px] text-gray-400 font-mono">Click for full impact breakdown</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="glass-panel p-6 border-brand-cyan/40 bg-dark-800">
          <div className="flex items-center justify-between mb-3 border-b border-gray-800 pb-2">
            <h4 className="text-sm font-bold text-brand-cyan uppercase font-mono">{selectedItem.title}</h4>
            <button 
              onClick={() => setSelectedItem(null)} 
              className="text-xs text-gray-400 hover:text-white font-mono"
            >
              Close Detail
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-gray-400 block font-semibold">Impact Analysis:</span>
              <p className="text-gray-200 mt-1">{selectedItem.impact}</p>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-gray-400 block font-semibold">Urgency Metric:</span>
              <p className="text-gray-200 mt-1">{selectedItem.urgency}</p>
            </div>
            <div className="md:col-span-2 bg-dark-900 p-3 rounded border border-gray-800">
              <span className="text-[10px] uppercase font-mono text-emerald-400 block font-semibold">Recommended Strategic Action:</span>
              <p className="text-gray-200 mt-1">{selectedItem.action}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
