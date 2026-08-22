import React, { useState } from 'react';
import { ExternalLink, Sparkles, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';

export default function ResearchCard({ item, onAiAction }) {
  const [expanded, setExpanded] = useState(false);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'HIGH': return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      default: return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="glass-card p-5 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2 flex-wrap gap-y-1">
            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${getPriorityColor(item.priority)}`}>
              {item.priority}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-dark-700 text-gray-300 border border-gray-700">
              {item.category}
            </span>
            <span className="text-xs text-gray-500 font-mono">{item.publicationDate}</span>
          </div>

          <h3 className="text-base font-semibold text-gray-100 hover:text-brand-cyan cursor-pointer transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-brand-cyan/80 mt-1 font-mono">Authors: {item.authors} • Source: {item.source}</p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <div className="text-right">
            <span className="text-xs text-gray-400 font-mono block">Impact</span>
            <span className="text-lg font-bold text-brand-cyan font-mono">{item.impactScore}/100</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-300 mt-3 line-clamp-2 leading-relaxed">
        {item.summary}
      </p>

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-800/80 space-y-3 text-xs bg-dark-900/40 p-3 rounded-lg">
          <div>
            <span className="font-semibold text-amber-400 uppercase font-mono text-[10px] block">Why It Matters:</span>
            <p className="text-gray-300 mt-0.5">{item.whyItMatters}</p>
          </div>
          <div>
            <span className="font-semibold text-rose-400 uppercase font-mono text-[10px] block">Potential Impact:</span>
            <p className="text-gray-300 mt-0.5">{item.potentialImpact}</p>
          </div>
          <div>
            <span className="font-semibold text-emerald-400 uppercase font-mono text-[10px] block">Recommended Action:</span>
            <p className="text-gray-300 mt-0.5">{item.recommendedAction}</p>
          </div>
          {item.evidence && (
            <div className="bg-dark-800 p-2 rounded border border-gray-800">
              <span className="font-semibold text-gray-400 uppercase font-mono text-[10px] block">Supporting Evidence:</span>
              <p className="text-gray-400 font-mono text-[11px] mt-0.5">{item.evidence}</p>
            </div>
          )}
        </div>
      )}

      {/* Card Actions */}
      <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-gray-400 hover:text-white flex items-center space-x-1 font-mono"
        >
          <span>{expanded ? 'Hide Analysis' : 'Expand Full Analysis'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onAiAction && onAiAction('analyze', item)}
            className="px-2.5 py-1 bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs rounded flex items-center space-x-1 font-mono transition-colors"
          >
            <Sparkles className="w-3 h-3" />
            <span>AI Analyze</span>
          </button>
        </div>
      </div>
    </div>
  );
}
