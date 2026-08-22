import React from 'react';
import { Cpu, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function InsightCard({ insight }) {
  return (
    <div className="glass-panel p-6 border-l-4 border-l-brand-cyan">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-brand-cyan tracking-wider font-semibold">AI Synthesized Intelligence</span>
            <h3 className="text-lg font-bold text-white">{insight.title}</h3>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-400 font-mono block">Confidence</span>
          <span className="text-lg font-bold text-emerald-400 font-mono">{insight.confidence}%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 bg-dark-900/60 p-4 rounded-xl border border-gray-800/80">
        <div>
          <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">What Happened?</span>
          <p className="text-xs text-gray-200 leading-relaxed">{insight.whatHappened}</p>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-amber-400 block mb-1">Why Does It Matter?</span>
          <p className="text-xs text-gray-200 leading-relaxed">{insight.whyItMatters}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
        <div>
          <span className="text-[10px] font-mono uppercase text-rose-400 block font-semibold">Competitive Risk:</span>
          <p className="text-gray-300 mt-0.5">{insight.competitiveImpact}</p>
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase text-emerald-400 block font-semibold">Strategic Recommendation:</span>
          <p className="text-gray-300 mt-0.5">{insight.recommendation}</p>
        </div>
      </div>

      {insight.evidence && (
        <div className="pt-3 border-t border-gray-800 text-[11px] font-mono text-gray-400 flex items-center justify-between">
          <span>Evidence Basis: {insight.evidence}</span>
          <span className="text-brand-cyan">Verified Agent Synthesis</span>
        </div>
      )}
    </div>
  );
}
