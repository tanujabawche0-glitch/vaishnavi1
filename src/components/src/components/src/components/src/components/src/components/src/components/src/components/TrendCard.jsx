import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function TrendCard({ trend }) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
            EMERGING TREND
          </span>
          <h3 className="text-lg font-bold text-gray-100 mt-2">{trend.title}</h3>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-emerald-400 font-mono flex items-center justify-end">
            {trend.growth} <ArrowUpRight className="w-5 h-5 ml-0.5" />
          </span>
          <span className="text-[10px] text-gray-400 font-mono block">Score: {trend.score}/100</span>
        </div>
      </div>

      <p className="text-xs text-gray-300 mt-3 leading-relaxed">{trend.description}</p>

      {/* Signal Breakdown */}
      <div className="mt-4 pt-4 border-t border-gray-800 space-y-2">
        <span className="text-[10px] uppercase font-mono text-gray-400 font-semibold block">Signal Vector Breakdown</span>
        <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="bg-dark-900/60 p-2 rounded border border-gray-800">
            <span className="text-[9px] text-gray-500 block">Research</span>
            <span className="font-bold text-brand-cyan">{trend.signals.research}</span>
          </div>
          <div className="bg-dark-900/60 p-2 rounded border border-gray-800">
            <span className="text-[9px] text-gray-500 block">Patents</span>
            <span className="font-bold text-purple-400">{trend.signals.patent}</span>
          </div>
          <div className="bg-dark-900/60 p-2 rounded border border-gray-800">
            <span className="text-[9px] text-gray-500 block">News</span>
            <span className="font-bold text-emerald-400">{trend.signals.news}</span>
          </div>
          <div className="bg-dark-900/60 p-2 rounded border border-gray-800">
            <span className="text-[9px] text-gray-500 block">Competitor</span>
            <span className="font-bold text-amber-400">{trend.signals.competitor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
