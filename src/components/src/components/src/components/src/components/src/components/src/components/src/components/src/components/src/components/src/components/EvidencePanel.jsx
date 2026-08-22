import React from 'react';
import { Database, ShieldCheck, ExternalLink } from 'lucide-react';

export default function EvidencePanel({ sources }) {
  return (
    <div className="glass-panel p-5">
      <div className="flex items-center space-x-2 mb-4 border-b border-gray-800 pb-3">
        <Database className="w-5 h-5 text-brand-cyan" />
        <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider font-mono">Sources & Evidence Verification</h3>
      </div>

      <div className="space-y-3">
        {sources && sources.length > 0 ? (
          sources.map((src, idx) => (
            <div key={idx} className="bg-dark-900/50 p-3 rounded-lg border border-gray-800/80 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-brand-cyan font-bold">{src.source}</span>
                <span className="text-[10px] text-gray-500">{src.publicationDate}</span>
              </div>
              <p className="text-gray-300 mt-1.5 font-sans text-xs">{src.evidenceText}</p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-gray-800/50">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" /> Confidence: {src.confidence}%
                </span>
                {src.url && (
                  <a href={src.url} target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1">
                    Verify Link <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-xs text-gray-500 font-mono">
            No source evidence attached to this view.
          </div>
        )}
      </div>
    </div>
  );
}
