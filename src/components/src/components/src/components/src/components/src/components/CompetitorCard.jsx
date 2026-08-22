import React from 'react';
import { Users, TrendingUp, AlertTriangle } from 'lucide-react';

export default function CompetitorCard({ competitor }) {
  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'CRITICAL': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'HIGH': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="glass-card p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-dark-700 border border-gray-700 flex items-center justify-center font-bold text-brand-cyan text-lg">
            {competitor.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-100">{competitor.name}</h3>
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getRiskBadge(competitor.riskLevel)}`}>
              Risk: {competitor.riskLevel}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-400 font-mono block">Activity Score</span>
          <span className="text-2xl font-bold text-white font-mono">{competitor.overallScore}</span>
        </div>
      </div>

      <p className="text-xs text-gray-300 leading-relaxed mb-4">{competitor.summary}</p>

      {/* Activity Meters */}
      <div className="grid grid-cols-3 gap-2 mb-4 bg-dark-900/50 p-2.5 rounded-lg border border-gray-800">
        <div className="text-center">
          <span className="text-[10px] text-gray-400 font-mono block">Research</span>
          <span className="text-xs font-bold text-brand-cyan font-mono">{competitor.researchActivity}</span>
        </div>
        <div className="text-center border-x border-gray-800">
          <span className="text-[10px] text-gray-400 font-mono block">Patents</span>
          <span className="text-xs font-bold text-purple-400 font-mono">{competitor.patentActivity}</span>
        </div>
        <div className="text-center">
          <span className="text-[10px] text-gray-400 font-mono block">News</span>
          <span className="text-xs font-bold text-emerald-400 font-mono">{competitor.newsActivity}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-800/80">
        <span className="text-[10px] uppercase font-mono text-gray-400 font-semibold block mb-1">Recent Strategic Moves</span>
        <p className="text-xs text-gray-300">{competitor.recentMoves}</p>
      </div>
    </div>
  );
}
