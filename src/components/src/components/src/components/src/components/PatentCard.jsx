import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function PatentCard({ patent }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card p-5 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold">
              PATENT
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-700 text-gray-300 border border-gray-700">
              {patent.assignee}
            </span>
            <span className="text-xs text-gray-500 font-mono">Pub: {patent.publicationDate}</span>
          </div>

          <h3 className="text-base font-semibold text-gray-100">{patent.title}</h3>
          <p className="text-xs text-gray-400 mt-1 font-mono">Technology: {patent.technology} • Inventor: {patent.inventor}</p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs text-gray-400 font-mono block">Relevance</span>
          <span className="text-lg font-bold text-purple-400 font-mono">{patent.relevance}%</span>
        </div>
      </div>

      <p className="text-xs text-gray-300 mt-3 leading-relaxed">{patent.summary}</p>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-800/80 space-y-3 text-xs bg-dark-900/40 p-3 rounded-lg">
          <div>
            <span className="font-semibold text-amber-400 uppercase font-mono text-[10px] block">Why Does It Matter?</span>
            <p className="text-gray-300 mt-0.5">{patent.whyItMatters}</p>
          </div>
          <div>
            <span className="font-semibold text-rose-400 uppercase font-mono text-[10px] block">Competitive Risk Level:</span>
            <p className="text-gray-300 mt-0.5">{patent.risk}</p>
          </div>
          <div>
            <span className="font-semibold text-emerald-400 uppercase font-mono text-[10px] block">Recommended Action:</span>
            <p className="text-gray-300 mt-0.5">{patent.recommendedAction}</p>
          </div>
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gray-400 hover:text-white flex items-center space-x-1 font-mono"
        >
          <span>{expanded ? 'Hide Patent Claims' : 'View Patent Breakdown'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
