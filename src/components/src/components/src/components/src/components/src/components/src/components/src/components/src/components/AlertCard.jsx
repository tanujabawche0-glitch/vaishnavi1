import React from 'react';
import { Bell, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function AlertCard({ alert }) {
  const getBadge = (p) => {
    switch (p) {
      case 'CRITICAL': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'HIGH': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="glass-card p-4 hover:border-gray-700 transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded bg-dark-700 border border-gray-700 text-brand-cyan shrink-0">
            <AlertOctagon className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getBadge(alert.priority)}`}>
                {alert.priority}
              </span>
              <span className="text-xs text-gray-500 font-mono">{alert.date}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-100 mt-1">{alert.title}</h4>
            <p className="text-xs text-gray-300 mt-1">{alert.explanation}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-800/80 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold block">Impact:</span>
          <p className="text-gray-300">{alert.impact}</p>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">Recommended Action:</span>
          <p className="text-gray-300">{alert.recommendation}</p>
        </div>
      </div>
    </div>
  );
}
