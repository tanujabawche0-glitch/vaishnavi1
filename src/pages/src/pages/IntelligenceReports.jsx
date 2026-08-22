import React from 'react';
import { DEMO_REPORTS } from '../data/demoData';
import { FileText, Download, Printer } from 'lucide-react';

export default function IntelligenceReports() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Intelligence Briefings & Reports</h2>
          <p className="text-xs text-gray-400 font-mono mt-1">
            Generated executive briefings ready for distribution.
          </p>
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-dark-900 font-bold text-xs font-mono uppercase rounded-lg">
          Generate Today's Briefing
        </button>
      </div>

      <div className="space-y-6">
        {DEMO_REPORTS.map((rep) => (
          <div key={rep.id} className="glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-brand-cyan" />
                <h3 className="text-base font-bold text-white">{rep.title}</h3>
              </div>
              <span className="text-xs text-gray-400 font-mono">{new Date(rep.generatedAt).toLocaleString()}</span>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-brand-cyan font-bold mb-1">Executive Summary</h4>
              <p className="text-xs text-gray-300 leading-relaxed">{rep.executiveSummary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="font-mono uppercase text-emerald-400 font-bold mb-1">Top Developments</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {rep.topDevelopments.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-mono uppercase text-amber-400 font-bold mb-1">Recommended Actions</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {rep.recommendedActions.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
